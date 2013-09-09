// Register a plugin named "flywetpage".
(function()
{
    CKEDITOR.plugins.add( 'flywetpage',
    {
        init : function( editor )
        {
            // Register the command.
            editor.addCommand( 'flywetpage',{
                exec : function( editor )
                {
                    // Create the element that represents a print break.
                    // alert('flywetpageCmd!');
                    editor.insertHtml("#p#副标题#e#");
                }
            });
            // alert('dedepage!');
            // Register the toolbar button.
            editor.ui.addButton( 'MyPage',
            {
                label : '插入分页符',
                command : 'flywetpage',
                icon: 'images/flywetpage.gif'
            });
            // alert(editor.name);
        },
        requires : [ 'fakeobjects' ]
    });
})();
