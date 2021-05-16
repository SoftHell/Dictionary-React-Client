import React from 'react';

const HomeIndex = () => {
    return (
        
        <div className="row">
    <div className="col-sm-2"></div>
    <div className="col-sm-8">
        <div className="text-center heading-container">
            <section className="icon-right">
                <img src="https://i.pinimg.com/originals/a4/48/f0/a448f012ac2681e47ebdd86aaf8a274a.gif" height="40%" width="30%" alt="geometric-shape-gif"></img>
            </section>
            <section>
                <h2 className="padded home-subheading">Estonian-English-Estonian Dictionary</h2>
            </section>
        </div>
        <form>
            <div asp-validation-summary="ModelOnly" className="text-danger"></div>
            <span asp-validation-for="KeyWord" className="text-danger"></span>
            <div className="input-group mb-3 search-bar">
                <input asp-for="KeyWord" type="text" className="form-control search-input" placeholder="Insert a keyword..."/>
                <span>
                    <select className="search-bar-lang-input form-control " asp-for="LanguageId" asp-items="Model.LanguageSelectList"></select>
                </span>
                <span>
                    <button className="search-button" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </button>
                </span>
                <span asp-validation-for="KeyWord" className="text-danger"></span>
            </div>
            <div className="pad-left-lg" aria-label="match-exactness-choice" id="match-exactness-choice">
                
                <span className="match-choices">
                    <div className="form-check form-check-inline">
                        <input asp-for="MatchExactness" className="form-check-input check-size" type="radio" value="@EMatchExactness.Exact" defaultChecked/>
                        <label className="form-check-label">Exact</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input asp-for="MatchExactness" className="form-check-input check-size" type="radio" value="@EMatchExactness.Fuzzy"/>
                        <label className="form-check-label">Fuzzy</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input asp-for="MatchExactness" className="form-check-input check-size" type="radio" value="@EMatchExactness.Partial"/>
                        <label className="form-check-label">Partial</label>
                    </div>
                </span>
            </div>
        </form>
    </div>
    <div className="col-sm-2"></div>
</div>

    );
}

export default HomeIndex;