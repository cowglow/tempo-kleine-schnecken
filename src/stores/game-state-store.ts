import { derived, readable } from 'svelte/store';
import colors from '$lib/colors';

interface GameStateContextProps {
	positions: number[];
	totalSteps: number;
}

interface GameStateContextApi extends GameStateContextProps {
	movePlayer: (index: number) => void;
	resetGame: () => void;
}

export const stepCountStore = readable(7);
export const playerCountStore = readable(colors.length);

function stateReducer(state: any, action: { type: string; payload: any }) {
	switch (action.type) {
		case 'MOVE_PLAYER':
			return {
				positions: []
			};
		case 'RESET_GAME':
			return {
				positions: []
			};
		default:
			return state;
	}
}

export default derived([stepCountStore, playerCountStore], stateReducer);
