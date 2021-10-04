import React from 'react';
import islamic from '../../images/islamic.png';
import './Section.css';

const Section = () => {
    return (
        <div>
            <div className="d-flex m-4">
                <div>
                    <img src={islamic} alt="" />
                </div>
                <div className="section">
                    <h1>THE WORLD'S BEST ISLAMIC EDUCATION</h1>
                    <p>Education has played a central role in Islam since Ancient times, owing in part to the centrality of scripture and its study in the Islamic tradition. Before the modern era, education would begin at a young age with study of Arabic and the Quran. Some students would then proceed to training in tafsir (Quranic exegesis) and fiqh (Islamic jurisprudence), which was seen as particularly important. For the first few centuries of Islam, educational settings were entirely informal, but beginning in the 11th and 12th centuries, the ruling elites began to establish institutions of higher religious learning known as madrasas in an effort to secure support and cooperation of the ulema (religious scholars).</p>
                </div>
            </div>
        </div>
    );
};

export default Section;