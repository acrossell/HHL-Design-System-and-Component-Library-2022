import React from 'react';
import styled from 'styled-components';
import GlobalNavigation from '../../02_molecules/globalNavigation/globalNavigation.js';
import PropTypes from 'prop-types';
import CardData from "../../02_molecules/cardData/cardData.js";
import CardShare from "../../02_molecules/cardShare/cardShare.js";
import CardBlogArticle from "../../02_molecules/cardBlogArticle/cardBlogArticle.js";
import CardTransaction from "../../02_molecules/cardTransaction/cardTransaction.js";
import CardNotification from "../../02_molecules/cardNotification/cardNotification.js";
import CardDonut from "../../02_molecules/cardDonut/cardDonut.js";
import "../../../assets/css/flexboxgrid.css"
// Import style token json data
//----------------//

// Define Tokens //
// ---------------//

// Define Styles //
// ---------------//
const sectionStyleBlue = {
    padding: "48px",
    backgroundColor: "#122D44",
}

const sectionStyleWhite = {
    padding: "48px",
    backgroundColor: "white",
}

// Define Component //
// -----------------//
function DashBoard() {
  return (
    <div className="body">
        <GlobalNavigation/>
        
        <section className="section" style={sectionStyleBlue}>
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <CardDonut />
                </div>
                <div className="col-xs-12 col-md-6">
                    <CardNotification />
                    <CardNotification />
                    <CardNotification />
                </div>
            </div>
        </section>

        <section className="section" style={sectionStyleBlue}>
            <div className="row">
                <div className="col-xs-12 col-sm-8 ol-md-6 col-lg-4">
                    <CardData />
                </div>
                <div className="col-xs-12 col-sm-8 ol-md-6 col-lg-4">
                    <CardData />
                </div>
                <div className="col-xs-12 col-sm-8 ol-md-6 col-lg-4">
                    <CardData />
                </div>
            </div>
        </section>

        <section className="section" style={sectionStyleBlue}>
            <div className="row">
                <div className="col-xs-12">
                    <CardShare />
                </div>
                <div className="col-xs-12">
                    <CardShare />
                </div>
                <div className="col-xs-12">
                    <CardShare />
                </div>
            </div>
        </section>

        <section className="section" style={sectionStyleBlue}>
            <div className="row">
                <div className="col-xs-12">
                    <CardTransaction />
                </div>
                <div className="col-xs-12">
                    <CardTransaction />
                </div>
                <div className="col-xs-12">
                    <CardTransaction />
                </div>
            </div>
        </section>

        <section className="section" style={sectionStyleWhite}>
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
                    <CardBlogArticle />
                </div>
                <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
                    <CardBlogArticle />
                </div>
                <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
                    <CardBlogArticle />
                </div>
            </div>
        </section>
    </div>
  );
}

export default DashBoard;

DashBoard.propTypes = {
  hasIcon: PropTypes.string,
  buttonCopy: PropTypes.string
};