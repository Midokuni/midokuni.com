
const Guilds = {
	'16378492234061160': 'cor',
	'34682147655371076': 'sunday',
	'34113539340215572': 'hamster',
	'97569436149323070': 'chickenwing',
	'75069367347408200': 'aincrad',
	'66611160853105010': 'hamsterhooks',
	'45267559454491500': 'hamsterdragonhook',
	'42022235789757897': 'DynamicHamster',
 };
// const Raids = require('./public/data/raids.js');
const Label = {
	Hamster: {
		Raids: "R",
		GoldBar: "G",
		Diaspora: "D",
		FaaBelBubs: "F",
	}
}
const Hooks = {
	Hamster: {
		[Label.Hamster.Raids]: "https://discord.com/api/webhooks/915792385609441310/Zn1cU6dPC3wgKjFyN1u2h9qf6xPC7Okqmr8-1f3mhJGhkSloe-M2f52DnVMWs6zU-G-Z",
		[Label.Hamster.GoldBar]: "https://discord.com/api/webhooks/915792589876236379/ybWWmoSXUfqN8DBxC10rAkvg1fVPyPl3f9ruBxMqqda2qQ1XhcQLB5z7KdXmr1SkMgz9",
		[Label.Hamster.Diaspora]: "https://discord.com/api/webhooks/999657157605740624/sleol8R6xsiDD1gKLvvSeIhMjdn8OUqG-Jcd77-U-_sPH8y72O6DqdFdF57U5Kh_62xb",
		[Label.Hamster.FaaBelBubs]: "https://discord.com/api/webhooks/1043496648992641144/E6PqzkJb43LloHUjfeRuqJffq_z3-4h4IIss6uRdbHqMTz8wKRzR-3BHMHHvXUKxWwX3",
	}
}

const Raids = {
	Default: "Default",
	BahamutN: "50100",
	BahamutHL: "50150",
	Akasha: "6051510",
	Alexiel: "356140",
	LeviMalice: "6045606",
	LeviMalice2: "6057900",
	Animus: "6070230",
	Anubis: "845501",
	Ava: "356170",
	Caong: "447120",
	ChevMalice: "6068200",
	Europa: "356130",
	GO: "733100",
	GOHL: "6058300",
	Gilga: "582120",
	Grim: "356150",
	Hector: "738120",
	HuangQilinHuang: "737201",
	HuangQilinQilin: "845201",
	Huanglong: "737200",
	LuciN: "6053600",
	Meta: "356160",
	Morg: "656400",
	Phronesis: "6062200",
	Primarchs: "2961001",
	Prom: "342100",
	Qilin: "845200",
	RoseQueenJK: "644110",
	Shiva: "356120",
	TiaMalice: "6051501",
	UBHL: "50250",
	UBN: "50200",
	Wilnas: "6059011",
	Wamdus: "6059012",
	Ewiyar: "6059014",
	Galleon: "6059013",
	Fediel: "6059016",
	LuWoh: "6059015",
	Lindwurm: "6059010",
	Diaspora: "6081001",
	Osiris: "6072300",
	Atum: "6078201",
	Horus: "6073100",
	Ra: "6081501",
	Bennu: "6075001",
	Tefnut: "6081401",
	Mugen: "6081001",
	Siegfried: "6083801",
	SUBHL: "SUBHL",
	LuciHL: "6053610",
	Beelzebub: "6061210",
	Belial: "6069601",
}

