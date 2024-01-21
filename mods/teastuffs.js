// teastuffs.js mod
// by Sandboxels tea lover

elements.sugar_tea = {
	color: "#875219",
	behavior: behaviors.LIQUID,
	category: "teastuffs",
	state: "liquid",
	tempHigh: 100,
	stateHigh: ["fragrance","steam","sugar"],
	tempLow: 0,
	stateLow: ["tea_ice","sugar"],
	density: 1595,
	hidden: true,
};

elements.tea_rock = {
	color: ["#452c12","#633f17"],
	behavior: behaviors.POWDER,
	category: "teastuffs",
	state: "solid",
	density: 2550,
	breakInto: ["rock","sand","gravel","tea"],
	tempHigh: 950,
	stateHigh: "magma",
	tempLow: 0,
	stateLow: ["rock","tea_ice"],
	hidden: true,
};

elements.tea_meat = {
	color: ["#9e4721","#bd5428"],
	behavior: behaviors.SUPPORT,
	category: "teastuffs",
	state: "solid",
	density: 1205,
	tempHigh: 100,
	stateHigh: "cooked_meat",
	tempLow: -18,
	stateLow: ["tea_ice","frozen_meat"],
	burn: 15,
	burnTime: 200,
	burnInto: ["tea","cooked_meat"],
	hidden: true,
};

elements.tea_steel = {
	color: ["#6e521f","#7d5a19","#996f23"],
	behavior: behaviors.WALL,
	category: "teastuffs",
	state: "solid",
	density: 7850,
	tempHigh: 1456,
	stateHigh: "melted_tea_steel",
};

elements.melted_tea_steel = {
	color: ["#e25a00","#ff6905","#a64403","#fa802f"],
	behavior: behaviors.MOLTEN,
	category: "teastuffs",
	state: "liquid",
	density: 7065,
	temp: 1500,
	tempLow: 1356,
	stateLow: "tea_steel",
	hidden: true,
};

// additions

if (!elements.tea.reactions) elements.tea.reactions = {};
elements.tea.reactions.sugar = { elem1: "tea", elem2: "sugar_tea" }

if (!elements.rock.reactions) elements.rock.reactions = {};
elements.rock.reactions.tea = { elem1: "rock", elem2: "tea_rock" }

if (!elements.meat.reactions) elements.meat.reactions = {};
elements.meat.reactions.tea = { elem1: "meat", elem2: "tea_meat" }

if (!elements.steel.reactions) elements.steel.reactions = {};
elements.steel.reactions.tea = { elem1: "steel", elem2: "tea_steel" }

if (!elements.sugar_water.reactions) elements.sugar_water.reactions = {};
elements.sugar_water.reactions.herb = { elem1: "sugar_water", elem2: "sugar_tea" }