/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["integration logging file empty tokens should warn user about empty tokens"] = 
`
css
No tokens for empty.css. File not created.`;
/* end snapshot integration logging file empty tokens should warn user about empty tokens */

snapshots["integration logging file name collisions should warn users briefly of name collisions by default"] = 
`
css
⚠️ __integration__/build/nameCollisions.css
While building nameCollisions.css, token collisions were found; output may be unexpected. Ignore this warning if intentional.

Use log.verbosity "verbose" or use CLI option --verbose for more details.
Refer to: https://styledictionary.com/reference/logging/`;
/* end snapshot integration logging file name collisions should warn users briefly of name collisions by default */

snapshots["integration logging file name collisions should throw a brief error of name collisions with log level set to error"] = 
`⚠️ __integration__/build/nameCollisions.css
While building nameCollisions.css, token collisions were found; output may be unexpected. Ignore this warning if intentional.

Use log.verbosity "verbose" or use CLI option --verbose for more details.
Refer to: https://styledictionary.com/reference/logging/`;
/* end snapshot integration logging file name collisions should throw a brief error of name collisions with log level set to error */

snapshots["integration logging file name collisions should throw a brief error of name collisions with log level set to error on platform level"] = 
`⚠️ __integration__/build/nameCollisions.css
While building nameCollisions.css, token collisions were found; output may be unexpected. Ignore this warning if intentional.

Use log.verbosity "verbose" or use CLI option --verbose for more details.
Refer to: https://styledictionary.com/reference/logging/`;
/* end snapshot integration logging file name collisions should throw a brief error of name collisions with log level set to error on platform level */

