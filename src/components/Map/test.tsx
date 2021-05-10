import { render, screen } from '@testing-library/react'
import Map from '.'
import { decode } from '@mapbox/polyline'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)
    //screen.logTestingPlaygroundURL() // Exibe uma URL com o component renderizado; Permite clica em partes do componente e exibe um trecho de código para realizar o teste se esta parte foi renderizada.
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    )
  })
  it('should render with the marker in correct place.', () => {
    const places = [
      {
        id: '1',
        name: 'Maceió',
        slug: 'maceio',
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      {
        id: '2',
        name: 'Rio de Janeiro',
        slug: 'rio-de-janeiro',
        location: {
          latitude: 0,
          longitude: 0
        }
      }
    ]
    render(<Map places={[...places]} />)
    expect(screen.getByTitle(/maceió/i)).toBeInTheDocument()
    expect(screen.getByTitle(/rio de janeiro/i)).toBeInTheDocument()
  })

  it('should render polyline in map.', () => {
    const geometry =
      'vp|y@f}|xE?c@jABdA?`A?jC@pDAlD?`C?~B?PG?gBAiC@sCC}GAmEAaB|B@rB@hABd@@h@DjCJKhAC^IjAKMAE?I?I@K?U?GAGCEIEKAMEECACAC?S?G?F?R@B@BDBLDJ@HDBD@F?F?TAJ?H?H@DJLI|AGxBCtCHhGNhBTlAT`A|BvJwBj@}Bl@jAlFt@_@x@a@xBaAf@tAVj@PZhB`Cf@r@|GlHlClCvDpDcBhB}A~AsArAqApAsAtAuAtAqApAsAtAeCdAgAX@jA_CTaCXkAP@KAJwA??i@kB@EjEsB?qBCKpKC|AApAmBWqAOM@K@OBMDSPMZAP?^?F@LFZ|CzCnCfCtBlBp@n@p@n@dAlA~@nATPJJDBbB|B|@rApB|CbCxDl@`A~GvKTXv@vAf@bAl@dAd@|@hBvDx@`B_DbBuE`CmE~BWJyAp@C@}@\\MFwAl@]LUJmFzB^nAXhAZzA`AlEbAtEd@bCx@~D@BBH@Dd@xCZ|Ah@vCj@tCO`AQz@CFs@bCg@pAO^w@~AwA`DvBfA{@zBz@{BlAoDhD~ApDzAlC`AnC`A|Al@f@CJAtCg@~Ew@h@hCZzBp@jDp@xEZ`CP|AQ}A`HyANCcAeF_@eBwAgHi@kCg@kCi@oCc@cCg@sCc@_C[aBKOCMKu@[gBAIu@yDe@_CCICK[aBo@iDYmC}BHkCPoBLeBJmCPmFTgAqE`CK~BGqAiEWw@q@qB{@eCo@iBM]i@{AGQa@iAEKEKa@y@mAgBAAu@wA{@gBY][c@Sa@mB}COKOEC?CAC?C?WFeEbAI@IAa@Iq@CmEQ}BGyCMUAk@CcAE}ACWA]AcEEg@?aCEuAAu@Be@@aBV]FgAP[Bk@Ho@HyBXyD^kGr@}AV_Ed@M@oFl@cCXmGr@qBX{BX_D\\kDb@cANqBTWD_Eb@eDd@iJbAE?aBRc@DwDb@iI|@wBVkLxAQDsCZgD^kC\\mAPgBPeCVoCTuDRoBLgKj@qNz@Q@wCLgCN}@Di@BwCTmHb@iETwCLsAH}EXS@[@sBLeAFcBL}ANcBV[Jg@Li@RSHu@Vc@Re@T_Aj@YTe@\\k@d@e@b@eArAq@dA]l@Yr@KTO\\a@nAQl@q@~Bo@xBy@xCc@|AUh@Sf@QTSPc@b@]TkAn@eB`AwAp@sAt@}@f@wBdAsBjAy@^aCrAwAp@qBv@{Af@oAf@iAh@s@^o@d@WVMLONWRST]\\k@p@OZa@p@_@r@_AhBaAlBy@fBkA|Bw@bBaC`FoA~BO\\Yn@o@tAq@tAw@`B_@l@m@dAQVY\\e@b@iAx@gFnDmCdB{AdAgBjAkAx@iDxBaBlAkBhAaAp@iBpAkAr@{BxAaAv@wB|AgGfEmBrAkBnAqBnAqDkFmDqFo@_A}@oAyBgDy@mAcA{AaAuA{@oAwBiDU]]i@CCMSw@kAyBeD}BgD]T\\U|BfDxBdDv@jALRBB\\h@T\\vBhDz@nA`AtAbAzAx@lAxBfD|@nAn@~@lDpFpDjFmBtAqBrAa@Xq@d@]TuBtAiBfASNuAbAqBtAiBrAwBvAyBvAqAz@gAr@WJ[JIZSNgBlAwD~BgBz@_Bj@a@?UHqAf@cBr@]NaAb@qCdAe@P[FWB[@SGUCSAUBSDSHOLMNKPGRCTAR@TJ\\PZVTZL\\D^A^IXQTWDKd@Pd@]t@]dAc@DAtAHrBP|BNnAJlBN|AL[jDK`BOtBGp@W|CV}CFq@kAIo@GoAMwAKuBSkE]{Ec@BWBYB]Ko@J[J]Ri@TWDKFOF_@A_@G]Q[UUQKSGUCKKIGIIKMS_@Sq@uAeDq@_BKUIOQEKEGIsCiHoA}CmB{EEGi@uAWo@MWqA{CcA_Ca@_AuAuDKWc@eAi@uAUm@i@wAy@mB_AeCMDg@NkAf@gGhCwAl@iAh@aDkIt@[u@ZmHpCAGECG?G@GDmBv@i@uAk@sAi@sAk@uAsAaDi@sAk@uAg@oAm@wAi@oAi@uAi@uAi@qAo@_BGKo@}Aa@}@i@uAq@aB[y@e@eAEKxAk@N\\O]yAj@[y@e@gAk@sAa@cAM[Oc@Uk@]}@Yq@_@y@cAmCg@mAIOCGtAk@@ArAi@vAi@rAk@pAg@DH`@~@LXlD|IZO`Ac@PIlAg@FAlAg@FE`A_@HCBAxF_C`@bAJ\\FBF@D?HAFCBAHAD?B@J??C?E@o@DaAPoBZkBp@{Bn@{ArC_EFGh@k@jA{@l@c@bAk@lCiA~@[f@OlC{@RIjFaB~Ai@NEvAc@z@W`@Mb@OVKf@QPODGBG?GAEEIo@Uu@Wa@Og@Sa@Qc@UUSy@}@QQMOeAgAoAwA}@cAsA{Aa@c@uAwAMOkAqAeAkA|@cAlBiBzAwArAsATU`D}CfAcAgAbAaD|CUTsArA{AvAmBhB}@bA_BeBSUqC}CoFaGMMMOqAwAyB_CqHyHKKGIaAcAo@o@s@s@kAsA{AwAYWKKKKY[m@o@QSiFuFSUsC{CkEkErDsDBEj@k@`D}CQQaAcA{A}A|@}@z@{@bAcA|@_AmCoClCnC}@~@cAbA{@z@}@|@zA|A`AbAPPfAfApArAhErEJPXOn@KjA?pGBX?bB@|A@`@A`@C^OXQPSXWb@c@Z[d@e@~@_AbA_A~@_A~@}@`AaA|@aAz@}@^]^]fA{@fAq@ZSn@a@jAu@jAu@dAq@fAq@dAlBJHN@VAv@[FCz@]RIjDsAxAm@`A[VKx@]ZMd@Qh@UPG~@]FCVK^Qx@_@z@c@FEl@a@`@YTOz@i@JIfA_A\\_@PUNSXo@J[L[XeAJa@Lk@v@_IDk@ZcEDe@ViDFs@Dq@Fo@DYD[JQV]^c@r@w@HK^g@Za@h@i@xAmB`@e@^c@j@}@p@}@bAyAx@cA|@sAZs@V}@Fi@Di@L{@H{@TkBRyA`@uDNWTe@LQPSLIHKHMBO@OAQEOGMKICS?Q@O@OD]NeARsA^_CJe@J]L]^y@Vc@Zc@X[f@e@VQt@g@t@]~DaBhCgAfBs@h@YXSVYDGZ]RY^q@Nk@H_@Ns@Hk@F_@B]B]@_@?]?qAAg@CQ?GI[M_@Sg@a@cAO]Ua@[g@Yc@MYG]]oBGe@E_@Ag@T}ARkANo@Nk@Re@T[Za@Xa@r@}@PU\\WZW\\OdD}@p@O^KVMRIl@e@fC}B~BsBbBsAVSPQpA_BPWTWRQb@SbBg@xAe@p@Q~D{ATKZQh@]tBmBl@e@j@g@`@[XSv@c@\\MH?J?PBr@J^FPF^LVJJBF?`A@ZAXCJA|Ao@n@SzB}@p@[dMyCnAM\\I\\Kl@[n@g@RYZg@Pi@Hq@Uc@IWGk@C]Aa@Dw@Jw@Pm@Zy@Zo@h@gAt@{Ah@eAMUKQQSi@c@m@k@o@q@DIb@q@c@p@EHn@p@l@j@h@b@v@oAT[PSPOHGHE@C@C?GESCQ?O@OBM`@c@PKRC^CZCNAd@IF?x@qAd@w@bAwA|DhDnB|AnCfBVh@LPJJNJPFXHt@LbB^v@\\bLrFbA^xCt@ZLr@Z`Af@fGfFzDbDp@`AdAnBtAvApE`DbEtDpBdB`@XXN\\R\\Pt@Z^N^LhA^n@Vn@\\h@ZTNv@p@\\X^^j@l@|@z@XTlJnFb@R~A|@hDjBv@`@l@`@`@ZfA|@|D|CfBnAn@^nCdAn@TFBr@Zb@PbAd@RBHB~ChAfCbAl@X`Ad@LHj@Z`@TnAd@JFl@l@TRHJLHXLt@Xb@Nx@Xd@NVFLDp@PvFlC|Av@d@Tx@b@z@^ZLjAh@dD~AfBz@lDtBHFNFLHJP^TLHl@^j@Z\\NVJXJf@ZB@\\RPHVPl@Z@B`AA\\AhDCD@DBF@D?fBEtCGdACVEb@KXMd@QLCPAlCBzCAhBAdCDbCDfCDP?dBBL?R@bB?R?NA@oADcC?{BCQ@kA?y@D[Bm@@K@Q@E@A@A@?RDJ@`@HVDXFdC`@TDjBZJBJ@l@Jx@L^F\\B\\@`@AH?RCNCtA_@v@UvC{@tCy@ZK?h@EjJ?T?nA?xA?vA?|AcJEAm@sECrEB?o@dJD?|A?vA?xA@zA?~A?lHAfLwA?uA?qAAiAA@f@iBAhB@@fC@bCD~B@pAz@?tAAA_A@}DrA?tA@XCpD@rA@x@??JtAAnCB@{F?wFAuE'

    const { container } = render(<Map polyline={decode(geometry)} />)
    const elements = container.getElementsByTagName('path')
    const color = elements.item(0)?.getAttribute('stroke')
    expect(color).toBe('var(--polyline)')
  })
})
