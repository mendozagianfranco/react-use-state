import { useState } from 'react';
import Card from './Card';
import ListButtons from './ListButtons';
import languages from '../data/languages';


export default function Main() {

    let [isSelect, setSelect] = useState(null);

    function renderText(id, key) {
        const language = languages.find(language => language.id === id);
        return language[key];
    }

    return (
        <main>
            <ListButtons>
                {languages.map(language => <li key={language.id}><button className='btn' onClick={() => setSelect(isSelect = language.id)} >{language.title}</button></li>)}
            </ListButtons>
            <Card className='card'>
                <h2>{isSelect ? renderText(isSelect, 'title') : 'Nessun linguaggio selezionato'}</h2>
                <p className='card-text'>{isSelect ? renderText(isSelect, 'description') : ''}</p>
            </Card>
        </main>
    );
}