snapshots["integration logging file name collisions should warn user of name collisions with a detailed message through \"verbose\" verbosity"] = 
`
css
⚠️ __integration__/build/nameCollisions.css
While building nameCollisions.css, token collisions were found; output may be unexpected. Ignore this warning if intentional.
Output name 0 was generated by:
color.core.green.0   #ebf9eb
color.core.teal.0   #e5f9f5
color.core.aqua.0   #d9fcfb
color.core.blue.0   #e9f8ff
color.core.purple.0   #f2f2f9
color.core.magenta.0   #fef0ff
color.core.pink.0   #ffe9f3
color.core.red.0   #ffeae9
color.core.orange.0   #ffede3
color.core.neutral.0   #FFFFFF
color.core.yellow.0   #fff8e2
Output name 100 was generated by:
color.core.green.100   #d7f4d7
color.core.teal.100   #cdf7ef
color.core.aqua.100   #c5f9f9
color.core.blue.100   #dcf2ff
color.core.purple.100   #eaeaf9
color.core.magenta.100   #f9e3fc
color.core.pink.100   #fcdbeb
color.core.red.100   #ffd5d2
color.core.orange.100   #fcdccc
color.core.neutral.100   #f3f4f4
color.core.yellow.100   #fdefcd
Output name 200 was generated by:
color.core.green.200   #c2f2bd
color.core.teal.200   #b3f2e6
color.core.aqua.200   #a5f2f2
color.core.blue.200   #c7e4f9
color.core.purple.200   #d8d7f9
color.core.magenta.200   #f4c4f7
color.core.pink.200   #ffb5d5
color.core.red.200   #ffb8b1
color.core.orange.200   #ffc6a4
color.core.neutral.200   #dee1e1
color.core.yellow.200   #ffe99a
Output name 300 was generated by:
color.core.green.300   #98e58e
color.core.teal.300   #7dead5
color.core.aqua.300   #76e5e2
color.core.blue.300   #a1d2f8
color.core.purple.300   #c1c1f7
color.core.magenta.300   #edadf2
color.core.pink.300   #ff95c1
color.core.red.300   #ff9c8f
color.core.orange.300   #ffb180
color.core.neutral.300   #c8cccc
color.core.yellow.300   #ffe16e
Output name 400 was generated by:
color.core.green.400   #75dd66
color.core.teal.400   #24e0c5
color.core.aqua.400   #33d6e2
color.core.blue.400   #56adf5
color.core.purple.400   #a193f2
color.core.magenta.400   #f282f5
color.core.pink.400   #ff76ae
color.core.red.400   #ff7f6e
color.core.orange.400   #ff9c5d
color.core.neutral.400   #b0b6b7
color.core.yellow.400   #ffd943
Output name 500 was generated by:
color.core.green.500   #59cb59
color.core.teal.500   #08c4b2
color.core.aqua.500   #17b8ce
color.core.blue.500   #3896e3
color.core.purple.500   #9180f4
color.core.magenta.500   #db61db
color.core.pink.500   #ef588b
color.core.red.500   #f76054
color.core.orange.500   #fc8943
color.core.neutral.500   #929a9b
color.core.yellow.500   #ffcd1c
Output name 600 was generated by:
color.core.green.600   #2bb656
color.core.teal.600   #00a99c
color.core.aqua.600   #0797ae
color.core.blue.600   #2b87d3
color.core.purple.600   #816fea
color.core.magenta.600   #c44eb9
color.core.pink.600   #e0447c
color.core.red.600   #ed4c42
color.core.orange.600   #f57d33
color.core.neutral.600   #6e797a
color.core.yellow.600   #ffbc00
Output name 700 was generated by:
color.core.green.700   #0ca750
color.core.teal.700   #0b968f
color.core.aqua.700   #0b8599
color.core.blue.700   #2079c3
color.core.purple.700   #6f5ed3
color.core.magenta.700   #ac44a8
color.core.pink.700   #ce3665
color.core.red.700   #db3e3e
color.core.orange.700   #ed7024
color.core.neutral.700   #515e5f
color.core.yellow.700   #dd9903
Output name 800 was generated by:
color.core.green.800   #008b46
color.core.teal.800   #067c7c
color.core.aqua.800   #0f6e84
color.core.blue.800   #116daa
color.core.purple.800   #5e4eba
color.core.magenta.800   #8f3896
color.core.pink.800   #b22f5b
color.core.red.800   #c63434
color.core.orange.800   #ce5511
color.core.neutral.800   #364141
color.core.yellow.800   #ba7506
Output name 900 was generated by:
color.core.green.900   #006b40
color.core.teal.900   #026661
color.core.aqua.900   #035e73
color.core.blue.900   #0c5689
color.core.purple.900   #483a9c
color.core.magenta.900   #6c2277
color.core.pink.900   #931847
color.core.red.900   #992222
color.core.orange.900   #962c0b
color.core.neutral.900   #273333
color.core.yellow.900   #944c0c
Output name 1000 was generated by:
color.core.green.1000   #08422f
color.core.teal.1000   #083f3f
color.core.aqua.1000   #083d4f
color.core.blue.1000   #0a3960
color.core.purple.1000   #2d246b
color.core.magenta.1000   #451551
color.core.pink.1000   #561231
color.core.red.1000   #6d1313
color.core.orange.1000   #601700
color.core.neutral.1000   #162020
color.core.yellow.1000   #542a00
Output name 1100 was generated by:
color.core.green.1100   #002b20
color.core.teal.1100   #002528
color.core.aqua.1100   #002838
color.core.blue.1100   #002138
color.core.purple.1100   #1d1d38
color.core.magenta.1100   #29192d
color.core.pink.1100   #2b1721
color.core.red.1100   #2b1111
color.core.orange.1100   #2d130e
color.core.neutral.1100   #040404
color.core.yellow.1100   #2d1a05
Output name primary was generated by:
color.background.primary   #FFFFFF
color.border.primary   #c8cccc
color.brand.primary   #0b8599
color.font.primary   #040404
Output name secondary was generated by:
color.background.secondary   #f3f4f4
color.brand.secondary   #6f5ed3
color.font.secondary   #273333
Output name tertiary was generated by:
color.background.tertiary   #dee1e1
color.font.tertiary   #364141
Output name danger was generated by:
color.background.danger   #ffeae9
color.font.danger   #6d1313
Output name warning was generated by:
color.background.warning   #ffede3
color.font.warning   #601700
Output name success was generated by:
color.background.success   #ebf9eb
color.font.success   #08422f
Output name disabled was generated by:
color.background.disabled   #dee1e1
color.font.interactive.disabled   #364141
This many-to-one issue is usually caused by some combination of:
* conflicting or similar paths/names in token definitions
* platform transforms/transformGroups affecting names, especially when removing specificity
* overly inclusive file filters`;
/* end snapshot integration logging file name collisions should warn user of name collisions with a detailed message through "verbose" verbosity */

