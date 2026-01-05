import { Mountain, Dumbbell, Film, Waves, Activity, Brain } from "lucide-react";

export const activities = [
    {
        id: "ascent",
        title: "The Ascent",
        englishName: "Hiking",
        concept: "山と向き合い、高みを目指す孤独な行軍。",
        philosophy: "頂を目指す過程で、私たちは己の弱さと対峙する。自然の厳しさは、都市で麻痺した感覚を呼び覚ます。",
        ritual: "毎月第1土曜日。早朝、指定された登山口に集合。会話は最小限に、ただひたすらに歩を進める。",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
        icon: Mountain,
        gradient: "from-green-900 to-black"
    },
    {
        id: "engine",
        title: "The Engine",
        englishName: "HYROX",
        concept: "心肺と筋肉を極限まで追い込む、肉体の証明。",
        philosophy: "肉体の限界は、精神の限界ではない。激しい鼓動の中でこそ、生の実感が鮮明になる。",
        ritual: "週2回、深夜の倉庫ジムにて。HYROX形式のサーキットトレーニング。妥協は許されない。",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        icon: Dumbbell,
        gradient: "from-stone-900 to-black"
    },
    {
        id: "lens",
        title: "The Lens",
        englishName: "Cinema",
        concept: "他者の視点を通じ、自己の世界観を拡張する。",
        philosophy: "スクリーンは鏡だ。他者の物語を追体験することで、私たちは自分自身の深層心理を覗き見る。",
        ritual: "隔週金曜夜。ミニシアターを貸し切り、選定された作品を鑑賞。上映後は沈黙の時間を設ける。",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
        icon: Film,
        gradient: "from-teal-900 to-black"
    },
    {
        id: "void",
        title: "The Void",
        englishName: "Sauna",
        concept: "熱と冷気の中で思考を停止させ、無に帰る。",
        philosophy: "情報はノイズだ。極限の熱と冷水の衝撃によってのみ、私たちは思考のループから解放される。",
        ritual: "月1回、会員制サウナにて。3セットの反復。デジタルデバイスの持ち込みは厳禁。",
        image: "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=2070&auto=format&fit=crop",
        icon: Waves,
        gradient: "from-emerald-950 to-black"
    },
    {
        id: "stride",
        title: "The Stride",
        englishName: "Marathon",
        concept: "一定のリズムの中で、思考と身体が溶け合う動的な瞑想。",
        philosophy: "走ることは、祈ることにも似ている。地面を蹴る単純な反復の中に、真理は宿る。",
        ritual: "毎週水曜夜、皇居外周。ペースは問わない。自身の呼吸とリズムだけに集中する20km。",
        image: "https://images.unsplash.com/photo-1552674605-46d5c7248f2b?q=80&w=2070&auto=format&fit=crop",
        icon: Activity,
        gradient: "from-orange-950 to-black"
    },
    {
        id: "core",
        title: "Inner Core",
        englishName: "Meditation",
        concept: "静寂の中で自己の内面を凝視し、軸を整える。",
        philosophy: "外の世界は変えられないが、内なる世界は変えられる。静寂こそが、最強の武器となる。",
        ritual: "新月の夜。暗闇の中で座禅を組む。思考が浮かんでは消えるのを、ただ観察する。",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop",
        icon: Brain,
        gradient: "from-indigo-950 to-black"
    }
];
