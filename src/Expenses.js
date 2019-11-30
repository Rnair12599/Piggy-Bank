import React from "react";
import { db } from "./config/firebase";
import fire from "./config/firebase";
import ExpenseForm from "./ExpenseForm"
// import Calculator from './layout/Calculator/Calculator';
//expansion panel files
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//expense table files
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Expenses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expenses: []
		}
		this.ExpenseTable = this.ExpenseTable.bind(this);
		this.Accordion = this.Accordion.bind(this);
		this.tableListener = this.tableListener.bind(this);
	}

	createExpense(name, amount, category, date){
		return {name, amount, category, date};
	}

	componentDidMount(){
		var expenses_copy = [];
		var found = 0;
		fire
		.firestore()
		.collection("users")
		.get()
		.then(querySnapshot => {
			querySnapshot.forEach(function(doc) {
			if (doc.id === fire.auth().currentUser.email) {
				expenses_copy = doc.data().expenses;
				found = 1;
			}
			});
			if (found === 0) {
				console.log("expenses don't exist");
			} else
			this.setState({
				expenses: expenses_copy
				.catch(function(error){
					console.log("Issue with expense table initializing: ", error)
					window.location = "/"
				})
			});
		})
		.catch(function(error) {
			// alert("Error fetching user data");
			console.log("Error fetching data: ", error);
		});
	}
	componentDidUpdate(){
		var expenses_copy = [];
		var found = 0;
		fire
		.firestore()
		.collection("users")
		.get()
		.then(querySnapshot => {
			querySnapshot.forEach(function(doc) {
			if (doc.id === fire.auth().currentUser.email) {
				expenses_copy = doc.data().expenses;
				found = 1;
			}
			});
			if (found === 0) {
				console.log("expenses don't exist");
			} else
			this.setState({
				expenses: expenses_copy
				.catch(function(error){
					console.log("Issue with expense table initializing: ", error)
					window.location = "/"
				})
			});
		})
		.catch(function(error) {
			// alert("Error fetching user data");
			console.log("Error fetching data: ", error);
		});
	}

	Accordion(){
		const useStyles = makeStyles(theme => ({
			root: {
				width: '100%',
			},
			heading: {
				fontSize: theme.typography.pxToRem(15),
				fontWeight: theme.typography.fontWeightRegular,
			},
		}));

		const classes = useStyles();

		return (
			<div className={classes.root}>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className={classes.heading}>
							This Month's Expenses
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							<this.ExpenseTable />
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		);
	}
	tableListener(){
		let userRef = db.collection("users").doc(fire.auth().currentUser.email);
		let expensesRef = userRef.expenses;
		expensesRef.on('value', function(snapshot){
			this.setState({
				expenses: snapshot.val()
			});
		});
	}

	ExpenseTable(){
		const useStyles = makeStyles({
			root: {
				width: '100%',
				overflowX: 'auto',
			},
			table: {
				minWidth: 650,
			},
		});
		//var exList = []
		//exList = this.state.expenses;
		//this.expenses.push(this.createExpense('Movie', 30, 'Entertainment', '10/31/2019'));
		//this.expenses.push(this.createExpense('Disneyland', 300, 'Leisure', '11/10/2019'));
		// addExpense('Whole Foods', 45, 'Groceries', '11/6/2019');
		// addExpense('Movie', 30, 'Entertainment', '10/31/2019');
		// addExpense('Disneyland', 300, 'Leisure', '11/10/2019');
		const classes = useStyles();
		//let userRef = db.collection("users").doc(fire.auth().currentUser.email);
		/*let expensesRef = db.ref('users/' + fire.auth().currentUser.email + 'expenses');
		expensesRef.on('value', function(snapshot){
			this.setState({
				expenses: snapshot.val()
			});
		});*/
		return (
			<Paper className={classes.root}>
				<Table className={classes.table} aria-label="Expenses">
					<TableHead>
						<TableRow>
							<TableCell>Expense</TableCell>
							<TableCell align="right">Amount</TableCell>
							<TableCell align="right">Category</TableCell>
							<TableCell align="right">Date</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.expenses.map(expenses => (
							<TableRow key = {expenses.index}>
								<TableCell component="th" scope="row">
									{expenses.name}
								</TableCell>
								<TableCell align="right">{expenses.amount}</TableCell>
								<TableCell align="right">{expenses.category}</TableCell>
								<TableCell align="right">{expenses.date}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		);
	}

	render(){
		// Console.log({this.state.DATA});
		return (
			<div>
				<this.Accordion />
				<ExpenseForm />
			</div>
		);
	}
}
export default Expenses;
