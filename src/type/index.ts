export interface Isuc {
    code: 200;
    message?: string;
};
export interface Ierr {
    code: 400;
    message?: string;
};
export interface Icard {
    id: number;
    name: string;
    largest_amount: null;
    release_data: string;
    score: number;
    picUrl: string;
    finish_state: string;
    starring: string;
    hot: number;
    type: string;
};

export interface Tspecific {
    id: number,
    director: string,
    brief_introduction: string,
    same_type_list: string;
    last_updata_time: string,
    episodes: string,
    isUpdate: string,
    region: string
};