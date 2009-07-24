
load('/usr/lib/ruby/gems/1.8/gems/visionmedia-jspec-2.7.1/lib/jspec.js')
load('lib/jquery-text-tools.js')

JSpec
.exec('spec/jquery-text-tools.spec.js')
.run({ formatter : JSpec.formatters.Terminal })
.report()
