export interface IWord {
    id?: string;
    value: string;
    languageId: string;
    queryWordId?: string;
    topicId?: string;
    partOfSpeechId?: string;
    equivalents?: string[];
    equivalentString?: string;
    example?: string;
    explanation?: string;
}
