/**
 * @title 基础Loadingstate
 * @description  点击按钮，呈现等待。
 */
class Demo1 extends Component {
	render () {
		return (
			<Loadingstate colors="info" loadingTime={4000}>confirm</Loadingstate>
		)
	}
}