import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from "./RepositoryItem";
import {useEffect, useState} from "react";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { repositories } = useRepositories();

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];
    return (
        <View style={{flex: 1}}>
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                // other props
                renderItem={(item) => (
                    <RepositoryItem
                        fullName={item.item.fullName}
                        description={item.item.description}
                        language={item.item.language}
                        stars={item.item.stargazersCount}
                        forks={item.item.forksCount}
                        reviews={item.item.reviewCount}
                        rating={item.item.ratingAverage}
                        ownerAvatarUrl={item.item.ownerAvatarUrl}
                    >
                    </RepositoryItem>
                )}
            />
        </View>
    );
};

export default RepositoryList;