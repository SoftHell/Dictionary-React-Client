import { useEffect, useState } from "react";
import { IPartOfSpeech } from "../../dto/IPartOfSpeech";
import { BaseService } from "../../services/base-service";

interface IFormValues {
    value: string;
    languageId: string;
    topicId?: string;
    partOfSpeechId?: string;
    equivalentString?: string;
    example?: string;
    explanation?: string;

}

export interface IFormProps {
    values: IFormValues;

    handleChange: (target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => void;
}

const FormView = (props: IFormProps) => {
    
    const [partsOfSpeech, setPartsOfSpeech] = useState([] as IPartOfSpeech[]);

    const loadPartsOfSpeech = async () => {
        let partOfSpeechResult = await BaseService.getAll<IPartOfSpeech>('/partofspeech');

        if (partOfSpeechResult.ok && partOfSpeechResult.data) {
            setPartsOfSpeech(partOfSpeechResult.data);
        }

    }

    useEffect(() => {
        loadPartsOfSpeech();
    }); 

    return (
        <>
            <h1>Add a Word</h1>
            <hr />
            <div className="row">
                <div className="col-md-8">
                    <form>
                        <div className="form-group d-grid gap-2 col-4 mx-auto btn-group">
                            <select className="form-control btn-outline-success btn" value={props.values.languageId} onChange={(e) => props.handleChange(e.target)} id="formInputLanguage">
                                <option>English</option>
                                <option>Estonian</option>
                            </select>
                        </div>
                        <div className="form-box">
                            <div className="form-group">
                                <input value={props.values.value} onChange={(e) => props.handleChange(e.target)} placeholder="Insert a new word" type="text" className="form-control" id="formInputValue" />
                            </div>
                            <div className="form-group">
                                <input value={props.values.equivalentString} onChange={(e) => props.handleChange(e.target)} placeholder="Insert an equivalent" type="text" className="form-control" id="formInputEquivalent" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}
const initialFormValues: IFormValues = {
    value: '',
    languageId: '',
    topicId: '',
    partOfSpeechId: '',
    equivalentString: '',
    example: '',
    explanation: '',
};


const WordForm = () => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {

        if (target.id === 'formInputLanguage') {
            setFormValues({ ...formValues, languageId: target.value });
            return;
        }
        if (target.id === 'formInputValue') {
            setFormValues({ ...formValues, value: target.value });
            return;
        }
        if (target.id === 'formInputEquivalent') {
            setFormValues({ ...formValues, equivalentString: target.value });
            return;
        }
    }


    return <FormView values={formValues} handleChange={handleChange} />
};

export default WordForm;