snapshots["integration logging file name collisions should throw detailed error of name collisions through \"verbose\" verbosity and log level set to error"] = 
`⚠️ __integration__/build/nameCollisions.css
While building nameCollisions.css, token collisions were found; output may be unexpected. Ignore this warning if intentional.
Output name 0 was generated by:
color.core.green.0   #ebf9eb
color.core.teal.0   #e5f9f5
color.core.aqua.0   #d9fcfb
color.core.blue.0   #e9f8ff
color.core.purple.0   #f2f2f9
color.core.magenta.0   #fef0ff
color.core.pink.0   #ffe9f3
color.core.red.0   #ffeae9
color.core.orange.0   #ffede3
color.core.neutral.0   #FFFFFF
color.core.yellow.0   #fff8e2
Output name 100 was generated by:
color.core.green.100   #d7f4d7
color.core.teal.100   #cdf7ef
color.core.aqua.100   #c5f9f9
color.core.blue.100   #dcf2ff
color.core.purple.100   #eaeaf9
color.core.magenta.100   #f9e3fc
color.core.pink.100   #fcdbeb
color.core.red.100   #ffd5d2
color.core.orange.100   #fcdccc
color.core.neutral.100   #f3f4f4
color.core.yellow.100   #fdefcd
Output name 200 was generated by:
color.core.green.200   #c2f2bd
color.core.teal.200   #b3f2e6
color.core.aqua.200   #a5f2f2
color.core.blue.200   #c7e4f9
color.core.purple.200   #d8d7f9
color.core.magenta.200   #f4c4f7
color.core.pink.200   #ffb5d5
color.core.red.200   #ffb8b1
color.core.orange.200   #ffc6a4
color.core.neutral.200   #dee1e1
color.core.yellow.200   #ffe99a
Output name 300 was generated by:
color.core.green.300   #98e58e
color.core.teal.300   #7dead5
color.core.aqua.300   #76e5e2
color.core.blue.300   #a1d2f8
color.core.purple.300   #c1c1f7
color.core.magenta.300   #edadf2
color.core.pink.300   #ff95c1
color.core.red.300   #ff9c8f
color.core.orange.300   #ffb180
color.core.neutral.300   #c8cccc
color.core.yellow.300   #ffe16e
Output name 400 was generated by:
color.core.green.400   #75dd66
color.core.teal.400   #24e0c5
color.core.aqua.400   #33d6e2
color.core.blue.400   #56adf5
color.core.purple.400   #a193f2
color.core.magenta.400   #f282f5
color.core.pink.400   #ff76ae
color.core.red.400   #ff7f6e
color.core.orange.400   #ff9c5d
color.core.neutral.400   #b0b6b7
color.core.yellow.400   #ffd943
Output name 500 was generated by:
color.core.green.500   #59cb59
color.core.teal.500   #08c4b2
color.core.aqua.500   #17b8ce
color.core.blue.500   #3896e3
color.core.purple.500   #9180f4
color.core.magenta.500   #db61db
color.core.pink.500   #ef588b
color.core.red.500   #f76054
color.core.orange.500   #fc8943
color.core.neutral.500   #929a9b
color.core.yellow.500   #ffcd1c
Output name 600 was generated by:
color.core.green.600   #2bb656
color.core.teal.600   #00a99c
color.core.aqua.600   #0797ae
color.core.blue.600   #2b87d3
color.core.purple.600   #816fea
color.core.magenta.600   #c44eb9
color.core.pink.600   #e0447c
color.core.red.600   #ed4c42
color.core.orange.600   #f57d33
color.core.neutral.600   #6e797a
color.core.yellow.600   #ffbc00
Output name 700 was generated by:
color.core.green.700   #0ca750
color.core.teal.700   #0b968f
color.core.aqua.700   #0b8599
color.core.blue.700   #2079c3
color.core.purple.700   #6f5ed3
color.core.magenta.700   #ac44a8
color.core.pink.700   #ce3665
color.core.red.700   #db3e3e
color.core.orange.700   #ed7024
color.core.neutral.700   #515e5f
color.core.yellow.700   #dd9903
Output name 800 was generated by:
color.core.green.800   #008b46
color.core.teal.800   #067c7c
color.core.aqua.800   #0f6e84
color.core.blue.800   #116daa
color.core.purple.800   #5e4eba
color.core.magenta.800   #8f3896
color.core.pink.800   #b22f5b
color.core.red.800   #c63434
color.core.orange.800   #ce5511
color.core.neutral.800   #364141
color.core.yellow.800   #ba7506
Output name 900 was generated by:
color.core.green.900   #006b40
color.core.teal.900   #026661
color.core.aqua.900   #035e73
color.core.blue.900   #0c5689
color.core.purple.900   #483a9c
color.core.magenta.900   #6c2277
color.core.pink.900   #931847
color.core.red.900   #992222
color.core.orange.900   #962c0b
color.core.neutral.900   #273333
color.core.yellow.900   #944c0c
Output name 1000 was generated by:
color.core.green.1000   #08422f
color.core.teal.1000   #083f3f
color.core.aqua.1000   #083d4f
color.core.blue.1000   #0a3960
color.core.purple.1000   #2d246b
color.core.magenta.1000   #451551
color.core.pink.1000   #561231
color.core.red.1000   #6d1313
color.core.orange.1000   #601700
color.core.neutral.1000   #162020
color.core.yellow.1000   #542a00
Output name 1100 was generated by:
color.core.green.1100   #002b20
color.core.teal.1100   #002528
color.core.aqua.1100   #002838
color.core.blue.1100   #002138
color.core.purple.1100   #1d1d38
color.core.magenta.1100   #29192d
color.core.pink.1100   #2b1721
color.core.red.1100   #2b1111
color.core.orange.1100   #2d130e
color.core.neutral.1100   #040404
color.core.yellow.1100   #2d1a05
Output name primary was generated by:
color.background.primary   #FFFFFF
color.border.primary   #c8cccc
color.brand.primary   #0b8599
color.font.primary   #040404
Output name secondary was generated by:
color.background.secondary   #f3f4f4
color.brand.secondary   #6f5ed3
color.font.secondary   #273333
Output name tertiary was generated by:
color.background.tertiary   #dee1e1
color.font.tertiary   #364141
Output name danger was generated by:
color.background.danger   #ffeae9
color.font.danger   #6d1313
Output name warning was generated by:
color.background.warning   #ffede3
color.font.warning   #601700
Output name success was generated by:
color.background.success   #ebf9eb
color.font.success   #08422f
Output name disabled was generated by:
color.background.disabled   #dee1e1
color.font.interactive.disabled   #364141
This many-to-one issue is usually caused by some combination of:
* conflicting or similar paths/names in token definitions
* platform transforms/transformGroups affecting names, especially when removing specificity
* overly inclusive file filters`;
/* end snapshot integration logging file name collisions should throw detailed error of name collisions through "verbose" verbosity and log level set to error */

