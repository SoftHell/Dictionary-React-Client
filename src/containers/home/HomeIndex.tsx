import React from 'react';

const HomeIndex = () => (
    <>
        <h1 className="home-heading">Avasta oma anne, &#xF5;ppides uusi oskusi</h1>
        <div className="row">
            <div className="col-sm-1 col-md-3 logo-div">
            <img className="logo" src="https://media4.giphy.com/media/tng6MxUpybYc4AU9Ob/giphy.gif?cid=790b76113984f936e51a572a3ca46aaf77f528ddf598508d&rid=giphy.gif&ct=g" alt="hot-air-balloon"></img>
            </div>
            <div className="col-sm-10 col-md-6 info-box container d-grid gap-4 mx-auto">
            <form action="/Home/Search" method="post">
                <div className="form-group">
                    <label className="control-label">Riik</label>
                    <select className="form-control" id="country" name="country">
                        <option value=""> -- Vali -- </option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="control-label">Maakond</label>
                    <select className="form-control" id="county" name="county">
                        <option value=""> -- Vali -- </option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="control-label">Tegevuse liik</label>
                    <select className="form-control" id="activity-type" name="activity-type">
                        <option value=""> -- Vali -- </option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="control-label">Asula</label>
                    <select className="form-control" id="location-town-parish" name="location-town-parish">
                        <option value=""> -- Vali -- </option>
                    </select>
                </div>
            </form>
            </div>
        </div>
    </>
);

export default HomeIndex;