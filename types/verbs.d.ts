import type { Word } from "../data.d";
declare const primarySuffixes: {
    singular: {
        1: string;
        2: string;
        3: string;
    };
    plural: {
        1: string;
        2: string;
        3: string;
    };
};
declare const middleAndPassiveEndings: {
    singular: {
        1: string;
        2: string;
        3: string;
    };
    plural: {
        1: string;
        2: string;
        3: string;
    };
};
declare function augmentize(word: string): string;
declare function presentActiveIndicatives(stem: string): {
    singular: {
        1: string;
        2: string;
        3: string;
    };
    plural: {
        1: string;
        2: string;
        3: string;
    };
};
declare function imperfectActiveIndicatives(stem: string): {
    singular: {
        1: string;
        2: string;
        3: string;
    };
    plural: {
        1: string;
        2: string;
        3: string;
    };
};
declare function presentActiveSubjunctives(stem: string): {
    singular: {
        1: string;
        2: string;
        3: string;
    };
    plural: {
        1: string;
        2: string;
        3: string;
    };
};
declare function futureActiveIndicatives(stem: string): {
    singular: {
        1: string;
        2: string;
        3: string;
    };
    plural: {
        1: string;
        2: string;
        3: string;
    };
};
declare function futureMiddleIndicatives(stem: string): {
    singular: {
        1: string;
        2: string;
        3: string;
    };
    plural: {
        1: string;
        2: string;
        3: string;
    };
};
declare function stem(word: Word): any;
export { primarySuffixes, middleAndPassiveEndings, presentActiveIndicatives, presentActiveSubjunctives, imperfectActiveIndicatives, futureActiveIndicatives, futureMiddleIndicatives, augmentize, stem, };
//# sourceMappingURL=verbs.d.ts.map