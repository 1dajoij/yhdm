import axios from "@/request/index";
import Request from "@/request/type";

interface Thomeinfo {
    recommendList: Request.Tcardinfo[],
    MovieInfo: {
        [key: string]: {
            news: Request.Tcardinfo[],
            hots: Request.Tcardinfo[]
        }
    }
};
type Thome = Thomeinfo & Request.Tsuc;

export const getHomeInfo = async (): Promise<Thome | Request.Terr> => {
    const res: Thome | Request.Terr = await axios.get("/api/get/exhibition/home");
    return res;
};

interface Tclassify {
    [key: string]: Request.Tcardinfo[]
};
type Tclass = Tclassify & Request.Tsuc;

export const getClassify = async (
    limit: number = 1,
    offset: number = 0,
    type: "hot" | "release_data" = "hot",
    classify_name: 1 | 2 | 3 | 4 | null = null
): Promise<Tclass | Request.Terr> => {
    const res: Tclass | Request.Terr = await axios.post("/api/get/exhibition/home", {
        limit, offset, type, classify_name
    });
    return res;
};

interface Tsearch {
    renderList: Request.Tcardinfo[],
    allListLen: number
};
type Tsec = Tsearch & Request.Tsuc;

export const getSearchInfo = async (
    name: string,
    limit: number = 30,
    offset: number = 0
): Promise<Tsec | Request.Terr> => {
    const res: Tsec | Request.Terr = await axios.post("/api/get/exhibition/search", {
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
type Tseclenovo = Tsearchlenovo & Request.Tsuc;

export const getSearchLenovo = async (
    name: string
): Promise<Tseclenovo | Request.Terr> => {
    const res: Tseclenovo | Request.Terr = await axios.post("/api/get/exhibition/search_lenovo", {
        name
    });
    return res
};