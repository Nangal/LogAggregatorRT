var namespace_router = require('express').Router();
var NamespaceSchema = require('./namespaces.js');
var dataProvider = require('../core/datamodelprovider');

namespace_router.get('/', function(req, res){
  var NamespaceModel = dataProvider.getModel(NamespaceSchema, req.user.orgsite);
  NamespaceModel.find({},{editedBy:1,name:1,uploadJSONText:1,editedOn:1}, function(err, namespaceListData){
    if(err){
      return res.status(400).json(err);
    }
    else{
      return res.status(200).json(namespaceListData);
    }
  });
});

namespace_router.post('/:namespaceName', function (req, res) {
  var NamespaceModel = dataProvider.getModel(NamespaceSchema, req.user.orgsite);
  var namespaceObj = req.body;
  // console.log("reached stream post route to save ", streamObj);
  namespaceObj.orgsite=req.user.orgsite;
  var namespace1 = new NamespaceModel(req.body);
  namespace1.save(function(err, savedNamespaceData){
    if(err){
      return res.status(400).json(err);
    }
    else{
      return res.status(200).json(savedNamespaceData);
    }
  });
});

namespace_router.put('/:namespaceName',  function (req, res) {
  var NamespaceModel = dataProvider.getModel(NamespaceSchema, req.user.orgsite);
  NamespaceModel.update({_id:req.body._id}, req.body, {}, function(err, updatedNamespaceData){
    if(err){
      return res.status(400).json(err);
    }
    else{
      return res.status(200).json(updatedNamespaceData);
    }
  });
});

namespace_router.get('/:namespaceName', function(req, res){
  var NamespaceModel = dataProvider.getModel(NamespaceSchema, req.user.orgsite);
  NamespaceModel.findOne({name:req.params.namespaceName}, function(err, namespaceData){
    if(err){
      console.log("Error in getting namespace ", req.params.namespaceName, " error: ", err);
      //   return res.status(500).json({error:"Intentional error for testing erro scenario"});
      return res.status(500).json(err);
    } else{
      return res.status(200).json(namespaceData);
    }
  });
});

module.exports = namespace_router;