snapshots["integration logging file filtered references should warn users briefly of filtered references by default"] = 
`
css
⚠️ __integration__/build/filteredReferences.css
While building filteredReferences.css, filtered out token references were found; output may be unexpected. Ignore this warning if intentional.

Use log.verbosity "verbose" or use CLI option --verbose for more details.
Refer to: https://styledictionary.com/reference/logging/`;
/* end snapshot integration logging file filtered references should warn users briefly of filtered references by default */

snapshots["integration logging file filtered references should throw a brief error of filtered references with log level set to error"] = 
`⚠️ __integration__/build/filteredReferences.css
While building filteredReferences.css, filtered out token references were found; output may be unexpected. Ignore this warning if intentional.

Use log.verbosity "verbose" or use CLI option --verbose for more details.
Refer to: https://styledictionary.com/reference/logging/`;
/* end snapshot integration logging file filtered references should throw a brief error of filtered references with log level set to error */

snapshots["integration logging file filtered references should throw a brief error of filtered references with log level set to error on platform level"] = 
`⚠️ __integration__/build/filteredReferences.css
While building filteredReferences.css, filtered out token references were found; output may be unexpected. Ignore this warning if intentional.

Use log.verbosity "verbose" or use CLI option --verbose for more details.
Refer to: https://styledictionary.com/reference/logging/`;
/* end snapshot integration logging file filtered references should throw a brief error of filtered references with log level set to error on platform level */

snapshots["integration logging file filtered references should warn user of filtered references with a detailed message through \"verbose\" verbosity"] = 
`
css
⚠️ __integration__/build/filteredReferences.css
While building filteredReferences.css, filtered out token references were found; output may be unexpected. Ignore this warning if intentional.
Here are the references that are used but not defined in the file:
color.core.neutral.100
color.core.neutral.0
color.core.neutral.200
color.core.red.0
color.core.orange.0
color.core.green.0
color.core.blue.0
This is caused when combining a filter and \`outputReferences\`.`;
/* end snapshot integration logging file filtered references should warn user of filtered references with a detailed message through "verbose" verbosity */

snapshots["integration logging file filtered references should throw detailed error of filtered references through \"verbose\" verbosity and log level set to error"] = 
`⚠️ __integration__/build/filteredReferences.css
While building filteredReferences.css, filtered out token references were found; output may be unexpected. Ignore this warning if intentional.
Here are the references that are used but not defined in the file:
color.core.neutral.100
color.core.neutral.0
color.core.neutral.200
color.core.red.0
color.core.orange.0
color.core.green.0
color.core.blue.0
This is caused when combining a filter and \`outputReferences\`.`;
/* end snapshot integration logging file filtered references should throw detailed error of filtered references through "verbose" verbosity and log level set to error */

snapshots["integration logging file empty tokens should not warn user about empty tokens with silent log verbosity"] = 
`
css
No tokens for empty.css. File not created.`;
/* end snapshot integration logging file empty tokens should not warn user about empty tokens with silent log verbosity */