const decodeGuild = Guilds;
const raidShareData = {
	"info":{},
	"DynamicHamster": {
		Guild:{
			name: "WarHamsters", 
			capt: 14649870, 
			ping: '495483750927302668'
		},
		Hooks: Hooks.Hamster,
		Raids: {
			[Raids.Default]: {
				Role: "",
				Hook: Label.Hamster.Raids
			},
			/*
			ID: {
				Role: ROLE,
				Hook: Label.Hamster.TYPE
			}
			*/
			[Raids.ChevMalice]: {
				Role: "823531061425602561",
				Hook: Label.Hamster.Raids
			},
			[Raids.Animus]: {
				Role: "875729045462069308",
				Hook: Label.Hamster.Raids
			},
			[Raids.Prom]: {
				Role: "533664322216263681",
				Hook: Label.Hamster.Raids
			},
			[Raids.Shiva]: {
				Role: "452417479063633930",
				Hook: Label.Hamster.Raids
			},
			[Raids.Europa]: {
				Role: "452417539889430529",
				Hook: Label.Hamster.Raids
			},
			[Raids.Alexiel]: {
				Role: "452417395886260254",
				Hook: Label.Hamster.Raids
			},
			[Raids.Grim]: {
				Role: "452417315284451328",
				Hook: Label.Hamster.Raids
			},
			[Raids.Meta]: {
				Role: "452417649784258560",
				Hook: Label.Hamster.Raids
			},
			[Raids.Ava]: {
				Role: "452417594054672394",
				Hook: Label.Hamster.Raids
			},
			[Raids.Caong]: {
				Role: "536000819464503296",
				Hook: Label.Hamster.Raids
			},
			[Raids.Gilga]: {
				Role: "536000821872295966",
				Hook: Label.Hamster.Raids
			},
			[Raids.RoseQueenJK]: {
				Role: "456493527250108436",
				Hook: Label.Hamster.Raids
			},
			[Raids.Morg]: {
				Role: "536000825361825803",
				Hook: Label.Hamster.Raids
			},
			[Raids.GO]: {
				Role: "454526133158019072",
				Hook: Label.Hamster.Raids
			},
			[Raids.Hector]: {
				Role: "536000829866639361",
				Hook: Label.Hamster.Raids
			},
			[Raids.Anubis]: {
				Role: "550368571012939786",
				Hook: Label.Hamster.Raids
			},
			[Raids.Primarchs]: {
				Role: "663900705605812244",
				Hook: Label.Hamster.Raids
			},
			[Raids.LeviMalice]: {
				Role: "657489459922599958",
				Hook: Label.Hamster.Raids
			},
			[Raids.TiaMalice]: {
				Role: "524449170413584400",
				Hook: Label.Hamster.Raids
			},
			[Raids.LuciN]: {
				Role: "565758920539373608",
				Hook: Label.Hamster.Raids
			},
			[Raids.LeviMalice2]: {
				Role: "657489459922599958",
				Hook: Label.Hamster.Raids
			},
			[Raids.GOHL]: {
				Role: "663902573375258647",
				Hook: Label.Hamster.Raids
			},
			[Raids.Lindwurm]: {
				Role: "734914689703739613",
				Hook: Label.Hamster.Raids
			},
			[Raids.Phronesis]: {
				Role: "734711284108492831",
				Hook: Label.Hamster.Raids
			},
			[Raids.Osiris]: {
				Role: "923127095163498516",
				Hook: Label.Hamster.Raids
			},
			[Raids.Horus]: {
				Role: "944097664839069767",
				Hook: Label.Hamster.Raids
			},
			[Raids.Ra]: {
				Role: "999304100447526922",
				Hook: Label.Hamster.Raids
			},
			[Raids.Tefnut]: {
				Role: "999304023293304852",
				Hook: Label.Hamster.Raids
			},
			[Raids.Bennu]: {
				Role: "970182815905906749",
				Hook: Label.Hamster.Raids
			},
			[Raids.Atum]: {
				Role: "988471050897592380",
				Hook: Label.Hamster.Raids
			},
			[Raids.Wilnas]: {
				Role: "737031192163123262",
				Hook: Label.Hamster.Raids
			},
			[Raids.Wamdus]: {
				Role: "737031262962974730",
				Hook: Label.Hamster.Raids
			},
			[Raids.Galleon]: {
				Role: "737031313206280206",
				Hook: Label.Hamster.Raids
			},
			[Raids.Ewiyar]: {
				Role: "737031469125468232",
				Hook: Label.Hamster.Raids
			},
			[Raids.LuWoh]: {
				Role: "737031510921707541",
				Hook: Label.Hamster.Raids
			},
			[Raids.Fediel]: {
				Role: "737031560267694172",
				Hook: Label.Hamster.Raids
			},

			[Raids.Qilin]: {
				Role: "515879294203854859",
				Hook: Label.Hamster.GoldBar
			},
			[Raids.Huanglong]: {
				Role: "515879294203854859",
				Hook: Label.Hamster.GoldBar
			},
			[Raids.HuangQilinHuang]: {
				Role: "515879294203854859",
				Hook: Label.Hamster.GoldBar
			},
			[Raids.HuangQilinQilin]: {
				Role: "515879294203854859",
				Hook: Label.Hamster.GoldBar
			},
			[Raids.Akasha]: {
				Role: "524447526217318431",
				Hook: Label.Hamster.GoldBar
			},
			[Raids.BahamutN]: {
				Role: "550361286706200596",
				Hook: Label.Hamster.GoldBar
			},
			[Raids.BahamutHL]: {
				Role: "453502604702384138",
				Hook: Label.Hamster.GoldBar
			},
			[Raids.UBN]: {
				Role: "454121963980455937",
				Hook: Label.Hamster.GoldBar
			},
			[Raids.UBHL]: {
				Role: "453034306714206229",
				Hook: Label.Hamster.GoldBar
			},
			[Raids.Diaspora]: {
				Role: "988470276729749546",
				Hook: Label.Hamster.Diaspora
			},
			[Raids.Mugen]: {
				Role: "1011933039758147595",
				Hook: Label.Hamster.Diaspora
			},
			[Raids.Siegfried]: {
				Role: "1042780107267395674",
				Hook: Label.Hamster.Diaspora
			},
			[Raids.SUBHL]: {
				Role: "915796116908408882",
				Hook: null
			},
			[Raids.LuciHL]: {
				Role: "565758775118659604",
				Hook: Label.Hamster.FaaBelBubs
			},
			[Raids.Beelzebub]: {
				Role: "716867675770454069",
				Hook: Label.Hamster.FaaBelBubs
			},
			[Raids.Belial]: {
				Role: "854448935501692979",
				Hook: Label.Hamster.FaaBelBubs
			}
		},
	},
}

export const onRequestGet = () => {
	let resData = {};
	for(let g of ['42022235789757897']) {
		if(raidShareData[decodeGuild[g]]) {
			resData[decodeGuild[g]]=raidShareData[decodeGuild[g]];
		}
	}
	// res.setHeader('Access-Control-Allow-Origin', '*');
	// res.send(resData);

	return new Response(JSON.stringify(resData));
}