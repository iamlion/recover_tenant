import React, {
    Component
} from 'react';
import {
    Platform,
    View,
    Text,
    Dimensions,
    ART,
    Animated,
    Alert,
    ActivityIndicator,
    ListView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,

} from 'react-native'

const REFRESH_REFRESHING = 1, REFRESH_PULLTOREFRESH = 2, REFRESH_RELEASETOREFRESH = 3;

class LoadRefreshScrollView extends Component {


    static defaultProps = {
        refreshHeight: 60
    }

    constructor(props) {
        super(props)
        this.state = {
            refresh_stats: REFRESH_PULLTOREFRESH
        }
    }

    scrollTo = (y, animated = true) => {
        this.scrollView && this.scrollView.scrollTo({
            y: y,
            animated: animated
        })
    }

    onScroll = (event) => {
        if ((this.state.refresh_stats == REFRESH_REFRESHING)
            || this._isFirstLoaded) {
            return
        }
        let y = event.nativeEvent.contentOffset.y
        this._offsetY = y
        if (this._dragFlag) {
            let height = this.props.refreshHeight;
            if (!(this.state.refresh_stats == REFRESH_REFRESHING)) {
                if (y <= -height) {
                    //松开以刷新
                    if (this.state.refresh_stats != REFRESH_RELEASETOREFRESH) {
                        this.state.refresh_stats = REFRESH_RELEASETOREFRESH;
                        this.setState({
                            refresh_stats: REFRESH_RELEASETOREFRESH
                        })
                    }
                } else {
                    //下拉以刷新
                    if (this.state.refresh_stats != REFRESH_PULLTOREFRESH) {
                        this.setState({
                            refresh_stats: REFRESH_PULLTOREFRESH
                        })
                    }
                }
            }
        }

        if (this.props.onScroll) {
            this.props.onScroll(event)
        }
    }

    onScrollEndDrag = (event) => {
        if ((this.state.refresh_stats == REFRESH_REFRESHING)
            || this._isFirstLoaded) {
            return
        }

        this._dragFlag = false
        let y = event.nativeEvent.contentOffset.y
        this._offsetY = y
        let height = this.props.refreshHeight;
        if (!(this.state.refresh_stats == REFRESH_REFRESHING)) {
            if (this.state.refresh_stats == REFRESH_RELEASETOREFRESH) {
                //开始加载
                this.state.refresh_stats = REFRESH_REFRESHING;
                this.setState({
                    refresh_stats: REFRESH_REFRESHING
                });
                this.scrollTo(-height, false);
                this.props.onTopRefresh && this.props.onTopRefresh(() => {
                    this.scrollTo(0);
                    this.setState({
                        refresh_stats: REFRESH_PULLTOREFRESH,
                        _lastUpTime: new Date().Format("yyyy-MM-dd hh:mm")
                    });
                }, false)
            }
        } else {
            if (y <= 0) {
                this.scrollTo(-height);
            }
        }

        if (this.props.onScrollEndDrag) {
            this.props.onScrollEndDrag(event)
        }
    }

    _onScrollBeginDrag = (event) => {
        this._dragFlag = true
        this._offsetY = event.nativeEvent.contentOffset.y

        if (this.props.onScrollBeginDrag) {
            this.props.onScrollBeginDrag(event)
        }
    }


    componentDidMount() {//持久化恢复储存的state
        this.scrollTo(-this.props.refreshHeight, false);
        if (this.props.onTopRefresh) {
            this._isFirstLoaded = true;
            this.state.refresh_stats = REFRESH_REFRESHING;
            this.setState({
                refresh_stats: REFRESH_REFRESHING
            });
            this.props.onTopRefresh(() => {
                this.scrollTo(0)
                this.setState({
                    refresh_stats: REFRESH_PULLTOREFRESH
                });
                delete this._isFirstLoaded;
            }, false)
        } else {
            this.scrollTo(0, false);
        }
    }

