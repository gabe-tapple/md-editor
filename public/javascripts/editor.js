var easyMDE = new EasyMDE({
    autoFocus: true,
    autosave: {
        enabled: true,
        uniqueId: "MyUniqueID",
        delay: 1000,
        submit_delay: 5000,
        timeFormat: {
            locale: 'en-US',
            format: {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            },
        },
        text: "Autosaved: "
    },
    element: document.getElementById('inputTextToSave'),
    uploadImage: true,
    toolbar: [
        'bold',
        'italic',
        'heading',
        'heading-smaller',
        'heading-bigger',
        '|',
        'quote',
        'unordered-list',
        'ordered-list',
        'code',
        '|',
        'link',
        'image',
        {
            name: "upload-image",
            action: EasyMDE.drawUploadedImage,
            className: "fa fa-upload",
            title: "Upload Image"
        },
        '|',
        'preview',
        'side-by-side',
        'fullscreen',
        '|',
        'guide'
    ],
});
function saveTextAsFile() {
    var textToSave = easyMDE.value();
    var textToSaveAsBlob = new Blob([textToSave], { type: "text/markdown" });
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    // var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    var fileNameToSaveAs = 'post_content.md'

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}