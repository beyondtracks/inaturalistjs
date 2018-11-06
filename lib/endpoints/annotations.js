const iNaturalistAPI = require( "../inaturalist_api" );
const Annotation = require( "../models/annotation" );

const annotations = class annotations {
  static create( params, options ) {
    return iNaturalistAPI.post( "annotations", params, options )
      .then( Annotation.typifyInstanceResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "annotations/:id", params, options );
  }

  static vote( params, options ) {
    return iNaturalistAPI.post( "votes/vote/annotation/:id", params, options )
      .then( Annotation.typifyInstanceResponse );
  }

  static unvote( params, options ) {
    return iNaturalistAPI.delete( "votes/unvote/annotation/:id", params, options );
  }
};

module.exports = annotations;
