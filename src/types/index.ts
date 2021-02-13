export interface Ires {
	ret: string
	msg?: string
	content?: any
}

interface I_item {
	nickname: string
	create_date: number
	head_img: string
	gender: number
	id: number
}

export interface I_list {
	item: I_item
	i: number
}

export interface I_arr {
	list: I_item[]
}

