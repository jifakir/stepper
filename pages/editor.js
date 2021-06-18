import dynamic from 'next/dynamic';
const DynamicComponent = dynamic(() => import('../components/Editor/Editor'), { ssr: false });

const EditorJS = () => {

    return (
        <div className="w-full">
            <div className="header">
                <div className="navigation">Navigation</div>
                <div className="title-section">
                    <div className="title-wrapper">
                        <h1 className="title">Add Lession</h1>
                        <p className="subtitle">Tip for today: students are more likely to follow an instruction that's clear and precise.</p>
                    </div>
                </div>
            </div>
            <main className="editor-section">
                <div className="editor-container">
                    <DynamicComponent />
                </div>
            </main>
        </div>
    )
};

export default EditorJS;