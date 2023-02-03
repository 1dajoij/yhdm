import axios from "@/request/index";
import { Icard, Isuc, Ierr, Ispecific } from "@/type"

/**
 * home
 */
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


/**
 * card 展示
 */
interface Irender {
    renderList: Icard[],
    allListLen: number
}
interface Tclassify {
    "Movie-html"?: Irender,
    "day_comic-html"?: Irender,
    "National_comics-html"?: Irender,
    "American_comic-html"?: Irender
};
export type Tclass = Tclassify & Isuc;
export const getClassify = async (
    classify_name: number,
    // type: "hot" | "release_data" = "hot",
    offset: number,
    limit?: number,
): Promise<Tclass | Ierr> => {
    if(offset < 0) {
        offset = 0;
    };
    const res: Tclass | Ierr = await axios.post("/api/get/exhibition/classify", {
        limit, offset, classify_name
    });
    return res;
};

/**
 * 搜索
 */
interface Tsearch {
    renderList: Icard[],
    allListLen: number
};
export type Tsec = Tsearch & Isuc;
export const getSearchInfo = async (
    name: string,
    limit: number = 8,
    offset: number = 0
): Promise<Tsec | Ierr> => {
    const res: Tsec | Ierr = await axios.post("/api/get/exhibition/search", {
        name, limit, offset
    });
    return res;
};

/**
 * 搜索联想
 */
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

/**
 * swiper
 */
interface Iswiper {
    recommendList: Icard[]
};
export type Tswiper = Iswiper & Isuc;
export const getSwiper = async (
    type: number
): Promise<Ierr | Tswiper> => {
    const res: Tswiper | Ierr = await axios.get("/api/get/exhibition/swiper", {
        params: { type }
    });
    return res;
};

/**
 * 动漫详情
 */
export type Tspecific = {
    specific: Ispecific[],
    guess: Icard[]
} & Isuc;
export const getSpecific = async(
    id: number
): Promise<Tspecific | Ierr> => {
    const res: Tspecific | Ierr = await axios.post("/api/get/exhibition/specific", {
        id
    });
    return res;
}
