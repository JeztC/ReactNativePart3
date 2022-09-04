import ImageComponent from "./ImageComponent";
import {View, StyleSheet} from "react-native";
import DescriptionComponent from "./DescriptionComponent";
import InfoComponent from "./InfoComponent";

const styles = StyleSheet.create({
    backGroundContainer: {
        backgroundColor: 'white',
    },
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        flexGrow: 1,
    },
});

const RepositoryItem = ({fullName, description, language, stars, forks, reviews, rating, ownerAvatarUrl}) => {
    return (
        <View style={styles.backGroundContainer}>
            <View style={styles.container}>
                <ImageComponent ownerAvatarUrl={ownerAvatarUrl}/>
                <DescriptionComponent fullName={fullName} description={description} language={language}/>
            </View>
            <InfoComponent stars={stars} forks={forks} reviews={reviews} rating={rating}/>
        </View>
    )
}

export default RepositoryItem