import{a as Ja,r as Qa,c as Gc,b as kc,p as Wc,d as Xc,q as qc,_ as $c}from"./index-BloMEznr.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="185",Yc=0,ja=1,Kc=2,Ir=1,Zc=2,ki=3,Wn=0,Ot=1,En=2,Tn=0,bi=1,eo=2,to=3,no=4,Jc=5,Jn=100,Qc=101,jc=102,el=103,tl=104,nl=200,il=201,rl=202,sl=203,zs=204,Vs=205,al=206,ol=207,cl=208,ll=209,ul=210,dl=211,fl=212,hl=213,pl=214,Hs=0,Gs=1,ks=2,wi=3,Ws=4,Xs=5,qs=6,$s=7,rc=0,ml=1,gl=2,on=0,sc=1,ac=2,oc=3,cc=4,lc=5,uc=6,dc=7,fc=300,ti=301,Ri=302,es=303,ts=304,Kr=306,Ys=1e3,bn=1001,Ks=1002,Tt=1003,_l=1004,cr=1005,Ct=1006,ns=1007,jn=1008,qt=1009,hc=1010,pc=1011,$i=1012,Ua=1013,un=1014,sn=1015,Rn=1016,Ia=1017,Na=1018,Yi=1020,mc=35902,gc=35899,_c=1021,vc=1022,Qt=1023,Cn=1026,ei=1027,xc=1028,Fa=1029,ni=1030,Oa=1031,Ba=1033,Nr=33776,Fr=33777,Or=33778,Br=33779,Zs=35840,Js=35841,Qs=35842,js=35843,ea=36196,ta=37492,na=37496,ia=37488,ra=37489,Hr=37490,sa=37491,aa=37808,oa=37809,ca=37810,la=37811,ua=37812,da=37813,fa=37814,ha=37815,pa=37816,ma=37817,ga=37818,_a=37819,va=37820,xa=37821,Sa=36492,Ma=36494,ya=36495,Ea=36283,ba=36284,Gr=36285,Ta=36286,vl=3200,io=0,xl=1,Gn="",Ft="srgb",kr="srgb-linear",Wr="linear",ot="srgb",ci=7680,ro=519,Sl=512,Ml=513,yl=514,za=515,El=516,bl=517,Va=518,Tl=519,so=35044,ao="300 es",an=2e3,Xr=2001;function Al(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ki(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wl(){const n=Ki("canvas");return n.style.display="block",n}const oo={};function co(...n){const e="THREE."+n.shift();console.log(e,...n)}function Sc(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=Sc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=Sc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ti(...n){const e=n.join(" ");e in oo||(oo[e]=!0,Ge(...n))}function Rl(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Cl={[Hs]:Gs,[ks]:qs,[Ws]:$s,[wi]:Xs,[Gs]:Hs,[qs]:ks,[$s]:Ws,[Xs]:wi};class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],is=Math.PI/180,Aa=180/Math.PI;function Zi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Pl(n,e){return(n%e+e)%e}function rs(n,e,t){return(1-t)*n+t*e}function Ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xa=class Xa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xa.prototype.isVector2=!0;let st=Xa;class Li{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=s[a+0],g=s[a+1],x=s[a+2],M=s[a+3];if(h!==M||l!==u||c!==g||d!==x){let m=l*u+c*g+d*x+h*M;m<0&&(u=-u,g=-g,x=-x,M=-M,m=-m);let f=1-o;if(m<.9995){const w=Math.acos(m),R=Math.sin(w);f=Math.sin(f*w)/R,o=Math.sin(o*w)/R,l=l*f+u*o,c=c*f+g*o,d=d*f+x*o,h=h*f+M*o}else{l=l*f+u*o,c=c*f+g*o,d=d*f+x*o,h=h*f+M*o;const w=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=w,c*=w,d*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],u=s[a+1],g=s[a+2],x=s[a+3];return e[t]=o*x+d*h+l*g-c*u,e[t+1]=l*x+d*u+c*h-o*g,e[t+2]=c*x+d*g+o*u-l*h,e[t+3]=d*x-o*h-l*u-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),u=l(i/2),g=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*g*x,this._y=c*g*h-u*d*x,this._z=c*d*x+u*g*h,this._w=c*d*h-u*g*x;break;case"YXZ":this._x=u*d*h+c*g*x,this._y=c*g*h-u*d*x,this._z=c*d*x-u*g*h,this._w=c*d*h+u*g*x;break;case"ZXY":this._x=u*d*h-c*g*x,this._y=c*g*h+u*d*x,this._z=c*d*x+u*g*h,this._w=c*d*h-u*g*x;break;case"ZYX":this._x=u*d*h-c*g*x,this._y=c*g*h+u*d*x,this._z=c*d*x-u*g*h,this._w=c*d*h+u*g*x;break;case"YZX":this._x=u*d*h+c*g*x,this._y=c*g*h+u*d*x,this._z=c*d*x-u*g*h,this._w=c*d*h-u*g*x;break;case"XZY":this._x=u*d*h-c*g*x,this._y=c*g*h-u*d*x,this._z=c*d*x+u*g*h,this._w=c*d*h+u*g*x;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=i+o+h;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(d-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qa=class qa{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ss.copy(this).projectOnVector(e),this.sub(ss)}reflect(e){return this.sub(ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qa.prototype.isVector3=!0;let k=qa;const ss=new k,lo=new Li,$a=class $a{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],g=i[5],x=i[8],M=r[0],m=r[3],f=r[6],w=r[1],R=r[4],S=r[7],A=r[2],b=r[5],C=r[8];return s[0]=a*M+o*w+l*A,s[3]=a*m+o*R+l*b,s[6]=a*f+o*S+l*C,s[1]=c*M+d*w+h*A,s[4]=c*m+d*R+h*b,s[7]=c*f+d*S+h*C,s[2]=u*M+g*w+x*A,s[5]=u*m+g*R+x*b,s[8]=u*f+g*S+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,g=c*s-a*l,x=t*h+i*u+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=h*M,e[1]=(r*c-d*i)*M,e[2]=(o*i-r*a)*M,e[3]=u*M,e[4]=(d*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=g*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(as.makeScale(e,t)),this}rotate(e){return Ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(as.makeRotation(-e)),this}translate(e,t){return Ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(as.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$a.prototype.isMatrix3=!0;let Xe=$a;const as=new Xe,uo=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fo=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ll(){const n={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=An(r.r),r.g=An(r.g),r.b=An(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gn?Wr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ti("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ti("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[kr]:{primaries:e,whitePoint:i,transfer:Wr,toXYZ:uo,fromXYZ:fo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:uo,fromXYZ:fo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),n}const Je=Ll();function An(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ai(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let li;class Dl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{li===void 0&&(li=Ki("canvas")),li.width=e.width,li.height=e.height;const r=li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=li}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ki("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=An(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(An(t[i]/255)*255):t[i]=An(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ul=0;class Ha{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(os(r[a].image)):s.push(os(r[a]))}else s=os(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function os(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let Il=0;const cs=new k;class Pt extends ri{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=bn,r=bn,s=Ct,a=jn,o=Qt,l=qt,c=Pt.DEFAULT_ANISOTROPY,d=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=Zi(),this.name="",this.source=new Ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cs).x}get height(){return this.source.getSize(cs).y}get depth(){return this.source.getSize(cs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=fc;Pt.DEFAULT_ANISOTROPY=1;const Ya=class Ya{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],g=l[5],x=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+M)<.1&&Math.abs(x+m)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(g+1)/2,A=(f+1)/2,b=(d+u)/4,C=(h+M)/4,_=(x+m)/4;return R>S&&R>A?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=b/i,s=C/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=_/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=_/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-x)*(m-x)+(h-M)*(h-M)+(u-d)*(u-d));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(h-M)/w,this.z=(u-d)/w,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ya.prototype.isVector4=!0;let gt=Ya;class Nl extends ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Pt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ha(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Nl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mc extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fl extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yr=class Yr{constructor(e,t,i,r,s,a,o,l,c,d,h,u,g,x,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,d,h,u,g,x,M,m)}set(e,t,i,r,s,a,o,l,c,d,h,u,g,x,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=g,f[7]=x,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yr().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ui.setFromMatrixColumn(e,0).length(),s=1/ui.setFromMatrixColumn(e,1).length(),a=1/ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,g=a*h,x=o*d,M=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=g+x*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=x+g*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,g=l*h,x=c*d,M=c*h;t[0]=u+M*o,t[4]=x*o-g,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=g*o-x,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,g=l*h,x=c*d,M=c*h;t[0]=u-M*o,t[4]=-a*h,t[8]=x+g*o,t[1]=g+x*o,t[5]=a*d,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,g=a*h,x=o*d,M=o*h;t[0]=l*d,t[4]=x*c-g,t[8]=u*c+M,t[1]=l*h,t[5]=M*c+u,t[9]=g*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,g=a*c,x=o*l,M=o*c;t[0]=l*d,t[4]=M-u*h,t[8]=x*h+g,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=g*h+x,t[10]=u-M*h}else if(e.order==="XZY"){const u=a*l,g=a*c,x=o*l,M=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+M,t[5]=a*d,t[9]=g*h-x,t[2]=x*h-g,t[6]=o*d,t[10]=M*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ol,e,Bl)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),In.crossVectors(i,Vt),In.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),In.crossVectors(i,Vt)),In.normalize(),lr.crossVectors(Vt,In),r[0]=In.x,r[4]=lr.x,r[8]=Vt.x,r[1]=In.y,r[5]=lr.y,r[9]=Vt.y,r[2]=In.z,r[6]=lr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],g=i[13],x=i[2],M=i[6],m=i[10],f=i[14],w=i[3],R=i[7],S=i[11],A=i[15],b=r[0],C=r[4],_=r[8],E=r[12],D=r[1],L=r[5],F=r[9],J=r[13],j=r[2],H=r[6],$=r[10],X=r[14],ne=r[3],se=r[7],de=r[11],Se=r[15];return s[0]=a*b+o*D+l*j+c*ne,s[4]=a*C+o*L+l*H+c*se,s[8]=a*_+o*F+l*$+c*de,s[12]=a*E+o*J+l*X+c*Se,s[1]=d*b+h*D+u*j+g*ne,s[5]=d*C+h*L+u*H+g*se,s[9]=d*_+h*F+u*$+g*de,s[13]=d*E+h*J+u*X+g*Se,s[2]=x*b+M*D+m*j+f*ne,s[6]=x*C+M*L+m*H+f*se,s[10]=x*_+M*F+m*$+f*de,s[14]=x*E+M*J+m*X+f*Se,s[3]=w*b+R*D+S*j+A*ne,s[7]=w*C+R*L+S*H+A*se,s[11]=w*_+R*F+S*$+A*de,s[15]=w*E+R*J+S*X+A*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],g=e[14],x=e[3],M=e[7],m=e[11],f=e[15],w=l*g-c*u,R=o*g-c*h,S=o*u-l*h,A=a*g-c*d,b=a*u-l*d,C=a*h-o*d;return t*(M*w-m*R+f*S)-i*(x*w-m*A+f*b)+r*(x*R-M*A+f*C)-s*(x*S-M*b+m*C)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-i*(s*d-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],g=e[11],x=e[12],M=e[13],m=e[14],f=e[15],w=t*o-i*a,R=t*l-r*a,S=t*c-s*a,A=i*l-r*o,b=i*c-s*o,C=r*c-s*l,_=d*M-h*x,E=d*m-u*x,D=d*f-g*x,L=h*m-u*M,F=h*f-g*M,J=u*f-g*m,j=w*J-R*F+S*L+A*D-b*E+C*_;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/j;return e[0]=(o*J-l*F+c*L)*H,e[1]=(r*F-i*J-s*L)*H,e[2]=(M*C-m*b+f*A)*H,e[3]=(u*b-h*C-g*A)*H,e[4]=(l*D-a*J-c*E)*H,e[5]=(t*J-r*D+s*E)*H,e[6]=(m*S-x*C-f*R)*H,e[7]=(d*C-u*S+g*R)*H,e[8]=(a*F-o*D+c*_)*H,e[9]=(i*D-t*F-s*_)*H,e[10]=(x*b-M*S+f*w)*H,e[11]=(h*S-d*b-g*w)*H,e[12]=(o*E-a*L-l*_)*H,e[13]=(t*L-i*E+r*_)*H,e[14]=(M*R-x*A-m*w)*H,e[15]=(d*A-h*R+u*w)*H,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,h=o+o,u=s*c,g=s*d,x=s*h,M=a*d,m=a*h,f=o*h,w=l*c,R=l*d,S=l*h,A=i.x,b=i.y,C=i.z;return r[0]=(1-(M+f))*A,r[1]=(g+S)*A,r[2]=(x-R)*A,r[3]=0,r[4]=(g-S)*b,r[5]=(1-(u+f))*b,r[6]=(m+w)*b,r[7]=0,r[8]=(x+R)*C,r[9]=(m-w)*C,r[10]=(1-(u+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ui.set(r[0],r[1],r[2]).length();const o=ui.set(r[4],r[5],r[6]).length(),l=ui.set(r[8],r[9],r[10]).length();s<0&&(a=-a),$t.copy(this);const c=1/a,d=1/o,h=1/l;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=d,$t.elements[5]*=d,$t.elements[6]*=d,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=an,l=!1){const c=this.elements,d=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),g=(i+r)/(i-r);let x,M;if(l)x=s/(a-s),M=a*s/(a-s);else if(o===an)x=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Xr)x=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=an,l=!1){const c=this.elements,d=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),g=-(i+r)/(i-r);let x,M;if(l)x=1/(a-s),M=a/(a-s);else if(o===an)x=-2/(a-s),M=-(a+s)/(a-s);else if(o===Xr)x=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Yr.prototype.isMatrix4=!0;let St=Yr;const ui=new k,$t=new St,Ol=new k(0,0,0),Bl=new k(1,1,1),In=new k,lr=new k,Vt=new k,ho=new St,po=new Li;class ii{constructor(e=0,t=0,i=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ho.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ho,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return po.setFromEuler(this),this.setFromQuaternion(po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zl=0;const mo=new k,di=new Li,gn=new St,ur=new k,Fi=new k,Vl=new k,Hl=new Li,go=new k(1,0,0),_o=new k(0,1,0),vo=new k(0,0,1),xo={type:"added"},Gl={type:"removed"},fi={type:"childadded",child:null},ls={type:"childremoved",child:null};class Gt extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new k,t=new ii,i=new Li,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Xe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(go,e)}rotateY(e){return this.rotateOnAxis(_o,e)}rotateZ(e){return this.rotateOnAxis(vo,e)}translateOnAxis(e,t){return mo.copy(e).applyQuaternion(this.quaternion),this.position.add(mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(go,e)}translateY(e){return this.translateOnAxis(_o,e)}translateZ(e){return this.translateOnAxis(vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ur.copy(e):ur.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Fi,ur,this.up):gn.lookAt(ur,Fi,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(gn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xo),fi.child=e,this.dispatchEvent(fi),fi.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gl),ls.child=e,this.dispatchEvent(ls),ls.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,Vl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,Hl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new k(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wi extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kl={type:"move"};class us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),g=.02,x=.005;c.inputState.pinching&&u>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kl)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function ds(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Pl(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ds(a,s,e+1/3),this.g=ds(a,s,e),this.b=ds(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=Ec[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Je.workingToColorSpace(Rt.copy(this),e),Math.round(Qe(Rt.r*255,0,255))*65536+Math.round(Qe(Rt.g*255,0,255))*256+Math.round(Qe(Rt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Ft){Je.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(dr);const i=rs(Nn.h,dr.h,t),r=rs(Nn.s,dr.s,t),s=rs(Nn.l,dr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new at;at.NAMES=Ec;class Wl extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yt=new k,_n=new k,fs=new k,vn=new k,hi=new k,pi=new k,So=new k,hs=new k,ps=new k,ms=new k,gs=new gt,_s=new gt,vs=new gt;class Jt{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yt.subVectors(r,t),_n.subVectors(i,t),fs.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(_n),l=Yt.dot(fs),c=_n.dot(_n),d=_n.dot(fs),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,g=(c*l-o*d)*u,x=(a*d-o*l)*u;return s.set(1-g-x,x,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return gs.setScalar(0),_s.setScalar(0),vs.setScalar(0),gs.fromBufferAttribute(e,t),_s.fromBufferAttribute(e,i),vs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(gs,s.x),a.addScaledVector(_s,s.y),a.addScaledVector(vs,s.z),a}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),_n.subVectors(e,t),Yt.cross(_n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Yt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;hi.subVectors(r,i),pi.subVectors(s,i),hs.subVectors(e,i);const l=hi.dot(hs),c=pi.dot(hs);if(l<=0&&c<=0)return t.copy(i);ps.subVectors(e,r);const d=hi.dot(ps),h=pi.dot(ps);if(d>=0&&h<=d)return t.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(hi,a);ms.subVectors(e,s);const g=hi.dot(ms),x=pi.dot(ms);if(x>=0&&g<=x)return t.copy(s);const M=g*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(pi,o);const m=d*x-g*h;if(m<=0&&h-d>=0&&g-x>=0)return So.subVectors(s,r),o=(h-d)/(h-d+(g-x)),t.copy(r).addScaledVector(So,o);const f=1/(m+M+u);return a=M*f,o=u*f,t.copy(i).addScaledVector(hi,a).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ji{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(s,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fr.copy(i.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),hr.subVectors(this.max,Oi),mi.subVectors(e.a,Oi),gi.subVectors(e.b,Oi),_i.subVectors(e.c,Oi),Fn.subVectors(gi,mi),On.subVectors(_i,gi),Xn.subVectors(mi,_i);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Xn.z,Xn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Xn.z,0,-Xn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Xn.y,Xn.x,0];return!xs(t,mi,gi,_i,hr)||(t=[1,0,0,0,1,0,0,0,1],!xs(t,mi,gi,_i,hr))?!1:(pr.crossVectors(Fn,On),t=[pr.x,pr.y,pr.z],xs(t,mi,gi,_i,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xn=[new k,new k,new k,new k,new k,new k,new k,new k],Kt=new k,fr=new Ji,mi=new k,gi=new k,_i=new k,Fn=new k,On=new k,Xn=new k,Oi=new k,hr=new k,pr=new k,qn=new k;function xs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){qn.fromArray(n,s);const o=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),d=i.dot(qn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const xt=new k,mr=new st;let Xl=0;class ln extends ri{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xl++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=so,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==so&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class bc extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tc extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wn extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ql=new Ji,Bi=new k,Ss=new k;class Ga{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ql.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bi.subVectors(e,this.center);const t=Bi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Bi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bi.copy(e.center).add(Ss)),this.expandByPoint(Bi.copy(e.center).sub(Ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $l=0;const Wt=new St,Ms=new Gt,vi=new k,Ht=new Ji,zi=new Ji,Et=new k;class Pn extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Al(e)?Tc:bc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return Ms.lookAt(e),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ht.min,zi.min),Ht.expandByPoint(Et),Et.addVectors(Ht.max,zi.max),Ht.expandByPoint(Et)):(Ht.expandByPoint(zi.min),Ht.expandByPoint(zi.max))}Ht.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Et.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(e,c),Et.add(vi)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new k,l[_]=new k;const c=new k,d=new k,h=new k,u=new st,g=new st,x=new st,M=new k,m=new k;function f(_,E,D){c.fromBufferAttribute(i,_),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,D),u.fromBufferAttribute(s,_),g.fromBufferAttribute(s,E),x.fromBufferAttribute(s,D),d.sub(c),h.sub(c),g.sub(u),x.sub(u);const L=1/(g.x*x.y-x.x*g.y);isFinite(L)&&(M.copy(d).multiplyScalar(x.y).addScaledVector(h,-g.y).multiplyScalar(L),m.copy(h).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(L),o[_].add(M),o[E].add(M),o[D].add(M),l[_].add(m),l[E].add(m),l[D].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,E=w.length;_<E;++_){const D=w[_],L=D.start,F=D.count;for(let J=L,j=L+F;J<j;J+=3)f(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const R=new k,S=new k,A=new k,b=new k;function C(_){A.fromBufferAttribute(r,_),b.copy(A);const E=o[_];R.copy(E),R.sub(A.multiplyScalar(A.dot(E))).normalize(),S.crossVectors(b,E);const L=S.dot(l[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,L)}for(let _=0,E=w.length;_<E;++_){const D=w[_],L=D.start,F=D.count;for(let J=L,j=L+F;J<j;J+=3)C(e.getX(J+0)),C(e.getX(J+1)),C(e.getX(J+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,g=i.count;u<g;u++)i.setXYZ(u,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,d=new k,h=new k;if(e)for(let u=0,g=e.count;u<g;u+=3){const x=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,g=t.count;u<g;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let g=0,x=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?g=l[M]*o.data.stride+o.offset:g=l[M]*d;for(let f=0;f<d;f++)u[x++]=c[g++]}return new ln(u,d,h)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],g=e(u,i);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const g=c[h];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,g=h.length;u<g;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Yl=0;class Zr extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=bi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zs,this.blendDst=Vs,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zs&&(i.blendSrc=this.blendSrc),this.blendDst!==Vs&&(i.blendDst=this.blendDst),this.blendEquation!==Jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ro&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new st().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sn=new k,ys=new k,gr=new k,Bn=new k,Es=new k,_r=new k,bs=new k;class Kl{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ys.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(ys);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gr),o=Bn.dot(this.direction),l=-Bn.dot(gr),c=Bn.lengthSq(),d=Math.abs(1-a*a);let h,u,g,x;if(d>0)if(h=a*l-o,u=a*o-l,x=s*d,h>=0)if(u>=-x)if(u<=x){const M=1/d;h*=M,u*=M,g=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*l)+c;else u<=-x?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+u*(u+2*l)+c):u<=x?(h=0,u=Math.min(Math.max(-s,-l),s),g=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ys).addScaledVector(gr,u),g}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const i=Sn.dot(this.direction),r=Sn.dot(Sn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,i,r,s){Es.subVectors(t,e),_r.subVectors(i,e),bs.crossVectors(Es,_r);let a=this.direction.dot(bs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);const l=o*this.direction.dot(_r.crossVectors(Bn,_r));if(l<0)return null;const c=o*this.direction.dot(Es.cross(Bn));if(c<0||l+c>a)return null;const d=-o*Bn.dot(bs);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ka extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mo=new St,$n=new Kl,vr=new Ga,yo=new k,xr=new k,Sr=new k,Mr=new k,Ts=new k,yr=new k,Eo=new k,Er=new k;class dn extends Gt{constructor(e=new Pn,t=new ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){yr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Ts.fromBufferAttribute(h,e),a?yr.addScaledVector(Ts,d):yr.addScaledVector(Ts.sub(t),d))}t.add(yr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(s),$n.copy(e.ray).recast(e.near),!(vr.containsPoint($n.origin)===!1&&($n.intersectSphere(vr,yo)===null||$n.origin.distanceToSquared(yo)>(e.far-e.near)**2))&&(Mo.copy(s).invert(),$n.copy(e.ray).applyMatrix4(Mo),!(i.boundingBox!==null&&$n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){const m=u[x],f=a[m.materialIndex],w=Math.max(m.start,g.start),R=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=w,A=R;S<A;S+=3){const b=o.getX(S),C=o.getX(S+1),_=o.getX(S+2);r=br(this,f,e,i,c,d,h,b,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),M=Math.min(o.count,g.start+g.count);for(let m=x,f=M;m<f;m+=3){const w=o.getX(m),R=o.getX(m+1),S=o.getX(m+2);r=br(this,a,e,i,c,d,h,w,R,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){const m=u[x],f=a[m.materialIndex],w=Math.max(m.start,g.start),R=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=w,A=R;S<A;S+=3){const b=S,C=S+1,_=S+2;r=br(this,f,e,i,c,d,h,b,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let m=x,f=M;m<f;m+=3){const w=m,R=m+1,S=m+2;r=br(this,a,e,i,c,d,h,w,R,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Zl(n,e,t,i,r,s,a,o){let l;if(e.side===Ot?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Wn,o),l===null)return null;Er.copy(o),Er.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:n}}function br(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,xr),n.getVertexPosition(l,Sr),n.getVertexPosition(c,Mr);const d=Zl(n,e,t,i,xr,Sr,Mr,Eo);if(d){const h=new k;Jt.getBarycoord(Eo,xr,Sr,Mr,h),r&&(d.uv=Jt.getInterpolatedAttribute(r,o,l,c,h,new st)),s&&(d.uv1=Jt.getInterpolatedAttribute(s,o,l,c,h,new st)),a&&(d.normal=Jt.getInterpolatedAttribute(a,o,l,c,h,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new k,materialIndex:0};Jt.getNormal(xr,Sr,Mr,u.normal),d.face=u,d.barycoord=h}return d}class Jl extends Pt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Tt,d=Tt,h,u){super(null,a,o,l,c,d,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const As=new k,Ql=new k,jl=new Xe;class Zn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=As.subVectors(i,t).cross(Ql.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(As),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jl.getNormalMatrix(e),r=this.coplanarPoint(As).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new Ga,eu=new st(.5,.5),Tr=new k;class Ac{constructor(e=new Zn,t=new Zn,i=new Zn,r=new Zn,s=new Zn,a=new Zn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=an,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],g=s[7],x=s[8],M=s[9],m=s[10],f=s[11],w=s[12],R=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-a,g-d,f-x,A-w).normalize(),r[1].setComponents(c+a,g+d,f+x,A+w).normalize(),r[2].setComponents(c+o,g+h,f+M,A+R).normalize(),r[3].setComponents(c-o,g-h,f-M,A-R).normalize(),i)r[4].setComponents(l,u,m,S).normalize(),r[5].setComponents(c-l,g-u,f-m,A-S).normalize();else if(r[4].setComponents(c-l,g-u,f-m,A-S).normalize(),t===an)r[5].setComponents(c+l,g+u,f+m,A+S).normalize();else if(t===Xr)r[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){Yn.center.set(0,0,0);const t=eu.distanceTo(e.center);return Yn.radius=.7071067811865476+t,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Tr.x=r.normal.x>0?e.max.x:e.min.x,Tr.y=r.normal.y>0?e.max.y:e.min.y,Tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wc extends Pt{constructor(e=[],t=ti,i,r,s,a,o,l,c,d){super(e,t,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ci extends Pt{constructor(e,t,i=un,r,s,a,o=Tt,l=Tt,c,d=Cn,h=1){if(d!==Cn&&d!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ha(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tu extends Ci{constructor(e,t=un,i=ti,r,s,a=Tt,o=Tt,l,c=Cn){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rc extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qi extends Pn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,g=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(d,3)),this.setAttribute("uv",new wn(h,2));function x(M,m,f,w,R,S,A,b,C,_,E){const D=S/C,L=A/_,F=S/2,J=A/2,j=b/2,H=C+1,$=_+1;let X=0,ne=0;const se=new k;for(let de=0;de<$;de++){const Se=de*L-J;for(let be=0;be<H;be++){const ze=be*D-F;se[M]=ze*w,se[m]=Se*R,se[f]=j,c.push(se.x,se.y,se.z),se[M]=0,se[m]=0,se[f]=b>0?1:-1,d.push(se.x,se.y,se.z),h.push(be/C),h.push(1-de/_),X+=1}}for(let de=0;de<_;de++)for(let Se=0;Se<C;Se++){const be=u+Se+H*de,ze=u+Se+H*(de+1),Ne=u+(Se+1)+H*(de+1),qe=u+(Se+1)+H*de;l.push(be,ze,qe),l.push(ze,Ne,qe),ne+=6}o.addGroup(g,ne,E),g+=ne,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ji extends Pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=t/l,g=[],x=[],M=[],m=[];for(let f=0;f<d;f++){const w=f*u-a;for(let R=0;R<c;R++){const S=R*h-s;x.push(S,-w,0),M.push(0,0,1),m.push(R/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const R=w+c*f,S=w+c*(f+1),A=w+1+c*(f+1),b=w+1+c*f;g.push(R,S,b),g.push(S,A,b)}this.setIndex(g),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(M,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.widthSegments,e.heightSegments)}}function Pi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(bo(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(bo(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=Pi(n[t]);for(const r in i)e[r]=i[r]}return e}function bo(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function nu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const iu={clone:Pi,merge:Ut};var ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ru,this.fragmentShader=su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=nu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new at().setHex(r.value);break;case"v2":this.uniforms[i].value=new st().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new St().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class au extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ou extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cu extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ws={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(To(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!To(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function To(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class lu{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const g=c[h],x=c[h+1];if(g.global&&(g.lastIndex=0),g.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const uu=new lu;class Wa{constructor(e){this.manager=e!==void 0?e:uu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi=new WeakMap;class du extends Wa{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ws.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=xi.get(a);h===void 0&&(h=[],xi.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=Ki("img");function l(){d(),t&&t(this);const h=xi.get(this)||[];for(let u=0;u<h.length;u++){const g=h[u];g.onLoad&&g.onLoad(this)}xi.delete(this),s.manager.itemEnd(e)}function c(h){d(),r&&r(h),ws.remove(`image:${e}`);const u=xi.get(this)||[];for(let g=0;g<u.length;g++){const x=u[g];x.onError&&x.onError(h)}xi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ws.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class fu extends Wa{constructor(e){super(e)}load(e,t,i,r){const s=new Pt,a=new du(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}const Ar=new k,wr=new Li,jt=new k;class Pc extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ar,wr,jt),jt.x===1&&jt.y===1&&jt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,wr,jt.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ar,wr,jt),jt.x===1&&jt.y===1&&jt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,wr,jt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zn=new k,Ao=new st,wo=new st;class Xt extends Pc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Ao,wo),t.subVectors(wo,Ao)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(is*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Lc extends Pc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=-90,Mi=1;class hu extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(Si,Mi,e,t);r.layers=this.layers,this.add(r);const s=new Xt(Si,Mi,e,t);s.layers=this.layers,this.add(s);const a=new Xt(Si,Mi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Si,Mi,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Si,Mi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Si,Mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===an)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class pu extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ka=class Ka{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Ka.prototype.isMatrix2=!0;let Ro=Ka;function Co(n,e,t,i){const r=mu(i);switch(t){case _c:return n*e;case xc:return n*e/r.components*r.byteLength;case Fa:return n*e/r.components*r.byteLength;case ni:return n*e*2/r.components*r.byteLength;case Oa:return n*e*2/r.components*r.byteLength;case vc:return n*e*3/r.components*r.byteLength;case Qt:return n*e*4/r.components*r.byteLength;case Ba:return n*e*4/r.components*r.byteLength;case Nr:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Js:case js:return Math.max(n,16)*Math.max(e,8)/4;case Zs:case Qs:return Math.max(n,8)*Math.max(e,8)/2;case ea:case ta:case ia:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case na:case Hr:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ca:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case la:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ua:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case da:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case va:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sa:case Ma:case ya:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ea:case ba:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gr:case Ta:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mu(n){switch(n){case qt:case hc:return{byteLength:1,components:1};case $i:case pc:case Rn:return{byteLength:2,components:1};case Ia:case Na:return{byteLength:2,components:4};case un:case Ua:case sn:return{byteLength:4,components:1};case mc:case gc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function gu(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,d);else{h.sort((g,x)=>g.start-x.start);let u=0;for(let g=1;g<h.length;g++){const x=h[u],M=h[g];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,h[u]=M)}h.length=u+1;for(let g=0,x=h.length;g<x;g++){const M=h[g];n.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var _u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ou=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$u="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,md=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,of=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ff=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Af=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Of=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:_u,alphahash_pars_fragment:vu,alphamap_fragment:xu,alphamap_pars_fragment:Su,alphatest_fragment:Mu,alphatest_pars_fragment:yu,aomap_fragment:Eu,aomap_pars_fragment:bu,batching_pars_vertex:Tu,batching_vertex:Au,begin_vertex:wu,beginnormal_vertex:Ru,bsdfs:Cu,iridescence_fragment:Pu,bumpmap_pars_fragment:Lu,clipping_planes_fragment:Du,clipping_planes_pars_fragment:Uu,clipping_planes_pars_vertex:Iu,clipping_planes_vertex:Nu,color_fragment:Fu,color_pars_fragment:Ou,color_pars_vertex:Bu,color_vertex:zu,common:Vu,cube_uv_reflection_fragment:Hu,defaultnormal_vertex:Gu,displacementmap_pars_vertex:ku,displacementmap_vertex:Wu,emissivemap_fragment:Xu,emissivemap_pars_fragment:qu,colorspace_fragment:$u,colorspace_pars_fragment:Yu,envmap_fragment:Ku,envmap_common_pars_fragment:Zu,envmap_pars_fragment:Ju,envmap_pars_vertex:Qu,envmap_physical_pars_fragment:ld,envmap_vertex:ju,fog_vertex:ed,fog_pars_vertex:td,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:rd,lightmap_pars_fragment:sd,lights_lambert_fragment:ad,lights_lambert_pars_fragment:od,lights_pars_begin:cd,lights_toon_fragment:ud,lights_toon_pars_fragment:dd,lights_phong_fragment:fd,lights_phong_pars_fragment:hd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:_d,lights_fragment_end:vd,lightprobes_pars_fragment:xd,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:Md,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Ed,map_fragment:bd,map_pars_fragment:Td,map_particle_fragment:Ad,map_particle_pars_fragment:wd,metalnessmap_fragment:Rd,metalnessmap_pars_fragment:Cd,morphinstance_vertex:Pd,morphcolor_vertex:Ld,morphnormal_vertex:Dd,morphtarget_pars_vertex:Ud,morphtarget_vertex:Id,normal_fragment_begin:Nd,normal_fragment_maps:Fd,normal_pars_fragment:Od,normal_pars_vertex:Bd,normal_vertex:zd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:Wd,opaque_fragment:Xd,packing:qd,premultiplied_alpha_fragment:$d,project_vertex:Yd,dithering_fragment:Kd,dithering_pars_fragment:Zd,roughnessmap_fragment:Jd,roughnessmap_pars_fragment:Qd,shadowmap_pars_fragment:jd,shadowmap_pars_vertex:ef,shadowmap_vertex:tf,shadowmask_pars_fragment:nf,skinbase_vertex:rf,skinning_pars_vertex:sf,skinning_vertex:af,skinnormal_vertex:of,specularmap_fragment:cf,specularmap_pars_fragment:lf,tonemapping_fragment:uf,tonemapping_pars_fragment:df,transmission_fragment:ff,transmission_pars_fragment:hf,uv_pars_fragment:pf,uv_pars_vertex:mf,uv_vertex:gf,worldpos_vertex:_f,background_vert:vf,background_frag:xf,backgroundCube_vert:Sf,backgroundCube_frag:Mf,cube_vert:yf,cube_frag:Ef,depth_vert:bf,depth_frag:Tf,distance_vert:Af,distance_frag:wf,equirect_vert:Rf,equirect_frag:Cf,linedashed_vert:Pf,linedashed_frag:Lf,meshbasic_vert:Df,meshbasic_frag:Uf,meshlambert_vert:If,meshlambert_frag:Nf,meshmatcap_vert:Ff,meshmatcap_frag:Of,meshnormal_vert:Bf,meshnormal_frag:zf,meshphong_vert:Vf,meshphong_frag:Hf,meshphysical_vert:Gf,meshphysical_frag:kf,meshtoon_vert:Wf,meshtoon_frag:Xf,points_vert:qf,points_frag:$f,shadow_vert:Yf,shadow_frag:Kf,sprite_vert:Zf,sprite_frag:Jf},ye={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},rn={basic:{uniforms:Ut([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ut([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ut([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ut([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ut([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new at(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ut([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ut([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ut([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ut([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ut([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ut([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Ut([ye.common,ye.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Ut([ye.lights,ye.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};rn.physical={uniforms:Ut([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Rr={r:0,b:0,g:0},Qf=new St,Uc=new Xe;Uc.set(-1,0,0,0,1,0,0,0,1);function jf(n,e,t,i,r,s){const a=new at(0);let o=r===!0?0:1,l,c,d=null,h=0,u=null;function g(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){const S=w.backgroundBlurriness>0;R=e.get(R,S)}return R}function x(w){let R=!1;const S=g(w);S===null?m(a,o):S&&S.isColor&&(m(S,1),R=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(w,R){const S=g(R);S&&(S.isCubeTexture||S.mapping===Kr)?(c===void 0&&(c=new dn(new Qi(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Pi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qf.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Uc),c.material.toneMapped=Je.getTransfer(S.colorSpace)!==ot,(d!==S||h!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,u=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new dn(new ji(2,2),new fn({name:"BackgroundMaterial",uniforms:Pi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Je.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,u=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,R){w.getRGB(Rr,Cc(n)),t.buffers.color.setClear(Rr.r,Rr.g,Rr.b,R,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:x,addToRenderList:M,dispose:f}}function eh(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(L,F,J,j,H){let $=!1;const X=h(L,j,J,F);s!==X&&(s=X,c(s.object)),$=g(L,j,J,H),$&&x(L,j,J,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(L,F,J,j),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function d(L){return n.deleteVertexArray(L)}function h(L,F,J,j){const H=j.wireframe===!0;let $=i[F.id];$===void 0&&($={},i[F.id]=$);const X=L.isInstancedMesh===!0?L.id:0;let ne=$[X];ne===void 0&&(ne={},$[X]=ne);let se=ne[J.id];se===void 0&&(se={},ne[J.id]=se);let de=se[H];return de===void 0&&(de=u(l()),se[H]=de),de}function u(L){const F=[],J=[],j=[];for(let H=0;H<t;H++)F[H]=0,J[H]=0,j[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:J,attributeDivisors:j,object:L,attributes:{},index:null}}function g(L,F,J,j){const H=s.attributes,$=F.attributes;let X=0;const ne=J.getAttributes();for(const se in ne)if(ne[se].location>=0){const Se=H[se];let be=$[se];if(be===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),Se===void 0||Se.attribute!==be||be&&Se.data!==be.data)return!0;X++}return s.attributesNum!==X||s.index!==j}function x(L,F,J,j){const H={},$=F.attributes;let X=0;const ne=J.getAttributes();for(const se in ne)if(ne[se].location>=0){let Se=$[se];Se===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor));const be={};be.attribute=Se,Se&&Se.data&&(be.data=Se.data),H[se]=be,X++}s.attributes=H,s.attributesNum=X,s.index=j}function M(){const L=s.newAttributes;for(let F=0,J=L.length;F<J;F++)L[F]=0}function m(L){f(L,0)}function f(L,F){const J=s.newAttributes,j=s.enabledAttributes,H=s.attributeDivisors;J[L]=1,j[L]===0&&(n.enableVertexAttribArray(L),j[L]=1),H[L]!==F&&(n.vertexAttribDivisor(L,F),H[L]=F)}function w(){const L=s.newAttributes,F=s.enabledAttributes;for(let J=0,j=F.length;J<j;J++)F[J]!==L[J]&&(n.disableVertexAttribArray(J),F[J]=0)}function R(L,F,J,j,H,$,X){X===!0?n.vertexAttribIPointer(L,F,J,H,$):n.vertexAttribPointer(L,F,J,j,H,$)}function S(L,F,J,j){M();const H=j.attributes,$=J.getAttributes(),X=F.defaultAttributeValues;for(const ne in $){const se=$[ne];if(se.location>=0){let de=H[ne];if(de===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),de!==void 0){const Se=de.normalized,be=de.itemSize,ze=e.get(de);if(ze===void 0)continue;const Ne=ze.buffer,qe=ze.type,q=ze.bytesPerElement,le=qe===n.INT||qe===n.UNSIGNED_INT||de.gpuType===Ua;if(de.isInterleavedBufferAttribute){const ae=de.data,Be=ae.stride,oe=de.offset;if(ae.isInstancedInterleavedBuffer){for(let ge=0;ge<se.locationSize;ge++)f(se.location+ge,ae.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ge=0;ge<se.locationSize;ge++)m(se.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let ge=0;ge<se.locationSize;ge++)R(se.location+ge,be/se.locationSize,qe,Se,Be*q,(oe+be/se.locationSize*ge)*q,le)}else{if(de.isInstancedBufferAttribute){for(let ae=0;ae<se.locationSize;ae++)f(se.location+ae,de.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ae=0;ae<se.locationSize;ae++)m(se.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let ae=0;ae<se.locationSize;ae++)R(se.location+ae,be/se.locationSize,qe,Se,be*q,be/se.locationSize*ae*q,le)}}else if(X!==void 0){const Se=X[ne];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(se.location,Se);break;case 3:n.vertexAttrib3fv(se.location,Se);break;case 4:n.vertexAttrib4fv(se.location,Se);break;default:n.vertexAttrib1fv(se.location,Se)}}}}w()}function A(){E();for(const L in i){const F=i[L];for(const J in F){const j=F[J];for(const H in j){const $=j[H];for(const X in $)d($[X].object),delete $[X];delete j[H]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const J in F){const j=F[J];for(const H in j){const $=j[H];for(const X in $)d($[X].object),delete $[X];delete j[H]}}delete i[L.id]}function C(L){for(const F in i){const J=i[F];for(const j in J){const H=J[j];if(H[L.id]===void 0)continue;const $=H[L.id];for(const X in $)d($[X].object),delete $[X];delete H[L.id]}}}function _(L){for(const F in i){const J=i[F],j=L.isInstancedMesh===!0?L.id:0,H=J[j];if(H!==void 0){for(const $ in H){const X=H[$];for(const ne in X)d(X[ne].object),delete X[ne];delete H[$]}delete J[j],Object.keys(J).length===0&&delete i[F]}}}function E(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:w}}function th(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let g=0;g<d;g++)u+=c[g];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function nh(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Qt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==qt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==sn&&!_)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ge("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:g,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:S,maxSamples:A,samples:b}}function ih(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Zn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const g=h.length!==0||u||i!==0||r;return r=u,i=h.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,g){const x=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||x===null||x.length===0||s&&!m)s?d(null):c();else{const w=s?0:i,R=w*4;let S=f.clippingState||null;l.value=S,S=d(x,u,R,g);for(let A=0;A!==R;++A)S[A]=t[A];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,g,x){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,x!==!0||m===null){const f=g+M*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,S=g;R!==M;++R,S+=4)a.copy(h[R]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const kn=4,Po=[.125,.215,.35,.446,.526,.582],Qn=20,rh=256,Vi=new Lc,Lo=new at;let Rs=null,Cs=0,Ps=0,Ls=!1;const sh=new k;class Do{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=sh}=s;Rs=this._renderer.getRenderTarget(),Cs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=No(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rs,Cs,Ps),this._renderer.xr.enabled=Ls,e.scissorTest=!1,yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ti||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rs=this._renderer.getRenderTarget(),Cs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Rn,format:Qt,colorSpace:kr,depthBuffer:!1},r=Uo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uo(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ah(s)),this._blurMaterial=ch(s,e,t),this._ggxMaterial=oh(s,e,t)}return r}_compileMaterial(e){const t=new dn(new Pn,e);this._renderer.compile(t,Vi)}_sceneToCubeUV(e,t,i,r,s){const l=new Xt(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,g=h.toneMapping;h.getClearColor(Lo),h.toneMapping=on,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new Qi,new ka({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let f=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,f=!0):(m.color.copy(Lo),f=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[R],s.y,s.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[R]));const A=this._cubeSize;yi(r,S*A,R>2?A:0,A,A),h.setRenderTarget(r),f&&h.render(M,l),h.render(e,l)}h.toneMapping=g,h.autoClear=u,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ti||e.mapping===Ri;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=No()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;yi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Vi)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,g=h*u,{_lodMax:x}=this,M=this._sizeLods[i],m=3*M*(i>x-kn?i-x+kn:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=x-t,yi(s,m,f,3*M,2*M),r.setRenderTarget(s),r.render(o,Vi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,yi(e,m,f,3*M,2*M),r.setRenderTarget(e),r.render(o,Vi)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Qn-1),M=s/x,m=isFinite(s)?1+Math.floor(d*M):Qn;m>Qn&&Ge(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const f=[];let w=0;for(let C=0;C<Qn;++C){const _=C/M,E=Math.exp(-_*_/2);f.push(E),C===0?w+=E:C<m&&(w+=2*E)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:R}=this;u.dTheta.value=x,u.mipInt.value=R-i;const S=this._sizeLods[r],A=3*S*(r>R-kn?r-R+kn:0),b=4*(this._cubeSize-S);yi(t,A,b,3*S,2*S),l.setRenderTarget(t),l.render(h,Vi)}}function ah(n){const e=[],t=[],i=[];let r=n;const s=n-kn+1+Po.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-kn?l=Po[a-n+kn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,x=6,M=3,m=2,f=1,w=new Float32Array(M*x*g),R=new Float32Array(m*x*g),S=new Float32Array(f*x*g);for(let b=0;b<g;b++){const C=b%3*2/3-1,_=b>2?0:-1,E=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];w.set(E,M*x*b),R.set(u,m*x*b);const D=[b,b,b,b,b,b];S.set(D,f*x*b)}const A=new Pn;A.setAttribute("position",new ln(w,M)),A.setAttribute("uv",new ln(R,m)),A.setAttribute("faceIndex",new ln(S,f)),i.push(new dn(A,null)),r>kn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Uo(n,e,t){const i=new cn(n,e,t);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function oh(n,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ch(n,e,t){const i=new Float32Array(Qn),r=new k(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Io(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function No(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Jr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ic extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qi(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:Pi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Tn});s.uniforms.tEquirect.value=t;const a=new dn(r,s),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=Ct),new hu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function lh(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,g=!1){return u==null?null:g?a(u):s(u)}function s(u){if(u&&u.isTexture){const g=u.mapping;if(g===es||g===ts)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const M=new Ic(x.height);return M.fromEquirectangularTexture(n,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const g=u.mapping,x=g===es||g===ts,M=g===ti||g===Ri;if(x||M){let m=t.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Do(n)),m=x?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const w=u.image;return x&&w&&w.height>0||M&&w&&l(w)?(i===null&&(i=new Do(n)),m=x?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,g){return g===es?u.mapping=ti:g===ts&&(u.mapping=Ri),u}function l(u){let g=0;const x=6;for(let M=0;M<x;M++)u[M]!==void 0&&g++;return g===x}function c(u){const g=u.target;g.removeEventListener("dispose",c);const x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function d(u){const g=u.target;g.removeEventListener("dispose",d);const x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function uh(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ti("WebGLRenderer: "+i+" extension not supported."),r}}}function dh(n,e,t,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete r[u.id];const g=s.get(u);g&&(e.remove(g),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER)}function c(h){const u=[],g=h.index,x=h.attributes.position;let M=0;if(x===void 0)return;if(g!==null){const w=g.array;M=g.version;for(let R=0,S=w.length;R<S;R+=3){const A=w[R+0],b=w[R+1],C=w[R+2];u.push(A,b,b,C,C,A)}}else{const w=x.array;M=x.version;for(let R=0,S=w.length/3-1;R<S;R+=3){const A=R+0,b=R+1,C=R+2;u.push(A,b,b,C,C,A)}}const m=new(x.count>=65535?Tc:bc)(u,1);m.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function d(h){const u=s.get(h);if(u){const g=h.index;g!==null&&u.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function fh(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){n.drawElements(i,u,s,h*a),t.update(u,i,1)}function c(h,u,g){g!==0&&(n.drawElementsInstanced(i,u,s,h*a,g),t.update(u,i,g))}function d(h,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,g);let M=0;for(let m=0;m<g;m++)M+=u[m];t.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function hh(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ph(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let R=0;g===!0&&(R=1),x===!0&&(R=2),M===!0&&(R=3);let S=o.attributes.position.count*R,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*A*4*h),C=new Mc(b,S,A,h);C.type=sn,C.needsUpdate=!0;const _=R*4;for(let D=0;D<h;D++){const L=m[D],F=f[D],J=w[D],j=S*A*4*D;for(let H=0;H<L.count;H++){const $=H*_;g===!0&&(r.fromBufferAttribute(L,H),b[j+$+0]=r.x,b[j+$+1]=r.y,b[j+$+2]=r.z,b[j+$+3]=0),x===!0&&(r.fromBufferAttribute(F,H),b[j+$+4]=r.x,b[j+$+5]=r.y,b[j+$+6]=r.z,b[j+$+7]=0),M===!0&&(r.fromBufferAttribute(J,H),b[j+$+8]=r.x,b[j+$+9]=r.y,b[j+$+10]=r.z,b[j+$+11]=J.itemSize===4?r.w:1)}}u={count:h,texture:C,size:new st(S,A)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let M=0;M<c.length;M++)g+=c[M];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function mh(n,e,t,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const gh={[sc]:"LINEAR_TONE_MAPPING",[ac]:"REINHARD_TONE_MAPPING",[oc]:"CINEON_TONE_MAPPING",[cc]:"ACES_FILMIC_TONE_MAPPING",[uc]:"AGX_TONE_MAPPING",[dc]:"NEUTRAL_TONE_MAPPING",[lc]:"CUSTOM_TONE_MAPPING"};function _h(n,e,t,i,r,s){const a=new cn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Ci(e,t):void 0}),o=new cn(e,t,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),l=new Pn;l.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new wn([0,2,0,0,2,0],2));const c=new au({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new dn(l,c),h=new Lc(-1,1,1,-1,0,1);let u=null,g=null,x=!1,M,m=null,f=[],w=!1;this.setSize=function(R,S){a.setSize(R,S),o.setSize(R,S);for(let A=0;A<f.length;A++){const b=f[A];b.setSize&&b.setSize(R,S)}},this.setEffects=function(R){f=R,w=f.length>0&&f[0].isRenderPass===!0;const S=a.width,A=a.height;for(let b=0;b<f.length;b++){const C=f[b];C.setSize&&C.setSize(S,A)}},this.begin=function(R,S){if(x||R.toneMapping===on&&f.length===0)return!1;if(m=S,S!==null){const A=S.width,b=S.height;(a.width!==A||a.height!==b)&&this.setSize(A,b)}return w===!1&&R.setRenderTarget(a),M=R.toneMapping,R.toneMapping=on,!0},this.hasRenderPass=function(){return w},this.end=function(R,S){R.toneMapping=M,x=!0;let A=a,b=o;for(let C=0;C<f.length;C++){const _=f[C];if(_.enabled!==!1&&(_.render(R,b,A,S),_.needsSwap!==!1)){const E=A;A=b,b=E}}if(u!==R.outputColorSpace||g!==R.toneMapping){u=R.outputColorSpace,g=R.toneMapping,c.defines={},Je.getTransfer(u)===ot&&(c.defines.SRGB_TRANSFER="");const C=gh[g];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,R.setRenderTarget(m),R.render(d,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Nc=new Pt,wa=new Ci(1,1),Fc=new Mc,Oc=new Fl,Bc=new wc,Fo=[],Oo=[],Bo=new Float32Array(16),zo=new Float32Array(9),Vo=new Float32Array(4);function Di(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Fo[r];if(s===void 0&&(s=new Float32Array(r),Fo[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qr(n,e){let t=Oo[e];t===void 0&&(t=new Int32Array(e),Oo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function Sh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function Mh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function yh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;Vo.set(i),n.uniformMatrix2fv(this.addr,!1,Vo),yt(t,i)}}function Eh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;zo.set(i),n.uniformMatrix3fv(this.addr,!1,zo),yt(t,i)}}function bh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;Bo.set(i),n.uniformMatrix4fv(this.addr,!1,Bo),yt(t,i)}}function Th(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ah(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function wh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function Rh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function Ch(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ph(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function Lh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function Dh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function Uh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wa.compareFunction=t.isReversedDepthBuffer()?Va:za,s=wa):s=Nc,t.setTexture2D(e||s,r)}function Ih(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Oc,r)}function Nh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bc,r)}function Fh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Fc,r)}function Oh(n){switch(n){case 5126:return vh;case 35664:return xh;case 35665:return Sh;case 35666:return Mh;case 35674:return yh;case 35675:return Eh;case 35676:return bh;case 5124:case 35670:return Th;case 35667:case 35671:return Ah;case 35668:case 35672:return wh;case 35669:case 35673:return Rh;case 5125:return Ch;case 36294:return Ph;case 36295:return Lh;case 36296:return Dh;case 35678:case 36198:case 36298:case 36306:case 35682:return Uh;case 35679:case 36299:case 36307:return Ih;case 35680:case 36300:case 36308:case 36293:return Nh;case 36289:case 36303:case 36311:case 36292:return Fh}}function Bh(n,e){n.uniform1fv(this.addr,e)}function zh(n,e){const t=Di(e,this.size,2);n.uniform2fv(this.addr,t)}function Vh(n,e){const t=Di(e,this.size,3);n.uniform3fv(this.addr,t)}function Hh(n,e){const t=Di(e,this.size,4);n.uniform4fv(this.addr,t)}function Gh(n,e){const t=Di(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kh(n,e){const t=Di(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wh(n,e){const t=Di(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xh(n,e){n.uniform1iv(this.addr,e)}function qh(n,e){n.uniform2iv(this.addr,e)}function $h(n,e){n.uniform3iv(this.addr,e)}function Yh(n,e){n.uniform4iv(this.addr,e)}function Kh(n,e){n.uniform1uiv(this.addr,e)}function Zh(n,e){n.uniform2uiv(this.addr,e)}function Jh(n,e){n.uniform3uiv(this.addr,e)}function Qh(n,e){n.uniform4uiv(this.addr,e)}function jh(n,e,t){const i=this.cache,r=e.length,s=Qr(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=wa:a=Nc;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function ep(n,e,t){const i=this.cache,r=e.length,s=Qr(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Oc,s[a])}function tp(n,e,t){const i=this.cache,r=e.length,s=Qr(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Bc,s[a])}function np(n,e,t){const i=this.cache,r=e.length,s=Qr(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Fc,s[a])}function ip(n){switch(n){case 5126:return Bh;case 35664:return zh;case 35665:return Vh;case 35666:return Hh;case 35674:return Gh;case 35675:return kh;case 35676:return Wh;case 5124:case 35670:return Xh;case 35667:case 35671:return qh;case 35668:case 35672:return $h;case 35669:case 35673:return Yh;case 5125:return Kh;case 36294:return Zh;case 36295:return Jh;case 36296:return Qh;case 35678:case 36198:case 36298:case 36306:case 35682:return jh;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return tp;case 36289:case 36303:case 36311:case 36292:return np}}class rp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Oh(t.type)}}class sp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ip(t.type)}}class ap{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ds=/(\w+)(\])?(\[|\.)?/g;function Ho(n,e){n.seq.push(e),n.map[e.id]=e}function op(n,e,t){const i=n.name,r=i.length;for(Ds.lastIndex=0;;){const s=Ds.exec(i),a=Ds.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ho(t,c===void 0?new rp(o,n,e):new sp(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new ap(o),Ho(t,h)),t=h}}}class zr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);op(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Go(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const cp=37297;let lp=0;function up(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ko=new Xe;function dp(n){Je._getMatrix(ko,Je.workingColorSpace,n);const e=`mat3( ${ko.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Wr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+up(n.getShaderSource(e),o)}else return s}function fp(n,e){const t=dp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hp={[sc]:"Linear",[ac]:"Reinhard",[oc]:"Cineon",[cc]:"ACESFilmic",[uc]:"AgX",[dc]:"Neutral",[lc]:"Custom"};function pp(n,e){const t=hp[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cr=new k;function mp(){Je.getLuminanceCoefficients(Cr);const n=Cr.x.toFixed(4),e=Cr.y.toFixed(4),t=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function _p(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Xi(n){return n!==""}function Xo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(n){return n.replace(xp,Mp)}const Sp=new Map;function Mp(n,e){let t=$e[e];if(t===void 0){const i=Sp.get(e);if(i!==void 0)t=$e[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ra(t)}const yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $o(n){return n.replace(yp,Ep)}function Ep(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const bp={[Ir]:"SHADOWMAP_TYPE_PCF",[ki]:"SHADOWMAP_TYPE_VSM"};function Tp(n){return bp[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ap={[ti]:"ENVMAP_TYPE_CUBE",[Ri]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function wp(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ap[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Rp={[Ri]:"ENVMAP_MODE_REFRACTION"};function Cp(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Rp[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pp={[rc]:"ENVMAP_BLENDING_MULTIPLY",[ml]:"ENVMAP_BLENDING_MIX",[gl]:"ENVMAP_BLENDING_ADD"};function Lp(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Pp[n.combine]||"ENVMAP_BLENDING_NONE"}function Dp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Up(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Tp(t),c=wp(t),d=Cp(t),h=Lp(t),u=Dp(t),g=gp(t),x=_p(s),M=r.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Xi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Xi).join(`
`),f.length>0&&(f+=`
`)):(m=[Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),f=[Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?$e.tonemapping_pars_fragment:"",t.toneMapping!==on?pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,fp("linearToOutputTexel",t.outputColorSpace),mp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),a=Ra(a),a=Xo(a,t),a=qo(a,t),o=Ra(o),o=Xo(o,t),o=qo(o,t),a=$o(a),o=$o(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=w+m+a,S=w+f+o,A=Go(r,r.VERTEX_SHADER,R),b=Go(r,r.FRAGMENT_SHADER,S);r.attachShader(M,A),r.attachShader(M,b),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(L){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(M)||"",J=r.getShaderInfoLog(A)||"",j=r.getShaderInfoLog(b)||"",H=F.trim(),$=J.trim(),X=j.trim();let ne=!0,se=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,A,b);else{const de=Wo(r,A,"vertex"),Se=Wo(r,b,"fragment");tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+de+`
`+Se)}else H!==""?Ge("WebGLProgram: Program Info Log:",H):($===""||X==="")&&(se=!1);se&&(L.diagnostics={runnable:ne,programLog:H,vertexShader:{log:$,prefix:m},fragmentShader:{log:X,prefix:f}})}r.deleteShader(A),r.deleteShader(b),_=new zr(r,M),E=vp(r,M)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(M,cp)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lp++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=b,this}let Ip=0;class Np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Fp(e),t.set(e,i)),i}}class Fp{constructor(e){this.id=Ip++,this.code=e,this.usedTimes=0}}function Op(n){return n===ni||n===Hr||n===Gr}function Bp(n,e,t,i,r,s){const a=new yc,o=new Np,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,E,D,L,F,J){const j=L.fog,H=F.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||$,X),se=ne&&ne.mapping===Kr?ne.image.height:null,de=g[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Ge("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const Se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,be=Se!==void 0?Se.length:0;let ze=0;H.morphAttributes.position!==void 0&&(ze=1),H.morphAttributes.normal!==void 0&&(ze=2),H.morphAttributes.color!==void 0&&(ze=3);let Ne,qe,q,le;if(de){const we=rn[de];Ne=we.vertexShader,qe=we.fragmentShader}else{Ne=_.vertexShader,qe=_.fragmentShader;const we=o.getVertexShaderStage(_),ut=o.getFragmentShaderStage(_);o.update(_,we,ut),q=we.id,le=ut.id}const ae=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),oe=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,nt=!!_.map,Oe=!!_.matcap,Ke=!!ne,je=!!_.aoMap,He=!!_.lightMap,Ze=!!_.bumpMap&&_.wireframe===!1,mt=!!_.normalMap,ht=!!_.displacementMap,vt=!!_.emissiveMap,lt=!!_.metalnessMap,ft=!!_.roughnessMap,P=_.anisotropy>0,ct=_.clearcoat>0,et=_.dispersion>0,y=_.iridescence>0,p=_.sheen>0,O=_.transmission>0,G=P&&!!_.anisotropyMap,K=ct&&!!_.clearcoatMap,ce=ct&&!!_.clearcoatNormalMap,fe=ct&&!!_.clearcoatRoughnessMap,Z=y&&!!_.iridescenceMap,Q=y&&!!_.iridescenceThicknessMap,pe=p&&!!_.sheenColorMap,Le=p&&!!_.sheenRoughnessMap,_e=!!_.specularMap,he=!!_.specularColorMap,Ie=!!_.specularIntensityMap,Fe=O&&!!_.transmissionMap,ke=O&&!!_.thicknessMap,U=!!_.gradientMap,ue=!!_.alphaMap,ee=_.alphaTest>0,me=!!_.alphaHash,Ee=!!_.extensions;let ie=on;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Ce={shaderID:de,shaderType:_.type,shaderName:_.name,vertexShader:Ne,fragmentShader:qe,defines:_.defines,customVertexShaderID:q,customFragmentShaderID:le,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ge,batchingColor:ge&&F._colorsTexture!==null,instancing:oe,instancingColor:oe&&F.instanceColor!==null,instancingMorph:oe&&F.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:nt,matcap:Oe,envMap:Ke,envMapMode:Ke&&ne.mapping,envMapCubeUVHeight:se,aoMap:je,lightMap:He,bumpMap:Ze,normalMap:mt,displacementMap:ht,emissiveMap:vt,normalMapObjectSpace:mt&&_.normalMapType===xl,normalMapTangentSpace:mt&&_.normalMapType===io,packedNormalMap:mt&&_.normalMapType===io&&Op(_.normalMap.format),metalnessMap:lt,roughnessMap:ft,anisotropy:P,anisotropyMap:G,clearcoat:ct,clearcoatMap:K,clearcoatNormalMap:ce,clearcoatRoughnessMap:fe,dispersion:et,iridescence:y,iridescenceMap:Z,iridescenceThicknessMap:Q,sheen:p,sheenColorMap:pe,sheenRoughnessMap:Le,specularMap:_e,specularColorMap:he,specularIntensityMap:Ie,transmission:O,transmissionMap:Fe,thicknessMap:ke,gradientMap:U,opaque:_.transparent===!1&&_.blending===bi&&_.alphaToCoverage===!1,alphaMap:ue,alphaTest:ee,alphaHash:me,combine:_.combine,mapUv:nt&&x(_.map.channel),aoMapUv:je&&x(_.aoMap.channel),lightMapUv:He&&x(_.lightMap.channel),bumpMapUv:Ze&&x(_.bumpMap.channel),normalMapUv:mt&&x(_.normalMap.channel),displacementMapUv:ht&&x(_.displacementMap.channel),emissiveMapUv:vt&&x(_.emissiveMap.channel),metalnessMapUv:lt&&x(_.metalnessMap.channel),roughnessMapUv:ft&&x(_.roughnessMap.channel),anisotropyMapUv:G&&x(_.anisotropyMap.channel),clearcoatMapUv:K&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(_.sheenRoughnessMap.channel),specularMapUv:_e&&x(_.specularMap.channel),specularColorMapUv:he&&x(_.specularColorMap.channel),specularIntensityMapUv:Ie&&x(_.specularIntensityMap.channel),transmissionMapUv:Fe&&x(_.transmissionMap.channel),thicknessMapUv:ke&&x(_.thicknessMap.channel),alphaMapUv:ue&&x(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(mt||P),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(nt||ue),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Be,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:nt&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:vt&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===En,flipSided:_.side===Ot,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ee&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&_.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)E.push(D),E.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(f(E,_),w(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function f(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function w(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){const E=g[_.type];let D;if(E){const L=rn[E];D=iu.clone(L.uniforms)}else D=_.uniforms;return D}function S(_,E){let D=d.get(E);return D!==void 0?++D.usedTimes:(D=new Up(n,E,_,r),c.push(D),d.set(E,D)),D}function A(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:R,acquireProgram:S,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:C}}function zp(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Vp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ko(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zo(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,x,M,m,f){let w=n[e];return w===void 0?(w={id:u.id,object:u,geometry:g,material:x,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},n[e]=w):(w.id=u.id,w.object=u,w.geometry=g,w.material=x,w.materialVariant=a(u),w.groupOrder=M,w.renderOrder=u.renderOrder,w.z=m,w.group=f),e++,w}function l(u,g,x,M,m,f){const w=o(u,g,x,M,m,f);x.transmission>0?i.push(w):x.transparent===!0?r.push(w):t.push(w)}function c(u,g,x,M,m,f){const w=o(u,g,x,M,m,f);x.transmission>0?i.unshift(w):x.transparent===!0?r.unshift(w):t.unshift(w)}function d(u,g,x){t.length>1&&t.sort(u||Vp),i.length>1&&i.sort(g||Ko),r.length>1&&r.sort(g||Ko),x&&(t.reverse(),i.reverse(),r.reverse())}function h(){for(let u=e,g=n.length;u<g;u++){const x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function Hp(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Zo,n.set(i,[a])):r>=s.length?(a=new Zo,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Gp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new at};break;case"SpotLight":t={position:new k,direction:new k,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function kp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Wp=0;function Xp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qp(n){const e=new Gp,t=kp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new St,a=new St;function o(c){let d=0,h=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,x=0,M=0,m=0,f=0,w=0,R=0,S=0,A=0,b=0,C=0;c.sort(Xp);for(let E=0,D=c.length;E<D;E++){const L=c[E],F=L.color,J=L.intensity,j=L.distance;let H=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ni?H=L.shadow.map.texture:H=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=F.r*J,h+=F.g*J,u+=F.b*J;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],J);C++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,ne=t.get(L);ne.shadowIntensity=X.intensity,ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,i.directionalShadow[g]=ne,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=L.shadow.matrix,w++}i.directional[g]=$,g++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(F).multiplyScalar(J),$.distance=j,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[M]=$;const X=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,X.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[M]=X.matrix,L.castShadow){const ne=t.get(L);ne.shadowIntensity=X.intensity,ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,i.spotShadow[M]=ne,i.spotShadowMap[M]=H,S++}M++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(F).multiplyScalar(J),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=$,m++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const X=L.shadow,ne=t.get(L);ne.shadowIntensity=X.intensity,ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,ne.shadowCameraNear=X.camera.near,ne.shadowCameraFar=X.camera.far,i.pointShadow[x]=ne,i.pointShadowMap[x]=H,i.pointShadowMatrix[x]=L.shadow.matrix,R++}i.point[x]=$,x++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(J),$.groundColor.copy(L.groundColor).multiplyScalar(J),i.hemi[f]=$,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==g||_.pointLength!==x||_.spotLength!==M||_.rectAreaLength!==m||_.hemiLength!==f||_.numDirectionalShadows!==w||_.numPointShadows!==R||_.numSpotShadows!==S||_.numSpotMaps!==A||_.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=M,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=S+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,_.directionalLength=g,_.pointLength=x,_.spotLength=M,_.rectAreaLength=m,_.hemiLength=f,_.numDirectionalShadows=w,_.numPointShadows=R,_.numSpotShadows=S,_.numSpotMaps=A,_.numLightProbes=C,i.version=Wp++)}function l(c,d){let h=0,u=0,g=0,x=0,M=0;const m=d.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const R=c[f];if(R.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(R.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(R.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(R.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(R.width*.5,0,0),S.halfHeight.set(0,R.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(R.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(m),u++}else if(R.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(R.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function Jo(n){const e=new qp(n),t=[],i=[],r=[];function s(u){h.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $p(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Jo(n),e.set(r,[o])):s>=a.length?(o=new Jo(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zp=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Jp=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Qo=new St,Hi=new k,Us=new k;function Qp(n,e,t){let i=new Ac;const r=new st,s=new st,a=new gt,o=new ou,l=new cu,c={},d=t.maxTextureSize,h={[Wn]:Ot,[Ot]:Wn,[En]:En},u=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Yp,fragmentShader:Kp}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const x=new Pn;x.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new dn(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ir;let f=this.type;this.render=function(b,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Zc&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ir);const E=n.getRenderTarget(),D=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Tn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const J=f!==this.type;J&&C.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(H=>H.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,H=b.length;j<H;j++){const $=b[j],X=$.shadow;if(X===void 0){Ge("WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ne=X.getFrameExtents();r.multiply(ne),s.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ne.x),r.x=s.x*ne.x,X.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ne.y),r.y=s.y*ne.y,X.mapSize.y=s.y));const se=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=se,X.map===null||J===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ki){if($.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new cn(r.x,r.y,{format:ni,type:Rn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),X.map.texture.name=$.name+".shadowMap",X.map.depthTexture=new Ci(r.x,r.y,sn),X.map.depthTexture.name=$.name+".shadowMapDepth",X.map.depthTexture.format=Cn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Tt,X.map.depthTexture.magFilter=Tt}else $.isPointLight?(X.map=new Ic(r.x),X.map.depthTexture=new tu(r.x,un)):(X.map=new cn(r.x,r.y),X.map.depthTexture=new Ci(r.x,r.y,un)),X.map.depthTexture.name=$.name+".shadowMap",X.map.depthTexture.format=Cn,this.type===Ir?(X.map.depthTexture.compareFunction=se?Va:za,X.map.depthTexture.minFilter=Ct,X.map.depthTexture.magFilter=Ct):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Tt,X.map.depthTexture.magFilter=Tt);X.camera.updateProjectionMatrix()}const de=X.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<de;Se++){if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,Se),n.clear();else{Se===0&&(n.setRenderTarget(X.map),n.clear());const be=X.getViewport(Se);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),F.viewport(a)}if($.isPointLight){const be=X.camera,ze=X.matrix,Ne=$.distance||be.far;Ne!==be.far&&(be.far=Ne,be.updateProjectionMatrix()),Hi.setFromMatrixPosition($.matrixWorld),be.position.copy(Hi),Us.copy(be.position),Us.add(Zp[Se]),be.up.copy(Jp[Se]),be.lookAt(Us),be.updateMatrixWorld(),ze.makeTranslation(-Hi.x,-Hi.y,-Hi.z),Qo.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Qo,be.coordinateSystem,be.reversedDepth)}else X.updateMatrices($);i=X.getFrustum(),S(C,_,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===ki&&w(X,_),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,D,L)};function w(b,C){const _=e.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new cn(r.x,r.y,{format:ni,type:Rn})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,_,u,M,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,_,g,M,null)}function R(b,C,_,E){let D=null;const L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)D=L;else if(D=_.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=D.uuid,J=C.uuid;let j=c[F];j===void 0&&(j={},c[F]=j);let H=j[J];H===void 0&&(H=D.clone(),j[J]=H,C.addEventListener("dispose",A)),D=H}if(D.visible=C.visible,D.wireframe=C.wireframe,E===ki?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:h[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const F=n.properties.get(D);F.light=_}return D}function S(b,C,_,E,D){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===ki)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const J=e.update(b),j=b.material;if(Array.isArray(j)){const H=J.groups;for(let $=0,X=H.length;$<X;$++){const ne=H[$],se=j[ne.materialIndex];if(se&&se.visible){const de=R(b,se,E,D);b.onBeforeShadow(n,b,C,_,J,de,ne),n.renderBufferDirect(_,null,J,de,b,ne),b.onAfterShadow(n,b,C,_,J,de,ne)}}}else if(j.visible){const H=R(b,j,E,D);b.onBeforeShadow(n,b,C,_,J,H,null),n.renderBufferDirect(_,null,J,H,b,null),b.onAfterShadow(n,b,C,_,J,H,null)}}const F=b.children;for(let J=0,j=F.length;J<j;J++)S(F[J],C,_,E,D)}function A(b){b.target.removeEventListener("dispose",A);for(const _ in c){const E=c[_],D=b.target.uuid;D in E&&(E[D].dispose(),delete E[D])}}}function jp(n,e){function t(){let U=!1;const ue=new gt;let ee=null;const me=new gt(0,0,0,0);return{setMask:function(Ee){ee!==Ee&&!U&&(n.colorMask(Ee,Ee,Ee,Ee),ee=Ee)},setLocked:function(Ee){U=Ee},setClear:function(Ee,ie,Ce,we,ut){ut===!0&&(Ee*=we,ie*=we,Ce*=we),ue.set(Ee,ie,Ce,we),me.equals(ue)===!1&&(n.clearColor(Ee,ie,Ce,we),me.copy(ue))},reset:function(){U=!1,ee=null,me.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,ee=null,me=null,Ee=null;return{setReversed:function(ie){if(ue!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const we=Ee;Ee=null,this.setClear(we)}},getReversed:function(){return ue},setTest:function(ie){ie?ae(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!U&&(n.depthMask(ie),ee=ie)},setFunc:function(ie){if(ue&&(ie=Cl[ie]),me!==ie){switch(ie){case Hs:n.depthFunc(n.NEVER);break;case Gs:n.depthFunc(n.ALWAYS);break;case ks:n.depthFunc(n.LESS);break;case wi:n.depthFunc(n.LEQUAL);break;case Ws:n.depthFunc(n.EQUAL);break;case Xs:n.depthFunc(n.GEQUAL);break;case qs:n.depthFunc(n.GREATER);break;case $s:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=ie}},setLocked:function(ie){U=ie},setClear:function(ie){Ee!==ie&&(Ee=ie,ue&&(ie=1-ie),n.clearDepth(ie))},reset:function(){U=!1,ee=null,me=null,Ee=null,ue=!1}}}function r(){let U=!1,ue=null,ee=null,me=null,Ee=null,ie=null,Ce=null,we=null,ut=null;return{setTest:function(it){U||(it?ae(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(it){ue!==it&&!U&&(n.stencilMask(it),ue=it)},setFunc:function(it,Bt,zt){(ee!==it||me!==Bt||Ee!==zt)&&(n.stencilFunc(it,Bt,zt),ee=it,me=Bt,Ee=zt)},setOp:function(it,Bt,zt){(ie!==it||Ce!==Bt||we!==zt)&&(n.stencilOp(it,Bt,zt),ie=it,Ce=Bt,we=zt)},setLocked:function(it){U=it},setClear:function(it){ut!==it&&(n.clearStencil(it),ut=it)},reset:function(){U=!1,ue=null,ee=null,me=null,Ee=null,ie=null,Ce=null,we=null,ut=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u={},g=new WeakMap,x=[],M=null,m=!1,f=null,w=null,R=null,S=null,A=null,b=null,C=null,_=new at(0,0,0),E=0,D=!1,L=null,F=null,J=null,j=null,H=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ne=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(se)[1]),X=ne>=1):se.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),X=ne>=2);let de=null,Se={};const be=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),Ne=new gt().fromArray(be),qe=new gt().fromArray(ze);function q(U,ue,ee,me){const Ee=new Uint8Array(4),ie=n.createTexture();n.bindTexture(U,ie),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<ee;Ce++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(ue+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ie}const le={};le[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(wi),Ze(!1),mt(ja),ae(n.CULL_FACE),je(Tn);function ae(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Be(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function oe(U,ue){return u[U]!==ue?(n.bindFramebuffer(U,ue),u[U]=ue,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ue),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function ge(U,ue){let ee=x,me=!1;if(U){ee=g.get(ue),ee===void 0&&(ee=[],g.set(ue,ee));const Ee=U.textures;if(ee.length!==Ee.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ce=Ee.length;ie<Ce;ie++)ee[ie]=n.COLOR_ATTACHMENT0+ie;ee.length=Ee.length,me=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,me=!0);me&&n.drawBuffers(ee)}function nt(U){return M!==U?(n.useProgram(U),M=U,!0):!1}const Oe={[Jn]:n.FUNC_ADD,[Qc]:n.FUNC_SUBTRACT,[jc]:n.FUNC_REVERSE_SUBTRACT};Oe[el]=n.MIN,Oe[tl]=n.MAX;const Ke={[nl]:n.ZERO,[il]:n.ONE,[rl]:n.SRC_COLOR,[zs]:n.SRC_ALPHA,[ul]:n.SRC_ALPHA_SATURATE,[cl]:n.DST_COLOR,[al]:n.DST_ALPHA,[sl]:n.ONE_MINUS_SRC_COLOR,[Vs]:n.ONE_MINUS_SRC_ALPHA,[ll]:n.ONE_MINUS_DST_COLOR,[ol]:n.ONE_MINUS_DST_ALPHA,[dl]:n.CONSTANT_COLOR,[fl]:n.ONE_MINUS_CONSTANT_COLOR,[hl]:n.CONSTANT_ALPHA,[pl]:n.ONE_MINUS_CONSTANT_ALPHA};function je(U,ue,ee,me,Ee,ie,Ce,we,ut,it){if(U===Tn){m===!0&&(Be(n.BLEND),m=!1);return}if(m===!1&&(ae(n.BLEND),m=!0),U!==Jc){if(U!==f||it!==D){if((w!==Jn||A!==Jn)&&(n.blendEquation(n.FUNC_ADD),w=Jn,A=Jn),it)switch(U){case bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eo:n.blendFunc(n.ONE,n.ONE);break;case to:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case no:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",U);break}else switch(U){case bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case to:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case no:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",U);break}R=null,S=null,b=null,C=null,_.set(0,0,0),E=0,f=U,D=it}return}Ee=Ee||ue,ie=ie||ee,Ce=Ce||me,(ue!==w||Ee!==A)&&(n.blendEquationSeparate(Oe[ue],Oe[Ee]),w=ue,A=Ee),(ee!==R||me!==S||ie!==b||Ce!==C)&&(n.blendFuncSeparate(Ke[ee],Ke[me],Ke[ie],Ke[Ce]),R=ee,S=me,b=ie,C=Ce),(we.equals(_)===!1||ut!==E)&&(n.blendColor(we.r,we.g,we.b,ut),_.copy(we),E=ut),f=U,D=!1}function He(U,ue){U.side===En?Be(n.CULL_FACE):ae(n.CULL_FACE);let ee=U.side===Ot;ue&&(ee=!ee),Ze(ee),U.blending===bi&&U.transparent===!1?je(Tn):je(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const me=U.stencilWrite;o.setTest(me),me&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(U){L!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),L=U)}function mt(U){U!==Yc?(ae(n.CULL_FACE),U!==F&&(U===ja?n.cullFace(n.BACK):U===Kc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),F=U}function ht(U){U!==J&&(X&&n.lineWidth(U),J=U)}function vt(U,ue,ee){U?(ae(n.POLYGON_OFFSET_FILL),(j!==ue||H!==ee)&&(j=ue,H=ee,a.getReversed()&&(ue=-ue),n.polygonOffset(ue,ee))):Be(n.POLYGON_OFFSET_FILL)}function lt(U){U?ae(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function ft(U){U===void 0&&(U=n.TEXTURE0+$-1),de!==U&&(n.activeTexture(U),de=U)}function P(U,ue,ee){ee===void 0&&(de===null?ee=n.TEXTURE0+$-1:ee=de);let me=Se[ee];me===void 0&&(me={type:void 0,texture:void 0},Se[ee]=me),(me.type!==U||me.texture!==ue)&&(de!==ee&&(n.activeTexture(ee),de=ee),n.bindTexture(U,ue||le[U]),me.type=U,me.texture=ue)}function ct(){const U=Se[de];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function et(){try{n.compressedTexImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function y(){try{n.compressedTexImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function p(){try{n.texSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function O(){try{n.texSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function ce(){try{n.texStorage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function fe(){try{n.texStorage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function Z(){try{n.texImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function Q(){try{n.texImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function pe(U){return h[U]!==void 0?h[U]:n.getParameter(U)}function Le(U,ue){h[U]!==ue&&(n.pixelStorei(U,ue),h[U]=ue)}function _e(U){Ne.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ne.copy(U))}function he(U){qe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),qe.copy(U))}function Ie(U,ue){let ee=c.get(ue);ee===void 0&&(ee=new WeakMap,c.set(ue,ee));let me=ee.get(U);me===void 0&&(me=n.getUniformBlockIndex(ue,U.name),ee.set(U,me))}function Fe(U,ue){const me=c.get(ue).get(U);l.get(ue)!==me&&(n.uniformBlockBinding(ue,me,U.__bindingPointIndex),l.set(ue,me))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},de=null,Se={},u={},g=new WeakMap,x=[],M=null,m=!1,f=null,w=null,R=null,S=null,A=null,b=null,C=null,_=new at(0,0,0),E=0,D=!1,L=null,F=null,J=null,j=null,H=null,Ne.set(0,0,n.canvas.width,n.canvas.height),qe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Be,bindFramebuffer:oe,drawBuffers:ge,useProgram:nt,setBlending:je,setMaterial:He,setFlipSided:Ze,setCullFace:mt,setLineWidth:ht,setPolygonOffset:vt,setScissorTest:lt,activeTexture:ft,bindTexture:P,unbindTexture:ct,compressedTexImage2D:et,compressedTexImage3D:y,texImage2D:Z,texImage3D:Q,pixelStorei:Le,getParameter:pe,updateUBOMapping:Ie,uniformBlockBinding:Fe,texStorage2D:ce,texStorage3D:fe,texSubImage2D:p,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:K,scissor:_e,viewport:he,reset:ke}}function em(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,d=new WeakMap,h=new Set;let u;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,p){return x?new OffscreenCanvas(y,p):Ki("canvas")}function m(y,p,O){let G=1;const K=et(y);if((K.width>O||K.height>O)&&(G=O/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const ce=Math.floor(G*K.width),fe=Math.floor(G*K.height);u===void 0&&(u=M(ce,fe));const Z=p?M(ce,fe):u;return Z.width=ce,Z.height=fe,Z.getContext("2d").drawImage(y,0,0,ce,fe),Ge("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ce+"x"+fe+")."),Z}else return"data"in y&&Ge("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function f(y){return y.generateMipmaps}function w(y){n.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(y,p,O,G,K,ce=!1){if(y!==null){if(n[y]!==void 0)return n[y];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let fe;G&&(fe=e.get("EXT_texture_norm16"),fe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=p;if(p===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8),O===n.UNSIGNED_SHORT&&fe&&(Z=fe.R16_EXT),O===n.SHORT&&fe&&(Z=fe.R16_SNORM_EXT)),p===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),p===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8),O===n.UNSIGNED_SHORT&&fe&&(Z=fe.RG16_EXT),O===n.SHORT&&fe&&(Z=fe.RG16_SNORM_EXT)),p===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),p===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),O===n.UNSIGNED_INT&&(Z=n.RGB32UI),O===n.BYTE&&(Z=n.RGB8I),O===n.SHORT&&(Z=n.RGB16I),O===n.INT&&(Z=n.RGB32I)),p===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),O===n.UNSIGNED_INT&&(Z=n.RGBA32UI),O===n.BYTE&&(Z=n.RGBA8I),O===n.SHORT&&(Z=n.RGBA16I),O===n.INT&&(Z=n.RGBA32I)),p===n.RGB&&(O===n.UNSIGNED_SHORT&&fe&&(Z=fe.RGB16_EXT),O===n.SHORT&&fe&&(Z=fe.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),p===n.RGBA){const Q=ce?Wr:Je.getTransfer(K);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=Q===ot?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&fe&&(Z=fe.RGBA16_EXT),O===n.SHORT&&fe&&(Z=fe.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function A(y,p){let O;return y?p===null||p===un||p===Yi?O=n.DEPTH24_STENCIL8:p===sn?O=n.DEPTH32F_STENCIL8:p===$i&&(O=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===un||p===Yi?O=n.DEPTH_COMPONENT24:p===sn?O=n.DEPTH_COMPONENT32F:p===$i&&(O=n.DEPTH_COMPONENT16),O}function b(y,p){return f(y)===!0||y.isFramebufferTexture&&y.minFilter!==Tt&&y.minFilter!==Ct?Math.log2(Math.max(p.width,p.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?p.mipmaps.length:1}function C(y){const p=y.target;p.removeEventListener("dispose",C),E(p),p.isVideoTexture&&d.delete(p),p.isHTMLTexture&&h.delete(p)}function _(y){const p=y.target;p.removeEventListener("dispose",_),L(p)}function E(y){const p=i.get(y);if(p.__webglInit===void 0)return;const O=y.source,G=g.get(O);if(G){const K=G[p.__cacheKey];K.usedTimes--,K.usedTimes===0&&D(y),Object.keys(G).length===0&&g.delete(O)}i.remove(y)}function D(y){const p=i.get(y);n.deleteTexture(p.__webglTexture);const O=y.source,G=g.get(O);delete G[p.__cacheKey],a.memory.textures--}function L(y){const p=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(p.__webglFramebuffer[G]))for(let K=0;K<p.__webglFramebuffer[G].length;K++)n.deleteFramebuffer(p.__webglFramebuffer[G][K]);else n.deleteFramebuffer(p.__webglFramebuffer[G]);p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer[G])}else{if(Array.isArray(p.__webglFramebuffer))for(let G=0;G<p.__webglFramebuffer.length;G++)n.deleteFramebuffer(p.__webglFramebuffer[G]);else n.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&n.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let G=0;G<p.__webglColorRenderbuffer.length;G++)p.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(p.__webglColorRenderbuffer[G]);p.__webglDepthRenderbuffer&&n.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const O=y.textures;for(let G=0,K=O.length;G<K;G++){const ce=i.get(O[G]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(O[G])}i.remove(y)}let F=0;function J(){F=0}function j(){return F}function H(y){F=y}function $(){const y=F;return y>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),F+=1,y}function X(y){const p=[];return p.push(y.wrapS),p.push(y.wrapT),p.push(y.wrapR||0),p.push(y.magFilter),p.push(y.minFilter),p.push(y.anisotropy),p.push(y.internalFormat),p.push(y.format),p.push(y.type),p.push(y.generateMipmaps),p.push(y.premultiplyAlpha),p.push(y.flipY),p.push(y.unpackAlignment),p.push(y.colorSpace),p.join()}function ne(y,p){const O=i.get(y);if(y.isVideoTexture&&P(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&O.__version!==y.version){const G=y.image;if(G===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(O,y,p);return}}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+p)}function se(y,p){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Be(O,y,p);return}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+p)}function de(y,p){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Be(O,y,p);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+p)}function Se(y,p){const O=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&O.__version!==y.version){oe(O,y,p);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+p)}const be={[Ys]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[Ks]:n.MIRRORED_REPEAT},ze={[Tt]:n.NEAREST,[_l]:n.NEAREST_MIPMAP_NEAREST,[cr]:n.NEAREST_MIPMAP_LINEAR,[Ct]:n.LINEAR,[ns]:n.LINEAR_MIPMAP_NEAREST,[jn]:n.LINEAR_MIPMAP_LINEAR},Ne={[Sl]:n.NEVER,[Tl]:n.ALWAYS,[Ml]:n.LESS,[za]:n.LEQUAL,[yl]:n.EQUAL,[Va]:n.GEQUAL,[El]:n.GREATER,[bl]:n.NOTEQUAL};function qe(y,p){if(p.type===sn&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===Ct||p.magFilter===ns||p.magFilter===cr||p.magFilter===jn||p.minFilter===Ct||p.minFilter===ns||p.minFilter===cr||p.minFilter===jn)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,be[p.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,be[p.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,be[p.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ze[p.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ze[p.minFilter]),p.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Ne[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Tt||p.minFilter!==cr&&p.minFilter!==jn||p.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,r.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function q(y,p){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,p.addEventListener("dispose",C));const G=p.source;let K=g.get(G);K===void 0&&(K={},g.set(G,K));const ce=X(p);if(ce!==y.__cacheKey){K[ce]===void 0&&(K[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[ce].usedTimes++;const fe=K[y.__cacheKey];fe!==void 0&&(K[y.__cacheKey].usedTimes--,fe.usedTimes===0&&D(p)),y.__cacheKey=ce,y.__webglTexture=K[ce].texture}return O}function le(y,p,O){return Math.floor(Math.floor(y/O)/p)}function ae(y,p,O,G){const ce=y.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,p.width,p.height,O,G,p.data);else{ce.sort((Le,_e)=>Le.start-_e.start);let fe=0;for(let Le=1;Le<ce.length;Le++){const _e=ce[fe],he=ce[Le],Ie=_e.start+_e.count,Fe=le(he.start,p.width,4),ke=le(_e.start,p.width,4);he.start<=Ie+1&&Fe===ke&&le(he.start+he.count-1,p.width,4)===Fe?_e.count=Math.max(_e.count,he.start+he.count-_e.start):(++fe,ce[fe]=he)}ce.length=fe+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,p.width);for(let Le=0,_e=ce.length;Le<_e;Le++){const he=ce[Le],Ie=Math.floor(he.start/4),Fe=Math.ceil(he.count/4),ke=Ie%p.width,U=Math.floor(Ie/p.width),ue=Fe,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,ke,U,ue,ee,O,G,p.data)}y.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function Be(y,p,O){let G=n.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),p.isData3DTexture&&(G=n.TEXTURE_3D);const K=q(y,p),ce=p.source;t.bindTexture(G,y.__webglTexture,n.TEXTURE0+O);const fe=i.get(ce);if(ce.version!==fe.__version||K===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){const ee=Je.getPrimaries(Je.workingColorSpace),me=p.colorSpace===Gn?null:Je.getPrimaries(p.colorSpace),Ee=p.colorSpace===Gn||ee===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment);let Q=m(p.image,!1,r.maxTextureSize);Q=ct(p,Q);const pe=s.convert(p.format,p.colorSpace),Le=s.convert(p.type);let _e=S(p.internalFormat,pe,Le,p.normalized,p.colorSpace,p.isVideoTexture);qe(G,p);let he;const Ie=p.mipmaps,Fe=p.isVideoTexture!==!0,ke=fe.__version===void 0||K===!0,U=ce.dataReady,ue=b(p,Q);if(p.isDepthTexture)_e=A(p.format===ei,p.type),ke&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,_e,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,_e,Q.width,Q.height,0,pe,Le,null));else if(p.isDataTexture)if(Ie.length>0){Fe&&ke&&t.texStorage2D(n.TEXTURE_2D,ue,_e,Ie[0].width,Ie[0].height);for(let ee=0,me=Ie.length;ee<me;ee++)he=Ie[ee],Fe?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,pe,Le,he.data):t.texImage2D(n.TEXTURE_2D,ee,_e,he.width,he.height,0,pe,Le,he.data);p.generateMipmaps=!1}else Fe?(ke&&t.texStorage2D(n.TEXTURE_2D,ue,_e,Q.width,Q.height),U&&ae(p,Q,pe,Le)):t.texImage2D(n.TEXTURE_2D,0,_e,Q.width,Q.height,0,pe,Le,Q.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Fe&&ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,_e,Ie[0].width,Ie[0].height,Q.depth);for(let ee=0,me=Ie.length;ee<me;ee++)if(he=Ie[ee],p.format!==Qt)if(pe!==null)if(Fe){if(U)if(p.layerUpdates.size>0){const Ee=Co(he.width,he.height,p.format,p.type);for(const ie of p.layerUpdates){const Ce=he.data.subarray(ie*Ee/he.data.BYTES_PER_ELEMENT,(ie+1)*Ee/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,ie,he.width,he.height,1,pe,Ce)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,Q.depth,pe,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,_e,he.width,he.height,Q.depth,0,he.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,Q.depth,pe,Le,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,_e,he.width,he.height,Q.depth,0,pe,Le,he.data)}else{Fe&&ke&&t.texStorage2D(n.TEXTURE_2D,ue,_e,Ie[0].width,Ie[0].height);for(let ee=0,me=Ie.length;ee<me;ee++)he=Ie[ee],p.format!==Qt?pe!==null?Fe?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,pe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,_e,he.width,he.height,0,he.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,pe,Le,he.data):t.texImage2D(n.TEXTURE_2D,ee,_e,he.width,he.height,0,pe,Le,he.data)}else if(p.isDataArrayTexture)if(Fe){if(ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,_e,Q.width,Q.height,Q.depth),U)if(p.layerUpdates.size>0){const ee=Co(Q.width,Q.height,p.format,p.type);for(const me of p.layerUpdates){const Ee=Q.data.subarray(me*ee/Q.data.BYTES_PER_ELEMENT,(me+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,Q.width,Q.height,1,pe,Le,Ee)}p.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,Le,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,Q.width,Q.height,Q.depth,0,pe,Le,Q.data);else if(p.isData3DTexture)Fe?(ke&&t.texStorage3D(n.TEXTURE_3D,ue,_e,Q.width,Q.height,Q.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,Le,Q.data)):t.texImage3D(n.TEXTURE_3D,0,_e,Q.width,Q.height,Q.depth,0,pe,Le,Q.data);else if(p.isFramebufferTexture){if(ke)if(Fe)t.texStorage2D(n.TEXTURE_2D,ue,_e,Q.width,Q.height);else{let ee=Q.width,me=Q.height;for(let Ee=0;Ee<ue;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,_e,ee,me,0,pe,Le,null),ee>>=1,me>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in n){const ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),Q.parentNode!==ee){ee.appendChild(Q),h.add(p),ee.onpaint=me=>{const Ee=me.changedElements;for(const ie of h)Ee.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const Ee=n.RGBA,ie=n.RGBA,Ce=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ee,ie,Ce,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Fe&&ke){const ee=et(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ue,_e,ee.width,ee.height)}for(let ee=0,me=Ie.length;ee<me;ee++)he=Ie[ee],Fe?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,pe,Le,he):t.texImage2D(n.TEXTURE_2D,ee,_e,pe,Le,he);p.generateMipmaps=!1}else if(Fe){if(ke){const ee=et(Q);t.texStorage2D(n.TEXTURE_2D,ue,_e,ee.width,ee.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Le,Q)}else t.texImage2D(n.TEXTURE_2D,0,_e,pe,Le,Q);f(p)&&w(G),fe.__version=ce.version,p.onUpdate&&p.onUpdate(p)}y.__version=p.version}function oe(y,p,O){if(p.image.length!==6)return;const G=q(y,p),K=p.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+O);const ce=i.get(K);if(K.version!==ce.__version||G===!0){t.activeTexture(n.TEXTURE0+O);const fe=Je.getPrimaries(Je.workingColorSpace),Z=p.colorSpace===Gn?null:Je.getPrimaries(p.colorSpace),Q=p.colorSpace===Gn||fe===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const pe=p.isCompressedTexture||p.image[0].isCompressedTexture,Le=p.image[0]&&p.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!pe&&!Le?_e[ie]=m(p.image[ie],!0,r.maxCubemapSize):_e[ie]=Le?p.image[ie].image:p.image[ie],_e[ie]=ct(p,_e[ie]);const he=_e[0],Ie=s.convert(p.format,p.colorSpace),Fe=s.convert(p.type),ke=S(p.internalFormat,Ie,Fe,p.normalized,p.colorSpace),U=p.isVideoTexture!==!0,ue=ce.__version===void 0||G===!0,ee=K.dataReady;let me=b(p,he);qe(n.TEXTURE_CUBE_MAP,p);let Ee;if(pe){U&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ke,he.width,he.height);for(let ie=0;ie<6;ie++){Ee=_e[ie].mipmaps;for(let Ce=0;Ce<Ee.length;Ce++){const we=Ee[Ce];p.format!==Qt?Ie!==null?U?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,we.width,we.height,Ie,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,ke,we.width,we.height,0,we.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,we.width,we.height,Ie,Fe,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,ke,we.width,we.height,0,Ie,Fe,we.data)}}}else{if(Ee=p.mipmaps,U&&ue){Ee.length>0&&me++;const ie=et(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ke,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Le){U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,Ie,Fe,_e[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,_e[ie].width,_e[ie].height,0,Ie,Fe,_e[ie].data);for(let Ce=0;Ce<Ee.length;Ce++){const ut=Ee[Ce].image[ie].image;U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,ut.width,ut.height,Ie,Fe,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,ke,ut.width,ut.height,0,Ie,Fe,ut.data)}}else{U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie,Fe,_e[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,Ie,Fe,_e[ie]);for(let Ce=0;Ce<Ee.length;Ce++){const we=Ee[Ce];U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Ie,Fe,we.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,ke,Ie,Fe,we.image[ie])}}}f(p)&&w(n.TEXTURE_CUBE_MAP),ce.__version=K.version,p.onUpdate&&p.onUpdate(p)}y.__version=p.version}function ge(y,p,O,G,K,ce){const fe=s.convert(O.format,O.colorSpace),Z=s.convert(O.type),Q=S(O.internalFormat,fe,Z,O.normalized,O.colorSpace),pe=i.get(p),Le=i.get(O);if(Le.__renderTarget=p,!pe.__hasExternalTextures){const _e=Math.max(1,p.width>>ce),he=Math.max(1,p.height>>ce);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,ce,Q,_e,he,p.depth,0,fe,Z,null):t.texImage2D(K,ce,Q,_e,he,0,fe,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ft(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,K,Le.__webglTexture,0,lt(p)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,K,Le.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(y,p,O){if(n.bindRenderbuffer(n.RENDERBUFFER,y),p.depthBuffer){const G=p.depthTexture,K=G&&G.isDepthTexture?G.type:null,ce=A(p.stencilBuffer,K),fe=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ft(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt(p),ce,p.width,p.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt(p),ce,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,ce,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,y)}else{const G=p.textures;for(let K=0;K<G.length;K++){const ce=G[K],fe=s.convert(ce.format,ce.colorSpace),Z=s.convert(ce.type),Q=S(ce.internalFormat,fe,Z,ce.normalized,ce.colorSpace);ft(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt(p),Q,p.width,p.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt(p),Q,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,Q,p.width,p.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(y,p,O){const G=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(p.depthTexture);if(K.__renderTarget=p,(!K.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),G){if(K.__webglInit===void 0&&(K.__webglInit=!0,p.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),qe(n.TEXTURE_CUBE_MAP,p.depthTexture);const pe=s.convert(p.depthTexture.format),Le=s.convert(p.depthTexture.type);let _e;p.depthTexture.format===Cn?_e=n.DEPTH_COMPONENT24:p.depthTexture.format===ei&&(_e=n.DEPTH24_STENCIL8);for(let he=0;he<6;he++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,_e,p.width,p.height,0,pe,Le,null)}}else ne(p.depthTexture,0);const ce=K.__webglTexture,fe=lt(p),Z=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,Q=p.depthTexture.format===ei?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(p.depthTexture.format===Cn)ft(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Z,ce,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Z,ce,0);else if(p.depthTexture.format===ei)ft(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Z,ce,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Z,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(y){const p=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==y.depthTexture){const G=y.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),G){const K=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),p.__depthDisposeCallback=K}p.__boundDepthTexture=G}if(y.depthTexture&&!p.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)Oe(p.__webglFramebuffer[G],y,G);else{const G=y.texture.mipmaps;G&&G.length>0?Oe(p.__webglFramebuffer[0],y,0):Oe(p.__webglFramebuffer,y,0)}else if(O){p.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[G]),p.__webglDepthbuffer[G]===void 0)p.__webglDepthbuffer[G]=n.createRenderbuffer(),nt(p.__webglDepthbuffer[G],y,!1);else{const K=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=p.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ce)}}else{const G=y.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=n.createRenderbuffer(),nt(p.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=p.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(y,p,O){const G=i.get(y);p!==void 0&&ge(G.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ke(y)}function He(y){const p=y.texture,O=i.get(y),G=i.get(p);y.addEventListener("dispose",_);const K=y.textures,ce=y.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=p.version,a.memory.textures++),ce){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(p.mipmaps&&p.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let Q=0;Q<p.mipmaps.length;Q++)O.__webglFramebuffer[Z][Q]=n.createFramebuffer()}else O.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<p.mipmaps.length;Z++)O.__webglFramebuffer[Z]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(fe)for(let Z=0,Q=K.length;Z<Q;Z++){const pe=i.get(K[Z]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&ft(y)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const Q=K[Z];O.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const pe=s.convert(Q.format,Q.colorSpace),Le=s.convert(Q.type),_e=S(Q.internalFormat,pe,Le,Q.normalized,Q.colorSpace,y.isXRRenderTarget===!0),he=lt(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,he,_e,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),nt(O.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),qe(n.TEXTURE_CUBE_MAP,p);for(let Z=0;Z<6;Z++)if(p.mipmaps&&p.mipmaps.length>0)for(let Q=0;Q<p.mipmaps.length;Q++)ge(O.__webglFramebuffer[Z][Q],y,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else ge(O.__webglFramebuffer[Z],y,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(p)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let Z=0,Q=K.length;Z<Q;Z++){const pe=K[Z],Le=i.get(pe);let _e=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(_e=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Le.__webglTexture),qe(_e,pe),ge(O.__webglFramebuffer,y,pe,n.COLOR_ATTACHMENT0+Z,_e,0),f(pe)&&w(_e)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Z=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,G.__webglTexture),qe(Z,p),p.mipmaps&&p.mipmaps.length>0)for(let Q=0;Q<p.mipmaps.length;Q++)ge(O.__webglFramebuffer[Q],y,p,n.COLOR_ATTACHMENT0,Z,Q);else ge(O.__webglFramebuffer,y,p,n.COLOR_ATTACHMENT0,Z,0);f(p)&&w(Z),t.unbindTexture()}y.depthBuffer&&Ke(y)}function Ze(y){const p=y.textures;for(let O=0,G=p.length;O<G;O++){const K=p[O];if(f(K)){const ce=R(y),fe=i.get(K).__webglTexture;t.bindTexture(ce,fe),w(ce),t.unbindTexture()}}}const mt=[],ht=[];function vt(y){if(y.samples>0){if(ft(y)===!1){const p=y.textures,O=y.width,G=y.height;let K=n.COLOR_BUFFER_BIT;const ce=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(y),Z=p.length>1;if(Z)for(let pe=0;pe<p.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const Q=y.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let pe=0;pe<p.length;pe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const Le=i.get(p[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,O,G,0,0,O,G,K,n.NEAREST),l===!0&&(mt.length=0,ht.length=0,mt.push(n.COLOR_ATTACHMENT0+pe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(mt.push(ce),ht.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let pe=0;pe<p.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const Le=i.get(p[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const p=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[p])}}}function lt(y){return Math.min(r.maxSamples,y.samples)}function ft(y){const p=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function P(y){const p=a.render.frame;d.get(y)!==p&&(d.set(y,p),y.update())}function ct(y,p){const O=y.colorSpace,G=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==kr&&O!==Gn&&(Je.getTransfer(O)===ot?(G!==Qt||K!==qt)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",O)),p}function et(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.getTextureUnits=j,this.setTextureUnits=H,this.setTexture2D=ne,this.setTexture2DArray=se,this.setTexture3D=de,this.setTextureCube=Se,this.rebindTextures=je,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tm(n,e){function t(i,r=Gn){let s;const a=Je.getTransfer(r);if(i===qt)return n.UNSIGNED_BYTE;if(i===Ia)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Na)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===hc)return n.BYTE;if(i===pc)return n.SHORT;if(i===$i)return n.UNSIGNED_SHORT;if(i===Ua)return n.INT;if(i===un)return n.UNSIGNED_INT;if(i===sn)return n.FLOAT;if(i===Rn)return n.HALF_FLOAT;if(i===_c)return n.ALPHA;if(i===vc)return n.RGB;if(i===Qt)return n.RGBA;if(i===Cn)return n.DEPTH_COMPONENT;if(i===ei)return n.DEPTH_STENCIL;if(i===xc)return n.RED;if(i===Fa)return n.RED_INTEGER;if(i===ni)return n.RG;if(i===Oa)return n.RG_INTEGER;if(i===Ba)return n.RGBA_INTEGER;if(i===Nr||i===Fr||i===Or||i===Br)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Nr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Nr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zs||i===Js||i===Qs||i===js)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Js)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===js)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ea||i===ta||i===na||i===ia||i===ra||i===Hr||i===sa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ea||i===ta)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===na)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ia)return s.COMPRESSED_R11_EAC;if(i===ra)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Hr)return s.COMPRESSED_RG11_EAC;if(i===sa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===aa||i===oa||i===ca||i===la||i===ua||i===da||i===fa||i===ha||i===pa||i===ma||i===ga||i===_a||i===va||i===xa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===aa)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oa)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ca)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===la)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ua)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===da)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fa)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ha)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pa)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ma)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ga)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_a)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===va)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xa)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sa||i===Ma||i===ya)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sa)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ma)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ea||i===ba||i===Gr||i===Ta)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ba)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ta)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,im=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Rc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new fn({vertexShader:nm,fragmentShader:im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sm extends ri{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,g=null,x=null;const M=typeof XRWebGLBinding<"u",m=new rm,f={},w=t.getContextAttributes();let R=null,S=null;const A=[],b=[],C=new st;let _=null;const E=new Xt;E.viewport=new gt;const D=new Xt;D.viewport=new gt;const L=[E,D],F=new pu;let J=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=A[q];return le===void 0&&(le=new us,A[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=A[q];return le===void 0&&(le=new us,A[q]=le),le.getGripSpace()},this.getHand=function(q){let le=A[q];return le===void 0&&(le=new us,A[q]=le),le.getHandSpace()};function H(q){const le=b.indexOf(q.inputSource);if(le===-1)return;const ae=A[le];ae!==void 0&&(ae.update(q.inputSource,q.frame,c||a),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",X);for(let q=0;q<A.length;q++){const le=b[q];le!==null&&(b[q]=null,A[q].disconnect(le))}J=null,j=null,m.reset();for(const q in f)delete f[q];e.setRenderTarget(R),g=null,u=null,h=null,r=null,S=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",X),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Be=null,oe=null;w.depth&&(oe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=w.stencil?ei:Cn,Be=w.stencil?Yi:un);const ge={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(ge),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new cn(u.textureWidth,u.textureHeight,{format:Qt,type:qt,depthTexture:new Ci(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ae={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new cn(g.framebufferWidth,g.framebufferHeight,{format:Qt,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(q){for(let le=0;le<q.removed.length;le++){const ae=q.removed[le],Be=b.indexOf(ae);Be>=0&&(b[Be]=null,A[Be].disconnect(ae))}for(let le=0;le<q.added.length;le++){const ae=q.added[le];let Be=b.indexOf(ae);if(Be===-1){for(let ge=0;ge<A.length;ge++)if(ge>=b.length){b.push(ae),Be=ge;break}else if(b[ge]===null){b[ge]=ae,Be=ge;break}if(Be===-1)break}const oe=A[Be];oe&&oe.connect(ae)}}const ne=new k,se=new k;function de(q,le,ae){ne.setFromMatrixPosition(le.matrixWorld),se.setFromMatrixPosition(ae.matrixWorld);const Be=ne.distanceTo(se),oe=le.projectionMatrix.elements,ge=ae.projectionMatrix.elements,nt=oe[14]/(oe[10]-1),Oe=oe[14]/(oe[10]+1),Ke=(oe[9]+1)/oe[5],je=(oe[9]-1)/oe[5],He=(oe[8]-1)/oe[0],Ze=(ge[8]+1)/ge[0],mt=nt*He,ht=nt*Ze,vt=Be/(-He+Ze),lt=vt*-He;if(le.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(lt),q.translateZ(vt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),oe[10]===-1)q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const ft=nt+vt,P=Oe+vt,ct=mt-lt,et=ht+(Be-lt),y=Ke*Oe/P*ft,p=je*Oe/P*ft;q.projectionMatrix.makePerspective(ct,et,y,p,ft,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Se(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let le=q.near,ae=q.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),F.near=D.near=E.near=le,F.far=D.far=E.far=ae,(J!==F.near||j!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),J=F.near,j=F.far),F.layers.mask=q.layers.mask|6,E.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const Be=q.parent,oe=F.cameras;Se(F,Be);for(let ge=0;ge<oe.length;ge++)Se(oe[ge],Be);oe.length===2?de(F,E,D):F.projectionMatrix.copy(E.projectionMatrix),be(q,F,Be)};function be(q,le,ae){ae===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Aa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&g===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(q){return f[q]};let ze=null;function Ne(q,le){if(d=le.getViewerPose(c||a),x=le,d!==null){const ae=d.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let Be=!1;ae.length!==F.cameras.length&&(F.cameras.length=0,Be=!0);for(let Oe=0;Oe<ae.length;Oe++){const Ke=ae[Oe];let je=null;if(g!==null)je=g.getViewport(Ke);else{const Ze=h.getViewSubImage(u,Ke);je=Ze.viewport,Oe===0&&(e.setRenderTargetTextures(S,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(S))}let He=L[Oe];He===void 0&&(He=new Xt,He.layers.enable(Oe),He.viewport=new gt,L[Oe]=He),He.matrix.fromArray(Ke.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ke.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(je.x,je.y,je.width,je.height),Oe===0&&(F.matrix.copy(He.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Be===!0&&F.cameras.push(He)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const Oe=h.getDepthInformation(ae[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,r.renderState)}if(oe&&oe.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let Oe=0;Oe<ae.length;Oe++){const Ke=ae[Oe].camera;if(Ke){let je=f[Ke];je||(je=new Rc,f[Ke]=je);const He=h.getCameraImage(Ke);je.sourceTexture=He}}}}for(let ae=0;ae<A.length;ae++){const Be=b[ae],oe=A[ae];Be!==null&&oe!==void 0&&oe.update(Be,le,c||a)}ze&&ze(q,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),x=null}const qe=new Dc;qe.setAnimationLoop(Ne),this.setAnimationLoop=function(q){ze=q},this.dispose=function(){}}}const am=new St,zc=new Xe;zc.set(-1,0,0,0,1,0,0,0,1);function om(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Cc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,w,R,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&g(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),R=w.envMap,S=w.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(am.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zc),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=R*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cm(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const b=A.program;i.uniformBlockBinding(S,b)}function c(S,A){let b=r[S.id];b===void 0&&(m(S),b=d(S),r[S.id]=b,S.addEventListener("dispose",w));const C=A.program;i.updateUBOMapping(S,C);const _=e.render.frame;s[S.id]!==_&&(u(S),s[S.id]=_)}function d(S){const A=h();S.__bindingPointIndex=A;const b=n.createBuffer(),C=S.__size,_=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,b),b}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const A=r[S.id],b=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let _=0,E=b.length;_<E;_++){const D=b[_];if(Array.isArray(D))for(let L=0,F=D.length;L<F;L++)g(D[L],_,L,C);else g(D,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(S,A,b,C){if(M(S,A,b,C)===!0){const _=S.__offset,E=S.value;if(Array.isArray(E)){let D=0;for(let L=0;L<E.length;L++){const F=E[L],J=f(F);x(F,S.__data,D),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(D+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,S.__data)}}function x(S,A,b){typeof S=="number"||typeof S=="boolean"?A[0]=S:S.isMatrix3?(A[0]=S.elements[0],A[1]=S.elements[1],A[2]=S.elements[2],A[3]=0,A[4]=S.elements[3],A[5]=S.elements[4],A[6]=S.elements[5],A[7]=0,A[8]=S.elements[6],A[9]=S.elements[7],A[10]=S.elements[8],A[11]=0):ArrayBuffer.isView(S)?A.set(new S.constructor(S.buffer,S.byteOffset,A.length)):S.toArray(A,b)}function M(S,A,b,C){const _=S.value,E=A+"_"+b;if(C[E]===void 0)return typeof _=="number"||typeof _=="boolean"?C[E]=_:ArrayBuffer.isView(_)?C[E]=_.slice():C[E]=_.clone(),!0;{const D=C[E];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return C[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function m(S){const A=S.uniforms;let b=0;const C=16;for(let E=0,D=A.length;E<D;E++){const L=Array.isArray(A[E])?A[E]:[A[E]];for(let F=0,J=L.length;F<J;F++){const j=L[F],H=Array.isArray(j.value)?j.value:[j.value];for(let $=0,X=H.length;$<X;$++){const ne=H[$],se=f(ne),de=b%C,Se=de%se.boundary,be=de+Se;b+=Se,be!==0&&C-be<se.storage&&(b+=C-be),j.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=se.storage}}}const _=b%C;return _>0&&(b+=C-_),S.__size=b,S.__cache={},this}function f(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",S),A}function w(S){const A=S.target;A.removeEventListener("dispose",w);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function R(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:R}}const lm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let en=null;function um(){return en===null&&(en=new Jl(lm,16,16,ni,Rn),en.name="DFG_LUT",en.minFilter=Ct,en.magFilter=Ct,en.wrapS=bn,en.wrapT=bn,en.generateMipmaps=!1,en.needsUpdate=!0),en}class dm{constructor(e={}){const{canvas:t=wl(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:g=qt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const M=g,m=new Set([Ba,Oa,Fa]),f=new Set([qt,un,$i,Yi,Ia,Na]),w=new Uint32Array(4),R=new Int32Array(4),S=new k;let A=null,b=null;const C=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=on,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let L=!1,F=null,J=null,j=null,H=null;this._outputColorSpace=Ft;let $=0,X=0,ne=null,se=-1,de=null;const Se=new gt,be=new gt;let ze=null;const Ne=new at(0);let qe=0,q=t.width,le=t.height,ae=1,Be=null,oe=null;const ge=new gt(0,0,q,le),nt=new gt(0,0,q,le);let Oe=!1;const Ke=new Ac;let je=!1,He=!1;const Ze=new St,mt=new k,ht=new gt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function ft(){return ne===null?ae:1}let P=i;function ct(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Bt,!1),P===null){const I="webgl2";if(P=ct(I,v),P===null)throw ct(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw tt("WebGLRenderer: "+v.message),v}let et,y,p,O,G,K,ce,fe,Z,Q,pe,Le,_e,he,Ie,Fe,ke,U,ue,ee,me,Ee,ie;function Ce(){et=new uh(P),et.init(),me=new tm(P,et),y=new nh(P,et,e,me),p=new jp(P,et),y.reversedDepthBuffer&&u&&p.buffers.depth.setReversed(!0),J=P.createFramebuffer(),j=P.createFramebuffer(),H=P.createFramebuffer(),O=new hh(P),G=new zp,K=new em(P,et,p,G,y,me,O),ce=new lh(D),fe=new gu(P),Ee=new eh(P,fe),Z=new dh(P,fe,O,Ee),Q=new mh(P,Z,fe,Ee,O),U=new ph(P,y,K),Ie=new ih(G),pe=new Bp(D,ce,et,y,Ee,Ie),Le=new om(D,G),_e=new Hp,he=new $p(et),ke=new jf(D,ce,p,Q,x,l),Fe=new Qp(D,Q,y),ie=new cm(P,O,y,p),ue=new th(P,et,O),ee=new fh(P,et,O),O.programs=pe.programs,D.capabilities=y,D.extensions=et,D.properties=G,D.renderLists=_e,D.shadowMap=Fe,D.state=p,D.info=O}Ce(),M!==qt&&(E=new _h(M,t.width,t.height,o,r,s));const we=new sm(D,P);this.xr=we,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const v=et.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=et.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(v){v!==void 0&&(ae=v,this.setSize(q,le,!1))},this.getSize=function(v){return v.set(q,le)},this.setSize=function(v,I,W=!0){if(we.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,le=I,t.width=Math.floor(v*ae),t.height=Math.floor(I*ae),W===!0&&(t.style.width=v+"px",t.style.height=I+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(q*ae,le*ae).floor()},this.setDrawingBufferSize=function(v,I,W){q=v,le=I,ae=W,t.width=Math.floor(v*W),t.height=Math.floor(I*W),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(M===qt){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Se)},this.getViewport=function(v){return v.copy(ge)},this.setViewport=function(v,I,W,B){v.isVector4?ge.set(v.x,v.y,v.z,v.w):ge.set(v,I,W,B),p.viewport(Se.copy(ge).multiplyScalar(ae).round())},this.getScissor=function(v){return v.copy(nt)},this.setScissor=function(v,I,W,B){v.isVector4?nt.set(v.x,v.y,v.z,v.w):nt.set(v,I,W,B),p.scissor(be.copy(nt).multiplyScalar(ae).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(v){p.setScissorTest(Oe=v)},this.setOpaqueSort=function(v){Be=v},this.setTransparentSort=function(v){oe=v},this.getClearColor=function(v){return v.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,W=!0){let B=0;if(v){let z=!1;if(ne!==null){const xe=ne.texture.format;z=m.has(xe)}if(z){const xe=ne.texture.type,Te=f.has(xe),ve=ke.getClearColor(),Re=ke.getClearAlpha(),T=ve.r,N=ve.g,Y=ve.b;Te?(w[0]=T,w[1]=N,w[2]=Y,w[3]=Re,P.clearBufferuiv(P.COLOR,0,w)):(R[0]=T,R[1]=N,R[2]=Y,R[3]=Re,P.clearBufferiv(P.COLOR,0,R))}else B|=P.COLOR_BUFFER_BIT}I&&(B|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Bt,!1),ke.dispose(),_e.dispose(),he.dispose(),G.dispose(),ce.dispose(),Q.dispose(),Ee.dispose(),ie.dispose(),pe.dispose(),we.dispose(),we.removeEventListener("sessionstart",nr),we.removeEventListener("sessionend",Ln),hn.stop()};function ut(v){v.preventDefault(),co("WebGLRenderer: Context Lost."),L=!0}function it(){co("WebGLRenderer: Context Restored."),L=!1;const v=O.autoReset,I=Fe.enabled,W=Fe.autoUpdate,B=Fe.needsUpdate,z=Fe.type;Ce(),O.autoReset=v,Fe.enabled=I,Fe.autoUpdate=W,Fe.needsUpdate=B,Fe.type=z}function Bt(v){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function zt(v){const I=v.target;I.removeEventListener("dispose",zt),er(I)}function er(v){si(v),G.remove(v)}function si(v){const I=G.get(v).programs;I!==void 0&&(I.forEach(function(W){pe.releaseProgram(W)}),v.isShaderMaterial&&pe.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,W,B,z,xe){I===null&&(I=vt);const Te=z.isMesh&&z.matrixWorld.determinantAffine()<0,ve=oi(v,I,W,B,z);p.setMaterial(B,Te);let Re=W.index,T=1;if(B.wireframe===!0){if(Re=Z.getWireframeAttribute(W),Re===void 0)return;T=2}const N=W.drawRange,Y=W.attributes.position;let V=N.start*T,re=(N.start+N.count)*T;xe!==null&&(V=Math.max(V,xe.start*T),re=Math.min(re,(xe.start+xe.count)*T)),Re!==null?(V=Math.max(V,0),re=Math.min(re,Re.count)):Y!=null&&(V=Math.max(V,0),re=Math.min(re,Y.count));const Pe=re-V;if(Pe<0||Pe===1/0)return;Ee.setup(z,B,ve,W,Re);let Me,Ae=ue;if(Re!==null&&(Me=fe.get(Re),Ae=ee,Ae.setIndex(Me)),z.isMesh)B.wireframe===!0?(p.setLineWidth(B.wireframeLinewidth*ft()),Ae.setMode(P.LINES)):Ae.setMode(P.TRIANGLES);else if(z.isLine){let Ve=B.linewidth;Ve===void 0&&(Ve=1),p.setLineWidth(Ve*ft()),z.isLineSegments?Ae.setMode(P.LINES):z.isLineLoop?Ae.setMode(P.LINE_LOOP):Ae.setMode(P.LINE_STRIP)}else z.isPoints?Ae.setMode(P.POINTS):z.isSprite&&Ae.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Ae.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ve=z._multiDrawStarts,te=z._multiDrawCounts,De=z._multiDrawCount,Ue=Re?fe.get(Re).bytesPerElement:1,We=G.get(B).currentProgram.getUniforms();for(let pt=0;pt<De;pt++)We.setValue(P,"_gl_DrawID",pt),Ae.render(Ve[pt]/Ue,te[pt])}else if(z.isInstancedMesh)Ae.renderInstances(V,Pe,z.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,te=Math.min(W.instanceCount,Ve);Ae.renderInstances(V,Pe,te)}else Ae.render(V,Pe)};function Ui(v,I,W){v.transparent===!0&&v.side===En&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,mn(v,I,W),v.side=Wn,v.needsUpdate=!0,mn(v,I,W),v.side=En):mn(v,I,W)}this.compile=function(v,I,W=null){W===null&&(W=v),b=he.get(W),b.init(I),_.push(b),W.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),v!==W&&v.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();const B=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const xe=z.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const ve=xe[Te];Ui(ve,W,z),B.add(ve)}else Ui(xe,W,z),B.add(xe)}),b=_.pop(),B},this.compileAsync=function(v,I,W=null){const B=this.compile(v,I,W);return new Promise(z=>{function xe(){if(B.forEach(function(Te){G.get(Te).currentProgram.isReady()&&B.delete(Te)}),B.size===0){z(v);return}setTimeout(xe,10)}et.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ai=null;function tr(v){ai&&ai(v)}function nr(){hn.stop()}function Ln(){hn.start()}const hn=new Dc;hn.setAnimationLoop(tr),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(v){ai=v,we.setAnimationLoop(v),v===null?hn.stop():hn.start()},we.addEventListener("sessionstart",nr),we.addEventListener("sessionend",Ln),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(v,I);const W=we.enabled===!0&&we.isPresenting===!0,B=E!==null&&(ne===null||W)&&E.begin(D,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(I),I=we.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,I,ne),b=he.get(v,_.length),b.init(I),b.state.textureUnits=K.getTextureUnits(),_.push(b),Ze.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ke.setFromProjectionMatrix(Ze,an,I.reversedDepth),He=this.localClippingEnabled,je=Ie.init(this.clippingPlanes,He),A=_e.get(v,C.length),A.init(),C.push(A),we.enabled===!0&&we.isPresenting===!0){const Te=D.xr.getDepthSensingMesh();Te!==null&&Ii(Te,I,-1/0,D.sortObjects)}Ii(v,I,0,D.sortObjects),A.finish(),D.sortObjects===!0&&A.sort(Be,oe,I.reversedDepth),lt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,lt&&ke.addToRenderList(A,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Ie.beginShadows();const z=b.state.shadowsArray;if(Fe.render(z,v,I),je===!0&&Ie.endShadows(),(B&&E.hasRenderPass())===!1){const Te=A.opaque,ve=A.transmissive;if(b.setupLights(),I.isArrayCamera){const Re=I.cameras;if(ve.length>0)for(let T=0,N=Re.length;T<N;T++){const Y=Re[T];kt(Te,ve,v,Y)}lt&&ke.render(v);for(let T=0,N=Re.length;T<N;T++){const Y=Re[T];ir(A,v,Y,Y.viewport)}}else ve.length>0&&kt(Te,ve,v,I),lt&&ke.render(v),ir(A,v,I)}ne!==null&&X===0&&(K.updateMultisampleRenderTarget(ne),K.updateRenderTargetMipmap(ne)),B&&E.end(D),v.isScene===!0&&v.onAfterRender(D,v,I),Ee.resetDefaultState(),se=-1,de=null,_.pop(),_.length>0?(b=_[_.length-1],K.setTextureUnits(b.state.textureUnits),je===!0&&Ie.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,F!==null&&F.renderEnd()};function Ii(v,I,W,B){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ke.intersectsSprite(v)){B&&ht.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ze);const Te=Q.update(v),ve=v.material;ve.visible&&A.push(v,Te,ve,W,ht.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ke.intersectsObject(v))){const Te=Q.update(v),ve=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ht.copy(v.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ht.copy(Te.boundingSphere.center)),ht.applyMatrix4(v.matrixWorld).applyMatrix4(Ze)),Array.isArray(ve)){const Re=Te.groups;for(let T=0,N=Re.length;T<N;T++){const Y=Re[T],V=ve[Y.materialIndex];V&&V.visible&&A.push(v,Te,V,W,ht.z,Y)}}else ve.visible&&A.push(v,Te,ve,W,ht.z,null)}}const xe=v.children;for(let Te=0,ve=xe.length;Te<ve;Te++)Ii(xe[Te],I,W,B)}function ir(v,I,W,B){const{opaque:z,transmissive:xe,transparent:Te}=v;b.setupLightsView(W),je===!0&&Ie.setGlobalState(D.clippingPlanes,W),B&&p.viewport(Se.copy(B)),z.length>0&&pn(z,I,W),xe.length>0&&pn(xe,I,W),Te.length>0&&pn(Te,I,W),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function kt(v,I,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){const V=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new cn(1,1,{generateMipmaps:!0,type:V?Rn:qt,minFilter:jn,samples:Math.max(4,y.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const xe=b.state.transmissionRenderTarget[B.id],Te=B.viewport||Se;xe.setSize(Te.z*D.transmissionResolutionScale,Te.w*D.transmissionResolutionScale);const ve=D.getRenderTarget(),Re=D.getActiveCubeFace(),T=D.getActiveMipmapLevel();D.setRenderTarget(xe),D.getClearColor(Ne),qe=D.getClearAlpha(),qe<1&&D.setClearColor(16777215,.5),D.clear(),lt&&ke.render(W);const N=D.toneMapping;D.toneMapping=on;const Y=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),je===!0&&Ie.setGlobalState(D.clippingPlanes,B),pn(v,W,B),K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe),et.has("WEBGL_multisampled_render_to_texture")===!1){let V=!1;for(let re=0,Pe=I.length;re<Pe;re++){const Me=I[re],{object:Ae,geometry:Ve,material:te,group:De}=Me;if(te.side===En&&Ae.layers.test(B.layers)){const Ue=te.side;te.side=Ot,te.needsUpdate=!0,Dn(Ae,W,B,Ve,te,De),te.side=Ue,te.needsUpdate=!0,V=!0}}V===!0&&(K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe))}D.setRenderTarget(ve,Re,T),D.setClearColor(Ne,qe),Y!==void 0&&(B.viewport=Y),D.toneMapping=N}function pn(v,I,W){const B=I.isScene===!0?I.overrideMaterial:null;for(let z=0,xe=v.length;z<xe;z++){const Te=v[z],{object:ve,geometry:Re,group:T}=Te;let N=Te.material;N.allowOverride===!0&&B!==null&&(N=B),ve.layers.test(W.layers)&&Dn(ve,I,W,Re,N,T)}}function Dn(v,I,W,B,z,xe){v.onBeforeRender(D,I,W,B,z,xe),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(D,I,W,B,v,xe),z.transparent===!0&&z.side===En&&z.forceSinglePass===!1?(z.side=Ot,z.needsUpdate=!0,D.renderBufferDirect(W,I,B,z,v,xe),z.side=Wn,z.needsUpdate=!0,D.renderBufferDirect(W,I,B,z,v,xe),z.side=En):D.renderBufferDirect(W,I,B,z,v,xe),v.onAfterRender(D,I,W,B,z,xe)}function mn(v,I,W){I.isScene!==!0&&(I=vt);const B=G.get(v),z=b.state.lights,xe=b.state.shadowsArray,Te=z.state.version,ve=pe.getParameters(v,z.state,xe,I,W,b.state.lightProbeGridArray),Re=pe.getProgramCacheKey(ve);let T=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;const N=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=ce.get(v.envMap||B.environment,N),B.envMapRotation=B.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,T===void 0&&(v.addEventListener("dispose",zt),T=new Map,B.programs=T);let Y=T.get(Re);if(Y!==void 0){if(B.currentProgram===Y&&B.lightsStateVersion===Te)return sr(v,ve),Y}else ve.uniforms=pe.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,W,ve),v.onBeforeCompile(ve,D),Y=pe.acquireProgram(ve,Re),T.set(Re,Y),B.uniforms=ve.uniforms;const V=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(V.clippingPlanes=Ie.uniform),sr(v,ve),B.needsLights=jr(v),B.lightsStateVersion=Te,B.needsLights&&(V.ambientLightColor.value=z.state.ambient,V.lightProbe.value=z.state.probe,V.directionalLights.value=z.state.directional,V.directionalLightShadows.value=z.state.directionalShadow,V.spotLights.value=z.state.spot,V.spotLightShadows.value=z.state.spotShadow,V.rectAreaLights.value=z.state.rectArea,V.ltc_1.value=z.state.rectAreaLTC1,V.ltc_2.value=z.state.rectAreaLTC2,V.pointLights.value=z.state.point,V.pointLightShadows.value=z.state.pointShadow,V.hemisphereLights.value=z.state.hemi,V.directionalShadowMatrix.value=z.state.directionalShadowMatrix,V.spotLightMatrix.value=z.state.spotLightMatrix,V.spotLightMap.value=z.state.spotLightMap,V.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=Y,B.uniformsList=null,Y}function rr(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=zr.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function sr(v,I){const W=G.get(v);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function ar(v,I){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let W=0,B=v.length;W<B;W++){const z=v[W];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function oi(v,I,W,B,z){I.isScene!==!0&&(I=vt),K.resetTextureUnits();const xe=I.fog,Te=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,ve=ne===null?D.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Je.workingColorSpace,Re=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,T=ce.get(B.envMap||Te,Re),N=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Y=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),V=!!W.morphAttributes.position,re=!!W.morphAttributes.normal,Pe=!!W.morphAttributes.color;let Me=on;B.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Me=D.toneMapping);const Ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ve=Ae!==void 0?Ae.length:0,te=G.get(B),De=b.state.lights;if(je===!0&&(He===!0||v!==de)){const rt=v===de&&B.id===se;Ie.setState(B,v,rt)}let Ue=!1;B.version===te.__version?(te.needsLights&&te.lightsStateVersion!==De.state.version||te.outputColorSpace!==ve||z.isBatchedMesh&&te.batching===!1||!z.isBatchedMesh&&te.batching===!0||z.isBatchedMesh&&te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&te.instancing===!1||!z.isInstancedMesh&&te.instancing===!0||z.isSkinnedMesh&&te.skinning===!1||!z.isSkinnedMesh&&te.skinning===!0||z.isInstancedMesh&&te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&te.instancingMorph===!1&&z.morphTexture!==null||te.envMap!==T||B.fog===!0&&te.fog!==xe||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ie.numPlanes||te.numIntersection!==Ie.numIntersection)||te.vertexAlphas!==N||te.vertexTangents!==Y||te.morphTargets!==V||te.morphNormals!==re||te.morphColors!==Pe||te.toneMapping!==Me||te.morphTargetsCount!==Ve||!!te.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,te.__version=B.version);let We=te.currentProgram;Ue===!0&&(We=mn(B,I,z),F&&B.isNodeMaterial&&F.onUpdateProgram(B,We,te));let pt=!1,_t=!1,Lt=!1;const Ye=We.getUniforms(),dt=te.uniforms;if(p.useProgram(We.program)&&(pt=!0,_t=!0,Lt=!0),B.id!==se&&(se=B.id,_t=!0),te.needsLights){const rt=ar(b.state.lightProbeGridArray,z);te.lightProbeGrid!==rt&&(te.lightProbeGrid=rt,_t=!0)}if(pt||de!==v){p.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ye.setValue(P,"projectionMatrix",v.projectionMatrix),Ye.setValue(P,"viewMatrix",v.matrixWorldInverse);const Dt=Ye.map.cameraPosition;Dt!==void 0&&Dt.setValue(P,mt.setFromMatrixPosition(v.matrixWorld)),y.logarithmicDepthBuffer&&Ye.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ye.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),de!==v&&(de=v,_t=!0,Lt=!0)}if(te.needsLights&&(De.state.directionalShadowMap.length>0&&Ye.setValue(P,"directionalShadowMap",De.state.directionalShadowMap,K),De.state.spotShadowMap.length>0&&Ye.setValue(P,"spotShadowMap",De.state.spotShadowMap,K),De.state.pointShadowMap.length>0&&Ye.setValue(P,"pointShadowMap",De.state.pointShadowMap,K)),z.isSkinnedMesh){Ye.setOptional(P,z,"bindMatrix"),Ye.setOptional(P,z,"bindMatrixInverse");const rt=z.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),Ye.setValue(P,"boneTexture",rt.boneTexture,K))}z.isBatchedMesh&&(Ye.setOptional(P,z,"batchingTexture"),Ye.setValue(P,"batchingTexture",z._matricesTexture,K),Ye.setOptional(P,z,"batchingIdTexture"),Ye.setValue(P,"batchingIdTexture",z._indirectTexture,K),Ye.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&Ye.setValue(P,"batchingColorTexture",z._colorsTexture,K));const At=W.morphAttributes;if((At.position!==void 0||At.normal!==void 0||At.color!==void 0)&&U.update(z,W,We),(_t||te.receiveShadow!==z.receiveShadow)&&(te.receiveShadow=z.receiveShadow,Ye.setValue(P,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(dt.envMapIntensity.value=I.environmentIntensity),dt.dfgLUT!==void 0&&(dt.dfgLUT.value=um()),_t){if(Ye.setValue(P,"toneMappingExposure",D.toneMappingExposure),te.needsLights&&or(dt,Lt),xe&&B.fog===!0&&Le.refreshFogUniforms(dt,xe),Le.refreshMaterialUniforms(dt,B,ae,le,b.state.transmissionRenderTarget[v.id]),te.needsLights&&te.lightProbeGrid){const rt=te.lightProbeGrid;dt.probesSH.value=rt.texture,dt.probesMin.value.copy(rt.boundingBox.min),dt.probesMax.value.copy(rt.boundingBox.max),dt.probesResolution.value.copy(rt.resolution)}zr.upload(P,rr(te),dt,K)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(zr.upload(P,rr(te),dt,K),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ye.setValue(P,"center",z.center),Ye.setValue(P,"modelViewMatrix",z.modelViewMatrix),Ye.setValue(P,"normalMatrix",z.normalMatrix),Ye.setValue(P,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const rt=B.uniformsGroups;for(let Dt=0,Un=rt.length;Dt<Un;Dt++){const Za=rt[Dt];ie.update(Za,We),ie.bind(Za,We)}}return We}function or(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function jr(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,I,W){const B=G.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=I,G.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const W=G.get(v);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,W=0){ne=v,$=I,X=W;let B=null,z=!1,xe=!1;if(v){const ve=G.get(v);if(ve.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(P.FRAMEBUFFER,ve.__webglFramebuffer),Se.copy(v.viewport),be.copy(v.scissor),ze=v.scissorTest,p.viewport(Se),p.scissor(be),p.setScissorTest(ze),se=-1;return}else if(ve.__webglFramebuffer===void 0)K.setupRenderTarget(v);else if(ve.__hasExternalTextures)K.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const N=v.depthTexture;if(ve.__boundDepthTexture!==N){if(N!==null&&G.has(N)&&(v.width!==N.image.width||v.height!==N.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(v)}}const Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(xe=!0);const T=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(T[I])?B=T[I][W]:B=T[I],z=!0):v.samples>0&&K.useMultisampledRTT(v)===!1?B=G.get(v).__webglMultisampledFramebuffer:Array.isArray(T)?B=T[W]:B=T,Se.copy(v.viewport),be.copy(v.scissor),ze=v.scissorTest}else Se.copy(ge).multiplyScalar(ae).floor(),be.copy(nt).multiplyScalar(ae).floor(),ze=Oe;if(W!==0&&(B=J),p.bindFramebuffer(P.FRAMEBUFFER,B)&&p.drawBuffers(v,B),p.viewport(Se),p.scissor(be),p.setScissorTest(ze),z){const ve=G.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve.__webglTexture,W)}else if(xe){const ve=I;for(let Re=0;Re<v.textures.length;Re++){const T=G.get(v.textures[Re]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Re,T.__webglTexture,W,ve)}}else if(v!==null&&W!==0){const ve=G.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ve.__webglTexture,W)}se=-1},this.readRenderTargetPixels=function(v,I,W,B,z,xe,Te,ve=0){if(!(v&&v.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){p.bindFramebuffer(P.FRAMEBUFFER,Re);try{const T=v.textures[ve],N=T.format,Y=T.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),!y.textureFormatReadable(N)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!y.textureTypeReadable(Y)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-B&&W>=0&&W<=v.height-z&&P.readPixels(I,W,B,z,me.convert(N),me.convert(Y),xe)}finally{const T=ne!==null?G.get(ne).__webglFramebuffer:null;p.bindFramebuffer(P.FRAMEBUFFER,T)}}},this.readRenderTargetPixelsAsync=async function(v,I,W,B,z,xe,Te,ve=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if(I>=0&&I<=v.width-B&&W>=0&&W<=v.height-z){p.bindFramebuffer(P.FRAMEBUFFER,Re);const T=v.textures[ve],N=T.format,Y=T.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),!y.textureFormatReadable(N))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!y.textureTypeReadable(Y))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const V=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,V),P.bufferData(P.PIXEL_PACK_BUFFER,xe.byteLength,P.STREAM_READ),P.readPixels(I,W,B,z,me.convert(N),me.convert(Y),0);const re=ne!==null?G.get(ne).__webglFramebuffer:null;p.bindFramebuffer(P.FRAMEBUFFER,re);const Pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Rl(P,Pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,V),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,xe),P.deleteBuffer(V),P.deleteSync(Pe),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,W=0){const B=Math.pow(2,-W),z=Math.floor(v.image.width*B),xe=Math.floor(v.image.height*B),Te=I!==null?I.x:0,ve=I!==null?I.y:0;K.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,Te,ve,z,xe),p.unbindTexture()},this.copyTextureToTexture=function(v,I,W=null,B=null,z=0,xe=0){let Te,ve,Re,T,N,Y,V,re,Pe;const Me=v.isCompressedTexture?v.mipmaps[xe]:v.image;if(W!==null)Te=W.max.x-W.min.x,ve=W.max.y-W.min.y,Re=W.isBox3?W.max.z-W.min.z:1,T=W.min.x,N=W.min.y,Y=W.isBox3?W.min.z:0;else{const dt=Math.pow(2,-z);Te=Math.floor(Me.width*dt),ve=Math.floor(Me.height*dt),v.isDataArrayTexture?Re=Me.depth:v.isData3DTexture?Re=Math.floor(Me.depth*dt):Re=1,T=0,N=0,Y=0}B!==null?(V=B.x,re=B.y,Pe=B.z):(V=0,re=0,Pe=0);const Ae=me.convert(I.format),Ve=me.convert(I.type);let te;I.isData3DTexture?(K.setTexture3D(I,0),te=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(K.setTexture2DArray(I,0),te=P.TEXTURE_2D_ARRAY):(K.setTexture2D(I,0),te=P.TEXTURE_2D),p.activeTexture(P.TEXTURE0),p.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),p.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),p.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const De=p.getParameter(P.UNPACK_ROW_LENGTH),Ue=p.getParameter(P.UNPACK_IMAGE_HEIGHT),We=p.getParameter(P.UNPACK_SKIP_PIXELS),pt=p.getParameter(P.UNPACK_SKIP_ROWS),_t=p.getParameter(P.UNPACK_SKIP_IMAGES);p.pixelStorei(P.UNPACK_ROW_LENGTH,Me.width),p.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Me.height),p.pixelStorei(P.UNPACK_SKIP_PIXELS,T),p.pixelStorei(P.UNPACK_SKIP_ROWS,N),p.pixelStorei(P.UNPACK_SKIP_IMAGES,Y);const Lt=v.isDataArrayTexture||v.isData3DTexture,Ye=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const dt=G.get(v),At=G.get(I),rt=G.get(dt.__renderTarget),Dt=G.get(At.__renderTarget);p.bindFramebuffer(P.READ_FRAMEBUFFER,rt.__webglFramebuffer),p.bindFramebuffer(P.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Un=0;Un<Re;Un++)Lt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(v).__webglTexture,z,Y+Un),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(I).__webglTexture,xe,Pe+Un)),P.blitFramebuffer(T,N,Te,ve,V,re,Te,ve,P.DEPTH_BUFFER_BIT,P.NEAREST);p.bindFramebuffer(P.READ_FRAMEBUFFER,null),p.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||G.has(v)){const dt=G.get(v),At=G.get(I);p.bindFramebuffer(P.READ_FRAMEBUFFER,j),p.bindFramebuffer(P.DRAW_FRAMEBUFFER,H);for(let rt=0;rt<Re;rt++)Lt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dt.__webglTexture,z,Y+rt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dt.__webglTexture,z),Ye?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.__webglTexture,xe,Pe+rt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,At.__webglTexture,xe),z!==0?P.blitFramebuffer(T,N,Te,ve,V,re,Te,ve,P.COLOR_BUFFER_BIT,P.NEAREST):Ye?P.copyTexSubImage3D(te,xe,V,re,Pe+rt,T,N,Te,ve):P.copyTexSubImage2D(te,xe,V,re,T,N,Te,ve);p.bindFramebuffer(P.READ_FRAMEBUFFER,null),p.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ye?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(te,xe,V,re,Pe,Te,ve,Re,Ae,Ve,Me.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(te,xe,V,re,Pe,Te,ve,Re,Ae,Me.data):P.texSubImage3D(te,xe,V,re,Pe,Te,ve,Re,Ae,Ve,Me):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,xe,V,re,Te,ve,Ae,Ve,Me.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,xe,V,re,Me.width,Me.height,Ae,Me.data):P.texSubImage2D(P.TEXTURE_2D,xe,V,re,Te,ve,Ae,Ve,Me);p.pixelStorei(P.UNPACK_ROW_LENGTH,De),p.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ue),p.pixelStorei(P.UNPACK_SKIP_PIXELS,We),p.pixelStorei(P.UNPACK_SKIP_ROWS,pt),p.pixelStorei(P.UNPACK_SKIP_IMAGES,_t),xe===0&&I.generateMipmaps&&P.generateMipmap(te),p.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&K.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?K.setTextureCube(v,0):v.isData3DTexture?K.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?K.setTexture2DArray(v,0):K.setTexture2D(v,0),p.unbindTexture()},this.resetState=function(){$=0,X=0,ne=null,p.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Ei={centerX:50,centerY:50,zoom:1},Is=(n,e,t)=>Math.min(t,Math.max(e,n));function Vn(n,e,t){return{x:n[0],y:n[1],z:-.015,scale:t<600?1.22:1.52,positionX:e[0],positionY:e[1]}}function Ns(n,e,t,i=1.65){const r=t<600,s=Is((50-e.x)/50,-1,1),a=Is((e.y-50)/50,-1,1),o=Is(i-1,0,2.2),l=1+o*(r?.22:.32),c=.62+o*.38;return{...n,scale:n.scale*l,positionX:n.positionX+s*(r?.36:.68)*c,positionY:n.positionY+a*(r?.26:.48)*c}}function fm(n,e){const t=[1.65,2.35,3.2],i=t.find(r=>r>n.zoom+.01)??t[t.length-1];return{centerX:e.x,centerY:e.y,zoom:i}}function hm(n,e){return{x:50+(n.x-e.centerX)*e.zoom,y:50+(n.y-e.centerY)*e.zoom}}function pm(n,e=4){return n.x>=-e&&n.x<=100+e&&n.y>=-e&&n.y<=100+e}function Mn(n,e){Object.assign(n,e)}const Pr=n=>n*Math.PI/180;function mm(n,e){if(n.latitude===void 0||n.longitude===void 0||e.latitude===void 0||e.longitude===void 0)return Number.POSITIVE_INFINITY;const t=6371,i=Pr(e.latitude-n.latitude),r=Pr(e.longitude-n.longitude),s=Pr(n.latitude),a=Pr(e.latitude),o=Math.sin(i/2)**2+Math.cos(s)*Math.cos(a)*Math.sin(r/2)**2;return t*2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))}function gm(n,e){if(n.latitude===void 0||n.longitude===void 0)return null;const t=e.filter(o=>o.id!==n.id).map(o=>({community:o,distanceKm:mm(n,o)})).filter(({distanceKm:o})=>Number.isFinite(o)).sort((o,l)=>o.distanceKm-l.distanceKm),i=.012,r=.008,s=[n.longitude-i,n.latitude-r,n.longitude+i,n.latitude+r].map(o=>o.toFixed(6)).join(","),a=`${n.latitude.toFixed(6)},${n.longitude.toFixed(6)}`;return{coordinateLabel:`${n.latitude.toFixed(5)}, ${n.longitude.toFixed(5)}`,within500m:t.filter(({distanceKm:o})=>o<=.5).length,within1km:t.filter(({distanceKm:o})=>o<=1).length,nearby:t.slice(0,3),embedUrl:`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(s)}&layer=mapnik&marker=${encodeURIComponent(a)}`,externalUrl:`https://www.openstreetmap.org/?mlat=${n.latitude.toFixed(6)}&mlon=${n.longitude.toFixed(6)}#map=16/${n.latitude.toFixed(6)}/${n.longitude.toFixed(6)}`}}const Vc={dongcheng:[[116.38,39.85],[116.47,39.98]],haidian:[[116.1,39.85],[116.41,40.15]],chaoyang:[[116.34,39.79],[116.66,40.14]],shijingshan:[[116.1,39.87],[116.28,40]],xicheng:[[116.31,39.86],[116.41,39.99]],fengtai:[[116.08,39.76],[116.49,39.92]],tongzhou:[[116.5,39.55],[116.94,40.05]],daxing:[[116.22,39.42],[116.73,39.85]]};function qr(n){return Number.isFinite(n.longitude)&&Number.isFinite(n.latitude)&&n.longitude>=70&&n.longitude<=140&&n.latitude>=10&&n.latitude<=60}function _m(n,e,t=.06){const i=e.filter(u=>u.district===n&&qr(u));if(!i.length)return Vc[n];const r=i.map(u=>u.longitude),s=i.map(u=>u.latitude),a=Math.min(...r),o=Math.max(...r),l=Math.min(...s),c=Math.max(...s),d=Math.max((o-a)*t,.006),h=Math.max((c-l)*t,.006);return[[a-d,l-h],[o+d,c+h]]}function vm(n,e,t){return{type:"FeatureCollection",features:n.filter(qr).map(r=>({type:"Feature",id:r.id,geometry:{type:"Point",coordinates:[r.longitude,r.latitude]},properties:{id:r.id,name:r.name,score:e(r),tier:t(r)}}))}}const Fs=n=>{const e=n*Math.PI/180;return Math.log(Math.tan(Math.PI/4+e/2))};function xm(n,e,t){const[[i,r],[s,a]]=t,o=(n-i)/Math.max(s-i,Number.EPSILON),l=Fs(a),c=Fs(r),d=(l-Fs(e))/Math.max(l-c,Number.EPSILON);return{x:Math.min(100,Math.max(0,o*100)),y:Math.min(100,Math.max(0,d*100))}}function $r(n,e){const t=n.length;if(t===0)return{community:null,currentId:null,position:0,total:0,positionLabel:"0 / 0",status:"empty"};if(!e)return{community:null,currentId:null,position:0,total:t,positionLabel:`— / ${t}`,status:"unselected"};const i=n.findIndex(r=>r.id===e);return i<0?{community:null,currentId:null,position:0,total:t,positionLabel:`— / ${t}`,status:"filtered-out"}:{community:n[i],currentId:e,position:i+1,total:t,positionLabel:`${i+1} / ${t}`,status:"selected"}}function Sm(n,e,t){if(n.length===0)return $r(n,e);const i=e?n.findIndex(a=>a.id===e):-1,r=i<0?t==="next"?0:n.length-1:t==="next"?(i+1)%n.length:(i-1+n.length)%n.length,s=n[r];return $r(n,s.id)}const qi=n=>n*1e4,Hc=n=>n/1e4,jo=(n,e,t)=>Math.min(t,Math.max(e,n));function ec(n,e,t){const i=Math.pow(Math.max(.01,1+e/100),.08333333333333333)-1;let r=qi(n);for(const s of t)r=r*(1+i)+s;return Hc(r)}function tc(n,e){return Math.abs(n-e)<=.02}function Mm(n,e,t){const i=Math.max(1,t.targetArea),r=n*i/1e4,s=jo(t.minimumDownPaymentRate,0,100),a=jo(t.maxPaymentRatio,1,100),o=Math.max(0,e.downPayment),l=Math.min(r,o),c=r*s/100,d=qi(Math.max(0,e.income))*a/100,h=Math.max(1,Math.round(e.loanYears*12)),u=Math.max(1,Math.round(e.years*12)),g=Math.min(u,h),x=qi(r*e.annualHoldingRate/100/12),M=r*e.purchaseCostRate/100+e.renovationCost,m=E=>{const D=Math.max(0,r-E),L=Math.min(Math.max(0,e.providentLoan),D),F=Math.max(0,D-L),J=Ja(L,e.providentRate,h),j=Ja(F,e.commercialRate,h),H=J+j,$=H+x,X=Qa(L,e.providentRate,h,g)+Qa(F,e.commercialRate,h,g),ne=r*(1-e.saleCostRate/100)-X,se=ec(Math.max(0,e.downPayment-E),e.wealthYield,Array.from({length:u},()=>0)),de=ec(0,e.wealthYield,Array.from({length:u},(q,le)=>{const ae=le<h?H:0;return Math.max(0,d-ae-x)})),Se=L+F,be=Math.max(0,Hc(H*g)-(Se-X)),ze=e.income<=0?1/0:$/qi(e.income)*100,Ne=e.income*(1-e.incomeDrop/100),qe=Ne<=0?1/0:$/qi(Ne)*100;return{downPayment:E,downPaymentRate:r<=0?0:E/r*100,providentLoan:L,commercialLoan:F,monthlyMortgage:H,monthlyHousingCost:$,paymentRatio:ze,stressedPaymentRatio:qe,remainingLoan:X,homeEquity:ne,unusedCashFutureValue:se,monthlySurplusFutureValue:de,terminalAssets:ne+se+de,interestPaid:be}};if(m(r).monthlyHousingCost>d+.01)return{status:"income-shortfall",unitPriceYuan:n,homePrice:r,availableDownPayment:o,minimumPolicyDownPayment:c,requiredMonthlyIncome:x/(a/100)/1e4,monthlyBudget:d,acquisitionCost:M};let w=c;if(m(c).monthlyHousingCost>d){let E=c,D=r;for(let L=0;L<60;L+=1){const F=(E+D)/2;m(F).monthlyHousingCost<=d?D=F:E=F}w=D}const R=Math.max(c,w);if(l+.01<R)return{status:"cash-shortfall",unitPriceYuan:n,homePrice:r,availableDownPayment:o,minimumPolicyDownPayment:c,minimumFeasibleDownPayment:R,cashShortfall:R-l,monthlyBudget:d,acquisitionCost:M};const S=new Set([R,l]),A=r-Math.max(0,e.providentLoan);A>=R&&A<=l&&S.add(A);const C=[...S].map(m).reduce((E,D)=>D.terminalAssets>E.terminalAssets+1e-4?D:E);let _="在月供安全线内，保留更多可投资现金的期末终值更高。";return tc(C.downPayment,A)?_="首付正好压掉商贷，同时保留成本更低的公积金贷款。":tc(C.downPayment,l)?_=o>=r-.02?"当前收益率假设下，全款的贷款成本节省高于保留现金的收益。":"当前收益率假设下，继续增加首付比保留现金更有利。":R>c+.02&&(_="最低首付无法满足月供安全线，建议首付提高到现金流刚好可承受的位置。"),{status:"ready",unitPriceYuan:n,homePrice:r,availableDownPayment:o,minimumPolicyDownPayment:c,minimumFeasibleDownPayment:R,monthlyBudget:d,acquisitionCost:M,best:C,reason:_}}const ym={strong:{label:"优先核验",range:"80–100"},watch:{label:"持续观察",range:"65–79"},cautious:{label:"谨慎进入",range:"0–64"}};function Hn(n){const e=n.match(/^(\d{4}-\d{2}-\d{2})/);if(e)return e[1];const t=new Date(n);return Number.isNaN(t.getTime())?n||"时间未知":t.toISOString().slice(0,10)}const Em=["dongcheng","haidian","chaoyang","shijingshan","xicheng","fengtai","tongzhou","daxing"],bt=(n,e,t)=>typeof n=="number"&&Number.isFinite(n)&&n>=e&&n<=t,Kn=n=>typeof n=="string"&&n.trim().length>0,bm=n=>[...n].reduce((e,t)=>e*31+t.charCodeAt(0)>>>0,2166136261),Tm=n=>{var s;const e=n.latitude!==void 0&&n.longitude!==void 0?Xc(n.latitude,n.longitude):void 0,t={...n.qualityDimensions,...((s=n.qualityDimensions)==null?void 0:s.location)===void 0&&e?{location:e.score}:{}},i=Object.fromEntries(Object.entries(t).map(([a,o])=>{var c,d;if(typeof o!="number")return[a,0];const l=(c=n.qualityEvidence)==null?void 0:c.coverage[a];return typeof l=="number"?[a,l]:a==="location"&&((d=n.qualityDimensions)==null?void 0:d.location)===void 0&&e?[a,33]:[a,100]})),r=Object.entries(t).reduce((a,[o,l])=>typeof l!="number"?a:a+qc[o]*(i[o]??0)/100,0);return{employmentAccess:e,dimensions:t,dimensionCoverage:i,evidenceCoverage:Math.round(r)}};function Vr(n){const e=Tm(n),t=Gc(n.adjustedDiscount),i=Math.round(n.confidenceScore*.7+e.evidenceCoverage*.3),r=kc({qualityScore:n.qualityScore,priceOpportunityScore:t,liquidityScore:n.liquidityScore,evidenceConfidence:i,riskPenalty:n.riskPenalty,rentalEvidence:n.rentalEvidence});return{qualityScore:n.qualityScore,legacyQualityScore:n.legacyQualityScore,priceOpportunityScore:t,liquidityScore:n.liquidityScore,marketConfidenceScore:n.confidenceScore,evidenceConfidence:i,...r,propertyTypeLabel:Wc[r.propertyType],...e}}function Ca(n){return Vr(n).purchaseValueScore}function Pa(n){return n>=80?"strong":n>=65?"watch":"cautious"}function Lr(n){if(n.position&&bt(n.position.x,0,100)&&bt(n.position.y,0,100))return{x:n.position.x,y:n.position.y};if(bt(n.longitude,70,140)&&bt(n.latitude,10,60)){const t=xm(n.longitude,n.latitude,Vc[n.district]);return{x:22+t.x*.56,y:26+t.y*.41}}const e=bm(`${n.district}:${n.id}:${n.name}`);return{x:24+e%53,y:28+Math.floor(e/53)%38}}function nc(n){const e=Array.isArray(n)?{label:"导入数据",updatedAt:new Date().toISOString(),sourceName:"本地文件",communities:n}:n;if(!e||typeof e!="object")throw new Error("数据文件必须是 JSON 对象或数组");const t=e;if(!Array.isArray(t.communities))throw new Error("缺少 communities 数组");if(t.communities.length===0)throw new Error("communities 不能为空");if(t.communities.length>5e4)throw new Error("单次最多导入 50,000 个小区");const i=new Set,r=t.communities.map((s,a)=>{if(!s||typeof s!="object")throw new Error(`第 ${a+1} 条小区记录格式错误`);const o=s,l=o.district;if(["id","name","zone","watch"].forEach(M=>{if(!Kn(o[M]))throw new Error(`第 ${a+1} 条记录缺少 ${M}`)}),!Em.includes(l))throw new Error(`第 ${a+1} 条记录 district 不受支持`);if(i.has(o.id))throw new Error(`发现重复 id：${o.id}`);if(i.add(o.id),["qualityScore","liquidityScore","confidenceScore"].forEach(M=>{if(!bt(o[M],0,100))throw new Error(`第 ${a+1} 条记录 ${M} 必须在 0–100`)}),o.legacyQualityScore!==void 0&&!bt(o.legacyQualityScore,0,100))throw new Error(`第 ${a+1} 条记录 legacyQualityScore 必须在 0–100`);const h=o.qualityDimensions;if(h){const M=["location","amenities","transit","environment","layout"];Object.entries(h).forEach(([m,f])=>{if(!M.includes(m)||!bt(f,0,100))throw new Error(`第 ${a+1} 条记录 qualityDimensions.${m} 必须是受支持的 0–100 分指标`)})}const u=o.qualityEvidence;if(u){if(u.version!==1||!u.coverage||typeof u.coverage!="object"||!u.metrics||typeof u.metrics!="object")throw new Error(`第 ${a+1} 条记录 qualityEvidence 格式错误`);Object.entries(u.coverage).forEach(([M,m])=>{if(!["location","amenities","transit","environment","layout"].includes(M)||!bt(m,0,100))throw new Error(`第 ${a+1} 条记录 qualityEvidence.coverage.${M} 必须是受支持的 0–100 覆盖度`)}),Object.entries(u.metrics).forEach(([M,m])=>{if(!(typeof m=="string"&&m.trim())&&!(typeof m=="number"&&Number.isFinite(m)))throw new Error(`第 ${a+1} 条记录 qualityEvidence.metrics.${M} 格式错误`)})}if(!bt(o.adjustedDiscount,-50,50))throw new Error(`第 ${a+1} 条记录 adjustedDiscount 必须在 -50–50`);if(o.dataStatus!==void 0&&o.dataStatus!=="scored"&&o.dataStatus!=="insufficient")throw new Error(`第 ${a+1} 条记录 dataStatus 格式错误`);if(o.referenceUnitPrice!==void 0&&!bt(o.referenceUnitPrice,0,1e6))throw new Error(`第 ${a+1} 条记录 referenceUnitPrice 格式错误`);if(o.latestUnitPrice!==void 0&&!bt(o.latestUnitPrice,0,1e6))throw new Error(`第 ${a+1} 条记录 latestUnitPrice 格式错误`);if(o.nearbyMedianUnitPrice!==void 0&&!bt(o.nearbyMedianUnitPrice,0,1e6))throw new Error(`第 ${a+1} 条记录 nearbyMedianUnitPrice 格式错误`);if(!bt(o.riskPenalty,0,100))throw new Error(`第 ${a+1} 条记录 riskPenalty 必须在 0–100`);if(!bt(o.transactions180d,0,1e5)||!bt(o.comparableSamples,0,1e5))throw new Error(`第 ${a+1} 条记录成交样本必须是非负数`);const g=o.position;if(g&&(!bt(g.x,0,100)||!bt(g.y,0,100)))throw new Error(`第 ${a+1} 条记录 position 必须在 0–100`);const x=o.rentalEvidence;if(x&&(["annualGrossRent","acquisitionCost","annualOperatingCost","vacancyRate","tenantDemandScore"].forEach(m=>{if(!bt(x[m],0,m==="acquisitionCost"?1e8:m==="annualGrossRent"||m==="annualOperatingCost"?1e7:100))throw new Error(`第 ${a+1} 条记录 rentalEvidence.${m} 格式错误`)}),x.acquisitionCost===0))throw new Error(`第 ${a+1} 条记录 rentalEvidence.acquisitionCost 必须大于 0`);return{id:o.id.trim(),district:l,name:o.name.trim(),zone:o.zone.trim(),watch:o.watch.trim(),position:g?{x:g.x,y:g.y}:void 0,longitude:typeof o.longitude=="number"?o.longitude:void 0,latitude:typeof o.latitude=="number"?o.latitude:void 0,dataStatus:o.dataStatus==="insufficient"?"insufficient":"scored",qualityDimensions:h,qualityEvidence:u,legacyQualityScore:typeof o.legacyQualityScore=="number"?o.legacyQualityScore:void 0,qualityScore:o.qualityScore,adjustedDiscount:o.adjustedDiscount,referenceUnitPrice:typeof o.referenceUnitPrice=="number"?o.referenceUnitPrice:void 0,latestUnitPrice:typeof o.latestUnitPrice=="number"?o.latestUnitPrice:void 0,nearbyMedianUnitPrice:typeof o.nearbyMedianUnitPrice=="number"?o.nearbyMedianUnitPrice:void 0,latestTransactionDate:Kn(o.latestTransactionDate)?o.latestTransactionDate.trim():void 0,liquidityScore:o.liquidityScore,confidenceScore:o.confidenceScore,riskPenalty:o.riskPenalty,transactions180d:o.transactions180d,comparableSamples:o.comparableSamples,rentalEvidence:x}});return{version:1,label:Kn(t.label)?t.label.trim():"导入数据",updatedAt:Kn(t.updatedAt)?t.updatedAt.trim():new Date().toISOString(),sourceName:Kn(t.sourceName)?t.sourceName.trim():"本地文件",sourceUrl:Kn(t.sourceUrl)?t.sourceUrl.trim():void 0,qualityEvidenceUpdatedAt:Kn(t.qualityEvidenceUpdatedAt)?t.qualityEvidenceUpdatedAt.trim():void 0,evidenceSources:t.evidenceSources&&typeof t.evidenceSources=="object"?t.evidenceSources:void 0,qualityMethodology:t.qualityMethodology&&typeof t.qualityMethodology=="object"?t.qualityMethodology:void 0,communities:r}}const La=[{id:"hd-wqx",district:"haidian",name:"万泉新新家园",zone:"万柳",position:{x:30,y:39},qualityScore:88,adjustedDiscount:10.8,liquidityScore:85,confidenceScore:82,riskPenalty:2,transactions180d:9,comparableSamples:14,watch:"总价门槛与具体楼栋噪声"},{id:"hd-xs",district:"haidian",name:"橡树湾",zone:"清河",position:{x:55,y:32},qualityScore:84,adjustedDiscount:7.2,liquidityScore:88,confidenceScore:86,riskPenalty:1,transactions180d:12,comparableSamples:18,watch:"不同组团与楼龄差异"},{id:"hd-sdd",district:"haidian",name:"上地东里",zone:"上地",position:{x:69,y:51},qualityScore:81,adjustedDiscount:3.4,liquidityScore:75,confidenceScore:72,riskPenalty:3,transactions180d:6,comparableSamples:9,watch:"房龄、停车与户型效率"},{id:"hd-sjc",district:"haidian",name:"世纪城",zone:"四季青",position:{x:42,y:63},qualityScore:72,adjustedDiscount:9.1,liquidityScore:67,confidenceScore:70,riskPenalty:4,transactions180d:5,comparableSamples:8,watch:"组团分化与物业维护"},{id:"cy-yytd",district:"chaoyang",name:"远洋天地",zone:"四惠",position:{x:29,y:36},qualityScore:84,adjustedDiscount:9.6,liquidityScore:86,confidenceScore:84,riskPenalty:2,transactions180d:11,comparableSamples:16,watch:"临路楼栋与产品差异"},{id:"cy-jjqy",district:"chaoyang",name:"季景沁园",zone:"望京",position:{x:57,y:31},qualityScore:86,adjustedDiscount:5.8,liquidityScore:82,confidenceScore:78,riskPenalty:2,transactions180d:8,comparableSamples:12,watch:"楼栋位置与学位口径"},{id:"cy-scgj",district:"chaoyang",name:"首城国际",zone:"双井",position:{x:68,y:54},qualityScore:79,adjustedDiscount:4.1,liquidityScore:84,confidenceScore:80,riskPenalty:3,transactions180d:10,comparableSamples:15,watch:"高密度与楼层采光"},{id:"cy-cymy",district:"chaoyang",name:"常营民族家园",zone:"常营",position:{x:40,y:64},qualityScore:70,adjustedDiscount:11.2,liquidityScore:68,confidenceScore:69,riskPenalty:4,transactions180d:7,comparableSamples:10,watch:"通勤半径与供应规模"},{id:"sjs-yys",district:"shijingshan",name:"远洋山水",zone:"鲁谷",position:{x:31,y:38},qualityScore:82,adjustedDiscount:9.9,liquidityScore:80,confidenceScore:79,riskPenalty:2,transactions180d:8,comparableSamples:13,watch:"组团体量与临街影响"},{id:"sjs-zhjx",district:"shijingshan",name:"中海金玺公馆",zone:"古城",position:{x:57,y:34},qualityScore:80,adjustedDiscount:5.5,liquidityScore:72,confidenceScore:70,riskPenalty:3,transactions180d:5,comparableSamples:8,watch:"产业兑现与总价流动性"},{id:"sjs-xsfl",district:"shijingshan",name:"西山枫林",zone:"苹果园",position:{x:67,y:55},qualityScore:76,adjustedDiscount:3.2,liquidityScore:64,confidenceScore:66,riskPenalty:4,transactions180d:4,comparableSamples:7,watch:"坡地通勤与产品差异"},{id:"sjs-yqxl",district:"shijingshan",name:"玉泉西里",zone:"玉泉路",position:{x:42,y:65},qualityScore:69,adjustedDiscount:8.8,liquidityScore:61,confidenceScore:64,riskPenalty:5,transactions180d:3,comparableSamples:6,watch:"房龄、停车与成交样本"},{id:"xc-yglj",district:"xicheng",name:"阳光丽景",zone:"德胜",position:{x:30,y:37},qualityScore:91,adjustedDiscount:8.3,liquidityScore:82,confidenceScore:83,riskPenalty:2,transactions180d:7,comparableSamples:11,watch:"学位核验与高总价"},{id:"xc-rf",district:"xicheng",name:"荣丰2008",zone:"广安门",position:{x:55,y:31},qualityScore:80,adjustedDiscount:11.5,liquidityScore:89,confidenceScore:88,riskPenalty:3,transactions180d:14,comparableSamples:20,watch:"小户型产品与居住密度"},{id:"xc-yjmy",district:"xicheng",name:"远见名苑",zone:"广外",position:{x:69,y:53},qualityScore:77,adjustedDiscount:3.8,liquidityScore:73,confidenceScore:75,riskPenalty:4,transactions180d:6,comparableSamples:9,watch:"物业维护与楼栋朝向"},{id:"xc-csy",district:"xicheng",name:"椿树园",zone:"宣武门",position:{x:41,y:64},qualityScore:71,adjustedDiscount:7.5,liquidityScore:66,confidenceScore:68,riskPenalty:5,transactions180d:4,comparableSamples:7,watch:"楼龄、户型与无电梯房源"},{id:"dc-mwy",district:"dongcheng",name:"民旺园",zone:"和平里",longitude:116.4349848,latitude:39.9579197,qualityScore:85,adjustedDiscount:-16.4,liquidityScore:100,confidenceScore:100,riskPenalty:0,transactions180d:17,comparableSamples:13,watch:"逐套房况与产权"},{id:"dc-gcmd",district:"dongcheng",name:"冠城名敦道(A区)",zone:"广渠门",longitude:116.453653,latitude:39.898351,qualityScore:92,adjustedDiscount:30,liquidityScore:100,confidenceScore:100,riskPenalty:0,transactions180d:17,comparableSamples:7,watch:"逐套房况与产权"},{id:"dc-gqjy",district:"dongcheng",name:"广渠家园",zone:"广渠门",longitude:116.456739,latitude:39.896776,qualityScore:90,adjustedDiscount:3.81,liquidityScore:100,confidenceScore:100,riskPenalty:3,transactions180d:17,comparableSamples:7,watch:"居住密度、逐套房况与产权"},{id:"dc-jtxl",district:"dongcheng",name:"景泰西里(西区)",zone:"永定门",longitude:116.4144225,latitude:39.869392,qualityScore:86,adjustedDiscount:4.16,liquidityScore:100,confidenceScore:100,riskPenalty:0,transactions180d:17,comparableSamples:13,watch:"逐套房况与产权"},{id:"ft-xfyy",district:"fengtai",name:"西府颐园",zone:"丽泽",position:{x:29,y:38},qualityScore:84,adjustedDiscount:10.2,liquidityScore:81,confidenceScore:80,riskPenalty:2,transactions180d:8,comparableSamples:12,watch:"兑现节奏与具体楼栋"},{id:"ft-jtgj",district:"fengtai",name:"金唐国际",zone:"丽泽",position:{x:57,y:32},qualityScore:79,adjustedDiscount:6.4,liquidityScore:77,confidenceScore:74,riskPenalty:3,transactions180d:6,comparableSamples:10,watch:"商住边界与产品属性"},{id:"ft-wnhc",district:"fengtai",name:"万年花城",zone:"花乡",position:{x:69,y:54},qualityScore:77,adjustedDiscount:3.6,liquidityScore:79,confidenceScore:76,riskPenalty:3,transactions180d:7,comparableSamples:11,watch:"组团差异与通勤换乘"},{id:"ft-fgy",district:"fengtai",name:"方庄芳古园",zone:"方庄",position:{x:41,y:65},qualityScore:70,adjustedDiscount:8.9,liquidityScore:65,confidenceScore:69,riskPenalty:5,transactions180d:5,comparableSamples:8,watch:"房龄、停车与物业维护"},{id:"tz-jmgj",district:"tongzhou",name:"京贸国际城",zone:"武夷花园",position:{x:30,y:37},qualityScore:81,adjustedDiscount:9.3,liquidityScore:78,confidenceScore:77,riskPenalty:3,transactions180d:7,comparableSamples:11,watch:"跨区通勤与供应节奏"},{id:"tz-xbjzx",district:"tongzhou",name:"新北京中心",zone:"运河商务区",position:{x:56,y:31},qualityScore:78,adjustedDiscount:5.1,liquidityScore:71,confidenceScore:70,riskPenalty:4,transactions180d:5,comparableSamples:8,watch:"产品属性与兑现周期"},{id:"tz-zjyj",district:"tongzhou",name:"珠江逸景家园",zone:"马驹桥",position:{x:68,y:54},qualityScore:75,adjustedDiscount:2.7,liquidityScore:63,confidenceScore:65,riskPenalty:5,transactions180d:4,comparableSamples:7,watch:"产业通勤与同质供应"},{id:"tz-k2",district:"tongzhou",name:"K2清水湾",zone:"梨园",position:{x:40,y:64},qualityScore:68,adjustedDiscount:10.1,liquidityScore:60,confidenceScore:62,riskPenalty:6,transactions180d:3,comparableSamples:6,watch:"成交样本与产品分化"},{id:"dx-jdys",district:"daxing",name:"金地仰山",zone:"黄村",position:{x:30,y:37},qualityScore:80,adjustedDiscount:9.1,liquidityScore:76,confidenceScore:75,riskPenalty:3,transactions180d:7,comparableSamples:11,watch:"通勤时间与新增供应"},{id:"dx-blml",district:"daxing",name:"保利茉莉公馆",zone:"高米店",position:{x:56,y:31},qualityScore:78,adjustedDiscount:4.9,liquidityScore:74,confidenceScore:72,riskPenalty:3,transactions180d:6,comparableSamples:9,watch:"楼栋位置与板块供应"},{id:"dx-zysc",district:"daxing",name:"枣园尚城",zone:"枣园",position:{x:68,y:54},qualityScore:75,adjustedDiscount:2.6,liquidityScore:66,confidenceScore:67,riskPenalty:4,transactions180d:4,comparableSamples:7,watch:"成交速度与户型效率"},{id:"dx-lkgy",district:"daxing",name:"林肯公园",zone:"亦庄",position:{x:40,y:64},qualityScore:69,adjustedDiscount:9.7,liquidityScore:61,confidenceScore:64,riskPenalty:6,transactions180d:3,comparableSamples:6,watch:"产权属性与流动性"}];function tn(n,e=La){return e.filter(t=>t.district===n)}const Zt={dongcheng:{name:"东城区",note:"核心区资源密度高，胡同、楼龄与产品差异需要逐套核验。",focus:[.02,.025],offset:[-.35,-.02],zones:"东直门 · 和平里 · 广渠门",strength:"核心配套 / 区位",watch:"楼龄与产品差异"},haidian:{name:"海淀区",note:"就业与教育资源密度较高，仍需逐小区核验楼龄和流动性。",focus:[-.1,-.08],offset:[1.35,-.8],zones:"中关村 · 上地 · 西二旗",strength:"教育 / 科技就业",watch:"楼龄与流动性"},chaoyang:{name:"朝阳区",note:"板块分化明显，核心就业半径与产品供给共同决定表现。",focus:[-.02,.08],offset:[-1.35,-.75],zones:"望京 · 朝青 · 双井",strength:"国际配套 / 就业",watch:"板块分化"},shijingshan:{name:"石景山区",note:"重点观察产业兑现、通勤与新增供给。",focus:[-.04,-.12],offset:[2.05,.05],zones:"古城 · 苹果园 · 鲁谷",strength:"更新空间 / 总价",watch:"产业兑现"},xicheng:{name:"西城区",note:"核心区稀缺性较强，但高总价和具体房屋瑕疵仍需单独定价。",focus:[.015,.01],offset:[.1,-.05],zones:"金融街 · 德胜 · 广安门",strength:"核心稀缺 / 配套",watch:"高总价与房况"},fengtai:{name:"丰台区",note:"丽泽、总部基地等板块需要分别评估通勤、兑现节奏与新增供给。",focus:[-.06,.025],offset:[.65,.95],zones:"丽泽 · 总部基地 · 方庄",strength:"产业更新 / 交通",watch:"新增供给"},tongzhou:{name:"通州区",note:"公共服务兑现和跨区通勤是关键变量。",focus:[.025,.13],offset:[-2.15,.05],zones:"运河商务区 · 梨园 · 台湖",strength:"副中心建设",watch:"跨区通勤"},daxing:{name:"大兴区",note:"板块距离、产业和同质供应会影响流动性。",focus:[.08,.02],offset:[-.65,1.25],zones:"亦庄 · 西红门 · 黄村",strength:"产业 / 新城配套",watch:"同质供应"}};function Am(n,e,t){const i=Math.min(Math.max(t,1),2);return{cssWidth:Math.max(n,1),cssHeight:Math.max(e,1),pixelRatio:i,width:Math.round(Math.max(n,1)*i),height:Math.round(Math.max(e,1)*i)}}const yn=(n,e,t)=>Math.min(t,Math.max(e,n)),Nt=n=>n.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]),nn={strong:"#147a5d",watch:"#a66b16",cautious:"#b44b59",insufficient:"#786991"},Dr="beijing-communities",Ur="beijing-community-points",ic="beijing-community-selected",wm={version:8,sources:{openstreetmap:{type:"raster",tiles:["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],tileSize:256,attribution:"© OpenStreetMap contributors"}},layers:[{id:"openstreetmap-base",type:"raster",source:"openstreetmap",paint:{"raster-saturation":-.58,"raster-contrast":-.08,"raster-brightness-min":.1,"raster-brightness-max":.98,"raster-opacity":.86}}]},Os=n=>n.dataStatus==="insufficient"?"insufficient":Pa(Ca(n)),Gi=n=>n>=1e4?`${(n/1e4).toFixed(1)}万/㎡`:`${Math.round(n).toLocaleString("zh-CN")}元/㎡`,Bs=n=>n===void 0?"OSM 暂无记录":n<1e3?`${Math.round(n)}m`:`${(n/1e3).toFixed(1)}km`;function Rm(n,e,t,i=15){const r=n.reduce((s,a)=>{const o=Math.hypot(a.x-e,a.y-t);return!s||o<s.distance?{dot:a,distance:o}:s},null);return r&&r.distance<=i?r.dot:null}async function Pm(n,e={}){var Te,ve,Re;const t=n.querySelector("#heroMapCanvas"),i=n.querySelector(".hero-map-fallback"),r=n.querySelector("#mapDistrictDetail"),s=n.querySelector("#mapDistrictTitle"),a=n.querySelector("#mapDistrictSummary"),o=n.querySelector("#mapDistrictStats"),l=n.querySelector("#exitDistrictMap"),c=n.querySelector("#exitMapWorkspace"),d=n.querySelector("#resetMapView"),h=n.querySelector("#mapInteractionHint"),u=n.querySelector("#communityValueLayer"),g=n.querySelector("#communityValueDots"),x=n.querySelector("#mapValueLegend"),M=n.querySelector("#mapDataMode"),m=n.querySelector("#communityDataFile"),f=n.querySelector("#communityDataStatus"),w=n.dataset.texture,R=n.dataset.communityValues;let S=0,A=null;const b=()=>{var T;n.classList.contains("map-workspace-active")||(S=window.scrollY,A=document.createComment("map-workspace-anchor"),(T=n.parentNode)==null||T.insertBefore(A,n),document.body.append(n),document.documentElement.classList.add("map-workspace-open"),document.body.classList.add("map-workspace-open"),n.classList.add("map-workspace-active"),n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","北京小区价值全屏地图"),c&&(c.hidden=!1,c.setAttribute("aria-hidden","false")),requestAnimationFrame(()=>{it(),we(),n.focus({preventScroll:!0})}))},C=()=>{n.classList.contains("map-workspace-active")&&(v(),n.classList.remove("map-workspace-active"),n.removeAttribute("role"),n.removeAttribute("aria-modal"),n.setAttribute("aria-label","可交互的北京核心区三维地图"),A!=null&&A.parentNode&&(A.parentNode.insertBefore(n,A),A.remove(),A=null),document.documentElement.classList.remove("map-workspace-open"),document.body.classList.remove("map-workspace-open"),c&&(c.hidden=!0,c.setAttribute("aria-hidden","true")),requestAnimationFrame(()=>{it(),window.scrollTo({top:S,behavior:"instant"}),n.focus({preventScroll:!0})}))},_=document.createElement("section");_.className="community-geographic-map",_.setAttribute("aria-label","按真实经纬度显示的北京小区地图"),_.setAttribute("aria-busy","false"),_.innerHTML='<div class="community-geographic-map-canvas"></div><span><i class="ph ph-crosshair" aria-hidden="true"></i> 真实经纬度 · OpenStreetMap</span>',(Te=n.querySelector(".map-hotspots"))==null||Te.before(_);const E=_.querySelector(".community-geographic-map-canvas"),D=document.createElement("section");D.className="community-local-map",D.setAttribute("aria-label","所选小区的道路与周边公开地图"),D.setAttribute("aria-busy","false"),D.hidden=!0,D.innerHTML='<div class="community-local-map-frames"></div><div class="community-drill-progress" aria-live="polite"><i class="ph ph-navigation-arrow" aria-hidden="true"></i><span>正在下钻到小区周边</span></div><span><i class="ph ph-map-pin" aria-hidden="true"></i> 道路与公开配套 · OpenStreetMap</span>',(ve=n.querySelector(".map-hotspots"))==null||ve.before(D);const L=D.querySelector(".community-local-map-frames"),F=document.createElement("div");F.className="community-drill-indicator",F.hidden=!0,F.innerHTML='<i aria-hidden="true"></i><span>正在下钻</span>',D.before(F);const J=document.createElement("section");J.className="community-location-context",J.setAttribute("aria-label","小区位置和周边参照"),J.hidden=!0,r==null||r.append(J);const j=document.createElement("nav");j.className="community-stepper",j.dataset.communityNavigator="true",j.setAttribute("aria-label","逐个切换当前筛选结果中的小区"),j.hidden=!0,j.innerHTML='<button type="button" data-community-direction="previous" aria-label="上一个小区"><i class="ph ph-arrow-up" aria-hidden="true"></i></button><output aria-live="polite">— / 0</output><button type="button" data-community-direction="next" aria-label="下一个小区"><i class="ph ph-arrow-down" aria-hidden="true"></i></button>',o==null||o.before(j);const H=j.querySelector("output");if(!t||!w||!window.WebGLRenderingContext)return n.classList.add("map-3d-fallback"),()=>{};const $=window.matchMedia("(prefers-reduced-motion: reduce)").matches,X=new dm({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"});X.setClearColor(0,0),X.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),X.outputColorSpace=Ft;const ne=new Wl,se=new Xt(34,1,.1,50);se.position.set(0,.1,13.2);const de=await new fu().loadAsync(w);de.colorSpace=Ft,de.anisotropy=Math.min(8,X.capabilities.getMaxAnisotropy());const Se=de.image.width/de.image.height,be=new dn(new ji(11.25,11.25/Se,24,16),new ka({map:de,transparent:!0,alphaTest:.01,depthWrite:!1})),ze=new Wi;ze.add(be),ze.rotation.set(-.035,-.055,-.015),ne.add(ze);const Ne={x:-.035,y:-.055,z:-.015,scale:1,positionX:0,positionY:0},qe={x:0,y:0},q={active:!1,moved:!1,id:-1,startX:0,startY:0,rotationX:0,rotationY:0};let le=!1,ae=!0,Be=performance.now(),oe=null,ge=null,nt="all",Oe={...Ei};const Ke={targetArea:70,minimumDownPaymentRate:((Re=e.getMinimumDownPaymentRate)==null?void 0:Re.call(e))??20,maxPaymentRatio:40};let je=!1,He=La,Ze={version:1,label:"示例模型",updatedAt:"非实时成交",sourceName:"项目内置演示数据",communities:La},mt=!1,ht=[],vt=()=>{},lt=()=>{},ft=null,P=null,ct=null,et=null,y=0,p=0,O=0,G=0,K=!1,ce=()=>{},fe=()=>{};const Z=new Map,Q=(T,N=0)=>`${T.toLocaleString("zh-CN",{minimumFractionDigits:N,maximumFractionDigits:N})} 万`,pe=T=>`${Math.round(T).toLocaleString("zh-CN")} 元`,Le=T=>T.latestUnitPrice?{value:T.latestUnitPrice,label:"最近成交单价"}:T.referenceUnitPrice?{value:T.referenceUnitPrice,label:"参考单价"}:T.nearbyMedianUnitPrice?{value:T.nearbyMedianUnitPrice,label:"周边成交中位数"}:null,_e=()=>`<div class="community-purchase-controls" aria-label="购入方案参数">
    <label><span>目标面积</span><b><input type="number" inputmode="decimal" min="20" max="300" step="1" value="${Ke.targetArea}" data-purchase-plan-setting="targetArea" aria-label="目标面积" />㎡</b></label>
    <label><span>最低首付</span><b><input type="number" inputmode="decimal" min="0" max="100" step="1" value="${Ke.minimumDownPaymentRate}" data-purchase-plan-setting="minimumDownPaymentRate" aria-label="最低首付比例" />%</b></label>
    <label><span>月供安全线</span><b><input type="number" inputmode="decimal" min="10" max="80" step="1" value="${Ke.maxPaymentRatio}" data-purchase-plan-setting="maxPaymentRatio" aria-label="月供安全线占家庭月净收入比例" />%</b></label>
  </div>`,he=T=>{var Ae,Ve;je||(Ke.minimumDownPaymentRate=((Ae=e.getMinimumDownPaymentRate)==null?void 0:Ae.call(e))??Ke.minimumDownPaymentRate);const N=Le(T),Y=(Ve=e.getFinanceInputs)==null?void 0:Ve.call(e),V=`<div class="community-purchase-heading"><div><b>房价不变 · 最佳购入方案</b><small>同一资金预算下，最大化期末购房资产</small></div><i>0% 涨幅</i></div>${_e()}`;if(!N||!Y)return`${V}<div class="community-purchase-empty"><b>暂不能计算</b><span>${N?"请先在测算器填写家庭与贷款参数。":"该小区缺少可用单价，不能用周边价格冒充本小区总价。"}</span></div>`;const re=Mm(N.value,Y,Ke),Pe=`<p class="community-purchase-assumptions">${N.label} ${Gi(N.value)} × ${Ke.targetArea}㎡；首付现金上限 ${Q(re.availableDownPayment)}，家庭月净收入 ${Q(Y.income,1)}。另需税费/装修约 ${Q(re.acquisitionCost)}。<button type="button" data-open-finance-settings>调整完整参数</button></p>`;if(re.status==="income-shortfall")return`${V}<div class="community-purchase-empty is-warning"><b>当前收入预算不足</b><span>即使全款，持有成本也超过 ${Ke.maxPaymentRatio}% 安全线；家庭月净收入至少约 ${Q(re.requiredMonthlyIncome??0,1)}。</span></div>${Pe}`;if(re.status==="cash-shortfall"){const te=re.minimumFeasibleDownPayment??re.minimumPolicyDownPayment;return`${V}<div class="community-purchase-empty is-warning"><b>当前条件下暂不可买入</b><span>总价约 ${Q(re.homePrice)}；需首付至少 ${Q(te)}（${(te/re.homePrice*100).toFixed(1)}%），首付现金还差约 ${Q(re.cashShortfall??0)}。</span></div>${Pe}`}const Me=re.best;return`${V}<div class="community-purchase-primary"><span>建议首付</span><strong>${Q(Me.downPayment)}</strong><em>${Me.downPaymentRate.toFixed(1)}% · 总价约 ${Q(re.homePrice)}</em></div><div class="community-purchase-grid"><span><small>贷款组合</small><b>公积金 ${Q(Me.providentLoan)} / 商贷 ${Q(Me.commercialLoan)}</b></span><span><small>月供 + 持有成本</small><b>${pe(Me.monthlyHousingCost)} / 月</b><em>占收入 ${Me.paymentRatio.toFixed(1)}%</em></span><span><small>${Y.years} 年购房资金终值</small><b>${Q(Me.terminalAssets)}</b><em>房屋净值 + 现金投资 + 月度结余</em></span><span><small>压力收入下降 ${Y.incomeDrop}%</small><b>${Me.stressedPaymentRatio.toFixed(1)}%</b><em>仅提示，不替代银行审批</em></span></div><p class="community-purchase-reason"><i class="ph ph-sparkle" aria-hidden="true"></i><span><b>为什么是这个首付：</b>${re.reason}</span></p>${Pe}<p class="community-purchase-method">所有方案固定房价涨幅为 0%，使用相同的首付现金上限和每月住房预算；期末终值 = 卖房净权益 + 未占用首付的理财终值 + 月度预算结余终值。未计租金节省、提前还款与个税差异。</p>`},Ie=()=>{const T=J.querySelector("[data-community-purchase-plan]");if(!T||!oe||!ge)return;const N=tn(oe,He).find(Y=>Y.id===ge);N&&(T.innerHTML=he(N))},Fe=T=>{const N=T.target.closest("[data-purchase-plan-setting]");if(!N)return;const Y=Number(N.value);if(!Number.isFinite(Y))return;const V=N.dataset.purchasePlanSetting,re={targetArea:[20,300],minimumDownPaymentRate:[0,100],maxPaymentRatio:[10,80]};Ke[V]=yn(Y,...re[V]),V==="minimumDownPaymentRate"&&(je=!0),Ie()},ke=()=>{window.clearTimeout(O),window.clearTimeout(G)},U=(T=!1)=>{n.classList.remove("community-location-active","community-drill-approaching","community-drill-entering","community-drill-returning","community-vicinity-switching"),D.hidden=!0,D.setAttribute("aria-busy","false"),T||(J.hidden=!0),F.hidden=!0,L==null||L.replaceChildren(),ft=null},ue=(T=!1,N=!1)=>{if(p+=1,ke(),T&&n.classList.contains("community-location-active")&&!$){n.classList.remove("community-location-active","community-drill-entering","community-vicinity-switching"),n.classList.add("community-drill-returning"),D.setAttribute("aria-busy","false"),J.hidden=!N,F.hidden=!0,O=window.setTimeout(()=>U(N),460);return}U(N)},ee=()=>{if(K)return;K=!0;const T=document.createElement("link");T.rel="preconnect",T.href="https://www.openstreetmap.org",T.crossOrigin="anonymous",document.head.append(T)},me=T=>{const N=document.createElement("iframe");return N.className="community-local-map-frame is-pending",N.loading="eager",N.referrerPolicy="strict-origin-when-cross-origin",N.title=T,N},Ee=(T,N)=>{if(!L)return;ee();const Y=++p,V=n.classList.contains("community-location-active"),re=Lr(T),Pe=Zt[T.district],Me=Vn(Pe.focus,Pe.offset,n.clientWidth),Ae=Ns(Me,re,n.clientWidth,Math.max(Oe.zoom,2.35)),Ve=performance.now(),te=me(`${T.name}周边道路与公开配套地图`),De=D.querySelector(".community-drill-progress span");ke(),L.querySelectorAll(".is-pending, .is-exiting").forEach(_t=>_t.remove()),D.hidden=!1,D.setAttribute("aria-busy","true"),De&&(De.textContent=`正在下钻到${T.name}周边`),F.style.setProperty("--drill-x",`${re.x}%`),F.style.setProperty("--drill-y",`${re.y}%`);const Ue=F.querySelector("span");Ue&&(Ue.textContent=`下钻 ${T.name}`),V?n.classList.add("community-vicinity-switching"):(F.hidden=!1,n.classList.add("community-drill-approaching"),Mn(Ne,Ae)),L.append(te);let We=!1;const pt=()=>{if(We||Y!==p)return;const Lt=Math.max(0,(V||$?0:520)-(performance.now()-Ve));window.clearTimeout(G),G=window.setTimeout(()=>{if(Y!==p)return;We=!0;const Ye=ft;ft=te,te.classList.remove("is-pending"),te.classList.add("is-current"),Ye==null||Ye.classList.add("is-exiting"),n.classList.remove("community-drill-approaching"),n.classList.add("community-location-active","community-drill-entering"),D.setAttribute("aria-busy","false"),F.hidden=!0,O=window.setTimeout(()=>{Y===p&&(L.querySelectorAll("iframe").forEach(dt=>{dt!==ft&&dt.remove()}),n.classList.remove("community-drill-entering","community-vicinity-switching"))},$?0:460)},Lt)};te.addEventListener("load",pt,{once:!0}),te.src=N,G=window.setTimeout(pt,3200)},ie=T=>{const N=Hn(T.updatedAt),Y=T.communities.length.toLocaleString("zh-CN");M&&(M.textContent=`成交数据截至 ${N} · ${Y} 个小区`),!oe&&a&&(a.textContent=`成交数据截至 ${N} · 共可查看 ${Y} 个小区，点击区县进入详情。`),n.querySelectorAll("[data-map-district]").forEach(V=>{const re=V.dataset.mapDistrict,Pe=tn(re,T.communities).length,Me=V.querySelector("[data-district-community-count]");Me&&(Me.textContent=`${Pe.toLocaleString("zh-CN")} 个`),V.setAttribute("aria-label",`进入${Zt[re].name}区域地图，可查看${Pe.toLocaleString("zh-CN")}个小区，数据截至${N}`)})},Ce=(T=performance.now())=>{if(le)return;const N=Math.min((T-Be)/1e3,.05);Be=T;const Y=$?1:1-Math.exp(-N*7.5),V=q.active||$?0:qe.y*.035,re=q.active||$?0:qe.x*.065;ze.rotation.x+=(Ne.x+V-ze.rotation.x)*Y,ze.rotation.y+=(Ne.y+re-ze.rotation.y)*Y,ze.rotation.z+=(Ne.z-ze.rotation.z)*Y,ze.scale.lerp(new k(Ne.scale,Ne.scale,Ne.scale),Y),ze.position.x+=(Ne.positionX-ze.position.x)*Y,ze.position.y+=(Ne.positionY-ze.position.y)*Y,!$&&!q.active&&(be.position.y=Math.sin(T*7e-4)*.025),X.render(ne,se)},we=()=>{le||!ae||document.hidden||X.setAnimationLoop(Ce)},ut=()=>X.setAnimationLoop(null),it=()=>{const T=Math.max(n.clientWidth,1),N=Math.max(n.clientHeight,1),Y=n.getBoundingClientRect();n.style.setProperty("--map-viewport-center-offset",`${window.innerWidth/2-(Y.left+Y.width/2)}px`),X.setSize(T,N,!1),se.aspect=T/N,se.position.z=T<560?14.6:T<900?13.9:13.2,se.updateProjectionMatrix(),P==null||P.resize(),vt(),Ce()},Bt=new ResizeObserver(it);Bt.observe(n),it();const zt=T=>{if(T.target.closest("button, .community-geographic-map")){q.moved=!1;return}q.active=!0,q.moved=!1,q.id=T.pointerId,q.startX=T.clientX,q.startY=T.clientY,q.rotationX=Ne.x,q.rotationY=Ne.y,n.setPointerCapture(T.pointerId),n.classList.add("is-dragging")},er=T=>{const N=n.getBoundingClientRect();if(qe.x=yn((T.clientX-N.left)/N.width*2-1,-1,1),qe.y=yn((T.clientY-N.top)/N.height*2-1,-1,1),!q.active||T.pointerId!==q.id)return;const Y=T.clientX-q.startX,V=T.clientY-q.startY;q.moved||(q.moved=Math.abs(Y)+Math.abs(V)>6),Ne.y=yn(q.rotationY+Y*.0035,-.3,.3),Ne.x=yn(q.rotationX-V*.0028,-.2,.16)},si=T=>{!q.active||T.pointerId!==q.id||(q.active=!1,n.classList.remove("is-dragging"),n.hasPointerCapture(T.pointerId)&&n.releasePointerCapture(T.pointerId))},Ui=()=>{q.active||(qe.x=0,qe.y=0)},ai=T=>{if(T.key==="Escape"&&n.classList.contains("map-workspace-active")){ge&&oe?ce():n.classList.contains("district-detail-active")?(v(),n.focus()):C(),T.preventDefault();return}if((T.key==="Enter"||T.key===" ")&&!n.classList.contains("map-workspace-active")){b(),T.preventDefault();return}const N=.035;if(T.key==="ArrowLeft")Ne.y=yn(Ne.y-N,-.3,.3);else if(T.key==="ArrowRight")Ne.y=yn(Ne.y+N,-.3,.3);else if(T.key==="ArrowUp")Ne.x=yn(Ne.x-N,-.2,.16);else if(T.key==="ArrowDown")Ne.x=yn(Ne.x+N,-.2,.16);else return;T.preventDefault()},tr=()=>{x==null||x.querySelectorAll("[data-value-filter]").forEach(T=>{const N=T.dataset.valueFilter===nt;T.classList.toggle("active",N),T.setAttribute("aria-pressed",String(N))})},nr=T=>{const N=Z.get(T);if(N)return N;const Y=tn(T,He).map(V=>{const re=Vr(V);return{sample:V,score:re.purchaseValueScore,tier:V.dataStatus==="insufficient"?"insufficient":Pa(re.purchaseValueScore),assetStrengthScore:re.assetStrengthScore,evidenceConfidence:re.evidenceConfidence,sourcePosition:Lr(V)}}).sort((V,re)=>+(V.sample.dataStatus==="insufficient")-+(re.sample.dataStatus==="insufficient")||re.score-V.score||re.assetStrengthScore-V.assetStrengthScore||re.evidenceConfidence-V.evidenceConfidence||re.sample.transactions180d-V.sample.transactions180d||V.sample.name.localeCompare(re.sample.name,"zh-CN"));return Z.set(T,Y),Y},Ln=T=>nr(T).filter(({tier:N})=>nt==="all"||nt===N).map(N=>({...N,position:hm(N.sourcePosition,Oe)}));fe=()=>{if(!P||!oe)return;const T=Ln(oe),N=P.getSource(Dr);N&&(N.setData(vm(T.map(({sample:Y})=>Y),Ca,Os)),P.setFilter(ic,["==",["get","id"],ge??"__none__"]))},lt=(T=oe?Ln(oe):[])=>{if(!oe){j.hidden=!0;return}const N=T.map(({sample:V})=>V),Y=$r(N,ge);j.hidden=!1,H&&(H.value=Y.positionLabel),j.querySelectorAll("button").forEach(V=>{V.disabled=Y.total===0})};const hn=T=>{if(!oe)return;const N=Ln(oe).map(({sample:V})=>V),Y=Sm(N,ge,T);Y.community?Dn(Y.community,n.classList.contains("community-location-active")):lt()},Ii=T=>{if(!g)return;const N=Am(n.clientWidth,n.clientHeight,window.devicePixelRatio);(g.width!==N.width||g.height!==N.height)&&(g.width=N.width,g.height=N.height);const Y=g.getContext("2d",{alpha:!0});if(!Y)return;Y.setTransform(N.pixelRatio,0,0,N.pixelRatio,0,0),Y.clearRect(0,0,N.cssWidth,N.cssHeight);const V=(T.length>1e3?2.2:T.length>200?2.8:3.8)+Math.min(Oe.zoom-1,1.4)*.75;ht=T.map(({sample:re,score:Pe,tier:Me,position:Ae})=>({sample:re,score:Pe,tier:Me,x:Ae.x/100*N.cssWidth,y:Ae.y/100*N.cssHeight})),ht.forEach(re=>{const Pe=re.sample.id===ge;Y.beginPath(),Y.arc(re.x,re.y,Pe?V+5:V+2.5,0,Math.PI*2),Y.fillStyle=Pe?"rgba(255,255,255,0.94)":"rgba(255,255,255,0.62)",Y.fill(),Y.beginPath(),Y.arc(re.x,re.y,Pe?V+1.5:V,0,Math.PI*2),Y.fillStyle=nn[re.tier],Y.globalAlpha=Pe?1:.9,Y.fill(),Y.globalAlpha=1,Pe&&(Y.strokeStyle=nn[re.tier],Y.lineWidth=1.5,Y.stroke())}),g.hidden=!1},ir=T=>{const N=T.filter(({position:De})=>pm(De,2)),Y=n.clientWidth<600?6:n.clientWidth<900?10:18,V=ge?N.find(({sample:De})=>De.id===ge):void 0,re=V?[V,...N.filter(({sample:De})=>De.id!==V.sample.id)]:N,Pe=n.getBoundingClientRect(),Me=n.clientWidth<600?98:126,Ae=n.clientWidth<600?40:48,Ve=[x,r,n.querySelector(".map-label.active"),n.querySelector(".map-controls")].map(De=>De==null?void 0:De.getBoundingClientRect()).filter(De=>!!(De!=null&&De.width&&(De!=null&&De.height))),te=[];return re.reduce((De,Ue)=>{if(De.length>=Y)return De;const We=Pe.left+Ue.position.x/100*Pe.width,pt=Pe.top+Ue.position.y/100*Pe.height,_t={left:We-Me/2,right:We+Me/2,top:pt-Ae/2,bottom:pt+Ae/2},Lt=Ye=>_t.left<Ye.right+4&&_t.right>Ye.left-4&&_t.top<Ye.bottom+4&&_t.bottom>Ye.top-4;return!Ve.some(Lt)&&!te.some(Lt)&&(De.push(Ue),te.push(_t)),De},[])},kt=T=>{var V;const N=Ln(T);if(n.classList.contains("district-geographic-active")&&!N.some(({sample:re})=>qr(re))&&n.classList.remove("district-geographic-active","district-geographic-loading"),n.classList.contains("district-geographic-active")){g&&(g.hidden=!0,(V=g.getContext("2d"))==null||V.clearRect(0,0,g.width,g.height)),u&&(u.hidden=!0,u.innerHTML=""),x&&(x.hidden=!1),fe(),tr(),lt(N);return}if(Ii(N),!u)return;x&&(x.hidden=!1);const Y=ir(N);u.innerHTML=Y.map(({sample:re,score:Pe,tier:Me,position:Ae},Ve)=>{const te=ge===re.id,De=Nt(re.id),Ue=Nt(re.name),We=Vr(re),pt=Me==="insufficient"?"数据不足，暂不评分":`决策价值${Pe}分，${We.propertyTypeLabel}，${ym[Me].label}`,_t=Me==="insufficient"?"—":Pe,Lt=Me==="insufficient"?"近期成交或可比不足":`同质折价 ${re.adjustedDiscount>=0?"+":""}${re.adjustedDiscount.toFixed(1)}%`;return`<button class="community-value-marker tier-${Me}${te?" active":""}" type="button" data-community-id="${De}" style="--marker-x:${Ae.x}%;--marker-y:${Ae.y}%;--marker-order:${Ve}" aria-label="${Ue}，${pt}" aria-pressed="${te}"><span class="community-score">${_t}</span><span class="community-marker-copy"><b>${Ue}</b><small>${Lt}</small></span></button>`}).join(""),u.hidden=!1,tr(),lt(N)};vt=()=>{oe&&kt(oe)};const pn=(T,N=!0)=>{N&&ue();const Y=Zt[T],V=tn(T,He),re=V.filter(te=>te.dataStatus!=="insufficient"),Pe=re.map(Ca),Me=Math.round(Pe.reduce((te,De)=>te+De,0)/Math.max(Pe.length,1)),Ae=Pe.filter(te=>Pa(te)==="strong").length,Ve=V.length-re.length;r&&(r.removeAttribute("data-value-tier"),r.setAttribute("aria-label",`已进入${Y.name}小区价值地图`)),s&&(s.innerHTML=`${Y.name} · 小区决策价值<em>${Pe.length?`证据校正均分 ${Me}`:"暂无评分"}</em>`),a&&(a.textContent=`按资产性、价格机会、流动性与证据置信度重新排序；成交数据截至 ${Hn(Ze.updatedAt)}，灰色点位暂不评分。`),o&&(o.hidden=!1,o.innerHTML=`<span><small>全部 / 已评分</small><b>${V.length.toLocaleString("zh-CN")} / ${re.length.toLocaleString("zh-CN")}</b></span><span><small>优先核验 / 数据不足</small><b>${Ae.toLocaleString("zh-CN")} / ${Ve.toLocaleString("zh-CN")}</b></span><span><small>数据截至 / 来源</small><b>${Hn(Ze.updatedAt)} · ${Nt(Ze.sourceName)}</b></span>`)};ce=()=>{if(!oe)return;const T=oe,N=Zt[T];if(ge&&n.classList.contains("community-location-active")){const Y=tn(T,He).find(V=>V.id===ge);if(Y){const V=Lr(Y),re=Vn(N.focus,N.offset,n.clientWidth);Mn(Ne,Ns(re,V,n.clientWidth,Oe.zoom)),ue(!0,!0),n.classList.add("community-focus-active"),kt(T),h&&(h.innerHTML=`<i class="ph ph-magnifying-glass-plus"></i> 区域已放大 ${Oe.zoom.toFixed(2)}× · 点击其他点继续查看`),l&&(l.innerHTML=`<i class="ph ph-arrow-left" aria-hidden="true"></i> 返回${Nt(N.name)}`,l.setAttribute("aria-label",`返回${N.name}小区价值地图`));return}}ge=null,Oe={...Ei},n.classList.remove("community-focus-active"),Mn(Ne,Vn(N.focus,N.offset,n.clientWidth)),ue(!0),pn(T,!1),kt(T),mn(),h&&(h.innerHTML=n.classList.contains("district-geographic-active")?'<i class="ph ph-map-trifold"></i> 真实经纬度 · 拖拽平移 / 滚轮缩放':'<i class="ph ph-cursor-click"></i> 点击小区查看价值 · 拖拽旋转'),l&&(l.innerHTML='<i class="ph ph-arrow-left" aria-hidden="true"></i> 北京全图',l.setAttribute("aria-label","返回北京全图"))};const Dn=(T,N=!1)=>{var Ae,Ve;ge=T.id;const Y=Lr(T);if(!N){ue(!1,!0),Oe=fm(Oe,Y);const te=Zt[T.district],De=Vn(te.focus,te.offset,n.clientWidth);Mn(Ne,Ns(De,Y,n.clientWidth,Oe.zoom)),n.classList.add("community-focus-active"),P&&T.longitude!==void 0&&T.latitude!==void 0&&P.easeTo({center:[T.longitude,T.latitude],zoom:Math.max(P.getZoom(),n.clientWidth<600?14.2:14.8),duration:$?0:720})}const V=Vr(T),re=V.purchaseValueScore,Pe=Os(T);if(u==null||u.querySelectorAll("[data-community-id]").forEach(te=>{const De=te.dataset.communityId===T.id;te.classList.toggle("active",De),te.setAttribute("aria-pressed",String(De))}),r){r.dataset.valueTier=Pe;const te=oe?$r(Ln(oe).map(({sample:De})=>De),T.id):null;r.setAttribute("aria-label",`${T.name}决策价值详情${te?`，第${te.position}个，共${te.total}个`:""}`)}s&&(s.innerHTML=Pe==="insufficient"?`${Nt(T.name)}<em>数据不足 · 暂不评分</em>`:`${Nt(T.name)}<em>${re}分 · ${V.propertyTypeLabel}</em>`),a&&(a.textContent=`${T.zone} · 重点核验：${T.watch}`);const Me=gm(T,He);if(Me){const te=Me.nearby.length?Me.nearby.map(({community:At,distanceKm:rt},Dt)=>`<li><i>${Dt+1}</i><span><b>${Nt(At.name)}</b><small>${Nt(At.zone)} · ${rt<1?`${Math.round(rt*1e3)}m`:`${rt.toFixed(1)}km`}</small></span></li>`).join(""):'<li class="empty">暂无可定位的周边小区参照</li>',Ue=Object.entries({location:"职住可达",amenities:"医疗生活",transit:"交通韧性",environment:"环境维护",layout:"户型效率"}).map(([At,rt])=>{const Dt=V.dimensions[At],Un=V.dimensionCoverage[At];return`<span class="${Dt===void 0?"missing":""}"><small>${rt}</small><b>${Dt===void 0?"待补证据":`${Math.round(Dt)}分`}</b><em>${Dt===void 0?"按具体房源核验":`证据覆盖 ${Math.round(Un??0)}%`}</em></span>`}).join(""),We=(Ae=T.qualityEvidence)==null?void 0:Ae.metrics,pt=(We==null?void 0:We.commuteMinutes)!==void 0?`到 ${Nt(We.employmentHub??"最近核心工作区")} 的公交路线约 ${We.commuteMinutes} 分钟，步行至地铁约 ${We.subwayWalkingMinutes??"待核验"} 分钟。`:We!=null&&We.employmentHub?`最近核心工作区 ${Nt(We.employmentHub)}，直线约 ${((Ve=We.employmentDistanceKm)==null?void 0:Ve.toFixed(1))??"—"}km；最近地铁出入口或站点 ${Bs(We.subwayAccessDistanceM)}。`:V.employmentAccess?`最近核心工作区：${V.employmentAccess.name}，直线约 ${V.employmentAccess.distanceKm.toFixed(1)}km。`:"缺少坐标，暂不能计算核心工作区距离。",_t=We?`<ul class="community-quality-evidence"><li><i class="ph ph-buildings"></i><span><b>职住</b><small>${pt}${We.commuteMinutes===void 0?" 当前为直线与地铁接近度代理，待高峰路线校准。":" 路线仍需在实际高峰复测。"}</small></span></li><li><i class="ph ph-hospital"></i><span><b>医疗生活</b><small>最近医院 ${Bs(We.hospitalDistanceM)}；3km 医院 ${We.hospitals3000m??0} 个，1km 诊所/药店 ${We.clinicsPharmacies1000m??0} 个、商超/市场 ${We.groceries1000m??0} 个。</small></span></li><li><i class="ph ph-train-regional"></i><span><b>交通</b><small>800m 地铁出入口 ${We.subwayEntrances800m??0} 个，1.2km 地铁站 ${We.subwayStations1200m??0} 个；不把站点直线距离伪装成步行时间。</small></span></li><li><i class="ph ph-tree"></i><span><b>环境</b><small>最近公园/公共绿地 ${Bs(We.parkDistanceM)}，1km 内 ${We.parks1000m??0} 个；物业维护、噪声和停车仍待现场核验。</small></span></li></ul>`:`<p>${pt} 周边供给、医院等级、户型朝向、人车分流以及净租金回报仍需补充结构化证据。</p>`,Lt=Ze.qualityEvidenceUpdatedAt?Hn(Ze.qualityEvidenceUpdatedAt):"时间待核验",Ye=Ze.evidenceSources?Object.values(Ze.evidenceSources).map(({name:At})=>Nt(At)).join(" + "):"来源待核验",dt=V.rentalStrengthScore===void 0?"待补租金证据":`${V.rentalStrengthScore}分`;J.innerHTML=`<section class="community-purchase-plan" data-community-purchase-plan>${he(T)}</section><div class="community-score-model"><div><b>房屋类型与当前机会</b><small>${V.propertyTypeLabel} · 证据校正后排序</small></div><div class="community-archetype-grid"><span><small>资产性</small><b>${V.assetStrengthScore}分</b></span><span class="${V.rentalStrengthScore===void 0?"missing":""}"><small>收租性</small><b>${dt}</b></span><span><small>砖头风险</small><b>${V.brickRiskScore}分</b></span><span><small>当前买入机会</small><b>${V.purchaseValueScore}分</b></span></div><div class="community-score-heading"><b>五维品质证据</b><small>融合品质 ${V.qualityScore}分${V.legacyQualityScore===void 0?"":`（原始 ${V.legacyQualityScore}）`} · 总覆盖 ${V.evidenceCoverage}%</small></div><div class="community-dimension-grid">${Ue}</div>${_t}<p class="community-quality-source">证据快照 ${Lt} · ${Ye}；户型维度不在小区层自动编分，医院等级、路线时耗与物业状况需继续核验。</p></div><div class="community-location-metrics"><span><small>商圈 / 坐标</small><b>${Nt(T.zone)} · ${Me.coordinateLabel}</b></span><span><small>500m / 1km 内小区</small><b>${Me.within500m} / ${Me.within1km}</b></span><button type="button" data-open-community-vicinity><i class="ph ph-map-trifold" aria-hidden="true"></i> 查看街区地图</button><a href="${Me.externalUrl}" target="_blank" rel="noreferrer"><i class="ph ph-arrow-square-out" aria-hidden="true"></i> 在 OSM 打开</a></div><ol class="nearby-community-list">${te}</ol><p>类型判断与买入机会分开：好资产也可能价格过高；教育资格、具体房况与产权必须线下核验。</p>`,J.hidden=!1,N&&Ee(T,Me.embedUrl)}else if(J.innerHTML=`<section class="community-purchase-plan" data-community-purchase-plan>${he(T)}</section><div class="community-purchase-empty"><b>周边地图暂不可用</b><span>该小区缺少可核验坐标；购入方案仍按现有单价证据计算，位置与配套请线下复核。</span></div>`,J.hidden=!1,oe){const te=Zt[oe];Mn(Ne,Vn(te.focus,te.offset,n.clientWidth))}if(o){o.hidden=!1;const te=T.latestTransactionDate?Hn(T.latestTransactionDate):Hn(Ze.updatedAt),De=T.latestUnitPrice&&T.nearbyMedianUnitPrice?`<span><small>最新成交（${te}）/ 周边中位</small><b>${Gi(T.latestUnitPrice)} / ${Gi(T.nearbyMedianUnitPrice)}</b></span>`:T.latestUnitPrice?`<span><small>最新成交（${te}）/ 周边中位</small><b>${Gi(T.latestUnitPrice)} / 样本不足</b></span>`:`<span><small>参考价（截至 ${Hn(Ze.updatedAt)}）/ 最新成交</small><b>${T.referenceUnitPrice?Gi(T.referenceUnitPrice):"暂无"} / 暂无</b></span>`,Ue=Pe==="insufficient"?`暂不计算 · ${T.transactions180d} / ${T.comparableSamples}`:`${T.adjustedDiscount>=0?"+":""}${T.adjustedDiscount.toFixed(1)}% · ${T.transactions180d} / ${T.comparableSamples}`;o.innerHTML=`<span><small>类型判断</small><b>${V.propertyTypeLabel}</b></span><span><small>资产性 / 砖头风险</small><b>${V.assetStrengthScore} / ${V.brickRiskScore}</b></span><span><small>收租性</small><b>${V.rentalStrengthScore===void 0?"待补租金、空置与成本":`${V.rentalStrengthScore} / 100`}</b></span><span><small>当前买入机会 / 流动性</small><b>${V.priceOpportunityScore} / ${V.liquidityScore}</b></span>${De}<span><small>折价 · 180天成交 / 可比</small><b>${Ue}</b></span><span><small>市场置信 / 五维覆盖</small><b>${V.marketConfidenceScore}% / ${V.evidenceCoverage}%</b></span>`}kt(T.district),h&&(h.innerHTML=N?'<i class="ph ph-map-pin"></i> 已进入街区地图 · 可切换相邻小区':n.classList.contains("district-geographic-active")?'<i class="ph ph-crosshair"></i> 已定位到真实坐标 · 再次点击进入小区周边':`<i class="ph ph-magnifying-glass-plus"></i> 区域已放大 ${Oe.zoom.toFixed(2)}× · 点击其他点继续查看`),l&&oe&&(l.innerHTML=N?'<i class="ph ph-arrow-left" aria-hidden="true"></i> 返回小区点位':`<i class="ph ph-arrow-left" aria-hidden="true"></i> 返回${Nt(Zt[oe].name)}`,l.setAttribute("aria-label",N?`返回${T.name}点位地图`:`返回${Zt[oe].name}小区价值地图`))},mn=(T=$?0:760)=>{if(!P||!oe)return;const N=_m(oe,He);P.fitBounds(N,{padding:n.clientWidth<600?{top:128,right:26,bottom:190,left:26}:{top:118,right:56,bottom:166,left:56},duration:T,maxZoom:13.2})},rr=async()=>{if(!E||!oe||!tn(oe,He).some(qr))return;const T=++y;_.setAttribute("aria-busy","true"),n.classList.add("district-geographic-loading"),ee(),et||(et=$c(async()=>{const{Map:Y,Popup:V}=await import("./maplibre-gl-BSUveWf0.js").then(re=>re.m);return{Map:Y,Popup:V}},[],import.meta.url).then(({Map:Y,Popup:V})=>new Promise((re,Pe)=>{const Me=new Y({container:E,style:wm,center:[116.4074,39.9042],zoom:9.2,minZoom:8,maxZoom:18,attributionControl:{},pitchWithRotate:!1,dragRotate:!1,touchPitch:!1});ct=new V({closeButton:!1,closeOnClick:!1,offset:10}),Me.once("load",()=>{Me.addSource(Dr,{type:"geojson",data:{type:"FeatureCollection",features:[]}}),Me.addLayer({id:Ur,type:"circle",source:Dr,paint:{"circle-radius":["interpolate",["linear"],["zoom"],9,2.6,13,4.2,16,6.4],"circle-color":["match",["get","tier"],"strong",nn.strong,"watch",nn.watch,"cautious",nn.cautious,nn.insufficient],"circle-opacity":.9,"circle-stroke-color":"rgba(255,255,255,0.9)","circle-stroke-width":["interpolate",["linear"],["zoom"],9,.8,16,1.8]}}),Me.addLayer({id:ic,type:"circle",source:Dr,filter:["==",["get","id"],"__none__"],paint:{"circle-radius":["interpolate",["linear"],["zoom"],9,7,16,12],"circle-color":"rgba(255,255,255,0.92)","circle-stroke-color":["match",["get","tier"],"strong",nn.strong,"watch",nn.watch,"cautious",nn.cautious,nn.insufficient],"circle-stroke-width":3}}),Me.on("mouseenter",Ur,Ae=>{var Ue;Me.getCanvas().style.cursor="pointer";const Ve=(Ue=Ae.features)==null?void 0:Ue[0];if(!Ve||Ve.geometry.type!=="Point")return;const te=Ve.properties,De=te.tier==="insufficient"?"数据不足":`${te.score??"—"}分`;ct==null||ct.setLngLat(Ve.geometry.coordinates).setHTML(`<b>${Nt(te.name??"小区")}</b><span>${De}</span>`).addTo(Me)}),Me.on("mouseleave",Ur,()=>{Me.getCanvas().style.cursor="",ct==null||ct.remove()}),Me.on("click",Ur,Ae=>{var De,Ue,We;const Ve=String(((We=(Ue=(De=Ae.features)==null?void 0:De[0])==null?void 0:Ue.properties)==null?void 0:We.id)??"");if(!Ve||!oe)return;const te=tn(oe,He).find(pt=>pt.id===Ve);te&&Dn(te,ge===Ve&&n.classList.contains("community-focus-active"))}),re(Me)}),Me.once("error",Ae=>{Me.loaded()||Pe(Ae.error??new Error("真实地图加载失败"))})})).then(Y=>le?(Y.remove(),null):(P=Y,Y)).catch(Y=>(et=null,console.warn("真实经纬度地图加载失败，继续显示 3D 艺术地图",Y),null)));const N=await et;if(!N){_.setAttribute("aria-busy","false"),n.classList.remove("district-geographic-loading");return}le||T!==y||!oe||(_.setAttribute("aria-busy","false"),n.classList.remove("district-geographic-loading"),n.classList.add("district-geographic-active"),N.resize(),kt(oe),mn(),h&&(h.innerHTML='<i class="ph ph-map-trifold"></i> 真实经纬度 · 拖拽平移 / 滚轮缩放'))},sr=T=>{b();const N=Zt[T];oe=T,ge=null,nt="all",Oe={...Ei},n.classList.remove("community-focus-active"),n.classList.add("district-detail-active"),n.dataset.activeDistrict=T,n.querySelectorAll("[data-map-district]").forEach(Y=>{const V=Y.dataset.mapDistrict===T;Y.classList.toggle("active",V),Y.setAttribute("aria-pressed",String(V))}),Mn(Ne,Vn(N.focus,N.offset,n.clientWidth)),kt(T),pn(T),rr(),h&&(h.innerHTML='<i class="ph ph-cursor-click"></i> 点击小区查看价值 · 拖拽旋转'),l&&(l.hidden=!1,l.setAttribute("aria-hidden","false"),l.innerHTML='<i class="ph ph-arrow-left" aria-hidden="true"></i> 北京全图',l.setAttribute("aria-label","返回北京全图"))},ar=T=>{if(q.moved)return;const N=T.target;if(N.closest("#exitMapWorkspace"))return;if(N.closest("[data-open-finance-settings]")){C(),window.setTimeout(()=>{var Ae;return(Ae=document.querySelector("#model"))==null?void 0:Ae.scrollIntoView({behavior:$?"auto":"smooth",block:"start"})},0);return}if(N.closest("[data-open-community-vicinity]")&&oe&&ge){const Ae=tn(oe,He).find(Ve=>Ve.id===ge);Ae&&Dn(Ae,!0);return}const V=N.closest("[data-community-direction]");if(V){hn(V.dataset.communityDirection);return}const re=N.closest("[data-community-id]");if(re&&oe){const Ae=tn(oe,He).find(Ve=>Ve.id===re.dataset.communityId);Ae&&Dn(Ae,ge===Ae.id&&n.classList.contains("community-focus-active"));return}if(N===g&&oe){const Ae=T,Ve=g.getBoundingClientRect(),te=Ae.clientX-Ve.left,De=Ae.clientY-Ve.top,Ue=Rm(ht,te,De);Ue&&Dn(Ue.sample,ge===Ue.sample.id&&n.classList.contains("community-focus-active"));return}const Pe=N.closest("[data-value-filter]");if(Pe&&oe){nt=Pe.dataset.valueFilter;const Ae=ge?tn(oe,He).find(Ve=>Ve.id===ge):void 0;Ae&&nt!=="all"&&Os(Ae)!==nt&&ce(),kt(oe);return}const Me=N.closest("[data-map-district]");if(Me){sr(Me.dataset.mapDistrict);return}n.classList.contains("map-workspace-active")||b()},oi=T=>{T.target.closest("[data-community-id]")&&ee()},or=async()=>{var N;const T=(N=m==null?void 0:m.files)==null?void 0:N[0];if(T){f&&(f.textContent="正在校验…");try{const Y=nc(JSON.parse(await T.text()));if(mt=!0,Ze=Y,He=Y.communities,Z.clear(),ge=null,nt="all",Oe={...Ei},n.classList.remove("community-focus-active"),ie(Y),f&&(f.textContent="已在本地加载，不会上传"),oe){const V=Zt[oe];Mn(Ne,Vn(V.focus,V.offset,n.clientWidth)),kt(oe),pn(oe),mn(0)}}catch(Y){f&&(f.textContent=Y instanceof Error?`导入失败：${Y.message}`:"导入失败：文件格式错误")}finally{m&&(m.value="")}}},jr=async()=>{if(R){M&&(M.textContent="授权数据加载中…");try{const T=await fetch(R);if(!T.ok)throw new Error(`HTTP ${T.status}`);const N=nc(await T.json());if(le||mt)return;if(Ze=N,He=N.communities,Z.clear(),ge=null,nt="all",Oe={...Ei},n.classList.remove("community-focus-active"),n.dataset.communityDataReady="true",ie(N),M&&(M.title=N.sourceUrl?`${N.sourceName} · ${N.sourceUrl}`:N.sourceName),f&&(f.textContent=`${N.sourceName} · 已授权发布`),oe){const Y=Zt[oe];Mn(Ne,Vn(Y.focus,Y.offset,n.clientWidth)),kt(oe),pn(oe),mn(0)}}catch(T){n.dataset.communityDataReady="fallback",ie(Ze),f&&(f.textContent="正式数据加载失败，当前显示示例"),console.warn("小区决策价值数据加载失败，已回退到演示数据",T)}}},v=()=>{var T;y+=1,oe=null,ge=null,nt="all",Oe={...Ei},n.classList.remove("district-detail-active","community-focus-active","district-geographic-active","district-geographic-loading"),_.setAttribute("aria-busy","false"),ct==null||ct.remove(),delete n.dataset.activeDistrict,Mn(Ne,{x:-.035,y:-.055,z:-.015,scale:1,positionX:0,positionY:0}),n.querySelectorAll("[data-map-district]").forEach(N=>{N.classList.remove("active"),N.setAttribute("aria-pressed","false")}),r&&(r.removeAttribute("data-value-tier"),r.setAttribute("aria-label","北京核心区地图总览")),s&&(s.textContent="北京 · 核心区"),a&&(a.textContent=`成交数据截至 ${Hn(Ze.updatedAt)} · 共可查看 ${Ze.communities.length.toLocaleString("zh-CN")} 个小区，点击区县进入详情。`),o&&(o.hidden=!0,o.innerHTML=""),l&&(l.hidden=!0,l.setAttribute("aria-hidden","true"),l.innerHTML='<i class="ph ph-arrow-left" aria-hidden="true"></i> 北京全图',l.setAttribute("aria-label","返回北京全图")),u&&(u.hidden=!0,u.innerHTML=""),j.hidden=!0,ue(),g&&(g.hidden=!0,(T=g.getContext("2d"))==null||T.clearRect(0,0,g.width,g.height)),ht=[],x&&(x.hidden=!0),h&&(h.innerHTML='<i class="ph ph-cursor-click"></i> 点击区县进入详情 · 拖拽旋转')},I=()=>ge?ce():v();n.addEventListener("pointerdown",zt),n.addEventListener("pointermove",er,{passive:!0}),n.addEventListener("pointerup",si),n.addEventListener("pointercancel",si),n.addEventListener("pointerleave",Ui),n.addEventListener("keydown",ai),n.addEventListener("click",ar),n.addEventListener("change",Fe),n.addEventListener("pointerover",oi,{passive:!0}),n.addEventListener("focusin",oi),d==null||d.addEventListener("click",v),l==null||l.addEventListener("click",I),c==null||c.addEventListener("click",C),m==null||m.addEventListener("change",or),jr();const W=new IntersectionObserver(([T])=>{ae=T.isIntersecting,ae?we():ut()},{rootMargin:"120px 0px"});W.observe(n);const B=()=>document.hidden?ut():we();document.addEventListener("visibilitychange",B);const z=T=>{T.preventDefault(),ut(),n.classList.remove("map-3d-ready"),n.classList.add("map-3d-fallback"),i==null||i.setAttribute("aria-hidden","false")},xe=()=>{n.classList.remove("map-3d-fallback"),n.classList.add("map-3d-ready"),i==null||i.setAttribute("aria-hidden","true"),it(),we()};return t.addEventListener("webglcontextlost",z),t.addEventListener("webglcontextrestored",xe),i==null||i.setAttribute("aria-hidden","true"),n.classList.add("map-3d-ready"),we(),()=>{le=!0,ke(),ut(),Bt.disconnect(),W.disconnect(),document.removeEventListener("visibilitychange",B),t.removeEventListener("webglcontextlost",z),t.removeEventListener("webglcontextrestored",xe),n.removeEventListener("pointerdown",zt),n.removeEventListener("pointermove",er),n.removeEventListener("pointerup",si),n.removeEventListener("pointercancel",si),n.removeEventListener("pointerleave",Ui),n.removeEventListener("keydown",ai),n.removeEventListener("click",ar),n.removeEventListener("change",Fe),n.removeEventListener("pointerover",oi),n.removeEventListener("focusin",oi),d==null||d.removeEventListener("click",v),l==null||l.removeEventListener("click",I),c==null||c.removeEventListener("click",C),document.documentElement.classList.remove("map-workspace-open"),document.body.classList.remove("map-workspace-open"),A!=null&&A.parentNode&&(A.parentNode.insertBefore(n,A),A.remove(),A=null),m==null||m.removeEventListener("change",or),be.geometry.dispose(),be.material.dispose(),de.dispose(),ct==null||ct.remove(),P==null||P.remove(),P=null,X.dispose()}}export{Rm as findClosestCommunityDot,Pm as initHeroMap3d,Am as resolveCommunityCanvasSize};
