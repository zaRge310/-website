// app/data/properties.ts

export type Property = {
  slug: string;
  title: string;
  catch?: string;
  tags?: string[];

  priceText: string;
  locationText: string;
  accessText: string;

  thumb?: string;      // 一覧のサムネ
  gallery?: string[];  // 詳細ページの画像（任意）

  // 詳細ページに出したい説明（任意）
  summary?: string;
  details?: { label: string; value: string }[];
};

export const properties: Property[] = [
  {
    slug: "jp-base-shibuya",
    title: "JP-BASE渋谷",
    catch: "渋谷区東・恵比寿徒歩圏の収益物件",
    tags: ["収益物件", "渋谷区", "事務所・店舗"],

    priceText: "2,190,000,000円（税抜）",
    locationText: "東京都渋谷区東二丁目",
    accessText:
      "東京メトロ日比谷線「恵比寿」駅 徒歩約9分 / JR各線「渋谷」駅 徒歩約9分 / 東急東横線「代官山」駅 徒歩約12分",

    thumb: "/properties/jp-base-shibuya/cover.png",
    gallery: ["/properties/jp-base-shibuya/cover.png"],

    summary:
      "詳細資料（概要書）に基づき掲載しています。内覧・条件確認・収支等のご相談はお問い合わせください。",
    details: [
      { label: "種別", value: "収益物件" },
      { label: "所在地", value: "東京都渋谷区東二丁目" },
      {
        label: "アクセス",
        value:
          "日比谷線「恵比寿」徒歩約9分 / JR「渋谷」徒歩約9分 / 東横線「代官山」徒歩約12分",
      },
      { label: "価格", value: "2,190,000,000円（税抜）" },
    ],
  },
  {
    slug: "oimachi-kamiooi",
    title: "大井町 上大井 全7区画 開発分譲地",
    catch: "敷地面積38〜48坪。建築計画のご相談も可能です。",
    tags: ["土地", "分譲地", "全7区画"],

    priceText: "1,400万円〜（区画により異なります）",
    locationText: "足柄上郡大井町上大井（全7区画）",
    accessText: 'JR御殿場線「上大井」駅 徒歩約10分',

    thumb: "/properties/oimachi-kamiooi/cover.png",
    gallery: ["/properties/oimachi-kamiooi/cover.png"],

    summary:
      "区画・価格等の詳細は販売図面に基づき掲載しています。最新状況はお問い合わせください。",
    details: [
      { label: "種別", value: "開発分譲地" },
      { label: "所在地", value: "足柄上郡大井町上大井（全7区画）" },
      { label: "アクセス", value: 'JR御殿場線「上大井」徒歩約10分' },
      { label: "価格", value: "1,400万円〜（区画により異なります）" },
      { label: "敷地面積", value: "38〜48坪" },
    ],
  },
];
