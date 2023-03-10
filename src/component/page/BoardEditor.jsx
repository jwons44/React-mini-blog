import React, { Component } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import '../ui/CKEditorStyle.css';
import styled from 'styled-components';

const editorConfiguration = {
    
    // plugins: [ Underline],
    toolbar: {
        items : [
        "heading",
        "|",
        "fontFamily","fontSize", "fontColor", "fontBackgroundColor",
        'bold', 'italic', "highlight", "|",
        '-',
        "alignment",
        "outdent",
        "indent",
        "bulletedList",
        "numberedList",
        "blockQuote",
        "|",
        "link",
        "insertTable",
        "imageUpload",
        "|",
        "undo",
        "redo"

    ],
    shouldNotGroupWhenFull: true
    },
    fontSize: {
        options: [
            14,
            15,
            16,
            17,
            18,
            19,
            'default',
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
        ],
    },
    alignment: {
        options: ["justify", "left", "center", "right"],
    },
    fontFamily: {
        options: [
            'default',
		'Arial',
		'궁서체',
		'바탕',
		'돋움'
        ]
    },
    list: {
        properties: {
            styles: true,
            startIndex: true,
            reversed: true
        }
    },
    highlight: {
        options: [
            {
                model: 'yellowMarker',
                class: 'marker-yellow',
                title: 'Yellow marker',
                color: 'var(--ck-highlight-marker-yellow)',
                type: 'marker'
            },
            {
                model: 'greenMarker',
                class: 'marker-green',
                title: 'Green marker',
                color: 'var(--ck-highlight-marker-green)',
                type: 'marker'
            },
            {
                model: 'pinkMarker',
                class: 'marker-pink',
                title: 'Pink marker',
                color: 'var(--ck-highlight-marker-pink)',
                type: 'marker'
            },
            {
                model: 'blueMarker',
                class: 'marker-blue', 
                title: 'Blue marker', 
                color: 'var(--ck-highlight-marker-blue)', 
                type: 'marker' 
            }
        ]
    },
    table: {
        contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
        ],
    },
    image: {
        resizeUnit: "px",
        toolbar: [
            "imageStyle:alignLeft",
            "imageStyle:full",
            "imageStyle:alignRight",
            "|",
            "imageTextAlternative",
        ],
        styles: ["full", "alignLeft", "alignRight"],
        type: ["JPEG", "JPG", "GIF", "PNG"],
    },
    typing: {
        transformations: {
            remove: [
                "enDash",
                "emDash",
                "oneHalf",
                "oneThird",
                "twoThirds",
                "oneForth",
                "threeQuarters",
            ],
        },
    },

    placeholder: "내용을 입력해주세요."
};

const Wrapper = styled.div`

    .ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar, .ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners {
        border-top-left-radius:2em !important;
        border-top-right-radius: 2em !important;
        padding: 10px;
    }
    

    .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
        border-bottom-left-radius: 2em !important;
        border-bottom-right-radius: 2em !important;
    }

    .ck.ck-editor__editable:not(.ck-editor__nested-editable):focus {
        border:1px solid #37b24d !important;
    }

    
    
`

function BoardEditor() {
    return (
        <Wrapper>
            <CKEditor
                editor={Editor}
                config={editorConfiguration}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);

                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </Wrapper>
    );
}


export default BoardEditor;