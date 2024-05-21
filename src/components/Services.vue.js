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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    name: 'ServicesPage',
    data() {
        return {
            services: [
                'Residential Drywall Installation',
                'Commercial Drywall Installation',
                'Drywall Repair and Patching',
                'Drywall Finishing',
                'Multiple Texture Applications',
                'Steel Stud Framing',
                'Remodel Work',
                'Water Damage Solutions',
                'Fireproofing and Insulation Services',
                'Custom Drywall Solutions',
                'Project Demolition and Waste Removal',
                'Match Existing Textures'
            ]
        };
    },
    computed: {
        chunkedServices() {
            const chunkSize = 4;
            const chunks = [];
            for (let i = 0; i < this.services.length; i += chunkSize) {
                chunks.push(this.services.slice(i, i + chunkSize));
            }
            return chunks;
        }
    },
    methods: {
        randomDelay(index) {
            // Generate a random delay between 0.1s and 0.5s
            return (Math.random() * 0.4 + 0.1).toFixed(2) * index;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ class: ("services"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("container"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    for (const [chunk, index] of __VLS_getVForSourceType((__VLS_ctx.chunkedServices))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("service-chunk"), key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [service, serviceIndex] of __VLS_getVForSourceType((chunk))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((serviceIndex)), style: (({ animationDelay: `${__VLS_ctx.randomDelay(index * 4 + serviceIndex)}s` })), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("bullet"), });
            // @ts-ignore
            [chunkedServices, randomDelay,];
            (service);
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['services'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['service-chunk'];
        __VLS_styleScopedClasses['bullet'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'ServicesPage';
    const __VLS_internalComponent = (await Promise.resolve().then(() => __importStar(require('./Services.vue')))).default;
}
