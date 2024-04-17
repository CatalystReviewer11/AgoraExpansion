// deno-lint-ignore-file
import {
  applyParamsToScript,
  Data,
  Validator,
} from "lucid-cardano";

export interface GovernanceTokenLocker {
  new (
    config: {
      action: "Sum" | "Multiply";
      powerList: {
        weight: bigint;
        assetConfig: {
          AssetSelection: {
            assetSelection: { PolicyId: { policy: string } } | {
              AssetClass: { policy: string; asset: string };
            } | {
              FilterConfig: {
                policy: string;
                filter: { Included: [string] } | { Excluded: [string] };
              };
            };
          };
        } | {
          QuadraticConfig: {
            policy: string;
            asset: { PolicyId: { policy: string } } | {
              AssetClass: { policy: string; asset: string };
            } | {
              FilterConfig: {
                policy: string;
                filter: { Included: [string] } | { Excluded: [string] };
              };
            }[];
          };
        };
      }[];
    },
  ): Validator;
  datum: { bondName: string; votingPower: bigint };
  _redeemer: { wrapper: Data };
}

export const GovernanceTokenLocker = Object.assign(
  function (
    config: {
      action: "Sum" | "Multiply";
      powerList: {
        weight: bigint;
        assetConfig: {
          AssetSelection: {
            assetSelection: { PolicyId: { policy: string } } | {
              AssetClass: { policy: string; asset: string };
            } | {
              FilterConfig: {
                policy: string;
                filter: { Included: [string] } | { Excluded: [string] };
              };
            };
          };
        } | {
          QuadraticConfig: {
            policy: string;
            asset: { PolicyId: { policy: string } } | {
              AssetClass: { policy: string; asset: string };
            } | {
              FilterConfig: {
                policy: string;
                filter: { Included: [string] } | { Excluded: [string] };
              };
            }[];
          };
        };
      }[];
    },
  ) {
    return {
      type: "PlutusV2",
      script: applyParamsToScript(
        "590ab5010000323232323232322225323232333007300130083754008264a66601064646464646464646464646464a66602a601e602c6ea80304c8c8c8c94ccc064c04cc068dd500b899299980d180a180d9baa0011323232533301d323300100101322533302200114a2264a66604066604066ebcc010c088dd5180218111baa300530223754604a00466e95200233024375201697ae04a09444cc00c00c004528181280089919299981118128010991919299981119b8f375c600c60486ea8008dca1bb33006302437540102a66604466e1cdd6980398121baa00200315333022301d33300a3756600e60486ea8010034dd7180318121baa00213232325333028302b00213253330263004375c604e004266ebcdd3192999813981118141baa00114bd6f7b63009bab302c302937540026601e602002a0226e980045281bab30270011630290013233232253330273370e9002240002004264646600200200844a66605a00226605c66ec0dd480a9ba60034bd6f7b630099191919299981718051980580c80109981919bb037520326e9801c01454ccc0b8c0300084c94ccc0bcc0a4c0c0dd500089981999bb03752034606860626ea80040104010c94ccc0bd4ccc0c80045288a5014c0103d87a80001302b33033374c00297ae03233001001002225333033001133034337606ea40293010102004bd6f7b630099191919299981a18081980880700109981c19bb0375201c981010200005153330343371e01c004264a66606a605e606c6ea80044cc0e4cdd81ba900f303a30373754002008200864a66606a605e002298103d87a80001303133039375000297ae033700002900209981c19bb037520046ea0004cc01801800cdd6981a8019bae303300230370023035001133032337606ea4008dd3000998030030019bab302f003375c605a0046062004605e0026464004646600200200444a66605a00229309929998170008a4c26464a66605a604e605c6ea8cc028dd7181718190021bae302e00213300500533031002001163032002303000130300013302b337606ea400530010102004bd6f7b6302999812980f8030a5eb7bdb1804c8c8cc0040052f5bded8c044a66605600226605866ec0dd48099ba60034bd6f7b630099191919299981618041980480b80109981819bb0375202e6e9801c01454ccc0b0c0280084cc0c0cdd81ba9017374c00e00626606066ec0dd48011ba6001330060060033756605a0066eb8c0ac008c0bc008c0b4004c8cc0040052f5bded8c044a66605400226605666ec130010d4c766f74696e675f706f77657200375001097adef6c60132323232533302b30073300848810c766f74696e675f706f7765720000213302f3376098010d4c766f74696e675f706f77657200375001800a2a66605666e3d2210c766f74696e675f706f7765720000213302f3376098010d4c766f74696e675f706f77657200375001800626605e66ec0dd48011ba800133006006003375a60580066eb8c0a8008c0b8008c0b0004dd7a60103d8798000375c6010604c6ea8010894ccc094cdc80010008a6103d8798000153330253371e0040022980103d87a800014c103d87b8000371e01a2c2c2ca666042603660446ea80044c8c8c8c94ccc0a0c0ac00852616375a605200260520046eb8c09c004c08cdd50008b19299981099b8748010c088dd50008981318119baa00116302530263026302237540046464a666042603660446ea8c014c08cdd501009998009bac30063023375404090001119b8033300400237566010604a6ea80140580044ccc004dd6180318119baa0204800088cdc11998020011bab30083025375400a02c002444646600200200844a6660500022008266006605400266004004605600244464a666046603a60486ea80044c8c94ccc094c07c0044c92002375c6054604e6ea800854ccc094c0800044c8c8c92004375c6058605a0046eb8c0ac004c09cdd500109919192400c6058605a0046eb8c0ac004c09cdd500118129baa001302830253754002264646490041bac302a302b002375c6052002604a6ea8004c01cc090dd50018b181180099198008008079129998110008a5eb804c8c94ccc084cdd7980298119baa30053023375400466e95200233025375201897ae013302500233004004001133004004001302600230240011623022001230213022001301f301c37540022c66646002002444a66603e0042980103d87a800013232533301e30180031301a330220024bd70099980280280099b8000348004c08c00cc0840080392000133710666002600601000891010c766f74696e675f706f7765720048000888c94ccc070c05cc074dd50008a400026eb4c084c078dd500099299980e180b980e9baa00114c103d87a80001323300100137566044603e6ea8008894ccc084004530103d87a8000132323253330213371e00e6eb8c08800c4c074cc094dd4000a5eb804cc014014008dd69811001181280118118009980200180111191980080080191299980f0008a60103d87a80001323232533301e3371e00c6eb8c07c00c4c068cc088dd3000a5eb804cc014014008dd5980f801181100118100009191980080080111299980e0008a5eb7bdb1804c8c8c8c94ccc074cdc7a45000021003133021337606ea4008dd3000998030030019bab301e003375c60380046040004603c0026eb8c068c05cdd50060a5037586032603460340046eacc060004c060c060008dd5980b000980b180b0011bac301400130140023758602400260240046eb0c040004c030dd518078011807180780098051baa00514984d958c94ccc020c00800454ccc02cc028dd50030a4c2c2a66601060060022a66601660146ea801852616163008375400a266444a666014646464a66601a6010601c6ea80044c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c94ccc080c08c0084c8c8c8c94ccc090c09c0084cdc4192999811180e98119baa0011480004dd6981398121baa001325333022301d302337540022980103d87a80001323300100137566050604a6ea8008894ccc09c004530103d87a8000132323253330273371e9110c766f74696e675f706f77657200375c605000626046660566ea00052f5c026600a00a0046eb4c0a0008c0ac008c0a4004c8cc004004c8cc004004038894ccc09c00452f5bded8c0264646464a66605066e3d22100002100313302c337606ea4008dd3000998030030019bab3029003375c604e0046056004605200244a66604c002298103d87a8000132323253330263371e0106eb8c09c00c4c088cc0a8dd3000a5eb804cc014014008dd5981380118150011814000a40002c604a0026600a020466ebcc01cc088dd5180398111baa300330223754002600e60446ea8c01cc088dd5180198111baa00432533301f301a3020375400226eb8c090c084dd50008b180298101baa300530203754600260406ea80088c08cc09000458c084004cc0040308cdd79801980f1baa00100f22323300100100322533302100114bd70099192999810180280109981200119802002000899802002000981280118118009180f8009bac301d301e301e00237566038002603860380046eacc068004c068c068008dd6180c000980c0011bac301600130160023758602800260206ea800cc048c03cdd50008b18089809001180800098061baa00114984d9594ccc01cc004c020dd5002899191919299980718088010a4c2c6eb4c03c004c03c008dd7180680098049baa00516300c300937540086e1d2000370e90011ba5480015cd2ab9d5573caae7d5d02ba157441",
        [config],
        {
          "dataType": "list",
          "items": [{
            "title": "ConfigParameter",
            "description":
              "This file contains a validator which can be used to lock NFT(s) as well as FT(s) as defined by the parameters.\n By locking these tokens, the user is able to mint governance tokens which are used to vote on proposals.\n At any time, the user may unlock their tokens and receive their original tokens back.\n None of the contract relies on stake credentials, so the user stake credential can be used if desirable.",
            "anyOf": [{
              "title": "ConfigParameter",
              "dataType": "constructor",
              "index": 0,
              "fields": [{
                "title": "action",
                "anyOf": [{
                  "title": "Sum",
                  "dataType": "constructor",
                  "index": 0,
                  "fields": [],
                }, {
                  "title": "Multiply",
                  "dataType": "constructor",
                  "index": 1,
                  "fields": [],
                }],
              }, {
                "dataType": "list",
                "items": {
                  "title": "PowerConfig",
                  "anyOf": [{
                    "title": "PowerConfig",
                    "dataType": "constructor",
                    "index": 0,
                    "fields": [{ "dataType": "integer", "title": "weight" }, {
                      "title": "assetConfig",
                      "anyOf": [{
                        "title": "AssetSelection",
                        "dataType": "constructor",
                        "index": 0,
                        "fields": [{
                          "title": "assetSelection",
                          "anyOf": [{
                            "title": "PolicyId",
                            "dataType": "constructor",
                            "index": 0,
                            "fields": [{
                              "dataType": "bytes",
                              "title": "policy",
                            }],
                          }, {
                            "title": "AssetClass",
                            "dataType": "constructor",
                            "index": 1,
                            "fields": [{
                              "dataType": "bytes",
                              "title": "policy",
                            }, { "dataType": "bytes", "title": "asset" }],
                          }, {
                            "title": "FilterConfig",
                            "dataType": "constructor",
                            "index": 2,
                            "fields": [{
                              "dataType": "bytes",
                              "title": "policy",
                            }, {
                              "title": "filter",
                              "anyOf": [{
                                "title": "Included",
                                "dataType": "constructor",
                                "index": 0,
                                "fields": [{ "dataType": "bytes" }],
                              }, {
                                "title": "Excluded",
                                "dataType": "constructor",
                                "index": 1,
                                "fields": [{ "dataType": "bytes" }],
                              }],
                            }],
                          }],
                        }],
                      }, {
                        "title": "QuadraticConfig",
                        "dataType": "constructor",
                        "index": 1,
                        "fields": [{ "dataType": "bytes", "title": "policy" }, {
                          "dataType": "list",
                          "items": {
                            "title": "AssetSelection",
                            "anyOf": [{
                              "title": "PolicyId",
                              "dataType": "constructor",
                              "index": 0,
                              "fields": [{
                                "dataType": "bytes",
                                "title": "policy",
                              }],
                            }, {
                              "title": "AssetClass",
                              "dataType": "constructor",
                              "index": 1,
                              "fields": [{
                                "dataType": "bytes",
                                "title": "policy",
                              }, { "dataType": "bytes", "title": "asset" }],
                            }, {
                              "title": "FilterConfig",
                              "dataType": "constructor",
                              "index": 2,
                              "fields": [{
                                "dataType": "bytes",
                                "title": "policy",
                              }, {
                                "title": "filter",
                                "anyOf": [{
                                  "title": "Included",
                                  "dataType": "constructor",
                                  "index": 0,
                                  "fields": [{ "dataType": "bytes" }],
                                }, {
                                  "title": "Excluded",
                                  "dataType": "constructor",
                                  "index": 1,
                                  "fields": [{ "dataType": "bytes" }],
                                }],
                              }],
                            }],
                          },
                          "title": "asset",
                        }],
                      }],
                    }],
                  }],
                },
                "title": "powerList",
              }],
            }],
          }],
        } as any,
      ),
    };
  },
  {
    datum: {
      "title": "ContractDatum",
      "anyOf": [{
        "title": "ContractDatum",
        "dataType": "constructor",
        "index": 0,
        "fields": [{ "dataType": "bytes", "title": "bondName" }, {
          "dataType": "integer",
          "title": "votingPower",
        }],
      }],
    },
  },
  {
    _redeemer: {
      "title": "Wrapped Redeemer",
      "description":
        "A redeemer wrapped in an extra constructor to make multi-validator detection possible on-chain.",
      "anyOf": [{
        "dataType": "constructor",
        "index": 1,
        "fields": [{ "description": "Any Plutus data." }],
      }],
    },
  },
) as unknown as GovernanceTokenLocker;

