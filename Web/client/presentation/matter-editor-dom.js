// Matter Editor
var matterEditorDOM = {
    currentId: 0,
    // Get DOM Element
    getDOM: function () { return getDOM('matter-editor'); },

    // Clear the DOM content
    clear: function (){
        getDOM('matter-editor-title').value   = '';
        getDOM('matter-editor-content').value = '';
    },

    // Get Values
    getValues: function (){
        var values = {
            'title'     : getDOM('matter-editor-title').value,
            'content'   : getDOM('matter-editor-content').value,
            'section_id': getDOM('matter-editor-section').value,
        };
        return values;
    },

    // Set Values
    setValues: function (data){
        getDOM('matter-editor-form').dataset.id = data['id'],
        getDOM('matter-editor-title').value   = data['title'];
        getDOM('matter-editor-content').value = data['content'];
        getDOM('matter-editor-section').value = data['section_id'];
    },

    // Show new window
    showNew: function (){
        matterEditorDOM.clear();
        getDOM('matter-editor-submit').vallue = 'Add';
        this.show();
    },

    // Show edit window
    showEdit: function (data){
        matterEditorDOM.setValues(data);
        this.show();
    },

    // Show the window
    show: function (){ getDOM('modal').style.display='block'; }, // Show matter editor popup

    hide: function (){ getDOM('modal').style.display = "none"; },
}
