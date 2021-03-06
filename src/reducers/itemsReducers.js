"use strict"

export function itemsReducers(state={
	items:[
		
	]
}, action){
	switch(action.type){
		case "GET_ITEMS":
			return {...state, items:[...action.payload]}
		case "POST_ITEM":
			return {items: [...state.items, ...action.payload]};
			break;
		case "DELETE_ITEM":
			const currentItems = [...state.items];
			const indexToDelete = currentItems.findIndex(
				function(item){
					return item._id === action.payload._id;
				}
			);
			return {items: [...currentItems.slice(0, indexToDelete), ...currentItems.slice(indexToDelete+1)]};
			break;
		case "UPDATE_ITEM_TITLE": 
			const currentItemsTitle = [...state.items];
			const indextoUpdate = currentItemsTitle.findIndex(
				function(item){
					return item._id === action.payload._id;
				}
			);
			const newItemtoUpdate = {
				...currentItemsTitle[indextoUpdate], 
				title: action.payload.title,
			}
			return {items: [...currentItemsTitle.slice(0, indextoUpdate), newItemtoUpdate, ...currentItemsTitle.slice(indextoUpdate+1)]}
	}
	return state;
};