export interface GovernanceTokenMinter {
  new (
    config: {
      action: "Sum" | "Multiply";
      powerList: {
        weight: bigint;
        assetConfig: {
          AssetSelection: {
            assetSelection: { PolicyId: { policy: string } } | {
              AssetClass: { policy: string; asset: string };
            } | {
              FilterConfig: {
                policy: string;
                filter: { Included: [string] } | { Excluded: [string] };
              };
            };
          };
        } | {
          QuadraticConfig: {
            policy: string;
            asset: { PolicyId: { policy: string } } | {
              AssetClass: { policy: string; asset: string };
            } | {
              FilterConfig: {
                policy: string;
                filter: { Included: [string] } | { Excluded: [string] };
              };
            }[];
          };
        };
      }[];
    },
  ): Validator;
  redeemer: "Lock" | "Unlock";
}

export const GovernanceTokenMinter = Object.assign(
  function (
    config: {
      action: "Sum" | "Multiply";
      powerList: {
        weight: bigint;
        assetConfig: {
          AssetSelection: {
            assetSelection: { PolicyId: { policy: string } } | {
              AssetClass: { policy: string; asset: string };
            } | {
              FilterConfig: {
                policy: string;
                filter: { Included: [string] } | { Excluded: [string] };
              };
            };
          };
        } | {
          QuadraticConfig: {
            policy: string;
            asset: { PolicyId: { policy: string } } | {
              AssetClass: { policy: string; asset: string };
            } | {
              FilterConfig: {
                policy: string;
                filter: { Included: [string] } | { Excluded: [string] };
              };
            }[];
          };
        };
      }[];
    },
  ) {
    return {
      type: "PlutusV2",
      script: applyParamsToScript(
        "590ab5010000323232323232322225323232333007300130083754008264a66601064646464646464646464646464a66602a601e602c6ea80304c8c8c8c94ccc064c04cc068dd500b899299980d180a180d9baa0011323232533301d323300100101322533302200114a2264a66604066604066ebcc010c088dd5180218111baa300530223754604a00466e95200233024375201697ae04a09444cc00c00c004528181280089919299981118128010991919299981119b8f375c600c60486ea8008dca1bb33006302437540102a66604466e1cdd6980398121baa00200315333022301d33300a3756600e60486ea8010034dd7180318121baa00213232325333028302b00213253330263004375c604e004266ebcdd3192999813981118141baa00114bd6f7b63009bab302c302937540026601e602002a0226e980045281bab30270011630290013233232253330273370e9002240002004264646600200200844a66605a00226605c66ec0dd480a9ba60034bd6f7b630099191919299981718051980580c80109981919bb037520326e9801c01454ccc0b8c0300084c94ccc0bcc0a4c0c0dd500089981999bb03752034606860626ea80040104010c94ccc0bd4ccc0c80045288a5014c0103d87a80001302b33033374c00297ae03233001001002225333033001133034337606ea40293010102004bd6f7b630099191919299981a18081980880700109981c19bb0375201c981010200005153330343371e01c004264a66606a605e606c6ea80044cc0e4cdd81ba900f303a30373754002008200864a66606a605e002298103d87a80001303133039375000297ae033700002900209981c19bb037520046ea0004cc01801800cdd6981a8019bae303300230370023035001133032337606ea4008dd3000998030030019bab302f003375c605a0046062004605e0026464004646600200200444a66605a00229309929998170008a4c26464a66605a604e605c6ea8cc028dd7181718190021bae302e00213300500533031002001163032002303000130300013302b337606ea400530010102004bd6f7b6302999812980f8030a5eb7bdb1804c8c8cc0040052f5bded8c044a66605600226605866ec0dd48099ba60034bd6f7b630099191919299981618041980480b80109981819bb0375202e6e9801c01454ccc0b0c0280084cc0c0cdd81ba9017374c00e00626606066ec0dd48011ba6001330060060033756605a0066eb8c0ac008c0bc008c0b4004c8cc0040052f5bded8c044a66605400226605666ec130010d4c766f74696e675f706f77657200375001097adef6c60132323232533302b30073300848810c766f74696e675f706f7765720000213302f3376098010d4c766f74696e675f706f77657200375001800a2a66605666e3d2210c766f74696e675f706f7765720000213302f3376098010d4c766f74696e675f706f77657200375001800626605e66ec0dd48011ba800133006006003375a60580066eb8c0a8008c0b8008c0b0004dd7a60103d8798000375c6010604c6ea8010894ccc094cdc80010008a6103d8798000153330253371e0040022980103d87a800014c103d87b8000371e01a2c2c2ca666042603660446ea80044c8c8c8c94ccc0a0c0ac00852616375a605200260520046eb8c09c004c08cdd50008b19299981099b8748010c088dd50008981318119baa00116302530263026302237540046464a666042603660446ea8c014c08cdd501009998009bac30063023375404090001119b8033300400237566010604a6ea80140580044ccc004dd6180318119baa0204800088cdc11998020011bab30083025375400a02c002444646600200200844a6660500022008266006605400266004004605600244464a666046603a60486ea80044c8c94ccc094c07c0044c92002375c6054604e6ea800854ccc094c0800044c8c8c92004375c6058605a0046eb8c0ac004c09cdd500109919192400c6058605a0046eb8c0ac004c09cdd500118129baa001302830253754002264646490041bac302a302b002375c6052002604a6ea8004c01cc090dd50018b181180099198008008079129998110008a5eb804c8c94ccc084cdd7980298119baa30053023375400466e95200233025375201897ae013302500233004004001133004004001302600230240011623022001230213022001301f301c37540022c66646002002444a66603e0042980103d87a800013232533301e30180031301a330220024bd70099980280280099b8000348004c08c00cc0840080392000133710666002600601000891010c766f74696e675f706f7765720048000888c94ccc070c05cc074dd50008a400026eb4c084c078dd500099299980e180b980e9baa00114c103d87a80001323300100137566044603e6ea8008894ccc084004530103d87a8000132323253330213371e00e6eb8c08800c4c074cc094dd4000a5eb804cc014014008dd69811001181280118118009980200180111191980080080191299980f0008a60103d87a80001323232533301e3371e00c6eb8c07c00c4c068cc088dd3000a5eb804cc014014008dd5980f801181100118100009191980080080111299980e0008a5eb7bdb1804c8c8c8c94ccc074cdc7a45000021003133021337606ea4008dd3000998030030019bab301e003375c60380046040004603c0026eb8c068c05cdd50060a5037586032603460340046eacc060004c060c060008dd5980b000980b180b0011bac301400130140023758602400260240046eb0c040004c030dd518078011807180780098051baa00514984d958c94ccc020c00800454ccc02cc028dd50030a4c2c2a66601060060022a66601660146ea801852616163008375400a266444a666014646464a66601a6010601c6ea80044c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c94ccc080c08c0084c8c8c8c94ccc090c09c0084cdc4192999811180e98119baa0011480004dd6981398121baa001325333022301d302337540022980103d87a80001323300100137566050604a6ea8008894ccc09c004530103d87a8000132323253330273371e9110c766f74696e675f706f77657200375c605000626046660566ea00052f5c026600a00a0046eb4c0a0008c0ac008c0a4004c8cc004004c8cc004004038894ccc09c00452f5bded8c0264646464a66605066e3d22100002100313302c337606ea4008dd3000998030030019bab3029003375c604e0046056004605200244a66604c002298103d87a8000132323253330263371e0106eb8c09c00c4c088cc0a8dd3000a5eb804cc014014008dd5981380118150011814000a40002c604a0026600a020466ebcc01cc088dd5180398111baa300330223754002600e60446ea8c01cc088dd5180198111baa00432533301f301a3020375400226eb8c090c084dd50008b180298101baa300530203754600260406ea80088c08cc09000458c084004cc0040308cdd79801980f1baa00100f22323300100100322533302100114bd70099192999810180280109981200119802002000899802002000981280118118009180f8009bac301d301e301e00237566038002603860380046eacc068004c068c068008dd6180c000980c0011bac301600130160023758602800260206ea800cc048c03cdd50008b18089809001180800098061baa00114984d9594ccc01cc004c020dd5002899191919299980718088010a4c2c6eb4c03c004c03c008dd7180680098049baa00516300c300937540086e1d2000370e90011ba5480015cd2ab9d5573caae7d5d02ba157441",
        [config],
        {
          "dataType": "list",
          "items": [{
            "title": "ConfigParameter",
            "description":
              "This file contains a validator which can be used to lock NFT(s) as well as FT(s) as defined by the parameters.\n By locking these tokens, the user is able to mint governance tokens which are used to vote on proposals.\n At any time, the user may unlock their tokens and receive their original tokens back.\n None of the contract relies on stake credentials, so the user stake credential can be used if desirable.",
            "anyOf": [{
              "title": "ConfigParameter",
              "dataType": "constructor",
              "index": 0,
              "fields": [{
                "title": "action",
                "anyOf": [{
                  "title": "Sum",
                  "dataType": "constructor",
                  "index": 0,
                  "fields": [],
                }, {
                  "title": "Multiply",
                  "dataType": "constructor",
                  "index": 1,
                  "fields": [],
                }],
              }, {
                "dataType": "list",
                "items": {
                  "title": "PowerConfig",
                  "anyOf": [{
                    "title": "PowerConfig",
                    "dataType": "constructor",
                    "index": 0,
                    "fields": [{ "dataType": "integer", "title": "weight" }, {
                      "title": "assetConfig",
                      "anyOf": [{
                        "title": "AssetSelection",
                        "dataType": "constructor",
                        "index": 0,
                        "fields": [{
                          "title": "assetSelection",
                          "anyOf": [{
                            "title": "PolicyId",
                            "dataType": "constructor",
                            "index": 0,
                            "fields": [{
                              "dataType": "bytes",
                              "title": "policy",
                            }],
                          }, {
                            "title": "AssetClass",
                            "dataType": "constructor",
                            "index": 1,
                            "fields": [{
                              "dataType": "bytes",
                              "title": "policy",
                            }, { "dataType": "bytes", "title": "asset" }],
                          }, {
                            "title": "FilterConfig",
                            "dataType": "constructor",
                            "index": 2,
                            "fields": [{
                              "dataType": "bytes",
                              "title": "policy",
                            }, {
                              "title": "filter",
                              "anyOf": [{
                                "title": "Included",
                                "dataType": "constructor",
                                "index": 0,
                                "fields": [{ "dataType": "bytes" }],
                              }, {
                                "title": "Excluded",
                                "dataType": "constructor",
                                "index": 1,
                                "fields": [{ "dataType": "bytes" }],
                              }],
                            }],
                          }],
                        }],
                      }, {
                        "title": "QuadraticConfig",
                        "dataType": "constructor",
                        "index": 1,
                        "fields": [{ "dataType": "bytes", "title": "policy" }, {
                          "dataType": "list",
                          "items": {
                            "title": "AssetSelection",
                            "anyOf": [{
                              "title": "PolicyId",
                              "dataType": "constructor",
                              "index": 0,
                              "fields": [{
                                "dataType": "bytes",
                                "title": "policy",
                              }],
                            }, {
                              "title": "AssetClass",
                              "dataType": "constructor",
                              "index": 1,
                              "fields": [{
                                "dataType": "bytes",
                                "title": "policy",
                              }, { "dataType": "bytes", "title": "asset" }],
                            }, {
                              "title": "FilterConfig",
                              "dataType": "constructor",
                              "index": 2,
                              "fields": [{
                                "dataType": "bytes",
                                "title": "policy",
                              }, {
                                "title": "filter",
                                "anyOf": [{
                                  "title": "Included",
                                  "dataType": "constructor",
                                  "index": 0,
                                  "fields": [{ "dataType": "bytes" }],
                                }, {
                                  "title": "Excluded",
                                  "dataType": "constructor",
                                  "index": 1,
                                  "fields": [{ "dataType": "bytes" }],
                                }],
                              }],
                            }],
                          },
                          "title": "asset",
                        }],
                      }],
                    }],
                  }],
                },
                "title": "powerList",
              }],
            }],
          }],
        } as any,
      ),
    };
  },
  {
    redeemer: {
      "title": "Redeemer",
      "anyOf": [{
        "title": "Lock",
        "dataType": "constructor",
        "index": 0,
        "fields": [],
      }, {
        "title": "Unlock",
        "dataType": "constructor",
        "index": 1,
        "fields": [],
      }],
    },
  },
) as unknown as GovernanceTokenMinter;
