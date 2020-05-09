'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-starter-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-195c88dcfd1c60119e0440c44f8c4d1d"' : 'data-target="#xs-controllers-links-module-AppModule-195c88dcfd1c60119e0440c44f8c4d1d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-195c88dcfd1c60119e0440c44f8c4d1d"' :
                                            'id="xs-controllers-links-module-AppModule-195c88dcfd1c60119e0440c44f8c4d1d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-b659c89d070ecba6eba0a33613e34e38"' : 'data-target="#xs-injectables-links-module-AuthModule-b659c89d070ecba6eba0a33613e34e38"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b659c89d070ecba6eba0a33613e34e38"' :
                                        'id="xs-injectables-links-module-AuthModule-b659c89d070ecba6eba0a33613e34e38"' }>
                                        <li class="link">
                                            <a href="injectables/AuthUserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthUserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalUserStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalUserStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Module1Module.html" data-type="entity-link">Module1Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-Module1Module-30530ba1fa9bb8b54966f2d78a9e8e85"' : 'data-target="#xs-controllers-links-module-Module1Module-30530ba1fa9bb8b54966f2d78a9e8e85"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-Module1Module-30530ba1fa9bb8b54966f2d78a9e8e85"' :
                                            'id="xs-controllers-links-module-Module1Module-30530ba1fa9bb8b54966f2d78a9e8e85"' }>
                                            <li class="link">
                                                <a href="controllers/Module1Controller.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Module1Controller</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-Module1Module-30530ba1fa9bb8b54966f2d78a9e8e85"' : 'data-target="#xs-injectables-links-module-Module1Module-30530ba1fa9bb8b54966f2d78a9e8e85"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Module1Module-30530ba1fa9bb8b54966f2d78a9e8e85"' :
                                        'id="xs-injectables-links-module-Module1Module-30530ba1fa9bb8b54966f2d78a9e8e85"' }>
                                        <li class="link">
                                            <a href="injectables/Module1Service.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>Module1Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Module2Module.html" data-type="entity-link">Module2Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-Module2Module-4a5f99da8b94a75835ab0645d882f885"' : 'data-target="#xs-controllers-links-module-Module2Module-4a5f99da8b94a75835ab0645d882f885"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-Module2Module-4a5f99da8b94a75835ab0645d882f885"' :
                                            'id="xs-controllers-links-module-Module2Module-4a5f99da8b94a75835ab0645d882f885"' }>
                                            <li class="link">
                                                <a href="controllers/Module2Controller.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Module2Controller</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-Module2Module-4a5f99da8b94a75835ab0645d882f885"' : 'data-target="#xs-injectables-links-module-Module2Module-4a5f99da8b94a75835ab0645d882f885"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Module2Module-4a5f99da8b94a75835ab0645d882f885"' :
                                        'id="xs-injectables-links-module-Module2Module-4a5f99da8b94a75835ab0645d882f885"' }>
                                        <li class="link">
                                            <a href="injectables/Module2Service.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>Module2Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link">ServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServicesModule-21df371e95094bbe3c2168dc0a1d7c81"' : 'data-target="#xs-injectables-links-module-ServicesModule-21df371e95094bbe3c2168dc0a1d7c81"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-21df371e95094bbe3c2168dc0a1d7c81"' :
                                        'id="xs-injectables-links-module-ServicesModule-21df371e95094bbe3c2168dc0a1d7c81"' }>
                                        <li class="link">
                                            <a href="injectables/Module2MongoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>Module2MongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SchedulerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SchedulerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-e7c5dcecc1e14c607bb2d1a9796f0597"' : 'data-target="#xs-controllers-links-module-UserModule-e7c5dcecc1e14c607bb2d1a9796f0597"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-e7c5dcecc1e14c607bb2d1a9796f0597"' :
                                            'id="xs-controllers-links-module-UserModule-e7c5dcecc1e14c607bb2d1a9796f0597"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link">AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/Module1Controller.html" data-type="entity-link">Module1Controller</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/Module2Controller.html" data-type="entity-link">Module2Controller</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link">UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link">HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Module1Model.html" data-type="entity-link">Module1Model</a>
                            </li>
                            <li class="link">
                                <a href="classes/Module2Model.html" data-type="entity-link">Module2Model</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthUserService.html" data-type="entity-link">AuthUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link">JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link">JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link">LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalUserStrategy.html" data-type="entity-link">LocalUserStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Module1Interceptor.html" data-type="entity-link">Module1Interceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Module1Middleware.html" data-type="entity-link">Module1Middleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Module1Service.html" data-type="entity-link">Module1Service</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Module2MongoService.html" data-type="entity-link">Module2MongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Module2Service.html" data-type="entity-link">Module2Service</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchedulerService.html" data-type="entity-link">SchedulerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IModule2.html" data-type="entity-link">IModule2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link">IUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});