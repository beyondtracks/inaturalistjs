"use strict";
var Model = require( "./model" );

var Project = class Project extends Model {

  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, Project );
  }

  static typifyInstanceResponse( response ) {
    return super.typifyInstanceResponse( response, Project );
  }

};

module.exports = Project;
