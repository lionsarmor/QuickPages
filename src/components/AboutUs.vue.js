"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AboutCard_vue_1 = __importDefault(require("./AboutCard.vue"));
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    name: 'AboutUs',
    components: {
        AboutCard: AboutCard_vue_1.default
    },
    data() {
        return {
            blurbs: [
                {
                    title: 'Will Travel',
                    description: 'We go the extra mile to reach our clients and provide exceptional service.'
                },
                {
                    title: 'Insured',
                    description: 'Your peace of mind is our priority, and we are fully insured for your protection.'
                },
                {
                    title: 'Been in Business Since 1995',
                    description: 'With decades of experience, we deliver high-quality craftsmanship and reliability.'
                },
                {
                    title: 'American Owned',
                    description: 'Proudly serving our community as a locally owned and operated business.'
                }
            ],
            currentSlide: 0
        };
    },
    mounted() {
        setInterval(this.nextSlide, 5000);
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.blurbs.length;
        }
    }
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ class: ("about-us"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("container"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("slideshow"), });
    for (const [blurb, index] of __VLS_getVForSourceType((__VLS_ctx.blurbs))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), class: (({ slide: true, active: index === __VLS_ctx.currentSlide })), });
        __VLS_styleScopedClasses = ({ slide: true, active: index === currentSlide });
        const __VLS_0 = {}.AboutCard;
        ({}.AboutCard);
        __VLS_components.AboutCard;
        // @ts-ignore
        [AboutCard_vue_1.default,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ title: ((blurb.title)), description: ((blurb.description)), }));
        const __VLS_2 = __VLS_1({ title: ((blurb.title)), description: ((blurb.description)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ title: ((blurb.title)), description: ((blurb.description)), }));
        // @ts-ignore
        [blurbs, currentSlide,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['about-us'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['slideshow'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        AboutCard: AboutCard_vue_1.default
    };
    const __VLS_name = 'AboutUs';
    const __VLS_internalComponent = (await Promise.resolve().then(() => __importStar(require('./AboutUs.vue')))).default;
}
