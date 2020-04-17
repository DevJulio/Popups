var resultado = document.getElementById('resultado');
function gerar() {
    var NomePP = document.getElementById("NomePP").value;


    var ArquivoPrincipal = ` var popupInstance = SanPopup.open({
        templateUrl:
            'html5/SelecaoDocumento/popup/${NomePP}/${NomePP}.tpl.html',
        controller: '${NomePP}Controller',
        controllerAs: 'ctrl',
      
        title: ,
        size: 'md',
        showBtnOk: false,
        showBtnCancel: false,
        resolve: {
            data: function () {
                return {
                    data: 
                };
            }
        }
    });}`

    var ArquivoController = `
    angular.module('SelecaoDocumentoApp').controller('${NomePP}Controller', [
        'data',
        'MessageUtils',
        'ServiceProxy',
        '$scope',

    function (data, MessageUtils, ServiceProxy, $scope) {
        self = this;

        $scope.$success = function () {
        };

    }
    ]);
    
    `

    var ArquivoBody = `<script src="html5/SelecaoDocumento/popup/${NomePP}/${NomePP}.controller.js"></script>`

    var body = document.getElementById("body").value = ArquivoBody
    var principal = document.getElementById("principal").value = ArquivoPrincipal
    var Controller = document.getElementById("Controller").value = ArquivoController

}
