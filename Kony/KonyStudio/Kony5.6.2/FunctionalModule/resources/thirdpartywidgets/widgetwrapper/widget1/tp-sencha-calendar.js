datepicker = {

	datePicker: null,

    /**
     *  widgetModel : id, containerWeight,margins, paddings, contentAlignment
     *
     *
     */
    initializeWidget : function(parentNode, widgetModel)
    {

        var calTextbox = '<input type="text" id="'+widgetModel['id']+'" style="border:1px solid #444444; width:100%;">';
        parentNode.innerHTML = calTextbox;
		
		widgetModel["date"] = null;

		var calTextbox = document.getElementById(widgetModel['id']);

        if(!datepicker.datePicker) {
            datepicker.datePicker = {};
        }
		datepicker.datePicker[widgetModel['id']] = new Ext.DatePicker({useTitles:true});
		var senchaDatePicker = datepicker.datePicker[widgetModel['id']];

		senchaDatePicker.on('change', function(me, date) {
			var dt = date.getDate(); dt = (dt<10) ? '0'+dt : dt;
			var mth = date.getMonth() + 1; mth = (mth<10) ? '0'+mth : mth;
			var viewDateStr = dt + '/' + mth + '/' + date.getFullYear();
			datepicker.modelChange(widgetModel, "date", viewDateStr);
		});

        calTextbox.onfocus = function(e) { this.blur();
			senchaDatePicker.show();
		};
    },

    modelChange : function(widgetModel, propertyChanged, propertyValue)
    {
		if (propertyChanged === "date")
		{
			widgetModel["date"] = propertyValue;

			var calTextbox = document.getElementById(widgetModel['id']);

			var dateArr = propertyValue.split('/');
			var dt = parseInt(dateArr[0], 10); dt = (dt<10) ? '0'+dt : dt;
			var mth = parseInt(dateArr[1], 10); mth = (mth<10) ? '0'+mth : mth;
			var yr = parseInt(dateArr[2], 10);
			var viewDateStr = dt + '/' + mth + '/' + yr;

			calTextbox.value = viewDateStr;

			datepicker.datePicker[widgetModel['id']].setValue(new Date(yr, mth-1, dt), false);
		}
    }
	

    
}
