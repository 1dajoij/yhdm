import axios from "@/request/index";
import { Icard, Isuc, Ierr } from "@/type"

interface Ihomeinfo {
    recommendList: Icard[],
    MovieInfo: {
        [key: string]: {
            news: Icard[],
            hots: Icard[]
        }
    }
};

export type Thome = Ihomeinfo & Isuc;

export const getHomeInfo = async (): Promise<Thome | Ierr> => {
    const res: Thome | Ierr = await axios.get("/api/get/exhibition/home");
    return res;
};

interface Tclassify {
    [key: string]: Icard[]
};
export type Tclass = Tclassify & Isuc;

export const getClassify = async (
    limit: number = 1,
    offset: number = 0,
    type: "hot" | "release_data" = "hot",
    classify_name: 1 | 2 | 3 | 4 | null = null
): Promise<Tclass | Ierr> => {
    const res: Tclass | Ierr = await axios.post("/api/get/exhibition/home", {
        limit, offset, type, classify_name
    });
    return res;
};

interface Tsearch {
    renderList: Icard[],
    allListLen: number
};
export type Tsec = Tsearch & Isuc;

export const getSearchInfo = async (
    name: string,
    limit: number = 30,
    offset: number = 0
): Promise<Tsec | Ierr> => {
    const res: Tsec | Ierr = await axios.post("/api/get/exhibition/search", {
        name, limit, offset
    });
    return res;
};

interface Tsearchlenovo {
    wordList: {
        name: string,
        id: number
    }[]
};
export type Tseclenovo = Tsearchlenovo & Isuc;

export const getSearchLenovo = async (
    name: string
): Promise<Tseclenovo | Ierr> => {
    const res: Tseclenovo | Ierr = await axios.post("/api/get/exhibition/search_lenovo", {
        name
    });
    return res
};