    renderRefreshStatus = () => {
        if (this.state.refresh_stats == REFRESH_PULLTOREFRESH) {
            return (
                <Text
                    style={{
                        fontSize: 14,
                        color: "#6b6b6b"
                    }}>下拉刷新</Text>
            )
        } else if (this.state.refresh_stats == REFRESH_REFRESHING) {
            return (
                <Text
                    style={{
                        fontSize: 14,
                        color: "#6b6b6b"
                    }}>刷新中...</Text>
            )
        } else if (this.state.refresh_stats == REFRESH_RELEASETOREFRESH) {
            return (
                <Text
                    style={{
                        fontSize: 14,
                        color: "#6b6b6b"
                    }}>释放刷新</Text>
            )
        }
    }

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                style={{
                    maxHeight:Dimensions.get("window").height - 50 - Platform.select({ios:64,android:44})
                }}
                onScroll={this.onScroll}
                onScrollEndDrag={this.onScrollEndDrag}
                onScrollBeginDrag={this._onScrollBeginDrag}
                ref={c => this.scrollView = c}
            >
                <View
                    style={{
                        height: this.props.refreshHeight,
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        left: 0,
                        width: Dimensions.get("window").width,
                        top: -this.props.refreshHeight
                    }}>
                    <View style={{
                        marginTop: 5,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <View
                            style={{
                                marginLeft: 15
                            }}>
                            {
                                this.renderRefreshStatus()
                            }
                            <Text style={{
                                fontSize: 9,
                                color: "#8f8f8f",
                                marginTop: 5
                            }}>最后更新:{this.state._lastUpTime || "刚刚"}</Text>
                        </View>
                    </View>
                </View>
                {this.props.children}
            </ScrollView>
        )
    }


}

class LoadRefreshAndroidView extends Component {


    static defaultProps = {

        refreshHeight: 60

    }

    constructor(props) {
        super(props)
        this.state = {
            refresh_stats: REFRESH_PULLTOREFRESH
        }
    }


    scrollTo = (y, animated = true) => {
        let cs = setTimeout(() => {
            this.scrollView && this.scrollView.scrollTo({
                y: y,
                animated: animated
            })
            clearTimeout(cs);
            cs = null;
        }, 50)
    }


    onScroll = (event) => {
        if ((this.state.refresh_stats == REFRESH_REFRESHING)
            || this._isFirstLoaded) {
            return
        }
        let y = event.nativeEvent.contentOffset.y;
        let height = this.props.refreshHeight;
        if (y <= height) {
            this._offsetY = y - height
            if (this._dragFlag) {
                if (!(this.state.refresh_stats == REFRESH_REFRESHING)) {
                    if (y <= 8) {
                        if (this.state.refresh_stats != REFRESH_RELEASETOREFRESH) {
                            this.state.refresh_stats = REFRESH_RELEASETOREFRESH;
                            this.setState({
                                refresh_stats: REFRESH_RELEASETOREFRESH
                            })
                        }
                    } else {
                        if (this.state.refresh_stats != REFRESH_PULLTOREFRESH) {
                            this.setState({
                                refresh_stats: REFRESH_PULLTOREFRESH
                            })
                        }
                    }
                }

            }

        }

        if (this.props.onScroll) {
            this.props.onScroll(event)
        }
    }

    onScrollEndDrag = (event) => {
        if ((this.state.refresh_stats == REFRESH_REFRESHING)
            || this._isFirstLoaded) {
            return
        }

        this._dragFlag = false
        let y = event.nativeEvent.contentOffset.y
        let height = this.props.refreshHeight;
        this._offsetY = y - height
        if (!(this.state.refresh_stats == REFRESH_REFRESHING)) {
            if (this.state.refresh_stats == REFRESH_RELEASETOREFRESH) {
                //开始加载
                this.state.refresh_stats = REFRESH_REFRESHING;
                this.setState({
                    refresh_stats: REFRESH_REFRESHING
                });
                this.props.onTopRefresh && this.props.onTopRefresh(() => {
                    this.scrollTo(this.props.refreshHeight);
                    this.setState({
                        refresh_stats: REFRESH_PULLTOREFRESH,
                        _lastUpTime: new Date().Format("yyyy-MM-dd hh:mm")
                    });
                    if (Platform.OS == "android") {
                        this.props.onEndReached();
                    }
                }, false)
            } else {
                if (y <= height) {
                    this.scrollTo(height);
                }
            }
        } else {

            if (y <= height) {
                this.scrollTo(height);
            }
        }


        if (this.props.onScrollEndDrag) {
            this.props.onScrollEndDrag(event)
        }
    }

    _onScrollBeginDrag = (event) => {
        this._dragFlag = true;
        let height = this.props.refreshHeight;
        this._offsetY = event.nativeEvent.contentOffset.y - height


        if (this.props.onScrollBeginDrag) {
            this.props.onScrollBeginDrag(event)
        }
    }

