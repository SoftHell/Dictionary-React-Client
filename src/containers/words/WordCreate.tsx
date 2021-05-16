import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ILanguage } from '../../dto/ILanguage';
import { IPartOfSpeech } from '../../dto/IPartOfSpeech';
import { ITopic } from '../../dto/ITopic';
import { IWord } from '../../dto/IWord';
import { BaseService } from '../../services/base-service';
import { EPageStatus } from '../../types/EPageStatus';
import WordForm from './WordForm';

const WordCreate = () => {
    
    const word: IWord = {
        value: '',
        languageId: '',
        topicId: '',
        partOfSpeechId: '',
        example: '',
        explanation: ''
    };
    
    const [languages, setLanguages] = useState([] as ILanguage[]);
    const [partsOfSpeech, setPartsOfSpeech] = useState([] as IPartOfSpeech[]);
    const [topics, setTopics] = useState([] as ITopic[]);
    const [pageStatus, setPageStatus] = useState({ pageStatus: EPageStatus.Loading, statusCode: -1 });

    const loadLanguages = async () => {
        let langResult = await BaseService.getAll<ILanguage>('/language');

        if (langResult.ok && langResult.data) {
            setLanguages(langResult.data);
        } else {
            setPageStatus({ pageStatus: EPageStatus.Error, statusCode: langResult.statusCode });
        }
    }

    const loadTopics = async () => {
        let topicResult = await BaseService.getAll<ITopic>('/topic');

        if (topicResult.ok && topicResult.data) {
            setTopics(topicResult.data);
        } else {
            setPageStatus({ pageStatus: EPageStatus.Error, statusCode: topicResult.statusCode });
        }

    }

    useEffect(() => {
        loadLanguages();
        loadTopics();
    });

    return (
        <>
            <WordForm />
        </>
    );
};

export default WordCreate;
 