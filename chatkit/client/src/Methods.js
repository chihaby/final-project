
import Chatkit from '@pusher/chatkit-client';
import axios from 'axios';

function handleInput(event) {
    const { value, name } = event.target;

    this.setState({
        [name]: value,
    });
}
function connectToRoom(id = 19414545) {
    const { currentUser } = this.state;

    this.setState({
        messages: [],
    });

    return currentUser
        .subscribeToRoom({
            roomId: `${id}`,
            messageLimit: 100,
            hooks: {
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message],
                    });
                },
                onPresenceChanged: () => {
                    const { currentRoom } = this.state;
                    this.setState({
                        roomUsers: currentRoom.users.sort(a => {
                            if (a.presence.state === 'online') return -1;

                            return 1;
                        }),
                    });
                },
            },
        })
        .then(currentRoom => {
            const roomName =
                currentRoom.customData && currentRoom.customData.isDirectMessage
                    ? currentRoom.customData.userIds.filter(
                        id => id !== currentUser.id
                    )[0]
                    : currentRoom.name;

            this.setState({
                currentRoom,
                roomUsers: currentRoom.users,
                rooms: currentUser.rooms,
                roomName,
            });
        })
        .catch(console.error);
}

function connectToChatkit(event) {
    event.preventDefault();

    const { userId } = this.state;

    if (userId === null || userId.trim() === '') {
        alert('Invalid userId');
        return;
    }

    axios
        .post('http://localhost:5200/users', { userId })
        .then(() => {
            const tokenProvider = new Chatkit.TokenProvider({
                url: 'http://localhost:5200/authenticate',
            });

            const chatManager = new Chatkit.ChatManager({
                instanceLocator: "pv1:us1:9e14975c-602d-4718-8bad-ca97925e559a",
                userId,
                tokenProvider,
            });

            return chatManager
                .connect({
                    onAddedToRoom: room => {
                        const { rooms } = this.state;
                        this.setState({
                            rooms: [...rooms, room],
                        });
                    },
                })
                .then(currentUser => {
                    this.setState(
                        {
                            currentUser,
                            showLogin: false,
                            rooms: currentUser.rooms,
                        },
                        () => connectToRoom.call(this)
                    );
                });
        })
        .catch(console.error);
}

function sendMessage(event) {
    event.preventDefault();
    const { newMessage, currentUser, currentRoom } = this.state;

    if (newMessage.trim() === '') return;

    currentUser.sendMessage({
        text: newMessage,
        roomId: `${currentRoom.id}`,
    });

    this.setState({
        newMessage: '',
    });
}

function createPrivateRoom(id) {
    const { currentUser, rooms } = this.state;
    const roomName = `${currentUser.id}_${id}`;

    const isPrivateChatCreated = rooms.filter(room => {
        if (room.customData && room.customData.isDirectMessage) {
            const arr = [currentUser.id, id];
            const { userIds } = room.customData;

            if (arr.sort().join('') === userIds.sort().join('')) {
                return {
                    room,
                };
            }
        }

        return false;
    });

    if (isPrivateChatCreated.length > 0) {
        return Promise.resolve(isPrivateChatCreated[0]);
    }

    return currentUser.createRoom({
        name: `${roomName}`,
        private: true,
        addUserIds: [`${id}`],
        customData: {
            isDirectMessage: true,
            userIds: [currentUser.id, id],
        },
    });
}

function sendDM(id) {
    createPrivateRoom.call(this, id).then(room => {
        connectToRoom.call(this, room.id);
    });
}


export { handleInput, connectToRoom, connectToChatkit, sendMessage, sendDM }