    componentDidMount() {//持久化恢复储存的state
        if (this.props.onTopRefresh) {
            this._isFirstLoaded = true;
            this.state.refresh_stats = REFRESH_REFRESHING;
            this.setState({
                refresh_stats: REFRESH_REFRESHING
            });
            this.props.onTopRefresh(() => {
                this.scrollTo(this.props.refreshHeight)
                this.setState({
                    refresh_stats: REFRESH_PULLTOREFRESH
                });
                delete this._isFirstLoaded;
                if (Platform.OS == "android") {
                    this.props.onEndReached();
                }
            }, false)
        } else {
            this.scrollTo(this.props.refreshHeight, false);
        }
    }

    renderRefreshStatus = () => {
        if (this.state.refresh_stats == REFRESH_PULLTOREFRESH) {
            return (
                <Text
                    style={{
                        fontSize: 14,
                        color: "#6b6b6b"
                    }}>下拉刷新</Text>
            )
        } else if (this.state.refresh_stats == REFRESH_REFRESHING) {
            return (
                <Text
                    style={{
                        fontSize: 14,
                        color: "#6b6b6b"
                    }}>刷新中...</Text>
            )
        } else if (this.state.refresh_stats == REFRESH_RELEASETOREFRESH) {
            return (
                <Text
                    style={{
                        fontSize: 14,
                        color: "#6b6b6b"
                    }}>释放刷新</Text>
            )
        }
    }

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                style={{
                    maxHeight:Dimensions.get("window").height - 50 - Platform.select({ios:64,android:44})
                }}
                onScroll={this.onScroll}
                onScrollEndDrag={this.onScrollEndDrag}
                onScrollBeginDrag={this._onScrollBeginDrag}
                ref={c => this.scrollView = c}
                onMomentumScrollEnd={this.onScrollEndDrag}
            >
                <View
                    style={{
                        height: this.props.refreshHeight,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <View style={{
                        marginTop: 5,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <View
                            style={{
                                marginLeft: 15
                            }}>
                            {
                                this.renderRefreshStatus()
                            }
                            <Text style={{
                                fontSize: 9,
                                color: "#8f8f8f",
                                marginTop: 5
                            }}>最后更新:{this.state._lastUpTime || "刚刚"}</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        minHeight: Dimensions.get("window").height + this.props.refreshHeight
                    }}
                >
                    {this.props.children}
                </View>
            </ScrollView>
        )
    }
}

const LoadMoreStatus = {
    loading: 1,
    finish: 2,
    noMoreData: 3
}

const footStyles = StyleSheet.create({
    footer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        fontSize: 15,
        color: '#999999',
        marginLeft: 10
    }
});

export default class extends Component {

    constructor(props){
        super(props);

        this.state = {
            isHasData: false,
            loadStatus: LoadMoreStatus.finish,
            dataSource:this.dataSource
        }
    }

