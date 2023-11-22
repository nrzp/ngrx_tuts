export interface counterState {
    counter: number;
    channelName: string;
}

export const initialState: counterState = {
    counter: 6,
    channelName: 'Aaj Tak'
}