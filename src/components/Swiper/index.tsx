import { Image } from 'antd';
import { errImage } from "@/assets/errorImg";

interface IcardRequest {
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

const renderlist: IcardRequest[] = [
    {
        "id":175,
        "name":"歌之王子殿下第四季",
        "largest_amount":null,
        "release_data":"2016",
        "score":7.7,
        "picUrl":"http://sakura.xonlines.com/FileUpload/201610225427...",
        "finish_state":"更新至13话，每周日更新一集",
        "starring":"内详",
        "hot":1051,
        "type":"day_comic-html"
        },
        {
        "id":4101,
        "name":"妖精的尾巴",
        "largest_amount":null,
        "release_data":"2009",
        "score":7.3,
        "picUrl":"http://sakura.xonlines.com/FileUpload/2706.jpg",
        "finish_state":"完结",
        "starring":"内详",
        "hot":20,
        "type":"day_comic-html"
        },
        {
        "id":6968,
        "name":"火影忍者 博人传之火影次世代",
        "largest_amount":null,
        "release_data":"2017",
        "score":5.9,
        "picUrl":"http://sakura.xonlines.com/FileUpload/201732417925...",
        "finish_state":"更新至250话，每周日17:30更新一集",
        "starring":"内详",
        "hot":354,
        "type":"day_comic-html"
        },
        {
        "id":7635,
        "name":"假面骑士ZI-O",
        "largest_amount":null,
        "release_data":"2018",
        "score":6.4,
        "picUrl":"http://sakura.xonlines.com/FileUpload/201892202097...",
        "finish_state":"完结",
        "starring":"内详",
        "hot":773,
        "type":"day_comic-html"
        },
        {
        "id":7832,
        "name":"数码宝贝大冒险(2020)",
        "largest_amount":null,
        "release_data":"2020",
        "score":6.7,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202012417255...",
        "finish_state":"更新至67话，每周日更新一集",
        "starring":"内详",
        "hot":418,
        "type":"day_comic-html"
        },
        {
        "id":7907,
        "name":"众神眷顾的男人",
        "largest_amount":null,
        "release_data":"2020",
        "score":6.3,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202010422433...",
        "finish_state":"完结",
        "starring":"内详",
        "hot":590,
        "type":"day_comic-html"
        },
        {
        "id":7999,
        "name":"龙族买房",
        "largest_amount":null,
        "release_data":"2021",
        "score":8,
        "picUrl":"http://sakura.xonlines.com/pic/uploadimg/2021-4/20...",
        "finish_state":"更新至12集",
        "starring":"莱迪：堀江瞬&迪亚利亚：石川界人&小哔：井泽诗织&尼尔：福圆美里&勇者",
        "hot":2194,
        "type":"day_comic-html"
        },
        {
        "id":8000,
        "name":"战斗员派遣中",
        "largest_amount":null,
        "release_data":"2021",
        "score":6.5,
        "picUrl":"http://sakura.xonlines.com/pic/uploadimg/2021-4/20...",
        "finish_state":"更新至12集",
        "starring":"戰鬥員六號：白井悠介&如月愛麗絲：富田美憂",
        "hot":264,
        "type":"day_comic-html"
        },
        {
        "id":8019,
        "name":"影宅",
        "largest_amount":null,
        "release_data":"2021",
        "score":7.6,
        "picUrl":"http://sakura.xonlines.com/pic/uploadimg/2021-4/20...",
        "finish_state":"更新至13集",
        "starring":"艾米丽可：篠原侑&凯特：鬼头明里&露易斯、卢：佐仓绫音&约翰、肖恩",
        "hot":662,
        "type":"day_comic-html"
        },
        {
        "id":8085,
        "name":"魔法科高校的优等生第二季",
        "largest_amount":null,
        "release_data":"2021",
        "score":7.8,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202107111147...",
        "finish_state":"更新至13集",
        "starring":"内详",
        "hot":336,
        "type":"day_comic-html"
        },
        {
        "id":8323,
        "name":"混沌丹神",
        "largest_amount":null,
        "release_data":"2022",
        "score":6.5,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202201231550...",
        "finish_state":"更新至130集",
        "starring":"内详",
        "hot":29,
        "type":"National_comics-html"
        },
        {
        "id":8352,
        "name":"快穿之顶级反派要洗白",
        "largest_amount":null,
        "release_data":"2022",
        "score":6.6,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202202061438...",
        "finish_state":"更新至22集",
        "starring":"内详",
        "hot":99,
        "type":"National_comics-html"
        },
        {
        "id":8378,
        "name":"精灵宝可梦(2019)",
        "largest_amount":null,
        "release_data":"2019",
        "score":6,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202202271802...",
        "finish_state":"更新至127集",
        "starring":"内详",
        "hot":111,
        "type":"day_comic-html"
        },
        {
        "id":8438,
        "name":"LoveLive! 虹咲学园学园偶像同好会第二季",
        "largest_amount":null,
        "release_data":"2022",
        "score":7.2,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202204031543...",
        "finish_state":"完结",
        "starring":"矢野妃菜喜&大西亚玖璃&相良茉优&前田佳织里&久保田未梦&村上奈津实",
        "hot":321,
        "type":"day_comic-html"
        },
        {
        "id":8440,
        "name":"雀魂 PONG☆",
        "largest_amount":null,
        "release_data":"2022",
        "score":7.6,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202204031551...",
        "finish_state":"更新至10集",
        "starring":"内详",
        "hot":1082,
        "type":"day_comic-html"
        },
        {
        "id":8441,
        "name":"斗罗大陆外传唐门英雄传",
        "largest_amount":null,
        "release_data":"2022",
        "score":6,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202204031555...",
        "finish_state":"更新至15集",
        "starring":"内详",
        "hot":68,
        "type":"National_comics-html"
        },
        {
        "id":8482,
        "name":"3秒后，变身成野兽",
        "largest_amount":null,
        "release_data":"2022",
        "score":6.7,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202204101600...",
        "finish_state":"更新至08集",
        "starring":"柿原彻也&矢野奖吾&杉山里穗&井口祐一&广濑裕也",
        "hot":76,
        "type":"day_comic-html"
        },
        {
        "id":9920,
        "name":"假面骑士极狐",
        "largest_amount":null,
        "release_data":"2022",
        "score":7.1,
        "picUrl":"http://sakura.xonlines.com/upload/vod/20220906-1/4...",
        "finish_state":"更新至10集",
        "starring":"简秀吉&佐藤瑠雅&星乃梦奈&杢代和人&青岛心&忍成修吾",
        "hot":253,
        "type":"day_comic-html"
        }
]

export default function index() {
    return (
        <div  className='recommend'>
            <ul className='flex flex-wrap'>
                {
                    renderlist?.map(item => {
                        return <li key={item.id}
                            m-x-10px cursor-pointer m-y-8px w-238px h-96px justify-around items-center
                            className='flex'
                        >
                            <Image preview={false} src={item.picUrl} fallback={errImage} width={64} height={96}  className="rounded"/>
                            <div className='describe w-156px flex flex-col justify-around h-100%'>
                                <h4 className='text-size-16px text-overflow'>
                                    {item.name}
                                </h4>
                                <span className='text-size-12px leading-16px color-coolgray-7 '>
                                    {item.finish_state}
                                </span>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}