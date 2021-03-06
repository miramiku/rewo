/*global REWO */

/** consts and basic variables */
REWO.SupusData = ( function () {
	"use strict";

	var TITLES = [
		[
			"挨拶代わりに攻撃する", "悪魔が巣くう", "悪魔を飼い馴らす", "あぐらをかく", "悪を許さない",
			"頭が真っ白な", "歩み続ける", "新たなる", "荒波に挑みし", "荒ぶる",
			"あれを成し遂げた", "慌ただしい", "暗躍する", "いい匂いのする", "生き血をすする",
			"威勢のいい", "いつも泣いている", "引力を操る", "動くことのできない", "うだつの上がらない",
			"うつむいた", "うらぶれた", "うら若き", "麗しき", "運命を改変する",
			"えくぼが可愛い", "追い風に乗る", "老いを加速させる", "大いなる", "大げさに言うと",
			"雄々しき", "お金に目が眩む", "お腹を下す", "帰ってきた", "輝ける",
			"影で操る", "陰で見守る", "片腕を無くした", "肩を自在に外せる", "金遣いの荒い",
			"雷に砕かれし", "髪の毛を操る", "眼力が強い", "気が付くと", "決め台詞を言う",
			"逆境を覆す", "漁夫の利を狙う", "筋トレ大好きな", "くるくる回る", "気高き",
			"決して揺るがない", "元素を掌握する", "恋い焦がれる", "声に張りのある", "極秘の情報を持つ",
			"孤高なる", "心を見透かす", "腰の弱い", "懲りない", "婚期を逃した",
			"先を見据える", "冷めることのない", "散歩で世を救う", "時空を歪める", "次元を切り裂く",
			"地獄より来る", "四肢をもがれた", "自然を愛する", "質量を支配する", "史に名を刻む",
			"純真なる", "情に訴える", "退くことを知らない", "知る人ぞ知る", "死を纏う",
			"深淵より生まれし", "震撼せし", "真実の愛を知る", "真実を見ぬく", "真理を悟りし",
			"姿無き", "全ての角を丸くする", "全てを切り裂く", "澄み渡る", "世界の安寧を願う",
			"世界の理を知る", "世界を凍らす", "石化を望む", "絶望の淵より蘇りし", "背中に傷負う",
			"騒々しい", "憎悪する", "大地を揺るがす", "猛り狂う", "たしか…",
			"畳み掛ける", "駄々をこねる", "例えるなら", "魂を食らう", "魂を摘み取る",
			"堕落した", "仲裁を得意とする", "月より放たれし", "ツッコミに定評のある", "罪なき者を救う",
			"罪深き", "手料理を振る舞う", "天界より舞い降りし", "天駆ける", "天空を横臥する",
			"天を裂く", "闘志を絶やさない", "年甲斐の無い", "隣町で農業を営む", "とにかく叫ぶ",
			"泣きながら戦う", "情け深い", "謎の粒子を放つ", "涙もろい", "なんかすごい",
			"なんとなく", "煮えたぎる", "のた打ち回る", "這いずり回る", "敗北を知りたい",
			"始まりを告げる", "果て無き", "鼻息の荒い", "話すのがゆっくりな", "華々しき",
			"万物を遮断する", "万物を創造する", "瀕死しか狙わない", "封印されし", "復習心に囚われる",
			"ふてぶてしい", "腐敗を招く", "古傷が痛む", "ふんぞり返った", "平和をもたらす",
			"星を従える", "禍々しい", "魔眼を持つ", "魔王に屈服した", "魔王を屠る",
			"未来を見通す", "無垢なる", "むさ苦しい", "ムッキムキ！", "冥界を行き来する",
			"名誉ある", "ものものしい", "物忘れの激しい", "野望に満ちた", "闇を抱える",
			"融通の利かない", "夢見がちな", "揺ぎ無き", "欲にまみれた", "雷雲生み出す",
			"雷鳴轟く", "忘れられた", "笑い続ける"
		],
		[
			"諦めの悪い", "朝帰りの", "アザルス大陸の", "汗だくの", "あの伝説の",
			"操りの", "意識不明の", "一陣の", "一心不乱の", "命知らずの",
			"イルファーロの", "薄着の", "嘘つきの", "腕が 4 本の", "生まれたての",
			"裏切りの", "裏声の", "運命の", "永遠の", "…えーっと…",
			"王道の", "大食いの", "お金に細かい", "お喋りな", "踊る",
			"愚かな", "怪力の", "隠れてばかりの", "風邪気味の", "片思いの",
			"金切り声の", "環境に優しい", "雁字搦めの", "還暦の", "機械仕掛けの",
			"強肩の", "虚言癖の", "綺麗な声の", "空腹の", "クォパティ法制院の",
			"臭い", "口だけ達者な", "朽ちない", "紅蓮の", "原初の",
			"絢爛の", "恋わずらいの", "光速の", "鋼鉄の", "校内の",
			"剛毛の", "業を背負う", "誇大妄想の", "小春日和の", "殺さずの",
			"金色の", "こんな感じの", "最強の", "最古の", "最後の",
			"最弱の", "最先端技術の", "最速の", "サキュバス好きの", "策士の",
			"さすらいの", "三白眼の", "自給自足の", "思春期の", "漆黒の",
			"地元の", "灼熱業火の", "灼熱の", "修行中の", "俊足の",
			"純白の", "詳細不明の", "食通の", "思慮の足りない", "神速の",
			"信念を持った", "心配性の", "森羅万象の", "睡眠不足の", "荒んだ心の",
			"世界一の", "隻眼の", "絶対零度の", "戦術の", "戦場の",
			"前代未聞の", "戦闘狂の", "全能の", "底なしの", "致命傷を負った",
			"直立不動の", "猪突猛進の", "沈黙の", "疲れ知らずの", "辻切りの",
			"壺の中の", "ディメント王国の", "出来損ないの", "手練れの", "鉄壁の",
			"手のひら返しの", "天下の", "天下無双の", "時をかける", "常闇の",
			"戸惑いの", "鳥肌の", "泣き顔の", "泣き上戸の", "情けない",
			"涙目の", "波乗りの", "南国育ちの", "荷物持ちの", "寝起きの",
			"猫舌の", "眠る", "年齢不詳の", "ハーサント連邦の", "白衣の",
			"博識の", "恥ずかしがり屋の", "裸足の", "卑怯な", "悲劇の",
			"一人ぼっちの", "美肌の", "病弱の", "瀕死しか狙わない", "瀕死の",
			"不屈の", "袋小路の", "二日酔いの", "筆不精の", "不老不死の",
			"へそ曲がりの", "冒険一筋の", "放心状態の", "ホウライ大陸の", "細身の",
			"迷子の", "魔獣混ざりし", "見境のない", "水虫の", "民家住みの",
			"無一文の", "ムキムキの", "無口の", "無実の", "無情の",
			"無表情の", "迷宮の", "明鏡止水の", "目がパッチリした", "八百屋の",
			"安月給の", "やせ我慢の", "腰痛持ちの", "齢 80 の", "楽天家の",
			"ルーペ使いの", "流浪の", "レーヴェンアンタイルの", "笑う"
		],
		[
			"アーティスト", "アイドル", "赤ん坊", "悪魔",
			"足軽", "足長おじさん", "あの人", "アヒル", "甘党",
			"アルケミスト", "いかさま師", "韋駄天", "異端者", "犬",
			"色男", "歌姫", "衛兵", "英雄", "王",
			"応援団長", "狼", "おせっかい", "落ちこぼれ", "落ち武者",
			"乙女", "鬼軍曹", "お祭り男", "海賊", "怪鳥",
			"学者", "革命家", "歌手", "風", "壁",
			"カメラマン", "狩人", "カワイイ子", "貴公子", "騎士",
			"記者", "偽善者", "救世主", "宮廷音楽家", "強者",
			"狂人", "巨漢", "吟遊詩人", "クラウン", "苦労人",
			"黒幕", "芸人", "撃墜王", "剣豪", "小石", "後継人",
			"合成化合物", "強盗", "子供", "子猫ちゃん", "ゴブリンもどき",
			"殺戮マシーン", "サムライ", "残像", "三段腹", "参謀",
			"シーフ", "師匠", "死体", "下っ端", "師団長",
			"四天王", "次男坊", "死神", "支配者", "十人衆",
			"守護神", "呪術師", "出世人", "将軍", "少女",
			"小心者", "小説家", "処刑人", "地雷原", "心理学者",
			"侵略者", "スイーパー", "スパイ", "世界王者", "石像",
			"先駆者", "戦士", "掃除人", "狙撃手", "存在",
			"大将軍", "達人", "脱落者", "魂", "男爵",
			"使い手", "つむじ風", "偵察者", "天才", "天使",
			"天帝", "陶芸家", "道化師", "動物好き", "独身貴族",
			"毒蛇", "特攻兵", "ドラゴン", "ドワーフ好き", "七つ道具",
			"成金", "…なんだっけ…", "肉球", "肉壁", "ニンジャ",
			"ノーム好き", "ハイエナ", "破壊神", "運び屋", "花泥棒",
			"ババロア", "バリスタ", "ピエロ", "ビショップ", "人見知り",
			"皮肉屋", "ヒロイン", "ファイター", "不死鳥", "無精ヒゲ",
			"武神", "不審者", "ブタ", "プリースト", "変な人",
			"傍観者", "冒険者", "方向音痴", "防波堤", "ポークル好き",
			"マッスル", "魔導士", "村人Ａ", "名医", "メイジ",
			"メイド", "女神", "物語", "守り人", "問題児",
			"疫病神", "雇われ店長", "勇者", "要塞", "傭兵",
			"預言者", "酔っ払い", "漁師", "料理人", "隣人",
			"恋愛マスター", "錬金術師", "ロード",
		],
	],
		primary = TITLES[ 0 ].length,
		secondary = TITLES[ 1 ].length,
		tertiary = TITLES[ 2 ].length,

		period = primary * secondary * tertiary,
		divisor = secondary * tertiary;

	return {
		TITLES: TITLES,

		primary: primary,
		secondary: secondary,
		tertiary: tertiary,

		period: period,
		divisor: divisor
	};
}() );

/** definition */
REWO.supus = ( function () {
	"use strict";

	var SupusData = REWO.SupusData,

		TITLES = SupusData.TITLES,
		tertiary = SupusData.tertiary,
		period = SupusData.period,
		divisor = SupusData.divisor,

		_supus = function ( seed ) {
			var serial = seed || ( seed === 0 ? 0 : Math.floor( Math.random() * period ) ),
				title = TITLES[ 0 ][ Math.floor( serial / divisor ) ] +
					TITLES[ 1 ][ Math.floor(( serial % divisor ) / tertiary ) ] +
					TITLES[ 2 ][ serial % divisor % tertiary ];

			REWO.supus.title = title;
			REWO.supus.serial = serial;

			return title + " [" + serial + "]";
		};

	return _supus;
}() );
