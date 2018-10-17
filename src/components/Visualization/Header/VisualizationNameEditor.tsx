import * as React from 'react';

export interface IVisualizationNameEditorState {
    name: string;
}

export interface IVisualizationNameEditorProps {
    name: string;
    onSubmit: (name: string) => void;
    onCancel: () => void;
}

export class VisualizationNameEditor extends React.Component<IVisualizationNameEditorProps, IVisualizationNameEditorState> {

    constructor(props: IVisualizationNameEditorProps) {
        super(props);

        this.state = {
            name: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    public componentDidMount() {
        this.setState({ name: this.props.name });
    }

    public handleChange(event: any) {
        const name = event.target.value;
        this.setState({ name });
    }

    public changeName(event: React.FormEvent) {
        event.stopPropagation();
        event.preventDefault();
        this.props.onSubmit(this.state.name);
    }

    public render() {
        return (
            <form onSubmit={this.changeName}>
                <input
                    onBlur={this.props.onCancel}
                    autoFocus={true}
                    type='text'
                    onChange={this.handleChange} 
                    value={this.state.name}
                    />
            </form>
        );
    }
}
