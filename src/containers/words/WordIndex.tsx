import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { IWord } from '../../dto/IWord';
import { BaseService } from '../../services/base-service';
import { EPageStatus } from '../../types/EPageStatus';

const RowDisplay = (props: { word: IWord }) => (
    <tr className="row">
                <td className="col-sm-5">
                    <div>
                        <Link className="index-heading" to={"/Word/" + props.word.id}>
                            {props.word.value}
                        </Link>
                    </div>
                </td>
                <td className="col-sm-6">
                    {props.word.equivalentString}
                </td>
                <td className="col-sm-1">
                    <Link to={"/word/delete/" + props.word.id}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </Link>
                </td>
            </tr>
);

const WordIndex = () => {
    const [words, setWords] = useState([] as IWord[]);
    const [pageStatus, setPageStatus] = useState({ pageStatus: EPageStatus.Loading, statusCode: -1 });

    const loadData = async () => {
        let result = await BaseService.getAll<IWord>('/word');

        if (result.ok && result.data) {
            setWords(result.data);
        } else {
            setPageStatus({ pageStatus: EPageStatus.Error, statusCode: result.statusCode });
        }

    }

    useEffect(() => {
        loadData();
    });

    return (
        <>
            <h1>Dictionary</h1>
            <div className="form-box">
            <table className="table">
                <thead>
                    <tr className="row">
                        <th className="col-sm-5">
                            Word
                        </th>
                        <th className="col-sm-6">
                            Equivalents
                        </th>
                        <th className="col-sm-1"></th>
                    </tr>
                </thead>
                <tbody>
                    {words.map(word => 
                        <RowDisplay word={word} key={word.id} />)
                    }
                </tbody>
            </table>
            </div>
        </>
    );
};

export default WordIndex;