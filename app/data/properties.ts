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
    catch: "渋谷区東・恵比寿徒歩圏の収益物件 (想定表面利回り約3.71％)",
    tags: ["収益物件", "渋谷区", "事務所・店舗", "セットアップオフィス"],

    priceText: "2,190,000,000円（税抜）",
    locationText: "東京都渋谷区東二丁目17番9号",
    accessText:
      "東京メトロ日比谷線「恵比寿」駅 徒歩9分 / JR各線「渋谷」駅 徒歩9分 / 東急東横線「代官山」駅 徒歩12分",

    thumb: "/properties/jp-base-shibuya/cover.jpeg",
    gallery: [
      "/properties/jp-base-shibuya/cover.jpeg",
      "/properties/jp-base-shibuya/exterior1.jpeg",
      "/properties/jp-base-shibuya/exterior2.jpeg",
      "/properties/jp-base-shibuya/interior1.jpeg",
      "/properties/jp-base-shibuya/interior_plan.jpeg",
      "/properties/jp-base-shibuya/roof1.jpeg",
      "/properties/jp-base-shibuya/floor_plan1.jpeg",
      "/properties/jp-base-shibuya/roof_plan.jpeg",
      "/properties/jp-base-shibuya/elevation1.jpeg",
      "/properties/jp-base-shibuya/elevation2.jpeg",
      "/properties/jp-base-shibuya/map1.jpeg",
      "/properties/jp-base-shibuya/map2.jpeg",
    ],

    summary:
      "室内リニューアルが施された本物件は「渋谷」・「恵比寿」エリアで成長を目指すスタートアップ企業等の賃貸ニーズにも適した仕上げ状況です。現在、想定表面利回り約3.71％（税抜）。",
    details: [
      { label: "物件名", value: "JP-BASE渋谷" },
      { label: "種類", value: "事務所・店舗" },
      { label: "構造", value: "鉄骨造陸屋根8階建" },
      { label: "築年月", value: "1985年12月（2023年リニューアル）" },
      { label: "所在地", value: "東京都渋谷区東二丁目17番9号" },
      {
        label: "交通アクセス",
        value:
          "日比谷線「恵比寿」徒歩9分 / JR「渋谷」徒歩9分 / 東横線「代官山」徒歩12分",
      },
      { label: "販売価格", value: "2,190,000,000円（税抜）" },
      { label: "想定表面利回り", value: "約3.71%（税抜） / NOI利回り 約3.41%（税抜）" },
      { label: "実測面積", value: "144.43㎡ (約43.69坪)" },
      { label: "延床面積", value: "728.10㎡ (約220.25坪)" },
    ],
  },
  {
    slug: "la-vita",
    title: "ラ・ヴィータ（La Vita）",
    catch: "高収益レジデンス・安定稼働中の投資用物件",
    tags: ["収益物件", "レジデンス", "投資用"],

    priceText: "詳細はお問い合わせください",
    locationText: "※詳細所在地は図面記載",
    accessText: "※詳細アクセスは図面記載",

    thumb: "/properties/la-vita/slide_0.png",
    gallery: [
      "/properties/la-vita/slide_1.png",
      "/properties/la-vita/slide_2.png",
      "/properties/la-vita/slide_3.png",
      "/properties/la-vita/slide_4.png",
      "/properties/la-vita/slide_5.png",
      "/properties/la-vita/slide_6.png",
      "/properties/la-vita/slide_7.png",
      "/properties/la-vita/slide_8.png",
    ],

    summary:
      "販売図面（PDF抜粋）に基づき掲載しております。詳細な利回り、レントロール、内覧・条件確認につきましてはお気軽にご相談ください。",
    details: [
      { label: "物件名", value: "ラ・ヴィータ（La Vita）" },
      { label: "種別", value: "一棟収益レジデンス" },
      { label: "価格", value: "お問い合わせください" },
      { label: "詳細", value: "画像ギャラリーの販売図面より物件概要をご確認ください" },
    ],
  },
];