    pageModel = {
        page: 1,
        lang: "zh",
    }
    ds = []
    dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.ds)
    isFirstLoad = false
    listName = "data"


    _endPullrelease = (resolve) => {
        this.loadingAnimatedView && this.loadingAnimatedView.stopLoadingAnimated();
        this.setState({
            _lastUpTime: new Date().Format("yyyy-MM-dd hh:mm")
        })
        resolve();
    };

    onFirstRefresh = (call, isAnimated = true) => {
        this.ds = [];
        this.pageModel.page = 1;
        this.props.onRefreshData ? this.props.onRefreshData({
            ...this.pageModel,
            isAnimated: isAnimated,
            autoLoad: this.autoLoad,
            call: call,
            extraParams: this._extraParams,
            errorCall: () => {
                call({status: 301})
            }
        }) : call({status: 301})
    };

    onNextRefresh = (call) => {
        this.pageModel.page++;
        this.props.onRefreshData ? this.props.onRefreshData({
            ...this.pageModel,
            isAnimated: false,
            call: call,
            extraParams: this._extraParams,
            errorCall: () => {
                call({status: 301})
            }
        }) : call({status: 301})
    };

    loadMore = (config) => {
        if (!config) {
            config = {
                isAnimated: true
            }
        }
        let {
            isAnimated,
            didCall
        } = config
        if (!this.isFirstLoad) {
            this.isFirstLoad = true;
            this.onFirstRefresh((rejson) => {
                didCall && didCall();
                this.successDid && this.successDid(rejson);
                if (rejson.status == 200) {
                    let list = rejson.result[this.listName];
                    if (!list || list.length <= 0) {
                        this.setState({
                            isHasData: false
                        })
                    } else {
                        list.forEach((item) => {
                            this.ds.push(item);
                        });
                        this.setState({
                            dataSource: this.dataSource.cloneWithRows(this.ds),
                            isHasData: true
                        })
                    }
                } else {
                    this.setState({
                        isHasData: false
                    })
                }
                this.successEnd && this.successEnd(rejson);
            }, isAnimated)
        } else {
            if(this._autoNotTopage){
                return
            }
            if ((this.state.loadStatus == LoadMoreStatus.loading) ||
                (this.state.loadStatus == LoadMoreStatus.noMoreData)) {
                return
            }
            this.setState({
                loadStatus: LoadMoreStatus.loading
            });
            this.onNextRefresh((rejson) => {
                // this.isNextLoaded = false;
                this.setState({
                    loadStatus: LoadMoreStatus.finish
                })
                didCall && didCall();
                if (rejson.status == 200) {
                    let list = rejson.result[this.listName];
                    this.successDid && this.successDid(rejson);
                    if (!list || list.length <= 0) {
                        this.pageModel.page--;
                        if (this.pageModel.page <= 0) {
                            this.pageModel.page = 1
                        }
                        this.setState({
                            loadStatus: LoadMoreStatus.noMoreData,
                        })
                    } else {
                        list.forEach((item) => {
                            this.ds.push(item);
                        });
                        this.setState({
                            dataSource: this.dataSource.cloneWithRows(this.ds),
                        })
                    }
                } else {
                    this.pageModel.page--;
                    if (this.pageModel.page <= 0) {
                        this.pageModel.page = 1
                    }
                    this.setState({
                        loadStatus: LoadMoreStatus.noMoreData,
                    })
                }
                this.successEnd && this.successEnd(rejson);
            });
        }
    };

    render() {

        let LoadRefreshView = Platform.select({
            ios:LoadRefreshScrollView,
            android:LoadRefreshAndroidView
        });


        return (
            <ListView
                stickySectionHeadersEnabled={true}
                enableEmptySections={true}
                dataSource={this.props.dataSource || this.state.dataSource}
                renderRow={(data, j, index) => {
                    return this.props.renderRecommendItem(data, index)
                }}
                onEndReachedThreshold={1}
                onEndReached={this.loadMore}
                renderHeader={this.props.renderHeader}
                onTopRefresh={(c, isAnimated = true) => {
                    this.ds = [];
                    this.isFirstLoad = false;
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(this.ds),
                        loadStatus: null
                    });
                    this.loadMore({
                        didCall: c,
                        isAnimated,
                    });
                }}
                renderSectionHeader={this.props.renderSectionHeader}
                renderFooter={() => {
                    if(this._autoNotTopage){
                        return (
                            <View>
                                <View style={footStyles.footer}>
                                    <Text style={footStyles.footerText}>{this.loadNoMoreTitle || "没有更多数据了"}.</Text>
                                </View>
                            </View>
                        )
                    }
                    if (this.state.loadStatus == LoadMoreStatus.noMoreData) {
                        return (
                            <View>
                                <View style={footStyles.footer}>
                                    <Text style={footStyles.footerText}>{this.loadNoMoreTitle || "没有更多数据了"}.</Text>
                                </View>
                            </View>
                        )
                    } else if (this.state.loadStatus == LoadMoreStatus.finish) {
                        return (
                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={this.loadMore}
                                    style={footStyles.footer}>
                                    {/*<ActivityIndicator/>*/}
                                    <Text style={footStyles.footerText}>加载更多...</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    } else if (this.state.loadStatus == LoadMoreStatus.loading) {
                        return (
                            <View>
                                {this.props.renderFooter ? this.props.renderFooter() : null}
                                <View style={footStyles.footer}>
                                    <ActivityIndicator/>
                                    <Text style={footStyles.footerText}>加载中...</Text>
                                </View>
                            </View>
                        )
                    }
                }}
                renderScrollComponent={(props) => <LoadRefreshScrollView {...props}/>}
            />
        )
    }
};
