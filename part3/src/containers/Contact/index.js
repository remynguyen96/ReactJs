import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import TextField from 'material-ui/TextField';
import LoadingHOC from "../Contact/LoadingHOC";
import ScrollPosition from "./ScrollPosition";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 'auto',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 480,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    spacer: {
      height: '350px',
    }
});

class ContactContainer extends Component {

    render() {
        const {classes, contacts, loadingTime} = this.props;
        return (
            <div className={classes.root}>
                <p>Loading time {loadingTime} seconds</p>
                <TextField
                    id="helperText"
                    label="Contact Name"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                />
                <div className={classes.spacer}></div>
                <ScrollPosition>
                    { position =>
                        <h1 style={{fontSize: "80px", opacity: position}} >
                            {'Awesome Text !'.substr(0, position*13) }
                        </h1>
                    }
                </ScrollPosition>
                <div className={classes.spacer}></div>
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                        <Subheader component="div">December</Subheader>
                    </GridListTile>
                    {contacts.map(user => (
                        <GridListTile key={user.email}>
                            <img src={user.thumbnail} alt={user.thumbnail}/>
                            <GridListTileBar
                                title={user.email}
                                subtitle={<span>by: {user.name}</span>}
                                actionIcon={
                                    <IconButton className={classes.icon}>
                                        <InfoIcon/>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
};


ContactContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    contacts: PropTypes.array.isRequired,
};

ContactContainer.defaultProps = {
    classes: {},
    contacts: [],
};

export default withStyles(styles)(
    LoadingHOC('classes')(ContactContainer)
);
