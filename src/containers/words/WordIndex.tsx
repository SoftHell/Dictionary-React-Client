import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { IWord } from '../../dto/IWord';
import { BaseService } from '../../services/base-service';
import { EPageStatus } from '../../types/EPageStatus';

const RowDisplay = (props: { word: IWord }) => (
    <tr>
        <td>
            <div>
                <Link className="index-heading" to={"/Word/" + props.word.id}>
                    {props.word.value}
                </Link>
            </div>
            <div>
                {/* <img src={props.word.sampleImageUrl} alt="activity-type" width="65%"></img> */}
            </div>
        </td>
        <td>
            {/* {props.word.description} */}
        </td>
        <td>
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
            <h1>Tegevuse liigid</h1>
            <table className="table">
                <tbody>
                    {words.map(word => 
                        <RowDisplay word={word} key={word.id} />)
                    }
                </tbody>
            </table>
            <Loader {...pageStatus} />
        </>
    );
};

export default WordIndex;